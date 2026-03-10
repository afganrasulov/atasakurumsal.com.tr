"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { SectionSubtitle } from "@/shared/components/ui/SectionSubtitle";
import { ScrollReveal, staggerItemVariants } from "@/shared/components/ScrollReveal";
import { TiltCard } from "@/shared/components/TiltCard";
import { MagneticButton } from "@/shared/components/MagneticButton";
import { BreathingGlow, AmbientLightSweep } from "@/shared/components/IdleAnimations";

const STEPS = [
    { step: 1, icon: <Phone size={26} strokeWidth={1.5} />, title: "İlk Görüşme", description: "Ücretsiz analiz ve ön değerlendirme. İhtiyaçlarınızı dinliyoruz." },
    { step: 2, icon: <FileText size={26} strokeWidth={1.5} />, title: "Evrak Hazırlığı", description: "Eksiksiz dosya oluşturma. Ret riski sıfıra indirme." },
    { step: 3, icon: <Send size={26} strokeWidth={1.5} />, title: "Bakanlık Başvurusu", description: "Direkt bakanlık üzerinden başvuru ve süreç takibi." },
    { step: 4, icon: <CheckCircle2 size={26} strokeWidth={1.5} />, title: "Onay & Teslim", description: "Çalışma izniniz elinizde. Süreç tamamlandı." },
];

export function ProcessTimeline() {
    return (
        <section
            className="py-32 relative overflow-hidden"
            aria-labelledby="process-heading"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Idle: Breathing Glow — amber */}
            <BreathingGlow color="245,158,11" size={500} top="50%" left="30%" duration={8} />

            {/* Idle: Ambient Light Sweep */}
            <AmbientLightSweep color="245,158,11" opacity={0.015} duration={10} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(251,191,36,0.05) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header — fadeBlur + amber accent */}
                <ScrollReveal variant="fadeBlur" className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-[0.2em] mb-4 block">
                        Süreç
                    </span>
                    <SectionHeading id="process-heading" className="text-3xl md:text-5xl mb-4">
                        4 Adımda Çalışma İzni
                    </SectionHeading>
                    <SectionSubtitle>
                        Bürokratik karmaşada kaybolmayın. Biz sizin için hallederiz.
                    </SectionSubtitle>
                </ScrollReveal>

                {/* Steps — cascading stagger */}
                <ScrollReveal stagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-16">
                    {STEPS.map((step) => (
                        <motion.div key={step.step} className="relative group h-full" variants={staggerItemVariants}>
                            <TiltCard glowColor="251, 191, 36" className="h-full">
                                <div
                                    className="rounded-[20px] p-[1.5px] transition-all duration-500 group-hover:-translate-y-2 h-full"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(251,191,36,0.05) 50%, rgba(251,191,36,0.12) 100%)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(251,191,36,0.45) 0%, rgba(251,191,36,0.08) 50%, rgba(251,191,36,0.3) 100%)";
                                        e.currentTarget.style.boxShadow = "0 0 30px rgba(251,191,36,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(251,191,36,0.05) 50%, rgba(251,191,36,0.12) 100%)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        className="relative z-10 text-center p-8 rounded-[19px] h-full flex flex-col justify-center"
                                        style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                    >
                                        <div className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-4">
                                            Adım {step.step}
                                        </div>
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-400 mx-auto mb-5 group-hover:text-white group-hover:scale-110 transition-all duration-500"
                                            style={{
                                                background: "rgba(251,191,36,0.1)",
                                                border: "1px solid rgba(251,191,36,0.15)",
                                            }}
                                        >
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-[13px] text-slate-500 font-normal leading-relaxed tracking-wide">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </ScrollReveal>

                {/* Mini CTA — magnetic */}
                <ScrollReveal variant="scaleUp" delay={0.3} className="text-center">
                    <MagneticButton strength={0.2}>
                        <Link
                            href="/iletisim"
                            className="group inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95"
                            style={{ boxShadow: "0 0 40px rgba(255,255,255,0.08)" }}
                        >
                            Siz de Başlayın
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </MagneticButton>
                </ScrollReveal>
            </div>
        </section>
    );
}
