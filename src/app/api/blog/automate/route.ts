import { NextRequest, NextResponse } from 'next/server';
import { discoverTopics, autoPopulateKeywords } from '@/lib/blog/keywordDiscovery';
import { generateArticle } from '@/lib/blog/seoOptimizer';
import {
    getTopics,
    autoApproveTopics,
    getTodayGenerationCount,
    logAutomationRun,
} from '@/lib/blog/blogService';

const DAILY_LIMIT = 2; // Günlük toplam makale limiti
const PER_RUN_LIMIT = 1; // Her cron çalışmasında maksimum makale

export async function POST(request: NextRequest) {
    const startTime = Date.now();

    // CRON_SECRET ile güvenlik kontrolü
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const errors: string[] = [];
    let populated = 0;
    let discovered = 0;
    let approved = 0;
    let generated = 0;

    try {
        // ── Adım 0: Keyword Auto-Population ──
        try {
            populated = await autoPopulateKeywords(5);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Keyword populate hatası';
            errors.push(`[Populate] ${msg}`);
        }
        // ── Adım 1: Topic Discovery ──
        try {
            const discoverResult = await discoverTopics();
            discovered = discoverResult.newTopics;
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Discovery hatası';
            errors.push(`[Discovery] ${msg}`);
        }

        // ── Adım 2: Auto-Approve ──
        try {
            approved = await autoApproveTopics(PER_RUN_LIMIT);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Approve hatası';
            errors.push(`[Approve] ${msg}`);
        }

        // ── Adım 3: Article Generation ──
        const todayCount = await getTodayGenerationCount();
        const remaining = Math.min(PER_RUN_LIMIT, Math.max(0, DAILY_LIMIT - todayCount));

        if (remaining > 0) {
            const approvedTopics = await getTopics('approved');
            const toGenerate = approvedTopics.slice(0, remaining);

            for (const topic of toGenerate) {
                try {
                    const result = await generateArticle(topic);
                    if (result.success) {
                        generated++;
                    } else {
                        errors.push(`[Generate] ${result.message}`);
                    }
                } catch (err) {
                    const msg = err instanceof Error ? err.message : 'Generation hatası';
                    errors.push(`[Generate] ${msg}`);
                }
            }
        }

        const durationMs = Date.now() - startTime;
        const status = errors.length === 0 ? 'success' : generated > 0 ? 'partial' : 'failed';

        // Sonucu logla
        await logAutomationRun({
            discovered,
            approved,
            generated,
            errors,
            duration_ms: durationMs,
            status: status as 'success' | 'partial' | 'failed',
        });

        return NextResponse.json({
            success: true,
            populated,
            discovered,
            approved,
            generated,
            dailyLimit: DAILY_LIMIT,
            todayTotal: todayCount + generated,
            errors,
            duration_ms: durationMs,
        });
    } catch (error) {
        const durationMs = Date.now() - startTime;
        const msg = error instanceof Error ? error.message : 'Bilinmeyen hata';
        errors.push(`[Fatal] ${msg}`);

        await logAutomationRun({
            discovered,
            approved,
            generated,
            errors,
            duration_ms: durationMs,
            status: 'failed',
        });

        return NextResponse.json({ error: msg, errors }, { status: 500 });
    }
}
