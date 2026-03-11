"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";
import { useOfficeHours } from "@/shared/hooks/useOfficeHours";

export function StickyCTABar() {
    const [isVisible, setIsVisible] = useState(false);
    const isOfficeOpen = useOfficeHours();

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
                    className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5 pr-4"
                >
                    {/* Danışmanlık */}
                    <Link
                        href="/iletisim"
                        className="group flex items-center gap-2 bg-blue-950 text-white pl-4 pr-5 py-3 rounded-l-2xl text-sm font-bold hover:bg-blue-900 transition-all shadow-lg active:scale-95 hover:pr-7"
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
                        className="group flex items-center gap-2 bg-blue-950 text-white pl-4 pr-5 py-3 rounded-l-2xl text-sm font-bold hover:bg-blue-900 transition-all shadow-lg active:scale-95 hover:pr-7"
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
                        className="group flex items-center gap-2 bg-white text-blue-950 border border-slate-200 pl-4 pr-5 py-3 rounded-l-2xl text-sm font-bold hover:bg-slate-50 transition-all shadow-lg active:scale-95 hover:pr-7"
                    >
                        <MessageCircle size={16} fill="currentColor" />
                        <span className="whitespace-nowrap">WhatsApp</span>
                    </a>

                    {/* Müsait / Kapalı indicator — dinamik */}
                    <div className={`flex items-center gap-2 backdrop-blur-sm border pl-4 pr-5 py-2.5 rounded-l-2xl text-xs font-bold shadow-lg ${isOfficeOpen
                            ? 'bg-white/95 border-slate-200 text-slate-600'
                            : 'bg-slate-50/95 border-slate-200 text-slate-500'
                        }`}>
                        <span className="relative flex h-2 w-2">
                            {isOfficeOpen && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            )}
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${isOfficeOpen ? 'bg-blue-500' : 'bg-red-400'
                                }`} />
                        </span>
                        <span className="whitespace-nowrap">
                            {isOfficeOpen ? 'Müsait' : 'Kapalı — 09:00\'da açılır'}
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
