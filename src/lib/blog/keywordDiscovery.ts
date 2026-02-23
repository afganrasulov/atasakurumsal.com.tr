import OpenAI from 'openai';
import { getKeywords, createTopic, getTopicsByKeywordId } from './blogService';

function getOpenAI() {
    return new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
}

interface DiscoveredTopic {
    title: string;
    description: string;
    source_url: string;
}

export async function discoverTopics(): Promise<{ keywordsScanned: number; newTopics: number }> {
    const keywords = await getKeywords();
    const activeKeywords = keywords.filter((k) => k.is_active);

    let totalNewTopics = 0;

    for (const kw of activeKeywords) {
        const existingTopics = await getTopicsByKeywordId(kw.id);
        const existingUrls = new Set(existingTopics.map((t) => t.source_url));
        const existingTitles = new Set(existingTopics.map((t) => t.title.toLowerCase()));

        const discovered = await searchWebForKeyword(kw.keyword);

        for (const topic of discovered) {
            // Duplikat kontrolü
            if (existingUrls.has(topic.source_url)) continue;
            if (existingTitles.has(topic.title.toLowerCase())) continue;

            await createTopic({
                keyword_id: kw.id,
                title: topic.title,
                description: topic.description,
                source_url: topic.source_url,
            });
            totalNewTopics++;
        }
    }

    return { keywordsScanned: activeKeywords.length, newTopics: totalNewTopics };
}

async function searchWebForKeyword(keyword: string): Promise<DiscoveredTopic[]> {
    const response = await getOpenAI().responses.create({
        model: 'gpt-4o',
        tools: [{ type: 'web_search' as never }],
        instructions: `Sen bir içerik araştırmacısısın. Verilen anahtar kelimeye göre Türkçe güncel haber ve makale konularını bul.
Her konu için şu bilgileri ver:
- title: Türkçe konu başlığı
- description: 1-2 cümle açıklama
- source_url: Kaynak URL

En az 5, en fazla 10 konu bul. Sonuçları JSON array formatında döndür.
Sadece JSON döndür, başka bir şey yazma.`,
        input: `Anahtar kelime: "${keyword}"

Bu anahtar kelimeye göre Türkiye'de güncel haber ve makale konularını araştır. Sonuçları şu JSON formatında döndür:
[{"title": "...", "description": "...", "source_url": "..."}]`,
    });

    try {
        const text = response.output_text;
        // JSON bloğunu çıkar (```json ... ``` veya direkt array)
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]) as DiscoveredTopic[];
        return parsed.filter((t) => t.title && t.source_url);
    } catch {
        return [];
    }
}
