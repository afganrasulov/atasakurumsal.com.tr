import { NextResponse } from 'next/server';
import { discoverTopics } from '@/lib/blog/keywordDiscovery';

export async function POST() {
    try {
        const result = await discoverTopics();
        return NextResponse.json(result);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
