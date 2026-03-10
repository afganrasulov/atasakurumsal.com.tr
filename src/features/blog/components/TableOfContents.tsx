"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronDown } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(htmlContent: string): TocItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const headings = doc.querySelectorAll("h2, h3");
  const items: TocItem[] = [];

  headings.forEach((heading, index) => {
    const id = heading.id || `heading-${index}`;
    items.push({
      id,
      text: heading.textContent?.trim() || "",
      level: heading.tagName === "H2" ? 2 : 3,
    });
  });

  return items;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHeadings(extractHeadings(content));
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav
      className="rounded-2xl overflow-hidden"
      aria-label="İçindekiler"
      style={{
        background: "var(--blog-surface)",
        border: "1px solid var(--blog-border)",
        boxShadow: "var(--blog-shadow-sm)",
      }}
    >
      {/* Toggle header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200"
        style={{ background: isOpen ? "var(--blog-bg-alt)" : "transparent" }}
        onMouseEnter={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.background = "var(--blog-bg-alt)"; }}
        onMouseLeave={(e) => { if (!isOpen) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
      >
        <span className="flex items-center gap-2.5 text-sm font-bold" style={{ color: "var(--blog-text)" }}>
          <List size={16} style={{ color: "var(--blog-accent)" }} />
          <span style={{ fontFamily: "var(--blog-serif)" }}>İçindekiler</span>
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "var(--blog-text-light)" }}
        />
      </button>

      {/* Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-0.5">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 text-sm transition-colors duration-200"
                  style={{
                    paddingLeft: heading.level === 3 ? "1rem" : undefined,
                    fontFamily: heading.level === 2 ? "var(--blog-serif)" : "var(--blog-body)",
                    fontWeight: activeId === heading.id ? 600 : 400,
                    color: activeId === heading.id
                      ? "var(--blog-accent)"
                      : "var(--blog-text-muted)",
                    borderLeft: activeId === heading.id
                      ? "2px solid var(--blog-accent)"
                      : "2px solid transparent",
                  }}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
