"use client";

import { motion } from "framer-motion";
import { Phone, Globe } from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { ScrollReveal, staggerItemVariants } from "@/shared/components/ScrollReveal";
import { TiltCard } from "@/shared/components/TiltCard";
import { FloatingParticles } from "@/shared/components/FloatingParticles";
import { BreathingGlow, AmbientLightSweep } from "@/shared/components/IdleAnimations";

const OFFICE_EXTRAS: Record<string, { country: string; flag: string }> = {
    istanbul: { country: "Türkiye", flag: "🇹🇷" },
    askabat: { country: "Türkmenistan", flag: "🇹🇲" },
    baku: { country: "Azerbaycan", flag: "🇦🇿" },
};

export function GlobalPresence() {
    const offices = Object.entries(COMPANY_INFO.offices);

    return (
        <section
            className="py-32 md:py-36 relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0c1222 50%, #020617 100%)",
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.05] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

            {/* Floating particles — cyan accent */}
            <FloatingParticles count={8} color="34, 211, 238" shape="circle" speed={0.4} />

            {/* Idle: Breathing Glow */}
            <BreathingGlow color="34,211,238" size={450} top="50%" left="30%" duration={8} />

            {/* Idle: Ambient Light Sweep */}
            <AmbientLightSweep color="34,211,238" opacity={0.02} duration={12} />

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header — fadeBlur + cyan accent */}
                <ScrollReveal variant="fadeBlur" className="text-center mb-14">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-cyan-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-5"
                        style={{
                            background: "rgba(34,211,238,0.08)",
                            border: "1px solid rgba(34,211,238,0.15)",
                        }}
                    >
                        <Globe size={14} />
                        Uluslararası Varlık
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-black tracking-tight"
                        style={{
                            background: "linear-gradient(90deg, #ffffff 20%, #64748b 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        3 Ülkede, Yanınızdayız
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        İstanbul, Aşkabat ve Bakü ofislerimizle uluslararası danışmanlık
                        hizmetlerimizi kesintisiz sunuyoruz.
                    </p>
                </ScrollReveal>

                {/* Office Cards — stagger + tilt */}
                <ScrollReveal stagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {offices.map(([key, office]) => {
                        const extra = OFFICE_EXTRAS[key];
                        return (
                            <motion.div key={office.city} variants={staggerItemVariants} className="group">
                                <TiltCard className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-cyan-500/20 transition-all duration-500 h-full overflow-hidden" glowColor="34, 211, 238">
                                    {/* Hover glow */}
                                    <div
                                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)" }}
                                    />

                                    {/* Flag + Country */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors text-2xl">
                                            {extra?.flag}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                {office.city}
                                            </h3>
                                            {extra && (
                                                <span className="text-xs text-slate-500 font-medium">
                                                    {extra.country}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <address className="not-italic text-slate-400 leading-relaxed text-sm mb-4 line-clamp-2">
                                        {office.address}
                                    </address>

                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone size={14} className="text-cyan-400/60" />
                                        <a
                                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                                            className="text-slate-500 hover:text-cyan-400 transition-colors font-medium"
                                        >
                                            {office.phone}
                                        </a>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </ScrollReveal>
            </div>
        </section>
    );
}
