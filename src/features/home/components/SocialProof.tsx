"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Youtube, Star, Users, ShieldCheck, Zap } from "lucide-react";
import { ScrollReveal, staggerItemVariants } from "@/shared/components/ScrollReveal";
import { TiltCard } from "@/shared/components/TiltCard";
import { useParallax } from "@/shared/hooks/useParallax";
import { BreathingGlow, AnimatedUnderline, BackgroundDrift } from "@/shared/components/IdleAnimations";

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

function GoogleLogo() {
    return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );
}

function InstagramLogo() {
    return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
            <defs>
                <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FD1D1D" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="100%" stopColor="#C13584" />
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" stroke="url(#ig-grad)" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-grad)" />
        </svg>
    );
}

const STATS = [
    {
        icon: <ShieldCheck size={28} className="text-blue-400" />,
        value: 98,
        prefix: "%",
        suffix: "",
        label: "Başarı Oranı",
        description: "Başvuru onay oranımız",
        bg: "/images/social-proof/success-rate.png",
    },
    {
        icon: <Zap size={28} className="text-amber-400" />,
        value: 12,
        prefix: "",
        suffix: "+",
        label: "Yıllık Tecrübe",
        description: "Sektörde lider deneyim",
        bg: "/images/social-proof/experience.png",
    },
    {
        icon: <Users size={28} className="text-emerald-400" />,
        value: 5000,
        prefix: "",
        suffix: "+",
        label: "Mutlu Müşteri",
        description: "Başarıyla tamamlanan dosya",
        bg: "/images/social-proof/happy-clients.png",
    },
];

export function SocialProof() {
    const { ref: bgRef, y: bgY } = useParallax({ speed: 0.2 });

    return (
        <section
            ref={bgRef}
            className="py-32 relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Idle: Breathing Glow */}
            <BreathingGlow color="245,158,11" size={500} top="40%" left="60%" duration={7} />

            {/* Idle: Background Drift */}
            <BackgroundDrift />
            {/* Parallaxed Pexels background */}
            <motion.div className="absolute inset-0" style={{ y: bgY }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.06] blur-sm pointer-events-none select-none"
                    loading="lazy"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header — Efekt 10: Accent Color (amber tonu) */}
                <ScrollReveal variant="fadeBlur" className="text-center mb-14">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-[0.2em]">
                        Rakamlarla Atasa
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 tracking-tighter"
                        style={{ background: "linear-gradient(90deg, #ffffff 30%, #64748b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                    >
                        Güvenin Kanıtı, Sonuçlar
                    </h2>
                </ScrollReveal>

                {/* Stats Row — stagger + tilt */}
                <ScrollReveal stagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
                    {STATS.map((stat) => (
                        <motion.div key={stat.label} variants={staggerItemVariants}>
                            <TiltCard className="relative text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.1] hover:opacity-[0.2] transition-opacity duration-500" style={{ backgroundImage: `url(${stat.bg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                                        {stat.icon}
                                    </div>
                                    <div className="text-4xl font-display font-bold text-white tracking-tighter mb-1">
                                        {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-sm font-medium text-white/60">{stat.label}</div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </ScrollReveal>

                {/* Social Platforms — stagger + tilt */}
                <ScrollReveal stagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* YouTube */}
                    <motion.div variants={staggerItemVariants}>
                        <TiltCard className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-red-500/20 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-500" style={{ backgroundImage: "url(/images/social-proof/youtube.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                        <Youtube size={20} className="text-red-500" />
                                    </div>
                                    <span className="text-sm font-semibold text-white/50 group-hover:text-white/80 transition-colors">YouTube</span>
                                </div>
                                <div className="text-3xl font-display font-bold text-white tracking-tighter mb-1">
                                    <AnimatedCounter end={100} suffix="K+" />
                                </div>
                                <p className="text-sm text-white/40 font-light">Abone & izlenme ağı</p>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Instagram */}
                    <motion.div variants={staggerItemVariants}>
                        <TiltCard className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-pink-500/20 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-500" style={{ backgroundImage: "url(/images/social-proof/instagram.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                                        <InstagramLogo />
                                    </div>
                                    <span className="text-sm font-semibold text-white/50 group-hover:text-white/80 transition-colors">Instagram</span>
                                </div>
                                <div className="text-3xl font-display font-bold text-white tracking-tighter mb-1">
                                    <AnimatedCounter end={50} suffix="K+" />
                                </div>
                                <p className="text-sm text-white/40 font-light">Aktif takipçi kitlesi</p>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Google */}
                    <motion.div variants={staggerItemVariants}>
                        <TiltCard className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-yellow-500/20 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-500" style={{ backgroundImage: "url(/images/social-proof/google.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                                        <GoogleLogo />
                                    </div>
                                    <span className="text-sm font-semibold text-white/50 group-hover:text-white/80 transition-colors">Google</span>
                                </div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-3xl font-display font-bold text-white tracking-tighter">
                                        <AnimatedCounter end={1000} suffix="+" />
                                    </span>
                                    <div className="flex items-center gap-1 bg-yellow-400 text-white px-2 py-0.5 rounded-md font-bold text-xs">
                                        4.9 <Star size={10} fill="currentColor" />
                                    </div>
                                </div>
                                <p className="text-sm text-white/40 font-light">Google Yorum & Puan</p>
                            </div>
                        </TiltCard>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
