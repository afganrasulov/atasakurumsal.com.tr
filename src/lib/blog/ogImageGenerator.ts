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
            model: 'gpt-image-1',
            prompt: `Notion-style black and white scribble illustration. Simple, clean, minimalist hand-drawn sketch style. 
Topic: ${title} (${topicContext}).
The illustration should represent the concept visually without any text, letters, or words.
Style: thin black ink lines on pure white background, like a Notion app illustration.
Simple characters or objects related to the topic. No text anywhere. No labels. No captions.
Clean white space around the illustration. Modern, friendly, informative doodle art style.`,
            size: '1536x1024',
            quality: 'medium',
            n: 1,
        });

        if (!response.data?.[0]?.b64_json) return null;

        const imageBuffer = Buffer.from(response.data[0].b64_json, 'base64');

        // Supabase Storage'a yükle
        const fileName = `og/${slug}.png`;
        const { error: uploadError } = await getSupabaseAdmin()
            .storage
            .from('blog-images')
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
            .from('blog-images')
            .getPublicUrl(fileName);

        return urlData.publicUrl;
    } catch (error) {
        console.error('[OG Image Generation Error]', error);
        return null;
    }
}
