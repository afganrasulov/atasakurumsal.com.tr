"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    ShieldCheck,
    Users,
    Globe,
    Award,
    BookOpen,
    Scale,
    ArrowRight,
    Sparkles,
    Calendar,
    TrendingUp,
    Building2,
    Target,
    Handshake,
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { NetworkBackground } from "@/shared/components/NetworkBackground";
import { FloatingParticles } from "@/shared/components/FloatingParticles";
import { MagneticButton } from "@/shared/components/MagneticButton";
import { useParallax } from "@/shared/hooks/useParallax";
import { MorphingBlob, AmbientLightSweep } from "@/shared/components/IdleAnimations";
import { TiltCard } from "@/shared/components/TiltCard";
import { formatPhone } from "@/shared/lib/utils";
import Link from "next/link";

/* ── Animated Counter ────────────────────────────────────── */
function AnimatedCounter({
    end,
    suffix = "",
    prefix = "",
}: {
    end: number;
    suffix?: string;
    prefix?: string;
}) {
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

    return (
        <span ref={ref}>
            {prefix}
            {value.toLocaleString("tr-TR")}
            {suffix}
        </span>
    );
}

/* ── Stagger animation variants ──────────────────────────── */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

/* ── Data ─────────────────────────────────────────────────── */
const VALUES = [
    {
        icon: <ShieldCheck size={24} />,
        title: "Güvenilirlik",
        desc: 'İş ihtiyaçlarında öncelik güvenilirliktir. Şirketimizin çekirdeğini "güven" oluşturur.',
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        icon: <Users size={24} />,
        title: "Saygılı Olmak",
        desc: "Pozisyon, unvan, yaş, cinsiyet hiçbir farklılık bizim için ayırıcı özellik değildir.",
        gradient: "from-emerald-500 to-teal-400",
    },
    {
        icon: <Globe size={24} />,
        title: "Basit Düşünmek",
        desc: "Müşterilerimizin hayatını kolaylaştırmak, karmaşık süreçlerden uzak durmak temel amacımız.",
        gradient: "from-violet-500 to-purple-400",
    },
    {
        icon: <Award size={24} />,
        title: "Uzmanlık",
        desc: "Tüm personellerimiz alanında uzman ve eğitimlidir. Beş ayrı dilde akıcı iletişim kuruyoruz.",
        gradient: "from-amber-500 to-orange-400",
    },
    {
        icon: <BookOpen size={24} />,
        title: "Sürekli Güncellenme",
        desc: "Sektörümüzü dakika dakika takip eden istatistik departmanımızla müşterilerimizi anlık bilgilendiriyoruz.",
        gradient: "from-rose-500 to-pink-400",
    },
    {
        icon: <Scale size={24} />,
        title: "Sorumluluk",
        desc: "İş tanımı kurgulanmıştır, görev ve sorumluluklarımızın bilincinde çalışırız.",
        gradient: "from-sky-500 to-indigo-400",
    },
];

const MILESTONES = [
    {
        year: "2012",
        title: "Kuruluş",
        desc: "Ankara Ticaret Odası'na kayıt ile hizmet hayatına başladık.",
        icon: <Building2 size={18} />,
    },
    {
        year: "2015",
        title: "İstanbul Ofisi",
        desc: "İstanbul Mecidiyeköy'de ikinci ofisimizi açarak büyüme sürecimizi hızlandırdık.",
        icon: <MapPin size={18} />,
    },
    {
        year: "2018",
        title: "1000+ Başarılı Başvuru",
        desc: "Çalışma izni dosya sayımız 1000'i aşarak sektörde referans noktası olduk.",
        icon: <TrendingUp size={18} />,
    },
    {
        year: "2020",
        title: "Uluslararası Genişleme",
        desc: "Aşkabat ve Bakü ofislerimiz ile uluslararası varlığımızı güçlendirdik.",
        icon: <Globe size={18} />,
    },
    {
        year: "2023",
        title: "Dijital Dönüşüm",
        desc: "Online danışmanlık platformumuz ve mobil uygulamamız ile dijitalleşmeyi tamamladık.",
        icon: <Target size={18} />,
    },
    {
        year: "2024",
        title: "Sektör Liderliği",
        desc: "1.300+ çalışma izni, 1.200+ kurumsal müşteri ile sektörün en güvenilir markası olduk.",
        icon: <Award size={18} />,
    },
];

const STATS = [
    { value: COMPANY_INFO.experienceYears, suffix: "+", label: "Yıllık Tecrübe" },
    { value: COMPANY_INFO.stats.workPermits, suffix: "+", label: "Çalışma İzni" },
    { value: COMPANY_INFO.stats.corporateClients, suffix: "+", label: "Kurumsal Müşteri" },
    { value: 98, suffix: "%", label: "Başarı Oranı" },
];

/* ── Page Component ──────────────────────────────────────── */
export default function HakkimizdaPage() {
    const { ref: parallaxRef, y: bgY } = useParallax({ speed: 0.25 });

    return (
        <>
            {/* ═══════════════ CINEMATIC HERO ═══════════════ */}
            <section ref={parallaxRef} className="relative min-h-[90vh] overflow-hidden flex items-center">
                {/* Background layers */}
                <motion.div className="absolute inset-0" style={{ y: bgY }}>
                    <div
                        className="absolute inset-0 opacity-[0.25]"
                        style={{
                            backgroundImage: "url('https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, #020617 0%, rgba(2,6,23,0.85) 40%, rgba(15,23,42,0.95) 100%)",
                        }}
                    />
                    <NetworkBackground />
                </motion.div>

                {/* Floating Ambient Particles */}
                <FloatingParticles
                    count={18}
                    color="59, 130, 246"
                    shape="circle"
                    minSize={2}
                    maxSize={8}
                    speed={0.6}
                />

                {/* Idle: Morphing Blob */}
                <MorphingBlob color="59,130,246" opacity={0.03} size={500} top="50%" left="15%" duration={14} />
                <MorphingBlob color="139,92,246" opacity={0.02} size={350} top="25%" left="80%" duration={18} />

                {/* Idle: Ambient Light Sweep */}
                <AmbientLightSweep duration={12} opacity={0.03} />

                {/* Radial glow */}
                <div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
                    }}
                />

                <div className="container mx-auto px-4 relative z-10 py-32">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-blue-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-8"
                            style={{
                                background: "rgba(59,130,246,0.08)",
                                border: "1px solid rgba(59,130,246,0.15)",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Sparkles size={14} />
                            2012&apos;den Bu Yana
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8"
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #cbd5e1 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            <span className="block mb-2">Türkiye&apos;nin</span>
                            <span className="block">En Güvenilir Danışmanlık</span>
                            <span className="block mt-1">Şirketi</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Atasa Danışmanlık, 2012 yılında Ankara Ticaret Odası&apos;na kayıt
                            olarak hizmet hayatına başladı.{" "}
                            <strong className="text-slate-200">12 yıllık tecrübemizle</strong>{" "}
                            Türkiye&apos;deki yabancı personel istihdamında güvenilir çözüm
                            ortağınızız.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            <MagneticButton strength={0.2}>
                                <Link
                                    href="/iletisim"
                                    className="group relative overflow-hidden inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95"
                                    style={{ boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        Bize Ulaşın
                                        <ArrowRight
                                            size={20}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </span>
                                </Link>
                            </MagneticButton>
                            <a
                                href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
                            >
                                <Phone size={16} />
                                {COMPANY_INFO.phone}
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
            </section>

            {/* ═══════════════ STATS BAR ═══════════════ */}
            <section
                className="py-16 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="rounded-[20px] p-[1.5px]"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.2) 100%)",
                            }}
                        >
                            <div
                                className="rounded-[19px] p-8 md:p-10"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)",
                                }}
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {STATS.map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            className="text-center group"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: i * 0.1,
                                                duration: 0.5,
                                            }}
                                        >
                                            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">
                                                <AnimatedCounter
                                                    end={stat.value}
                                                    suffix={stat.suffix}
                                                />
                                            </div>
                                            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ HİKAYEMİZ TİMELINE ═══════════════ */}
            <section
                className="py-28 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0c1222 50%, #020617 100%)",
                }}
            >
                {/* Team bg with overlay */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: "url(/images/about-team-bg.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.25em]">
                            Hikayemiz
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black mt-4 tracking-tight"
                            style={{
                                background:
                                    "linear-gradient(90deg, #ffffff 20%, #64748b 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            12 Yıllık Yolculuğumuz
                        </h2>
                    </motion.div>

                    {/* Timeline */}
                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent" />

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-10"
                        >
                            {MILESTONES.map((milestone, i) => (
                                <motion.div
                                    key={milestone.year}
                                    variants={itemVariants}
                                    className="relative flex gap-6 md:gap-8 group"
                                >
                                    {/* Dot */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-500">
                                            {milestone.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pb-2 pt-1">
                                        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                                            {milestone.year}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-2 group-hover:text-blue-300 transition-colors">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                            {milestone.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DEĞERLERİMİZ ═══════════════ */}
            <section
                className="py-28 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
                }}
            >
                {/* Radial accent */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.25em]">
                            Değerlerimiz
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black mt-4 tracking-tight"
                            style={{
                                background:
                                    "linear-gradient(90deg, #ffffff 20%, #64748b 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Neden Atasa Danışmanlık?
                        </h2>
                    </motion.div>

                    {/* Value Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {VALUES.map((v) => (
                            <motion.div
                                key={v.title}
                                variants={itemVariants}
                                className="group h-full"
                            >
                                <TiltCard className="h-full" glowColor="59, 130, 246">
                                    <div
                                        className="relative block h-full rounded-[20px] p-[1px] transition-all duration-500 hover:-translate-y-2"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = `linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.1) 40%, rgba(59,130,246,0.35) 100%)`;
                                            e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.1)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = `linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)`;
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <div
                                            className="h-full rounded-[19px] p-8 flex flex-col relative overflow-hidden"
                                            style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                        >
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${v.gradient} bg-opacity-10 group-hover:scale-110 transition-all duration-500`}
                                                style={{
                                                    background: `linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.03))`,
                                                    border: "1px solid rgba(59,130,246,0.15)",
                                                }}
                                            >
                                                <div className="text-blue-400 group-hover:text-white transition-colors">
                                                    {v.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                                                {v.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed font-light tracking-wide">
                                                {v.desc}
                                            </p>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ OFİSLERİMİZ ═══════════════ */}
            <section
                className="py-28 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0c1222 50%, #020617 100%)",
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.25em]">
                            Ofislerimiz
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black mt-4 tracking-tight"
                            style={{
                                background:
                                    "linear-gradient(90deg, #ffffff 20%, #64748b 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            3 Ülkede, Yanınızdayız
                        </h2>
                    </motion.div>

                    {/* Office Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {Object.values(COMPANY_INFO.offices).map((office) => (
                            <motion.div
                                key={office.city}
                                variants={itemVariants}
                                className="group"
                            >
                                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/20 transition-all duration-500 h-full">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                            <MapPin
                                                size={20}
                                                className="text-blue-400"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                            {office.city}
                                        </h3>
                                    </div>
                                    <address className="not-italic text-slate-400 leading-relaxed text-sm mb-4">
                                        {office.address}
                                    </address>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone
                                            size={14}
                                            className="text-blue-400/60"
                                        />
                                        <a
                                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                                            className="text-slate-500 hover:text-blue-400 transition-colors font-medium"
                                        >
                                            {office.phone}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 text-slate-500">
                            <Mail size={16} className="text-blue-400/60" />
                            <a
                                href={`mailto:${COMPANY_INFO.email}`}
                                className="font-medium hover:text-blue-400 transition-colors"
                            >
                                {COMPANY_INFO.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <Calendar size={16} className="text-blue-400/60" />
                            <span className="font-medium">
                                Hafta içi {COMPANY_INFO.hours.weekday}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ CTA SECTION ═══════════════ */}
            <section
                className="py-28 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
                }}
            >
                {/* Radial glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                            style={{
                                background: "rgba(59,130,246,0.08)",
                                border: "1px solid rgba(59,130,246,0.15)",
                            }}
                        >
                            <Handshake size={14} />
                            İş Birliği
                        </motion.div>

                        <h2
                            className="text-3xl md:text-5xl font-black tracking-tight mb-6"
                            style={{
                                background:
                                    "linear-gradient(135deg, #ffffff 0%, #60a5fa 60%, #3b82f6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Süreci Birlikte Başlatalım
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                            Çalışma izni süreçlerinizde{" "}
                            <strong className="text-slate-200">
                                uzman desteği
                            </strong>{" "}
                            almak için hemen iletişime geçin. İlk danışmanlık
                            görüşmemiz ücretsizdir.
                        </p>

                        {/* Spinning border CTA */}
                        <a
                            href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                            className="group relative inline-flex h-[72px] overflow-hidden rounded-full p-[2px] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#0f172a_50%,#3B82F6_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0f172a] px-10 text-white backdrop-blur-3xl relative z-10 transition-colors hover:bg-[#131c2e] overflow-hidden gap-3">
                                <Phone
                                    size={20}
                                    className="animate-pulse"
                                />
                                <span className="text-lg font-bold">
                                    Hemen Arayın
                                </span>
                                <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none" />
                            </span>
                        </a>

                        <div className="mt-6 flex items-center justify-center gap-4">
                            <Link
                                href="/iletisim"
                                className="text-sm text-slate-500 hover:text-blue-400 transition-colors font-medium"
                            >
                                veya form doldurun →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
