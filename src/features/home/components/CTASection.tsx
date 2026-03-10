"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { SectionSubtitle } from "@/shared/components/ui/SectionSubtitle";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";
import { ScrollReveal, staggerItemVariants } from "@/shared/components/ScrollReveal";
import { FloatingParticles } from "@/shared/components/FloatingParticles";
import { MagneticButton } from "@/shared/components/MagneticButton";
import { GradientMeshFlow, MorphingBlob, AmbientLightSweep } from "@/shared/components/IdleAnimations";

export function CTASection() {
    return (
        <section
            className="py-32 text-white relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

            {/* Floating particles — blue-white */}
            <FloatingParticles count={8} color="147, 197, 253" shape="circle" speed={0.3} />

            {/* Idle: Gradient Mesh Flow */}
            <GradientMeshFlow colors={["rgba(59,130,246,0.03)","rgba(139,92,246,0.02)","rgba(59,130,246,0.02)","rgba(16,185,129,0.01)"]} duration={22} />

            {/* Idle: Morphing Blob */}
            <MorphingBlob color="59,130,246" opacity={0.03} size={500} top="70%" left="20%" duration={16} />

            {/* Idle: Ambient Light Sweep */}
            <AmbientLightSweep opacity={0.02} duration={9} />

            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{ background: "rgba(59,130,246,0.04)" }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Left — slideLeft reveal */}
                    <ScrollReveal variant="slideLeft">
                        <SectionHeading className="text-3xl md:text-5xl mb-6">
                            Uzman Danışmanlar Sizleri Bekliyor
                        </SectionHeading>
                        <SectionSubtitle className="mb-10">
                            Çalışma izni sürecinizi birlikte yönetelim. İlk görüşme tamamen ücretsizdir.
                        </SectionSubtitle>

                        <ScrollReveal stagger staggerDelay={0.1} className="space-y-5">
                            <motion.div className="flex items-center gap-4" variants={staggerItemVariants}>
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-400"
                                    style={{
                                        background: "rgba(59,130,246,0.1)",
                                        border: "1px solid rgba(59,130,246,0.15)",
                                    }}
                                >
                                    <Phone size={22} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-1">Telefon</div>
                                    <a href={`tel:${formatPhone(COMPANY_INFO.phone)}`} className="text-white font-semibold text-lg hover:text-blue-400 transition-colors">
                                        {COMPANY_INFO.phone}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-center gap-4" variants={staggerItemVariants}>
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-400"
                                    style={{
                                        background: "rgba(59,130,246,0.1)",
                                        border: "1px solid rgba(59,130,246,0.15)",
                                    }}
                                >
                                    <Clock size={22} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-1">Çalışma Saatleri</div>
                                    <span className="text-white font-semibold">Hafta İçi {COMPANY_INFO.hours.weekday}</span>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-center gap-4" variants={staggerItemVariants}>
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-400"
                                    style={{
                                        background: "rgba(59,130,246,0.1)",
                                        border: "1px solid rgba(59,130,246,0.15)",
                                    }}
                                >
                                    <MapPin size={22} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-1">Ofisler</div>
                                    <span className="text-white font-semibold">İstanbul, Aşkabat & Bakü</span>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    </ScrollReveal>

                    {/* Right — slideRight reveal */}
                    <ScrollReveal variant="slideRight" delay={0.2}>
                        <div
                            className="rounded-[20px] p-[1.5px]"
                            style={{
                                background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.15) 100%)",
                            }}
                        >
                            <div className="rounded-[19px] p-8 md:p-10" style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}>
                                <h3 className="text-2xl font-black mb-2 tracking-tight">Hemen İletişime Geçin</h3>
                                <p className="text-slate-500 text-sm mb-8 font-normal">Size en uygun çözümü birlikte belirleyelim.</p>

                                <div className="flex flex-col gap-4">
                                    <MagneticButton strength={0.15}>
                                        <Link
                                            href="/iletisim"
                                            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all inline-flex items-center justify-center gap-3 text-lg active:scale-95 w-full"
                                            style={{ boxShadow: "0 0 40px rgba(255,255,255,0.08)" }}
                                        >
                                            İletişime Geçin <ArrowRight size={20} />
                                        </Link>
                                    </MagneticButton>
                                    <a
                                        href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                        className="px-8 py-4 rounded-2xl font-bold transition-all inline-flex items-center justify-center gap-3 text-lg w-full text-white hover:bg-white/[0.08]"
                                        style={{
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <Phone size={20} /> {COMPANY_INFO.phone}
                                    </a>
                                    <a
                                        href="https://wa.me/908503086998"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-lg active:scale-95 w-full text-white hover:bg-white/[0.08]"
                                        style={{
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <MessageCircle size={24} fill="currentColor" /> WhatsApp&apos;tan Yazın
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
