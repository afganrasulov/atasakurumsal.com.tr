"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

export function StickyCTABar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 80, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5 pr-4"
                >
                    {/* Danışmanlık */}
                    <Link
                        href="/iletisim"
                        className="group flex items-center gap-2 bg-blue-600 text-white pl-4 pr-5 py-3 rounded-l-2xl text-sm font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/25 active:scale-95 hover:pr-7"
                    >
                        <ArrowRight
                            size={16}
                            className="group-hover:-translate-x-0.5 transition-transform"
                        />
                        <span className="whitespace-nowrap">Ücretsiz Danışmanlık</span>
                    </Link>

                    {/* Telefon */}
                    <a
                        href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                        className="group flex items-center gap-2 bg-slate-900 text-white pl-4 pr-5 py-3 rounded-l-2xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95 hover:pr-7"
                    >
                        <Phone size={16} />
                        <span className="whitespace-nowrap">
                            {COMPANY_INFO.phone}
                        </span>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/908503086998"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-l-2xl text-sm font-bold hover:bg-[#20BD5A] transition-all shadow-lg active:scale-95 hover:pr-7"
                    >
                        <MessageCircle size={16} fill="currentColor" />
                        <span className="whitespace-nowrap">WhatsApp</span>
                    </a>

                    {/* Müsait indicator */}
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-600 pl-4 pr-5 py-2.5 rounded-l-2xl text-xs font-bold shadow-lg">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="whitespace-nowrap">Müsait</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
