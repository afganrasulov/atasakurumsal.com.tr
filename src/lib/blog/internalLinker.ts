import OpenAI from 'openai';
import { getSupabaseAdmin } from './supabaseAdmin';

function getOpenAI() {
    return new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
}

interface PostSummary {
    id: string;
    title: string;
    slug: string;
    keywords: string[];
}

interface LinkSuggestion {
    anchor_text: string;
    target_slug: string;
}

/**
 * Tüm blog yazıları arasında internal linking analizi yapıp
 * content'lere otomatik link ekler
 */
export async function runInternalLinking(): Promise<{
    postsAnalyzed: number;
    linksAdded: number;
    errors: string[];
}> {
    const errors: string[] = [];
    let totalLinksAdded = 0;

    // Tüm yayınlanmış postları getir
    const { data: posts, error } = await getSupabaseAdmin()
        .from('posts')
        .select('id, title, slug, content, keywords')
        .order('created_at', { ascending: false });

    if (error || !posts || posts.length < 2) {
        return { postsAnalyzed: 0, linksAdded: 0, errors: ['Yeterli post yok'] };
    }

    // Her post için diğer postlara link fırsatları bul
    const postSummaries: PostSummary[] = posts.map((p: { id: string; title: string; slug: string; keywords: string[] }) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        keywords: p.keywords || [],
    }));

    for (const post of posts) {
        try {
            // Bu post'un content'inde zaten var olan internal linkleri say
            const existingLinks = (post.content.match(/href="\/blog\//g) || []).length;
            if (existingLinks >= 5) continue; // Zaten yeterli link var

            const otherPosts = postSummaries.filter((p) => p.id !== post.id);
            if (otherPosts.length === 0) continue;

            const suggestions = await getAILinkSuggestions(post, otherPosts);
            if (suggestions.length === 0) continue;

            const updatedContent = applyLinks(post.content, suggestions);

            if (updatedContent !== post.content) {
                const { error: updateError } = await getSupabaseAdmin()
                    .from('posts')
                    .update({
                        content: updatedContent,
                        updated_at: new Date().toISOString(),
                    })
                    .eq('id', post.id);

                if (updateError) {
                    errors.push(`[Update] ${post.slug}: ${updateError.message}`);
                } else {
                    totalLinksAdded += suggestions.length;
                }
            }
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Bilinmeyen hata';
            errors.push(`[AI] ${post.slug}: ${msg}`);
        }
    }

    return {
        postsAnalyzed: posts.length,
        linksAdded: totalLinksAdded,
        errors,
    };
}

async function getAILinkSuggestions(
    post: { id: string; title: string; slug: string; content: string; keywords: string[] },
    otherPosts: PostSummary[]
): Promise<LinkSuggestion[]> {
    const otherPostsList = otherPosts
        .map((p) => `- "${p.title}" → /blog/${p.slug} (keywords: ${p.keywords.join(', ')})`)
        .join('\n');

    // Content'i kısalt (token tasarrufu)
    const contentPreview = post.content.replace(/<[^>]*>/g, ' ').slice(0, 3000);

    const response = await getOpenAI().responses.create({
        model: 'gpt-5-mini',
        instructions: `Sen bir SEO uzmanısın. Bir blog yazısının içeriğini analiz edip, diğer blog yazılarına doğal internal link fırsatları bulacaksın.

KURALLAR:
1. anchor_text, yazının content'inde OLDUĞU GİBİ geçen bir kelime veya kısa bir cümle olmalı
2. Anchor text doğal olmalı — zorla link ekleme, sadece anlamlı yerlere
3. Aynı hedef yazıya en fazla 1 link
4. Toplam en fazla 3-4 link öner
5. anchor_text HTML tag içerMEMELİ, düz metin olmalı
6. Zaten link olan yerlere tekrar link ekleme

Sadece JSON array döndür, başka bir şey yazma:
[{"anchor_text": "içerikte geçen metin", "target_slug": "hedef-yazi-slug"}]

Eğer uygun link bulamazsan boş array döndür: []`,
        input: `MEVCUT YAZI:
Başlık: ${post.title}
İçerik (preview): ${contentPreview}

LİNK VERİLEBİLECEK DİĞER YAZILAR:
${otherPostsList}`,
    });

    try {
        const text = response.output_text;
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]) as LinkSuggestion[];
        // Sadece geçerli slug'lara sahip olanları filtrele
        const validSlugs = new Set(otherPosts.map((p) => p.slug));
        return parsed.filter(
            (s) => s.anchor_text && s.target_slug && validSlugs.has(s.target_slug)
        );
    } catch {
        return [];
    }
}

/**
 * İçeriğe internal linkleri uygula
 */
function applyLinks(content: string, suggestions: LinkSuggestion[]): string {
    let result = content;

    for (const suggestion of suggestions) {
        const { anchor_text, target_slug } = suggestion;
        
        // Eğer bu anchor text zaten bir link içindeyse atla
        const linkCheck = new RegExp(`<a[^>]*>[^<]*${escapeRegex(anchor_text)}[^<]*</a>`, 'i');
        if (linkCheck.test(result)) continue;

        // Sadece ilk geçtiği yeri değiştir, tag içindeki metinleri atla
        // Regex: anchor text'i bul ama <tag> içinde olmamalı
        const escapedText = escapeRegex(anchor_text);
        const regex = new RegExp(`(?<![<\\w])${escapedText}(?![^<]*>)`, 'i');
        
        const link = `<a href="/blog/${target_slug}" class="internal-link">${anchor_text}</a>`;
        result = result.replace(regex, link);
    }

    return result;
}

function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
