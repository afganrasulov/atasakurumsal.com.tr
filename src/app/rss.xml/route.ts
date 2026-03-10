import { NextResponse } from "next/server";
import { getPosts } from "@/lib/blog/blogService";

const SITE_URL = "https://www.atasakurumsal.com.tr";

export async function GET() {
  let posts: Array<{ title?: string; slug?: string; summary?: string | null; created_at?: string }> = [];

  try {
    const result = await getPosts(1, 100);
    posts = result.posts;
  } catch {
    // Empty feed
  }

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.summary || ""}]]></description>
      <pubDate>${new Date(post.created_at!).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Atasa Danışmanlık Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Türkiye'de çalışma izni, ikamet izni ve yabancı personel istihdamı hakkında uzman rehberler.</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
