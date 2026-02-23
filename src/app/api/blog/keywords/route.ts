import { NextRequest, NextResponse } from 'next/server';
import { getKeywords, addKeyword, updateKeyword, deleteKeyword } from '@/lib/blog/blogService';

export async function GET() {
    try {
        const keywords = await getKeywords();
        return NextResponse.json({ keywords });
    } catch (error) {
        const message = error instanceof Error ? error.message : JSON.stringify(error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { keyword } = body as { keyword?: string };

        if (!keyword?.trim()) {
            return NextResponse.json({ error: 'keyword alanı zorunludur' }, { status: 400 });
        }

        const data = await addKeyword(keyword);
        return NextResponse.json({ keyword: data }, { status: 201 });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        if (message.includes('duplicate')) {
            return NextResponse.json({ error: 'Bu anahtar kelime zaten mevcut' }, { status: 409 });
        }
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, keyword, is_active } = body as { id?: string; keyword?: string; is_active?: boolean };

        if (!id) {
            return NextResponse.json({ error: 'id alanı zorunludur' }, { status: 400 });
        }

        const updates: Record<string, unknown> = {};
        if (keyword !== undefined) updates.keyword = keyword.trim().toLowerCase();
        if (is_active !== undefined) updates.is_active = is_active;

        if (Object.keys(updates).length === 0) {
            return NextResponse.json({ error: 'Güncellenecek alan belirtilmedi' }, { status: 400 });
        }

        const data = await updateKeyword(id, updates);
        return NextResponse.json({ keyword: data });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'id query parametresi zorunludur' }, { status: 400 });
        }

        await deleteKeyword(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
