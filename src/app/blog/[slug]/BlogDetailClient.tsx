"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  ArrowUpRight,
  Feather,
} from "lucide-react";
import { TableOfContents, BlogFAQ, ShareButtons } from "@/features/blog";
import type { BlogPost } from "@/features/blog";

/** Resmi kaynak domain'leri — sadece bunlar link olarak kalır */
const OFFICIAL_DOMAINS = [
  '.gov.tr', '.edu.tr', '.bel.tr', '.mil.tr',
  'resmigazete.gov.tr', 'turkiye.gov.tr',
  'csgb.gov.tr', 'ailevecalisma.gov.tr',
  'goc.gov.tr', 'mevzuat.gov.tr',
  'atasakurumsal.com.tr',
];

function isOfficialUrl(url: string): boolean {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    return OFFICIAL_DOMAINS.some((d) => hostname.endsWith(d) || hostname.includes(d));
  } catch {
    return false;
  }
}

/** Markdown linklerini HTML'e çevir, resmi olmayan linkleri düz metne dönüştür, anahtar kelimeleri vurgula */
function processContent(html: string, keywords: string[] = []): string {
  // 1. Markdown [text](url) → resmi ise <a>, değilse sadece text
  let processed = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    (_match, text: string, url: string) =>
      isOfficialUrl(url)
        ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
        : text
  );
  // 2. Mevcut <a> etiketlerindeki gayrıresmi linkleri düz metne çevir
  processed = processed.replace(
    /<a\s+href="(https?:\/\/[^"]+)"[^>]*>([^<]*)<\/a>/g,
    (_match, url: string, text: string) =>
      isOfficialUrl(url)
        ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
        : text
  );
  // 3. \\n kalıntılarını temizle
  processed = processed.replace(/\\n/g, '');
  // 4. Parantez içi boş URL kalıntılarını temizle
  processed = processed.replace(/\(\s*\(\s*\)\s*\)/g, '');
  processed = processed.replace(/\(\s*\)/g, '');

  // 5. Anahtar kelimeleri vurgula (sadece ilk geçişi, HTML etiketlerini koruyarak)
  if (keywords.length > 0) {
    const safeKeywords = keywords
      .filter((k) => k.length >= 4)
      .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (safeKeywords.length > 0) {
      const kwRegex = new RegExp(
        `(?<![<\/\w])\\b(${safeKeywords.join('|')})\\b(?![^<]*>)`,
        'gi'
      );
      const highlighted = new Set<string>();
      processed = processed.replace(kwRegex, (match) => {
        const lower = match.toLowerCase();
        if (highlighted.has(lower)) return match;
        highlighted.add(lower);
        return `<span class="keyword-highlight">${match}</span>`;
      });
    }
  }

  return processed;
}

function estimateReadTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 200));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: Array<{
    id: string;
    title: string;
    slug: string;
    summary: string | null;
    created_at: string;
  }>;
}

export function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const readTime = estimateReadTime(post.content);

  return (
    <>
      {/* ═══════════ HERO — Editorial ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #faf8f5 0%, #f5f0eb 60%, #faf8f5 100%)",
          minHeight: "45vh",
        }}
      >
        {/* Decorative dot pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none blog-dot-pattern" />

        {/* Decorative circles */}
        <div
          className="absolute top-10 right-[15%] w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(180,83,9,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-1.5 text-[12px] font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ color: "var(--blog-text-light)" }}
            >
              <Link href="/" className="transition-colors hover:text-amber-700" style={{ color: "var(--blog-text-muted)" }}>
                Ana Sayfa
              </Link>
              <ChevronRight size={11} />
              <Link href="/blog" className="transition-colors hover:text-amber-700" style={{ color: "var(--blog-text-muted)" }}>
                Blog
              </Link>
              <ChevronRight size={11} />
              <span className="truncate max-w-[200px]" style={{ color: "var(--blog-accent)" }}>
                {post.title}
              </span>
            </motion.nav>

            {/* Keywords */}
            {post.keywords.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {post.keywords.slice(0, 4).map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full"
                    style={{
                      background: "var(--blog-accent-bg)",
                      border: "1px solid var(--blog-accent-border)",
                      color: "var(--blog-accent)",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "var(--blog-serif)",
                color: "var(--blog-text)",
                letterSpacing: "-0.02em",
              }}
            >
              {post.title}
            </motion.h1>

            {/* Ink line */}
            <motion.span
              className="blog-ink-line mb-6"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 60, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            {/* Meta */}
            <motion.div
              className="flex flex-wrap items-center gap-5 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ color: "var(--blog-text-light)" }}
            >
              <span className="flex items-center gap-1.5">
                <Calendar size={14} style={{ color: "var(--blog-accent)", opacity: 0.6 }} />
                {formatDate(post.created_at)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} style={{ color: "var(--blog-accent)", opacity: 0.6 }} />
                {readTime} dk okuma
              </span>
              <span className="flex items-center gap-1.5">
                <Feather size={14} style={{ color: "var(--blog-accent)", opacity: 0.6 }} />
                Atasa Danışmanlık
              </span>
              <div className="hidden sm:block ml-auto">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, var(--blog-bg), transparent)" }}
        />
      </section>

      {/* ═══════════ CONTENT ═══════════ */}
      <section
        className="py-12 md:py-20 relative"
        style={{ background: "var(--blog-bg)" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Table of Contents */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TableOfContents content={post.content} />
            </motion.div>

            {/* Article body */}
            <motion.article
              className="blog-editorial-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: processContent(post.content, post.keywords) }}
            />

            {/* Mobile share */}
            <div className="sm:hidden mt-8 pt-6" style={{ borderTop: "1px solid var(--blog-border-light)" }}>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <BlogFAQ items={post.faq} />
              </motion.div>
            )}

            {/* Back link */}
            <motion.div
              className="mt-16 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ borderTop: "1px solid var(--blog-border-light)" }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: "var(--blog-text-muted)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--blog-accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--blog-text-muted)"; }}
              >
                <ArrowLeft size={14} />
                Tüm Yazılara Dön
              </Link>
            </motion.div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              className="max-w-3xl mx-auto mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-bold mb-8 tracking-tight"
                style={{
                  fontFamily: "var(--blog-serif)",
                  color: "var(--blog-text)",
                  letterSpacing: "-0.02em",
                }}
              >
                İlgili Yazılar
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/blog/${rp.slug}`}
                    className="group p-6 rounded-2xl transition-all duration-300"
                    style={{
                      background: "var(--blog-surface)",
                      border: "1px solid var(--blog-border)",
                      boxShadow: "var(--blog-shadow-sm)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--blog-shadow-warm)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,83,9,0.2)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--blog-shadow-sm)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--blog-border)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <h3
                      className="text-sm font-semibold leading-snug mb-3 line-clamp-2 group-hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: "var(--blog-serif)",
                        color: "var(--blog-text)",
                      }}
                    >
                      {rp.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]" style={{ color: "var(--blog-text-light)" }}>
                        {formatDate(rp.created_at)}
                      </span>
                      <ArrowUpRight
                        size={12}
                        className="transition-colors"
                        style={{ color: "var(--blog-text-light)" }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
