import OpenAI from 'openai';
import { getKeywords, createTopic, getTopicsByKeywordId, addKeyword } from './blogService';

function getOpenAI() {
    return new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
}

interface DiscoveredTopic {
    title: string;
    description: string;
    source_url: string;
    relevance_score: number;
    topic_type: 'news' | 'evergreen' | 'paa' | 'long-tail';
}

const SCORE_THRESHOLD = 50;

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
            if (existingUrls.has(topic.source_url)) continue;
            if (existingTitles.has(topic.title.toLowerCase())) continue;
            if (topic.relevance_score < SCORE_THRESHOLD) continue;

            await createTopic({
                keyword_id: kw.id,
                title: topic.title,
                description: `[${topic.topic_type}|skor:${topic.relevance_score}] ${topic.description}`,
                source_url: topic.source_url,
            });
            totalNewTopics++;
        }
    }

    return { keywordsScanned: activeKeywords.length, newTopics: totalNewTopics };
}

async function searchWebForKeyword(keyword: string): Promise<DiscoveredTopic[]> {
    const response = await getOpenAI().responses.create({
        model: 'gpt-5-mini',
        tools: [{ type: 'web_search' as never }],
        instructions: `Sen uzman bir SEO içerik araştırmacısısın. Türkiye'de sadece yabancıların ÇALIŞMA İZNİ, İKAMET İZNİ ve YABANCI ŞİRKET KURULUŞU süreçleriyle ilgilenen "Atasa Danışmanlık" firması için çalışıyorsun.

DİKKAT EDİLECEK KURALLAR:
- ASLA turizm, gezi, hastane, eğitim (üniversiteler) gibi günlük yaşam konularında içerik ÜRETME!
- Hedefimiz kurumsal danışmanlık talep eden yabancılar ve yabancı çalıştıran Türk şirketleri.
- Taramalarını %100 çalışma izni, ikamet, vatandaşlık ve şirket kuruluşu mevzuatları özelinde gerçekleştir.

Verilen anahtar kelimeye göre DÖRT farklı kategoride konu bul:

1. **Güncel Haberler (news)**: Son 30 gün içindeki değişiklikler, yeni düzenlemeler, mevzuat güncellemeleri
2. **Evergreen İçerik (evergreen)**: Zaman aşımına uğramayan rehber, adım-adım kılavuz konuları (örn: 2024 Yabancılara çalışma izni nasıl alınır?)
3. **People Also Ask (paa)**: İnsanların bu konuda sıkça sorduğu sorular — "Nasıl yapılır?", "Ne kadar sürer?", "Reddedilince ne yapılmalı?" tarzında
4. **Long-tail Keyword (long-tail)**: Rekabeti düşük ama hedefli spesifik başlıklar — belirli sektör, ülke, veya senaryo odaklı (örn: Yabancı doktor çalışma izni şartları)

Her konu için SKOR ver (1-100):
- Alakalılık (Atasa'nın kurumsal danışmanlık alanıyla ne kadar ilgili): 0-40 puan
- Arama Potansiyeli (hedef kitlenin bunu arama olasılığı): 0-30 puan
- Rekabet Düzeyi (düşük rekabet = yüksek puan): 0-30 puan

Sonuçları JSON array formatında döndür. Sadece JSON döndür, başka bir şey yazma.
Her kategoriden en az 2 konu bul (toplam 8-12 konu).`,
        input: `Anahtar kelime: "${keyword}"

Bu anahtar kelimeye göre Türkiye'de güncel içerik fırsatlarını araştır.

Sonuçları şu JSON formatında döndür:
[{
  "title": "Türkçe konu başlığı — SEO uyumlu, 50-60 karakter",
  "description": "1-2 cümle açıklama",
  "source_url": "Kaynak URL",
  "relevance_score": 75,
  "topic_type": "news|evergreen|paa|long-tail"
}]`,
    });

    try {
        const text = response.output_text;
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) return [];

        const parsed = JSON.parse(jsonMatch[0]) as DiscoveredTopic[];
        return parsed
            .filter((t) => t.title && t.source_url && typeof t.relevance_score === 'number')
            .sort((a, b) => b.relevance_score - a.relevance_score);
    } catch {
        return [];
    }
}

export async function autoPopulateKeywords(minThreshold = 5): Promise<number> {
    const keywords = await getKeywords();
    const activeCount = keywords.filter((k) => k.is_active).length;

    if (activeCount >= minThreshold) {
        return 0; // Yeterli keyword var
    }

    const response = await getOpenAI().responses.create({
        model: 'gpt-5-mini',
        instructions: `Sen SEO uzmanısın. Türkiye'de yabancıların "ÇALIŞMA İZNİ" süreçleriyle ilgilenen danışmanlık firması Atasa Danışmanlık için aranma hacmi yüksek ama rekabeti düşük "long-tail keyword" üreteceksin. 

DİKKAT EDİLECEK KURALLAR:
- SADECE şu hizmetlerle ilgili kelimeler türetebilirsin: Yabancılara Çalışma İzni, İkamet İzni (oturma izni), Çalışma İzni Uzatma, Çalışma İzni Transferi, Yabancı Bakıcı Çalışma İzni, Türk Vatandaşlığı, Turkuaz Kart, Toplu Başvuru, Yabancı SGK/Bordro, Yabancı Şirket Kuruluşu, Sektörel Yabancı İstihdamı.
- ASLA "Türkiye'de gezilecek yerler", "En iyi üniversiteler", "Yabancılar için hastaneler" gibi turistik/günlük yaşam kelimeleri GETİRME! %100 Kurumsal Danışmanlık niyeti barındıran ("nasıl alınır", "şartları nelerdir", "2024 güncel harçları", "gerekli evraklar", "reddi durumunda ne yapılır") gibi kelimeler üret.
- Daha önce kullanılan kelimelerle çakışmaması için kelimeleri birbirinden çok farklı, soru tipli veya niş kitlelere yönelik (örn: İngiliz vatandaşları için Türkiye çalışma izni, teknoloji şirketi yabancı mühendis çalışma izni) üret.
Sonucu SADECE JSON array olarak döndür: ["keyword1", "keyword2", "keyword3"]`,
        input: `Bana sadece Atasa Danışmanlık hizmetlerine TAM uyumlu 5 adet yeni, niş ve etkili long-tail anahtar kelime üret.`,
    });

    try {
        const text = response.output_text;
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) return 0;

        const newKeywords = JSON.parse(jsonMatch[0]) as string[];
        const existingNames = new Set(keywords.map(k => k.keyword.toLowerCase()));
        
        let addedCount = 0;
        for (const kw of newKeywords) {
            const cleanKw = kw.trim().toLowerCase();
            if (cleanKw && !existingNames.has(cleanKw)) {
                await addKeyword(cleanKw);
                addedCount++;
            }
        }
        return addedCount;
    } catch (err) {
        console.error("[autoPopulateKeywords Error]", err);
        return 0;
    }
}
