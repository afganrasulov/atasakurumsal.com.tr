import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailClient } from "./BlogDetailClient";
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
} from "@/lib/blog/aiSeoSchema";
import { getPostBySlug, getPosts } from "@/lib/blog/blogService";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    const ogImage = (post as unknown as { og_image_url?: string }).og_image_url ?? null;
    return {
      title: post.title,
      description: post.summary || `${post.title} — Atasa Danışmanlık Blog`,
      keywords: post.keywords,
      openGraph: {
        title: post.title,
        description: post.summary || "",
        type: "article",
        locale: "tr_TR",
        publishedTime: post.created_at,
        modifiedTime: post.updated_at,
        tags: post.keywords,
        images: ogImage
          ? [{ url: ogImage, width: 1536, height: 1024, alt: post.title }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.summary || "",
        images: ogImage ? [ogImage] : undefined,
      },
      alternates: {
        canonical: `https://www.atasakurumsal.com.tr/blog/${slug}`,
      },
    };
  } catch {
    return { title: "Yazı Bulunamadı" };
  }
}

export async function generateStaticParams() {
  try {
    const { posts } = await getPosts(1, 100);
    return posts.map((post) => ({ slug: post.slug! }));
  } catch {
    return [];
  }
}

export default async function BlogDetailPage({ params }: PageParams) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  // Generate schemas
  const articleSchema = generateArticleSchema(post);
  const faqSchema = generateFAQSchema(post.faq);
  const howToSchema = generateHowToSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "https://www.atasakurumsal.com.tr" },
    { name: "Blog", url: "https://www.atasakurumsal.com.tr/blog" },
    { name: post.title, url: `https://www.atasakurumsal.com.tr/blog/${slug}` },
  ]);

  // Fetch related posts (same keywords, different slug)
  let relatedPosts: Array<{ id: string; title: string; slug: string; summary: string | null; created_at: string }> = [];
  try {
    const { posts: allPosts } = await getPosts(1, 50);
    relatedPosts = allPosts
      .filter((p) => p.slug !== slug)
      .slice(0, 3)
      .map((p) => ({
        id: p.id!,
        title: p.title!,
        slug: p.slug!,
        summary: p.summary || null,
        created_at: p.created_at!,
      }));
  } catch {
    // no related posts
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <BlogDetailClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
