"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, TrendingUp, ArrowRight } from "lucide-react";
import type { BlogPostCard } from "../types";

function estimateReadTime(summary: string | null): number {
  if (!summary) return 5;
  const words = summary.split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 40) + 4);
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface BlogCardProps {
  post: BlogPostCard;
  index: number;
  featured?: boolean;
}

export function BlogCard({ post, index, featured = false }: BlogCardProps) {
  const readTime = estimateReadTime(post.summary);

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="group block"
        >
          <div
            className="relative overflow-hidden rounded-3xl transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, #fffbf5 0%, #fef3e2 100%)",
              border: "1px solid var(--blog-border)",
              boxShadow: "var(--blog-shadow-md)",
            }}
          >
            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30"
              style={{
                background: "radial-gradient(circle at 100% 0%, rgba(180,83,9,0.12), transparent 70%)",
              }}
            />

            <div className="relative z-10 p-8 md:p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
                style={{
                  background: "var(--blog-accent-bg)",
                  border: "1px solid var(--blog-accent-border)",
                  color: "var(--blog-accent)",
                }}
              >
                ✦ Öne Çıkan Yazı
              </div>

              {/* Keywords */}
              {post.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.keywords.slice(0, 4).map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(180,83,9,0.06)",
                        color: "var(--blog-accent)",
                        border: "1px solid rgba(180,83,9,0.1)",
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h2
                className="text-2xl md:text-4xl font-bold leading-tight mb-4 group-hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "var(--blog-serif)",
                  color: "var(--blog-text)",
                  letterSpacing: "-0.02em",
                }}
              >
                {post.title}
              </h2>

              {/* Summary */}
              {post.summary && (
                <p
                  className="text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
                  style={{
                    fontFamily: "var(--blog-body)",
                    color: "var(--blog-text-muted)",
                  }}
                >
                  {post.summary}
                </p>
              )}

              {/* Meta + CTA */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-5 text-sm" style={{ color: "var(--blog-text-light)" }}>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} style={{ color: "var(--blog-accent)", opacity: 0.6 }} />
                    {formatDate(post.created_at)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} style={{ color: "var(--blog-accent)", opacity: 0.6 }} />
                    {readTime} dk okuma
                  </span>
                </div>

                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                  style={{ color: "var(--blog-accent)" }}
                >
                  Devamını Oku
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full"
      >
        <div
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
          style={{
            background: "var(--blog-surface)",
            border: "1px solid var(--blog-border)",
            boxShadow: "var(--blog-shadow-sm)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "var(--blog-shadow-warm)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,83,9,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "var(--blog-shadow-sm)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--blog-border)";
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(90deg, var(--blog-accent), var(--blog-accent-light), transparent)",
            }}
          />

          <div className="relative z-10 p-6 flex flex-col h-full">
            {/* Keywords */}
            {post.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--blog-accent-bg)",
                      color: "var(--blog-accent)",
                      border: "1px solid var(--blog-accent-border)",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h2
              className="text-lg font-bold leading-tight mb-3 line-clamp-2 group-hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "var(--blog-serif)",
                color: "var(--blog-text)",
                letterSpacing: "-0.01em",
              }}
            >
              {post.title}
            </h2>

            {/* Summary */}
            {post.summary && (
              <p
                className="text-sm leading-relaxed mb-5 line-clamp-3 flex-grow"
                style={{
                  fontFamily: "var(--blog-body)",
                  color: "var(--blog-text-muted)",
                }}
              >
                {post.summary}
              </p>
            )}

            {/* Meta */}
            <div
              className="flex items-center justify-between mt-auto pt-4"
              style={{ borderTop: "1px solid var(--blog-border-light)" }}
            >
              <div className="flex items-center gap-4 text-[11px] font-medium" style={{ color: "var(--blog-text-light)" }}>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} style={{ color: "var(--blog-accent)", opacity: 0.5 }} />
                  {formatDate(post.created_at)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} style={{ color: "var(--blog-accent)", opacity: 0.5 }} />
                  {readTime} dk
                </span>
              </div>

              {/* SEO score badge */}
              {post.seo_score > 0 && (
                <span className="flex items-center gap-1 text-[10px] font-bold" style={{ color: "#16a34a" }}>
                  <TrendingUp size={10} />
                  {post.seo_score}
                </span>
              )}
            </div>

            {/* Read more indicator */}
            <div
              className="absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background: "var(--blog-accent-bg)",
              }}
            >
              <ArrowRight size={14} style={{ color: "var(--blog-accent)" }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
