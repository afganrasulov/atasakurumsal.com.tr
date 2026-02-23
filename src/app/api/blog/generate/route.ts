import { NextRequest, NextResponse } from 'next/server';
import { getTopics, updateTopicStatus } from '@/lib/blog/blogService';
import { generateArticle } from '@/lib/blog/seoOptimizer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json().catch(() => ({}));
        const { topicId } = body as { topicId?: string };

        if (topicId) {
            // Tek konu için üret
            const topics = await getTopics('approved');
            const topic = topics.find((t) => t.id === topicId);

            if (!topic) {
                return NextResponse.json({ error: 'Konu bulunamadı veya onaylı değil' }, { status: 404 });
            }

            const result = await generateArticle(topic);
            return NextResponse.json(result);
        }

        // Tüm onaylı konular için toplu üretim
        const approvedTopics = await getTopics('approved');

        if (approvedTopics.length === 0) {
            return NextResponse.json({ success: true, generated: 0, total: 0, errors: [] });
        }

        let generated = 0;
        const errors: string[] = [];

        for (const topic of approvedTopics) {
            const result = await generateArticle(topic);
            if (result.success) {
                generated++;
            } else {
                errors.push(result.message);
            }
        }

        return NextResponse.json({
            success: true,
            generated,
            total: approvedTopics.length,
            errors,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
