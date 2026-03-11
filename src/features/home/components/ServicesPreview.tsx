"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Home, Flag, RefreshCw, ArrowRightLeft, Building, Target, Heart, Building2, FileText, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/shared/constants/company";
import { ScrollReveal, staggerItemVariants } from "@/shared/components/ScrollReveal";
import { TiltCard } from "@/shared/components/TiltCard";
import { AmbientLightSweep, FloatingWatermark, BreathingGlow } from "@/shared/components/IdleAnimations";

const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase size={22} strokeWidth={1.5} />,
    Home: <Home size={22} strokeWidth={1.5} />,
    Flag: <Flag size={22} strokeWidth={1.5} />,
    RefreshCw: <RefreshCw size={22} strokeWidth={1.5} />,
    ArrowRightLeft: <ArrowRightLeft size={22} strokeWidth={1.5} />,
    Building: <Building size={22} strokeWidth={1.5} />,
    Target: <Target size={22} strokeWidth={1.5} />,
    Heart: <Heart size={22} strokeWidth={1.5} />,
    Building2: <Building2 size={22} strokeWidth={1.5} />,
    FileText: <FileText size={22} strokeWidth={1.5} />,
    Landmark: <Landmark size={22} strokeWidth={1.5} />,
};

export function ServicesPreview() {
    return (
        <section
            className="py-32 relative z-10 overflow-hidden"
            aria-labelledby="services-heading"
            style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
            }}
        >
            {/* Idle: Ambient Light Sweep — violet */}
            <AmbientLightSweep color="139,92,246" opacity={0.02} duration={9} />

            {/* Idle: Floating Watermark */}
            <FloatingWatermark text="ATASA" color="rgba(139,92,246,0.012)" />

            {/* Idle: Breathing Glow */}
            <BreathingGlow color="139,92,246" size={500} top="50%" left="50%" duration={7} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header — slideLeft + purple accent */}
                <ScrollReveal variant="slideLeft" className="flex flex-col md:flex-row justify-between items-end mb-14 px-2">
                    <div>
                        <span className="text-violet-400 font-bold uppercase tracking-[0.2em] text-[11px] leading-none">
                            Hizmetlerimiz
                        </span>
                        <h2
                            id="services-heading"
                            className="text-3xl font-bold text-white mt-3 tracking-tight leading-tight"
                        >
                            Kurumsal veya Kişisel, Hizmeti Bizden Alın
                        </h2>
                    </div>
                    <Link
                        href="/hizmetlerimiz"
                        className="hidden md:flex items-center gap-2 text-slate-400 font-medium text-sm tracking-wide hover:text-white transition-colors duration-300"
                    >
                        Tüm Hizmetler <ArrowRight size={16} />
                    </Link>
                </ScrollReveal>

                {/* Cards — stagger + tilt */}
                <ScrollReveal stagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVICES.map((service) => (
                        <motion.div key={service.id} variants={staggerItemVariants}>
                            <TiltCard className="h-full" glowColor="139, 92, 246">
                                <Link
                                    href={service.href}
                                    className="group block h-[320px] rounded-[20px] p-[1.5px] transition-all duration-500 hover:-translate-y-2"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.05) 40%, rgba(139,92,246,0.15) 100%)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0.1) 40%, rgba(139,92,246,0.35) 100%)";
                                        e.currentTarget.style.boxShadow = "0 0 40px rgba(139,92,246,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.05) 40%, rgba(139,92,246,0.15) 100%)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        className="h-full rounded-[19px] p-8 flex flex-col justify-between relative overflow-hidden"
                                        style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                    >
                                        <div
                                            className="absolute inset-0 opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.2]"
                                            style={{
                                                backgroundImage: `url(/images/services/${service.id}.png)`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
                                        <div className="relative z-10">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center text-violet-400 mb-6 group-hover:text-white group-hover:scale-110 transition-all duration-500"
                                                style={{
                                                    background: "rgba(139,92,246,0.1)",
                                                    border: "1px solid rgba(139,92,246,0.15)",
                                                }}
                                            >
                                                {iconMap[service.icon]}
                                            </div>
                                            <h3
                                                className="text-[28px] font-display font-bold mb-3 tracking-tighter leading-snug"
                                                style={{ background: "linear-gradient(90deg, #ffffff 0%, #64748b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                                            >
                                                {service.title}
                                            </h3>
                                            <p className="text-base leading-relaxed text-white/90 font-display font-light tracking-wide">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-violet-400 tracking-wide transition-colors duration-300">
                                            <span>Detaylı Bilgi</span>
                                            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </TiltCard>
                        </motion.div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
