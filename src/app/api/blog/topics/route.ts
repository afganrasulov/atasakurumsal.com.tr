import { NextRequest, NextResponse } from 'next/server';
import { getTopics, updateTopicStatus } from '@/lib/blog/blogService';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status') ?? undefined;

        const topics = await getTopics(status);
        return NextResponse.json({ topics });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, status } = body as { id?: string; status?: string };

        if (!id || !status) {
            return NextResponse.json({ error: 'id ve status alanları zorunludur' }, { status: 400 });
        }

        const validStatuses = ['discovered', 'approved', 'rejected'];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { error: `Geçersiz status. Geçerli değerler: ${validStatuses.join(', ')}` },
                { status: 400 }
            );
        }

        await updateTopicStatus(id, status);
        return NextResponse.json({ success: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
