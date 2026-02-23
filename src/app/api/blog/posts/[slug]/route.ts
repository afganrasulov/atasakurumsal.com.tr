import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/blog/blogService';

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const post = await getPostBySlug(slug);

        if (!post) {
            return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 });
        }

        return NextResponse.json({ post });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        if (message.includes('No rows')) {
            return NextResponse.json({ error: 'Yazı bulunamadı' }, { status: 404 });
        }
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
