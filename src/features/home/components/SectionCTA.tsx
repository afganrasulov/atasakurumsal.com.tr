"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionCTAProps {
    message: string;
    buttonText: string;
    href?: string;
}

export function SectionCTA({
    message,
    buttonText,
    href = "/iletisim",
}: SectionCTAProps) {
    return (
        <motion.section
            className="py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
                    <p className="text-white text-center sm:text-left font-bold text-base md:text-lg">
                        {message}
                    </p>
                    <Link
                        href={href}
                        className="group inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                        {buttonText}
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
