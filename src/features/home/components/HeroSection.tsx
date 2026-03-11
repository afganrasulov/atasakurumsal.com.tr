"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Phone,
    MessageCircle,
    Calendar,
} from "lucide-react";
import { COMPANY_INFO, HERO_PHRASES } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";
import { NetworkBackground } from "@/shared/components/NetworkBackground";
import { FloatingParticles } from "@/shared/components/FloatingParticles";
import { MagneticButton } from "@/shared/components/MagneticButton";
import { useParallax } from "@/shared/hooks/useParallax";
import { useOfficeHours } from "@/shared/hooks/useOfficeHours";
import { MorphingBlob, AmbientLightSweep } from "@/shared/components/IdleAnimations";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10px" });
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

export function HeroSection() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const isOfficeOpen = useOfficeHours();
    const { ref: parallaxRef, y: bgY } = useParallax({ speed: 0.3 });
    const { y: logoY } = useParallax({ speed: -0.05 });

    useEffect(() => {
        const interval = setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={parallaxRef}
            className="hidden lg:flex relative min-h-[85vh] overflow-hidden flex-col justify-center pt-12 lg:pt-20 bg-gradient-to-b from-white to-slate-100"
        >
            {/* Network Background with Parallax */}
            <motion.div className="absolute inset-0 overflow-hidden" style={{ y: bgY }}>
                <NetworkBackground />
            </motion.div>

            {/* Floating Ambient Particles — Cinematic Hero Upgrade Efekt 9 */}
            <FloatingParticles
                count={18}
                color="59, 130, 246"
                shape="circle"
                minSize={2}
                maxSize={8}
                speed={0.6}
            />

            {/* Ambient glow pulse — Cinematic */}
            <motion.div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(59, 130, 246, 0.06)" }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Idle: Morphing Blob */}
            <MorphingBlob color="59,130,246" opacity={0.03} size={500} top="60%" left="20%" duration={14} />
            <MorphingBlob color="139,92,246" opacity={0.02} size={350} top="25%" left="80%" duration={18} />

            {/* Idle: Ambient Light Sweep */}
            <AmbientLightSweep duration={10} opacity={0.02} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-16">
                    {/* Main Heading — fadeBlur reveal */}
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight select-none"
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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

                    {/* Subtitle — staggered fade */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        {/* Main CTA — Magnetic Button Efekt 7 */}
                        <div className="flex justify-center w-full">
                            <MagneticButton strength={0.25} className="inline-flex">
                                <a
                                    href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                    className="group relative inline-flex h-[80px] overflow-hidden rounded-full p-[3px] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300 min-w-[320px] md:min-w-[380px]"
                                >
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#FFFFFF_50%,#3B82F6_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-full bg-blue-600 px-10 text-white backdrop-blur-3xl relative z-10 transition-colors hover:bg-blue-700 overflow-hidden">
                                        <span className="flex items-center gap-2">
                                            <Phone size={22} className="animate-pulse" />
                                            <span className="text-2xl font-bold tracking-wide">Hemen Arayın</span>
                                        </span>
                                        <span className="flex items-center gap-1.5 text-[11px] text-blue-200 font-medium -mt-0.5">
                                            <span className="relative flex h-1.5 w-1.5">
                                                {isOfficeOpen && (
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                                )}
                                                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isOfficeOpen ? 'bg-emerald-400' : 'bg-red-400'}`} />
                                            </span>
                                            {isOfficeOpen
                                                ? 'Danışmanlarımız şu an müsait'
                                                : 'Mesai saatleri: Pzt-Cmt 09:00–18:00'}
                                        </span>
                                        <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none" />
                                    </span>
                                </a>
                            </MagneticButton>
                        </div>

                        {/* Secondary links */}
                        <div className="flex items-center justify-center gap-6 mt-1">
                            <a
                                href="https://wa.me/908503086998"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-green-600 transition-colors duration-300"
                            >
                                <MessageCircle size={15} />
                                <span className="font-medium">WhatsApp</span>
                            </a>
                            <span className="text-slate-300">|</span>
                            <a
                                href="/iletisim"
                                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors duration-300"
                            >
                                <Calendar size={15} />
                                <span className="font-medium">İletişime Geç</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Trusted By — Logo Strip with parallax */}
                <motion.div className="max-w-5xl mx-auto mb-8" style={{ y: logoY }}>
                    <p className="text-center text-[11px] font-medium text-slate-400 uppercase tracking-[0.2em] mb-4">
                        Bize Güvenen Firmalar
                    </p>
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }}
                        />
                        <div
                            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }}
                        />
                        <div className="hero-marquee-track">
                            <div className="hero-marquee-content">
                                {[
                                    "cengiz-holding", "nama-yapi", "twins-company", "maxx", "tor-industry",
                                    "gusto", "altinpamuk-tekstil", "arnes-mekanik", "bnb-insaat", "techno-tool",
                                    "bayraktar-ambalaj", "nuans-group", "ciar-medical", "nef-teknik",
                                    "cengiz-holding", "nama-yapi", "twins-company", "maxx", "tor-industry",
                                    "gusto", "altinpamuk-tekstil", "arnes-mekanik", "bnb-insaat", "techno-tool",
                                    "bayraktar-ambalaj", "nuans-group", "ciar-medical", "nef-teknik",
                                ].map((file, i) => (
                                    <div key={`hero-logo-${i}`} className="flex-shrink-0 mx-6">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={`https://khlvkvusavalbkjrwbsy.supabase.co/storage/v1/object/public/public-assets/atasa_kurumsal_web_sitesi/referanslar/${file}.png`}
                                            alt=""
                                            className="h-8 w-auto object-contain opacity-25 grayscale hover:opacity-50 transition-all duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <style jsx>{`
                    .hero-marquee-track { overflow: hidden; width: 100%; }
                    .hero-marquee-content {
                        display: flex; align-items: center;
                        animation: hero-marquee 30s linear infinite;
                        width: max-content;
                    }
                    @keyframes hero-marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .hero-marquee-track:hover .hero-marquee-content {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </section>
    );
}
