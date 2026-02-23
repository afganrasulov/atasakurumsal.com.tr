import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/lib/blog/blogService';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') ?? '1', 10);
        const limit = parseInt(searchParams.get('limit') ?? '10', 10);

        const result = await getPosts(page, limit);
        return NextResponse.json(result);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
