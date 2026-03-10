"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FaqItem } from "../types";

interface BlogFAQProps {
  items: FaqItem[];
}

export function BlogFAQ({ items }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="mt-16" aria-label="Sıkça Sorulan Sorular">
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "var(--blog-accent-bg)",
            border: "1px solid var(--blog-accent-border)",
          }}
        >
          <HelpCircle size={18} style={{ color: "var(--blog-accent)" }} />
        </div>
        <h2
          className="text-xl font-bold"
          style={{
            fontFamily: "var(--blog-serif)",
            color: "var(--blog-text)",
          }}
        >
          Sıkça Sorulan Sorular
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: isOpen ? "var(--blog-surface)" : "transparent",
                border: `1px solid ${isOpen ? "var(--blog-border)" : "var(--blog-border-light)"}`,
                boxShadow: isOpen ? "var(--blog-shadow-sm)" : "none",
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start gap-3 p-5 text-left group"
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold transition-all duration-300"
                  style={{
                    background: isOpen ? "var(--blog-accent)" : "var(--blog-accent-bg)",
                    color: isOpen ? "#ffffff" : "var(--blog-accent)",
                    border: `1px solid ${isOpen ? "var(--blog-accent)" : "var(--blog-accent-border)"}`,
                  }}
                >
                  {index + 1}
                </span>
                <span
                  className="text-sm font-semibold flex-1 leading-relaxed transition-colors"
                  style={{
                    fontFamily: "var(--blog-serif)",
                    color: "var(--blog-text)",
                  }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`mt-0.5 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  style={{ color: "var(--blog-text-light)" }}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-5 pb-5 pl-14 -mt-1 text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--blog-body)",
                        color: "var(--blog-text-muted)",
                      }}
                    >
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
