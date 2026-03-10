"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { SectionSubtitle } from "@/shared/components/ui/SectionSubtitle";
import { ScrollReveal, staggerSlideVariants } from "@/shared/components/ScrollReveal";
import { MagneticButton } from "@/shared/components/MagneticButton";
import { BreathingGlow } from "@/shared/components/IdleAnimations";

const FEATURES = [
    { feature: "Direkt Bakanlık Başvurusu", us: true, others: false },
    { feature: "Aracı Komisyonu Yok", us: true, others: false },
    { feature: "%98 Başarı Oranı", us: true, others: false },
    { feature: "7/24 Süreç Takibi", us: true, others: false },
    { feature: "Ücretsiz İlk Görüşme", us: true, others: false },
    { feature: "Toplu Başvuru Desteği", us: true, others: false },
    { feature: "Ret Durumunda Ücretsiz İtiraz", us: true, others: false },
    { feature: "12+ Yıl Sektör Tecrübesi", us: true, others: false },
];

export function ComparisonTable() {
    return (
        <section
            className="py-32 relative overflow-hidden"
            aria-labelledby="comparison-heading"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Idle: Breathing Glow */}
            <BreathingGlow color="59,130,246" size={550} top="50%" left="50%" duration={7} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header — fadeBlur */}
                    <ScrollReveal variant="fadeBlur" className="text-center mb-16">
                        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-4 block">
                            Karşılaştırma
                        </span>
                        <SectionHeading id="comparison-heading" className="text-3xl md:text-5xl mb-4">
                            Neden Atasa?
                        </SectionHeading>
                        <SectionSubtitle>
                            Farkımızı rakamlarla ve hizmet kalitesiyle ortaya koyuyoruz.
                        </SectionSubtitle>
                    </ScrollReveal>

                    {/* Table — slideLeft reveal */}
                    <ScrollReveal variant="slideLeft" delay={0.2}>
                        <div
                            className="rounded-[20px] p-[1.5px]"
                            style={{
                                background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.15) 100%)",
                            }}
                        >
                            <div className="rounded-[19px] overflow-hidden" style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}>
                                {/* Table header */}
                                <div
                                    className="grid grid-cols-3"
                                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                                >
                                    <div className="p-5 text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                                        Özellik
                                    </div>
                                    <div className="p-5 text-center">
                                        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em]">
                                            Atasa
                                        </span>
                                    </div>
                                    <div className="p-5 text-center">
                                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                                            Diğerleri
                                        </span>
                                    </div>
                                </div>

                                {/* Rows — cascading stagger */}
                                <ScrollReveal stagger staggerDelay={0.06}>
                                    {FEATURES.map((item, index) => (
                                        <motion.div
                                            key={item.feature}
                                            className="grid grid-cols-3"
                                            style={{
                                                borderBottom: index < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                                background: index % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                                            }}
                                            variants={staggerSlideVariants}
                                        >
                                            <div className="p-5 text-slate-300 font-medium text-sm md:text-base flex items-center">
                                                {item.feature}
                                            </div>
                                            <div className="p-5 flex items-center justify-center">
                                                <div
                                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                                    style={{
                                                        background: "rgba(59,130,246,0.1)",
                                                        border: "1px solid rgba(59,130,246,0.15)",
                                                    }}
                                                >
                                                    <Check size={16} className="text-blue-400" />
                                                </div>
                                            </div>
                                            <div className="p-5 flex items-center justify-center">
                                                <div
                                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                                    style={{
                                                        background: "rgba(255,255,255,0.03)",
                                                        border: "1px solid rgba(255,255,255,0.06)",
                                                    }}
                                                >
                                                    <X size={16} className="text-slate-600" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </ScrollReveal>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* CTA — magnetic + scaleUp */}
                    <ScrollReveal variant="scaleUp" delay={0.4} className="text-center mt-12">
                        <MagneticButton strength={0.2}>
                            <Link
                                href="/iletisim"
                                className="group inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95"
                                style={{ boxShadow: "0 0 40px rgba(255,255,255,0.08)" }}
                            >
                                Farkı Yaşayın
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </MagneticButton>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
