import OpenAI from 'openai';
import { getSupabaseAdmin } from './supabaseAdmin';

function getOpenAI() {
    return new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
}

/**
 * Blog yazısı için Notion-style scribble OG görseli üret ve Supabase Storage'a yükle
 */
export async function generateOGImage(
    slug: string,
    title: string,
    keywords: string[]
): Promise<string | null> {
    try {
        const topicContext = keywords.slice(0, 3).join(', ');

        const response = await getOpenAI().images.generate({
            model: 'dall-e-3',
            prompt: `Notion-style black and white scribble illustration. Simple, clean, minimalist hand-drawn sketch style. 
Topic: ${title} (${topicContext}).
The illustration should represent the concept visually without any text, letters, or words.
Style: thin black ink lines on pure white background, like a Notion app illustration.
Simple characters or objects related to the topic. No text anywhere. No labels. No captions.
Clean white space around the illustration. Modern, friendly, informative doodle art style.`,
            size: '1792x1024',
            quality: 'standard',
            n: 1,
        });

        const imageUrl = response.data?.[0]?.url;
        if (!imageUrl) return null;

        // URL'den görseli indir
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

        // Supabase Storage'a yükle (public-assets bucket, atasa_kurumsal_web_sitesi klasörü)
        const fileName = `atasa_kurumsal_web_sitesi/blog-images/${slug}.png`;
        const { error: uploadError } = await getSupabaseAdmin()
            .storage
            .from('public-assets')
            .upload(fileName, imageBuffer, {
                contentType: 'image/png',
                upsert: true,
            });

        if (uploadError) {
            console.error('[OG Image Upload Error]', uploadError);
            return null;
        }

        // Public URL oluştur
        const { data: urlData } = getSupabaseAdmin()
            .storage
            .from('public-assets')
            .getPublicUrl(fileName);

        return urlData.publicUrl;
    } catch (error) {
        console.error('[OG Image Generation Error]', error);
        return null;
    }
}
