"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, FileCheck, Clock, Headphones } from "lucide-react";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { SectionSubtitle } from "@/shared/components/ui/SectionSubtitle";
import { ScrollReveal, staggerScaleVariants } from "@/shared/components/ScrollReveal";
import { TiltCard } from "@/shared/components/TiltCard";
import { FloatingParticles } from "@/shared/components/FloatingParticles";
import { useParallax } from "@/shared/hooks/useParallax";
import { MorphingBlob, AmbientLightSweep } from "@/shared/components/IdleAnimations";

const TRUST_ITEMS = [
    {
        icon: <TrendingUp size={24} strokeWidth={1.5} />,
        title: "%98 Başarı Oranı",
        description: "Ret riski minimize edilmiş, uzman ekibimizle başvurularınızı en yüksek onay oranıyla sonuçlandırıyoruz.",
        highlight: "%98",
    },
    {
        icon: <FileCheck size={24} strokeWidth={1.5} />,
        title: "Direkt Bakanlık Süreci",
        description: "Ajans komisyonu yok. Başvurularınız doğrudan Bakanlık üzerinden yürütülür, ek maliyet oluşmaz.",
        highlight: "0₺",
    },
    {
        icon: <Clock size={24} strokeWidth={1.5} />,
        title: "Hızlı Sonuçlandırma",
        description: "12+ yıllık tecrübe ile hatasız evrak yönetimi. Ortalama süreçleri %40 daha hızlı tamamlıyoruz.",
        highlight: "%40",
    },
    {
        icon: <Headphones size={24} strokeWidth={1.5} />,
        title: "Anlık Süreç Takibi",
        description: "Başvurunuz hangi aşamada? 7/24 erişilebilir ekibimiz sizi anında bilgilendirir.",
        highlight: "7/24",
    },
];

export function TrustChecklist() {
    const { ref: parallaxRef, y: highlightY } = useParallax({ speed: 0.1 });

    return (
        <section
            ref={parallaxRef}
            className="py-32 relative overflow-hidden"
            aria-labelledby="trust-heading"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Idle: Morphing Blob — rose */}
            <MorphingBlob color="244,63,94" opacity={0.03} size={400} top="40%" left="80%" duration={13} />

            {/* Idle: Ambient Light Sweep */}
            <AmbientLightSweep color="244,63,94" opacity={0.015} duration={11} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

            {/* Floating star particles — rose accent */}
            <FloatingParticles count={10} color="244, 63, 94" shape="star" minSize={4} maxSize={8} speed={0.4} />

            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(244,63,94,0.05) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header — fadeBlur + rose accent */}
                <ScrollReveal variant="fadeBlur" className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-rose-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
                        style={{
                            background: "rgba(244,63,94,0.1)",
                            border: "1px solid rgba(244,63,94,0.15)",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <CheckCircle2 size={14} />
                        Neden Biz?
                    </motion.div>
                    <SectionHeading id="trust-heading" className="text-3xl md:text-5xl mb-4">
                        Doğru Danışmanlık Firması Size Zaman Kazandırır
                    </SectionHeading>
                    <SectionSubtitle>
                        Ret alacak başvuruları almıyoruz. Önce analiz, sonra başvuru prensibimizle
                        sürecinizi güvence altına alıyoruz.
                    </SectionSubtitle>
                </ScrollReveal>

                {/* Cards — stagger scaleUp + tilt */}
                <ScrollReveal stagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {TRUST_ITEMS.map((item) => (
                        <motion.div key={item.title} className="group" variants={staggerScaleVariants}>
                            <TiltCard glowColor="244, 63, 94">
                                <div
                                    className="rounded-[20px] p-[1.5px] transition-all duration-500 group-hover:-translate-y-1"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(244,63,94,0.2) 0%, rgba(244,63,94,0.05) 50%, rgba(244,63,94,0.12) 100%)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(244,63,94,0.45) 0%, rgba(244,63,94,0.08) 50%, rgba(244,63,94,0.3) 100%)";
                                        e.currentTarget.style.boxShadow = "0 0 30px rgba(244,63,94,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(244,63,94,0.2) 0%, rgba(244,63,94,0.05) 50%, rgba(244,63,94,0.12) 100%)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        className="relative rounded-[19px] p-8"
                                        style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                    >
                                        {/* Highlight number — parallaxed */}
                                        <motion.div
                                            className="absolute top-6 right-8 text-5xl font-black text-white/[0.03] group-hover:text-rose-400/[0.08] transition-colors select-none"
                                            style={{ y: highlightY }}
                                        >
                                            {item.highlight}
                                        </motion.div>

                                        <div className="relative z-10">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center text-rose-400 mb-5 group-hover:text-white group-hover:scale-110 transition-all duration-500"
                                                style={{
                                                    background: "rgba(244,63,94,0.1)",
                                                    border: "1px solid rgba(244,63,94,0.15)",
                                                }}
                                            >
                                                {item.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-[13px] text-slate-500 font-normal leading-relaxed tracking-wide">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
