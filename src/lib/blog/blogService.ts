import { getSupabaseAdmin } from './supabaseAdmin';

// ─── Types ───────────────────────────────────────────────
export interface Keyword {
    id: string;
    keyword: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Topic {
    id: string;
    keyword_id: string;
    title: string;
    description: string | null;
    source_url: string | null;
    status: 'discovered' | 'approved' | 'generating' | 'published' | 'rejected' | 'failed';
    created_at: string;
    updated_at: string;
    keyword?: Keyword;
}

export interface Post {
    id: string;
    topic_id: string | null;
    title: string;
    slug: string;
    content: string;
    summary: string | null;
    keywords: string[];
    faq: Array<{ question: string; answer: string }>;
    seo_score: number;
    schema_json: Record<string, unknown>;
    created_at: string;
    updated_at: string;
}

// ─── Keywords ────────────────────────────────────────────

export async function getKeywords() {
    const { data, error } = await getSupabaseAdmin()
        .from('keywords')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Keyword[];
}

export async function addKeyword(keyword: string) {
    const { data, error } = await getSupabaseAdmin()
        .from('keywords')
        .insert({ keyword: keyword.trim().toLowerCase() })
        .select()
        .single();

    if (error) throw error;
    return data as Keyword;
}

export async function updateKeyword(id: string, updates: Partial<Pick<Keyword, 'keyword' | 'is_active'>>) {
    const { data, error } = await getSupabaseAdmin()
        .from('keywords')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data as Keyword;
}

export async function deleteKeyword(id: string) {
    const { error } = await getSupabaseAdmin()
        .from('keywords')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return { success: true };
}

// ─── Topics ──────────────────────────────────────────────

export async function getTopics(status?: string) {
    let query = getSupabaseAdmin()
        .from('topics')
        .select('*, keyword:keywords(*)')
        .order('created_at', { ascending: false });

    if (status) {
        query = query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data as Topic[];
}

export async function updateTopicStatus(id: string, status: string) {
    const { data, error } = await getSupabaseAdmin()
        .from('topics')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data as Topic;
}

export async function createTopic(topic: {
    keyword_id: string;
    title: string;
    description?: string;
    source_url?: string;
}) {
    const { data, error } = await getSupabaseAdmin()
        .from('topics')
        .insert({ ...topic, status: 'discovered' })
        .select()
        .single();

    if (error) throw error;
    return data as Topic;
}

export async function getTopicsByKeywordId(keywordId: string) {
    const { data, error } = await getSupabaseAdmin()
        .from('topics')
        .select('title, source_url')
        .eq('keyword_id', keywordId);

    if (error) throw error;
    return data as Pick<Topic, 'title' | 'source_url'>[];
}

// ─── Posts ────────────────────────────────────────────────

export async function getPosts(page = 1, limit = 10) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await getSupabaseAdmin()
        .from('posts')
        .select('id, title, slug, summary, keywords, seo_score, created_at', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);

    if (error) throw error;

    return {
        posts: data as Partial<Post>[],
        pagination: {
            page,
            limit,
            total: count ?? 0,
            totalPages: Math.ceil((count ?? 0) / limit),
        },
    };
}

export async function getPostBySlug(slug: string) {
    const { data, error } = await getSupabaseAdmin()
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) throw error;
    return data as Post;
}

export async function createPost(post: {
    topic_id: string;
    title: string;
    slug: string;
    content: string;
    summary: string;
    keywords: string[];
    faq: Array<{ question: string; answer: string }>;
    seo_score: number;
    schema_json: Record<string, unknown>;
}) {
    const { data, error } = await getSupabaseAdmin()
        .from('posts')
        .insert(post)
        .select()
        .single();

    if (error) throw error;
    return data as Post;
}

// ─── Automation ──────────────────────────────────────────

/** Discovered topic'lerden en yenilerini otomatik olarak 'approved' yap */
export async function autoApproveTopics(limit = 3): Promise<number> {
    const { data, error } = await getSupabaseAdmin()
        .from('topics')
        .select('id')
        .eq('status', 'discovered')
        .order('created_at', { ascending: false })
        .limit(limit);

    if (error) throw error;
    if (!data || data.length === 0) return 0;

    const ids = data.map((t: { id: string }) => t.id);
    const { error: updateError } = await getSupabaseAdmin()
        .from('topics')
        .update({ status: 'approved', updated_at: new Date().toISOString() })
        .in('id', ids);

    if (updateError) throw updateError;
    return ids.length;
}

/** Bugün kaç makale üretildiğini kontrol et */
export async function getTodayGenerationCount(): Promise<number> {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const { count, error } = await getSupabaseAdmin()
        .from('posts')
        .select('id', { count: 'exact', head: true })
        .gte('created_at', todayStart.toISOString());

    if (error) throw error;
    return count ?? 0;
}

/** Otomasyon çalışma sonucunu logla */
export async function logAutomationRun(log: {
    discovered: number;
    approved: number;
    generated: number;
    errors: string[];
    duration_ms: number;
    status: 'success' | 'partial' | 'failed';
}) {
    const { error } = await getSupabaseAdmin()
        .from('automation_logs')
        .insert(log);

    if (error) console.error('[Automation Log Error]', error);
}

