import OpenAI from 'openai';
import { createPost, updateTopicStatus, type Topic } from './blogService';
import { generateOGImage } from './ogImageGenerator';
import { getSupabaseAdmin } from './supabaseAdmin';

function getOpenAI() {
    return new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
}

interface GeneratedArticle {
    title: string;
    slug: string;
    content: string;
    summary: string;
    keywords: string[];
    faq: Array<{ question: string; answer: string }>;
    seo_score: number;
}

export async function generateArticle(topic: Topic): Promise<{ success: boolean; message: string }> {
    try {
        await updateTopicStatus(topic.id, 'generating');

        const response = await getOpenAI().responses.create({
            model: 'gpt-5-mini',
            tools: [{ type: 'web_search' as never }],
            instructions: `Sen deneyimli bir SEO uzmanı ve içerik yazarısın. Türkçe, SEO uyumlu blog makaleleri yazıyorsun.
Hedef kitle: Türkiye'de çalışma izni almak isteyen yabancılar ve onlara danışmanlık yapan firmalar.

Makale yazarken şu kurallara uy:
1. Title: 50-60 karakter, ana anahtar kelimeyi içersin
2. Summary (meta description): 150-160 karakter, CTA içersin
3. Content: HTML formatında, H2/H3 hiyerarşisi, en az 1500 kelime
4. FAQ: 3-5 soru-cevap çifti
5. Keywords: İlgili SEO anahtar kelimeleri listesi
6. SEO Score: 1-100 arası değerlendirme
7. Slug: URL-friendly, Türkçe karakterleri dönüştür (ç→c, ş→s, ı→i vb.)

LİNK KURALLARI (ÇOK ÖNEMLİ):
- ASLA markdown link formatı kullanma ([text](url) YASAK!)
- Sadece HTML <a> etiketleri kullan: <a href="url">text</a>
- Sadece resmi kaynaklara (.gov.tr, .edu.tr) link ver
- Üçüncü parti, özel sektör veya haber sitelerine asla link verme
- Rakip danışmanlık firmalarına link verme

İÇERİK ZENGİNLEŞTİRME:
- Önemli bilgileri, tarihleri ve sayısal verileri <strong> etiketi ile vurgula
- Alt bölümlerde numaralı veya madde işaretli listeler (<ol>, <ul>) kullan
- Mümkün olan yerlerde bilgileri <table> ile organize et

Yanıtını şu JSON formatında döndür (sadece JSON, başka bir şey yazma):
{
  "title": "...",
  "slug": "...",
  "content": "<h2>...</h2><p>...</p>...",
  "summary": "...",
  "keywords": ["...", "..."],
  "faq": [{"question": "...", "answer": "..."}],
  "seo_score": 85
}`,
            input: `Şu konu hakkında detaylı, SEO uyumlu bir Türkçe blog makalesi yaz:

Konu: ${topic.title}
${topic.description ? `Açıklama: ${topic.description}` : ''}
${topic.source_url ? `Referans: ${topic.source_url}` : ''}

Güncel bilgileri web araştırması yaparak doğrula ve zenginleştir.`,
        });

        const text = response.output_text;
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            await updateTopicStatus(topic.id, 'failed');
            return { success: false, message: `JSON parse edilemedi: ${topic.title}` };
        }

        const article = JSON.parse(jsonMatch[0]) as GeneratedArticle;

        // Schema.org JSON-LD oluştur
        const schemaJson = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.summary,
            keywords: article.keywords.join(', '),
            datePublished: new Date().toISOString(),
            author: {
                '@type': 'Organization',
                name: 'Atasa Danışmanlık',
            },
        };

        // FAQ schema ekle
        const faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: article.faq.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.answer,
                },
            })),
        };

        const post = await createPost({
            topic_id: topic.id,
            title: article.title,
            slug: article.slug,
            content: article.content,
            summary: article.summary,
            keywords: article.keywords,
            faq: article.faq,
            seo_score: article.seo_score,
            schema_json: { article: schemaJson, faq: faqSchema },
        });

        // OG görseli üret (arka planda, hata olursa makale yine de yayınlanır)
        try {
            const ogImageUrl = await generateOGImage(article.slug, article.title, article.keywords);
            if (ogImageUrl) {
                await getSupabaseAdmin()
                    .from('posts')
                    .update({ og_image_url: ogImageUrl })
                    .eq('id', post.id);
            }
        } catch (ogError) {
            console.error('[OG Image Error]', ogError);
        }

        await updateTopicStatus(topic.id, 'published');
        return { success: true, message: `Makale üretildi: ${article.title}` };
    } catch (error) {
        console.error('[seoOptimizer generateArticle ERROR]', error);
        await updateTopicStatus(topic.id, 'failed');
        const errMsg = error instanceof Error ? error.message : 'Bilinmeyen hata';
        return { success: false, message: `Hata (${topic.title}): ${errMsg}` };
    }
}
