"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                aria-expanded={isOpen}
            >
                <span className={cn(
                    "text-lg font-bold transition-colors pr-4",
                    isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                )}>
                    {question}
                </span>
                <ChevronDown
                    size={20}
                    className={cn(
                        "text-slate-400 transition-transform duration-300 shrink-0",
                        isOpen && "rotate-180 text-blue-600"
                    )}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm divide-y divide-slate-100 px-8">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}
