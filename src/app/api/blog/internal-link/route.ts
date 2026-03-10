import { NextRequest, NextResponse } from 'next/server';
import { runInternalLinking } from '@/lib/blog/internalLinker';

export async function POST(request: NextRequest) {
    // CRON_SECRET ile güvenlik kontrolü
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const startTime = Date.now();
        const result = await runInternalLinking();
        const durationMs = Date.now() - startTime;

        return NextResponse.json({
            success: true,
            ...result,
            duration_ms: durationMs,
        });
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
