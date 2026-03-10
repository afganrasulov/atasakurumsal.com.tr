"use client";

import { motion } from "framer-motion";
import { BookOpen, Search, FileText, Feather } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "@/features/blog";
import type { BlogPostCard, BlogPagination } from "@/features/blog";

interface BlogListingClientProps {
  posts: BlogPostCard[];
  pagination: BlogPagination;
}

export function BlogListingClient({ posts, pagination }: BlogListingClientProps) {
  const hasNoPosts = !posts || posts.length === 0;
  const featuredPost = posts?.[0];
  const restPosts = posts?.slice(1) || [];

  return (
    <>
      {/* ═══════════ HERO — Editorial Style ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #faf8f5 0%, #f5f0eb 50%, #faf8f5 100%)",
          minHeight: "50vh",
        }}
      >
        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none blog-dot-pattern"
        />

        {/* Decorative circles */}
        <div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(180,83,9,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(217,119,6,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 py-24 md:py-32 flex flex-col items-center text-center">
          {/* Decorative icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
              style={{
                background: "var(--blog-accent-bg)",
                border: "1px solid var(--blog-accent-border)",
              }}
            >
              <Feather size={28} style={{ color: "var(--blog-accent)" }} />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-8"
            style={{
              background: "var(--blog-accent-bg)",
              border: "1px solid var(--blog-accent-border)",
              color: "var(--blog-accent)",
            }}
          >
            ✦ Uzman Rehberler
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span
              className="block text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-2"
              style={{
                fontFamily: "var(--blog-serif)",
                color: "var(--blog-text-light)",
                letterSpacing: "-0.03em",
              }}
            >
              Bilgi Merkezi
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
              style={{
                fontFamily: "var(--blog-serif)",
                color: "var(--blog-text)",
                letterSpacing: "-0.03em",
              }}
            >
              Blog & Rehberler
            </span>
          </motion.h1>

          {/* Ink line divider */}
          <motion.span
            className="blog-ink-line mt-6 mb-8 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Description */}
          <motion.p
            className="text-base md:text-lg max-w-2xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              fontFamily: "var(--blog-body)",
              color: "var(--blog-text-muted)",
            }}
          >
            Türkiye&apos;de çalışma izni, ikamet izni ve yabancı personel istihdamı
            hakkında <strong style={{ color: "var(--blog-text)" }}>güncel rehberler</strong> ve uzman bilgiler.
          </motion.p>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, var(--blog-bg), transparent)" }}
        />
      </section>

      {/* ═══════════ POSTS ═══════════ */}
      <section
        className="py-16 md:py-24 relative"
        style={{ background: "var(--blog-bg)" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {hasNoPosts ? (
            <motion.div
              className="max-w-md mx-auto text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "var(--blog-accent-bg)",
                  border: "1px solid var(--blog-accent-border)",
                }}
              >
                <FileText size={28} style={{ color: "var(--blog-accent)" }} />
              </div>
              <h2
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "var(--blog-serif)",
                  color: "var(--blog-text)",
                }}
              >
                Henüz yazı yayınlanmadı
              </h2>
              <p className="text-sm mb-6" style={{ color: "var(--blog-text-muted)" }}>
                Blog yazılarımız yakında burada olacak. Çalışma izni hakkında
                bilgi almak için bize ulaşın.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: "var(--blog-accent-bg)",
                  color: "var(--blog-accent)",
                  border: "1px solid var(--blog-accent-border)",
                }}
              >
                <Search size={14} />
                İletişime Geçin
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Stats bar */}
              <motion.div
                className="flex items-center justify-between mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--blog-text-light)" }}>
                  <BookOpen size={14} style={{ color: "var(--blog-accent)", opacity: 0.6 }} />
                  <span>
                    <strong style={{ color: "var(--blog-text-muted)" }}>{pagination.total}</strong>{" "}
                    makale
                  </span>
                </div>
              </motion.div>

              {/* Featured post */}
              {featuredPost && pagination.page === 1 && (
                <div className="mb-12">
                  <BlogCard post={featuredPost} index={0} featured />
                </div>
              )}

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(pagination.page === 1 ? restPosts : posts).map((post: BlogPostCard, i: number) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <motion.div
                  className="flex items-center justify-center gap-2 mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <Link
                        key={p}
                        href={`/blog?page=${p}`}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300"
                        style={{
                          background: p === pagination.page
                            ? "var(--blog-accent)"
                            : "var(--blog-surface)",
                          color: p === pagination.page
                            ? "#ffffff"
                            : "var(--blog-text-muted)",
                          border: `1px solid ${p === pagination.page ? "var(--blog-accent)" : "var(--blog-border)"}`,
                          boxShadow: p === pagination.page
                            ? "0 4px 12px rgba(180,83,9,0.2)"
                            : "none",
                        }}
                      >
                        {p}
                      </Link>
                    )
                  )}
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
