"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { SectionSubtitle } from "@/shared/components/ui/SectionSubtitle";
import { ScrollReveal } from "@/shared/components/ScrollReveal";
import { FloatingParticles } from "@/shared/components/FloatingParticles";
import { MagneticButton } from "@/shared/components/MagneticButton";
import { useParallax } from "@/shared/hooks/useParallax";
import { MorphingBlob, GradientMeshFlow, AnimatedUnderline } from "@/shared/components/IdleAnimations";

function AnimatedStat({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
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

    return (
        <motion.div
            ref={ref}
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {value.toLocaleString("tr-TR")}{suffix}
            </div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                {label}
            </div>
        </motion.div>
    );
}

export function ValueProposition() {
    const { ref: bgRef, y: bgY } = useParallax({ speed: 0.15 });

    return (
        <section
            ref={bgRef}
            className="py-32 relative overflow-hidden"
            aria-labelledby="value-heading"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Parallaxed Pexels background */}
            <motion.div className="absolute inset-0" style={{ y: bgY }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                    loading="lazy"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

            {/* Floating Particles — diamond shape, emerald accent */}
            <FloatingParticles count={10} color="16, 185, 129" shape="diamond" minSize={3} maxSize={7} speed={0.5} />

            {/* Idle: Morphing Blob — emerald */}
            <MorphingBlob color="16,185,129" opacity={0.03} size={450} top="60%" left="75%" duration={15} />

            {/* Idle: Gradient Mesh Flow */}
            <GradientMeshFlow colors={["rgba(16,185,129,0.03)","rgba(59,130,246,0.02)","rgba(16,185,129,0.02)","rgba(245,158,11,0.01)"]} duration={25} />

            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* fadeBlur heading + emerald accent */}
                <ScrollReveal variant="fadeBlur" className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-emerald-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                        style={{
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.15)",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <Sparkles size={14} />
                        {COMPANY_INFO.shortName}
                    </motion.div>

                    {/* Heading */}
                    <SectionHeading id="value-heading" className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                        Yabancılar İçin Kişiselleştirilmiş Çözümler Sunar.
                    </SectionHeading>

                    {/* Description */}
                    <SectionSubtitle className="md:text-xl max-w-3xl mx-auto mb-10">
                        Her başvuru kendine özeldir. Şirketinizin ihtiyaçlarına göre{" "}
                        <strong className="text-slate-200">özel strateji</strong>{" "}
                        geliştiriyor, bürokratik süreçleri sizin yerinize yönetiyoruz.
                    </SectionSubtitle>

                    {/* CTA — Magnetic */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <MagneticButton strength={0.2}>
                            <Link
                                href="/iletisim"
                                className="group relative inline-flex h-[72px] overflow-hidden rounded-full p-[2px] shadow-xl shadow-emerald-600/20 hover:scale-105 transition-transform duration-300"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#0f172a_50%,#10B981_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0f172a] px-10 text-white backdrop-blur-3xl relative z-10 transition-colors hover:bg-[#131c2e] overflow-hidden gap-3">
                                    <Phone size={20} className="animate-pulse" />
                                    <span className="text-lg font-bold">
                                        Ücretsiz Danışmanlık Alın
                                    </span>
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                    <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none" />
                                </span>
                            </Link>
                        </MagneticButton>
                    </div>
                </ScrollReveal>

                {/* Animated Stats row — scaleUp reveal */}
                <ScrollReveal variant="scaleUp" delay={0.3} className="max-w-4xl mx-auto mt-20">
                    <div
                        className="rounded-[20px] p-[1.5px]"
                        style={{
                            background: "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.05) 50%, rgba(16,185,129,0.15) 100%)",
                        }}
                    >
                        <div
                            className="rounded-[19px] p-8"
                            style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <AnimatedStat end={COMPANY_INFO.experienceYears} suffix="+" label="Yıllık Tecrübe" />
                                <AnimatedStat end={COMPANY_INFO.stats.workPermits} label="Çalışma İzni" />
                                <AnimatedStat end={COMPANY_INFO.stats.corporateClients} label="Kurumsal Müşteri" />
                                <AnimatedStat end={98} suffix="%" label="Başarı Oranı" />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
