"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Phone,
    MessageCircle,
    Calendar,
    Info,
    ShieldCheck,
    Zap,
    Star,
    Youtube,
} from "lucide-react";
import { COMPANY_INFO, HERO_PHRASES } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";
import { NetworkBackground } from "@/shared/components/NetworkBackground";

function GoogleLogo() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 opacity-60 grayscale hover:grayscale-0 transition-all"
            aria-hidden="true"
        >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );
}

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, end]);

    return <span ref={ref}>{prefix}{value.toLocaleString("tr-TR")}{suffix}</span>;
}

// Floating animation variants
const floatVariants = {
    animate: (i: number) => ({
        y: [0, -8, 0],
        transition: {
            y: {
                repeat: Infinity,
                duration: 3 + i * 0.5,
                ease: "easeInOut" as const,
            },
        },
    }),
};

export function HeroSection() {
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[85vh] overflow-hidden flex flex-col justify-center pt-12 md:pt-20 bg-gradient-to-b from-white to-slate-100">
            {/* Network Background */}
            <div className="absolute inset-0 overflow-hidden">
                <NetworkBackground />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    {/* Main Heading */}
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight select-none"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="block text-slate-300 pb-3">Türkiye&apos;de</span>
                        <div className="relative h-[1.4em] w-full flex justify-center overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={phraseIndex}
                                    initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: "-100%", opacity: 0, filter: "blur(12px)" }}
                                    transition={{
                                        y: { type: "spring", stiffness: 100, damping: 20 },
                                        opacity: { duration: 0.4 },
                                        filter: { duration: 0.4 },
                                    }}
                                    className="absolute top-0 w-full text-center flex items-center justify-center"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 inline-block py-2 px-1">
                                        {HERO_PHRASES[phraseIndex]}
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Çalışma izni, ikamet izni ve vatandaşlık süreçlerinde{" "}
                        <strong className="text-slate-700">güvenilir, hızlı ve şeffaf</strong>{" "}
                        çözüm ortağınız.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col items-center justify-center gap-6 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
                            <a
                                href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                className="group relative inline-flex h-16 overflow-hidden rounded-full p-[3px] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300 min-w-[300px] md:min-w-[340px]"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#FFFFFF_50%,#3B82F6_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-600 px-10 text-white backdrop-blur-3xl gap-2 relative z-10 transition-colors hover:bg-blue-700">
                                    <Phone size={24} className="animate-pulse" />
                                    <span className="text-lg font-bold tracking-wide">Hemen Arayın</span>
                                </span>
                            </a>

                            <a
                                href="https://wa.me/908503086998"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex h-16 items-center justify-center rounded-full bg-white border border-slate-200 px-8 font-medium text-slate-700 shadow-md transition-all duration-300 hover:bg-slate-50 hover:scale-105 min-w-[200px]"
                            >
                                <span className="flex items-center gap-2 relative z-10">
                                    <MessageCircle size={24} className="text-green-600" />
                                    <span className="text-lg font-bold tracking-wide">WhatsApp</span>
                                </span>
                            </a>

                            <a
                                href="/iletisim"
                                className="group relative inline-flex h-16 items-center justify-center rounded-full bg-white border border-slate-200 px-8 font-medium text-slate-700 shadow-md transition-all duration-300 hover:bg-slate-50 hover:scale-105 min-w-[200px]"
                            >
                                <span className="flex items-center gap-2 relative z-10">
                                    <Calendar size={24} className="text-slate-900" />
                                    <span className="text-lg font-bold tracking-wide">İletişime Geç</span>
                                </span>
                            </a>
                        </div>

                        <motion.p
                            className="text-sm text-slate-500 font-bold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            Danışmanlarımız şu an müsait — Hemen arayın, ön bilgi verin.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Floating Stats Cards with Number Counter */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pb-12">
                    <motion.div
                        className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4 h-[140px] group hover:shadow-lg transition-shadow"
                        variants={floatVariants}
                        custom={0}
                        animate="animate"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 group-hover:text-blue-600 transition-colors flex items-center justify-center shrink-0 border border-blue-100">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                %<AnimatedCounter end={98} />
                            </div>
                            <div className="text-sm font-medium text-slate-400">Başarı Oranı</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4 h-[140px] group hover:shadow-lg transition-shadow"
                        variants={floatVariants}
                        custom={1}
                        animate="animate"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 group-hover:text-blue-600 transition-colors flex items-center justify-center shrink-0 border border-blue-100">
                            <Zap size={28} />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                <AnimatedCounter end={12} suffix="+" />
                            </div>
                            <div className="text-sm font-medium text-slate-400">Yıllık Tecrübe</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white/70 backdrop-blur-sm p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center h-[140px] group relative hover:shadow-lg transition-shadow"
                        variants={floatVariants}
                        custom={2}
                        animate="animate"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="absolute top-0 right-0 bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
                            GOOGLE PARTNER
                        </div>
                        <div className="space-y-3 mt-2 grayscale group-hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center justify-between border-b border-slate-100/50 pb-1.5">
                                <div className="flex items-center gap-2">
                                    <div className="p-1 text-slate-400 group-hover:text-red-600">
                                        <Youtube size={14} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">YouTube</span>
                                </div>
                                <span className="text-sm font-black text-slate-400 group-hover:text-slate-900">
                                    <AnimatedCounter end={100} suffix="K+" />
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <GoogleLogo />
                                    <span className="text-xs font-bold text-slate-400">
                                        <AnimatedCounter end={1000} suffix="+" /> Yorum
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 bg-slate-100 text-slate-400 group-hover:bg-yellow-400 group-hover:text-white px-1.5 py-0.5 rounded font-bold text-xs">
                                    4.9 <Star size={10} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
