"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionCTAProps {
    message: string;
    buttonText: string;
    href?: string;
}

export function SectionCTA({ message, buttonText, href = "/iletisim" }: SectionCTAProps) {
    return (
        <motion.section
            className="py-20 relative overflow-hidden"
            style={{
                background: "linear-gradient(90deg, #020617, #0f172a, #020617)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
                    <p className="text-slate-400 text-center sm:text-left font-medium text-base md:text-lg">
                        {message}
                    </p>
                    <Link
                        href={href}
                        className="group inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.12)",
                        }}
                    >
                        {buttonText}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
