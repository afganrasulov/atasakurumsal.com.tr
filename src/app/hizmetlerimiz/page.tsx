"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Briefcase,
    Home,
    Flag,
    Building2,
    FileText,
    Users,
    Landmark,
    RefreshCw,
    ArrowRightLeft,
    Building,
    Sparkles,
    Phone,
    CheckCircle2,
    Shield,
    Clock,
    Headphones,
    Heart,
    Target
} from "lucide-react";
import { NetworkBackground } from "@/shared/components/NetworkBackground";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

/* ── Metadata (server component'ten client'a geçtiğimiz için head ile) ── */
// metadata export'u client component'te kullanılamaz, head tag ile çözüyoruz

/* ── Stagger animation variants ─────────────────────────── */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

/* ── Services Data ───────────────────────────────────────── */
const services = [
    {
        icon: <Target size={26} />,
        title: "Sektörel Danışmanlık",
        desc: "Turizmden sağlığa, eğitimden teknolojiye özel sektör dinamiklerine uygun terzi işi çalışma izni ve teşvik danışmanlığı.",
        href: "/sektorel-danismanlik",
        gradient: "from-blue-600 to-indigo-500",
        accentColor: "79, 70, 229",
    },
    {
        icon: <Heart size={26} />,
        title: "Yabancı Bakıcı Çalışma İzni",
        desc: "Ev personeli, bebek ve yaşlı bakıcısı istihdamında yasal süreçlerin eksiksiz ve güvenli şekilde yönetilmesi.",
        href: "/yabanci-bakici-calisma-izni",
        gradient: "from-rose-500 to-pink-500",
        accentColor: "236, 72, 153",
    },
    {
        icon: <Briefcase size={26} />,
        title: "Yabancılara Çalışma İzni Alma",
        desc: "Binlerce müşterimiz istihdam edecekleri yabancı personeller için bizi tercih ettiler, yanılmadılar. %98 başarı oranı ile başvurularınızı yönetiyoruz.",
        href: "/yabancilara-calisma-izni",
        gradient: "from-blue-500 to-cyan-400",
        accentColor: "59, 130, 246",
        badge: "En Popüler",
    },
    {
        icon: <RefreshCw size={26} />,
        title: "Çalışma İzni Uzatma",
        desc: "Yabancılar için çalışma izni uzatmanın en kolay yöntemlerini biliyoruz ve sizler için uyguluyoruz. Süre takibi, belge hazırlığı ve başvuru yönetimi.",
        href: "/calisma-izni-uzatma",
        gradient: "from-emerald-500 to-teal-400",
        accentColor: "16, 185, 129",
    },
    {
        icon: <ArrowRightLeft size={26} />,
        title: "Çalışma İzni Transferi",
        desc: "Profesyonel çalışanların başka şirketlere transferlerini zaman kaybetmeden sağlıyoruz. Şube ve işyeri değişikliklerinde hukuki süreç yönetimi.",
        href: "/calisma-izni-transferi",
        gradient: "from-orange-500 to-amber-400",
        accentColor: "249, 115, 22",
    },
    {
        icon: <Building size={26} />,
        title: "Kurumsal Toplu Başvuru",
        desc: "50+ yabancı personel istihdam eden kurumsal şirketlere özel toplu başvuru yönetimi. Dedicated hesap yöneticisi ve öncelikli destek.",
        href: "/toplu-basvuru",
        gradient: "from-slate-400 to-slate-300",
        accentColor: "148, 163, 184",
        badge: "Kurumsal",
    },
    {
        icon: <Home size={26} />,
        title: "İkamet İzni",
        desc: "Kısa dönem, uzun dönem, öğrenci ve aile ikamet izni başvurularında tam destek. Başvurudan sonuca kadar sürecin tamamını yönetiyoruz.",
        href: "/ikamet-izni",
        gradient: "from-cyan-500 to-sky-400",
        accentColor: "6, 182, 212",
    },
    {
        icon: <Flag size={26} />,
        title: "Vatandaşlık İşlemleri",
        desc: "Yatırım yoluyla vatandaşlık başvurusu ve istisnai vatandaşlık süreçlerinde hukuki destek sağlıyoruz.",
        href: "/vatandaslik",
        gradient: "from-rose-500 to-pink-400",
        accentColor: "244, 63, 94",
    },
    {
        icon: <Building2 size={26} />,
        title: "Yabancı Ortaklı Şirket Kuruluşu",
        desc: "Türkiye'de yabancı ortaklı şirket kuruluş sürecinizi A'dan Z'ye yönetiyoruz. Ticaret odası kayıtlarından vergi dairesine kadar tam destek.",
        href: "/sirket-kurulusu",
        gradient: "from-violet-500 to-purple-400",
        accentColor: "139, 92, 246",
    },
    {
        icon: <FileText size={26} />,
        title: "SGK & Bordro Danışmanlık",
        desc: "Yabancı personellerinizin SGK işlemleri, bordro hesaplamaları ve asgari ücret güncellemelerinde ücretsiz danışmanlık.",
        href: "/sgk-bordro",
        gradient: "from-fuchsia-500 to-violet-400",
        accentColor: "168, 85, 247",
    },
    {
        icon: <Landmark size={26} />,
        title: "Turkuaz Kart",
        desc: "Nitelikli yabancılar için Turkuaz Kart başvuru sürecinde rehberlik ve hukuki destek.",
        href: "/turkuaz-kart",
        gradient: "from-teal-500 to-emerald-400",
        accentColor: "20, 184, 166",
    },
];

/* ── Advantages ──────────────────────────────────────────── */
const advantages = [
    {
        icon: <Shield size={22} />,
        title: "%98 Başarı Oranı",
        desc: "Binlerce başarılı başvuru ile sektörün en yüksek onay oranı.",
    },
    {
        icon: <Clock size={22} />,
        title: "Hızlı Süreç",
        desc: "Ortalama 15-30 gün içinde sonuç — sektör ortalamasının çok altında.",
    },
    {
        icon: <Headphones size={22} />,
        title: "7/24 Destek",
        desc: "Dedicated hesap yöneticisi ve anlık bilgilendirme sistemi.",
    },
    {
        icon: <Users size={22} />,
        title: "Uzman Kadro",
        desc: "5 dilde hizmet veren, alanında uzman danışman ekibi.",
    },
];

/* ── Page Component ──────────────────────────────────────── */
export default function HizmetlerimizPage() {
    const servicesRef = useRef<HTMLDivElement>(null);
    const servicesInView = useInView(servicesRef, { once: true, margin: "-50px" });

    return (
        <>
            {/* ═══════════════ HERO ═══════════════ */}
            <section className="relative min-h-[75vh] overflow-hidden flex items-center">
                {/* Background layers */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, #020617 0%, rgba(2,6,23,0.95) 40%, rgba(15,23,42,0.98) 100%)",
                        }}
                    />
                    <NetworkBackground />
                </div>

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
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                            Profesyonel Danışmanlık
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <span className="block text-white/40 mb-2">Size En Uygun</span>
                            <span
                                className="block"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Hizmeti Seçin
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            Türkiye&apos;deki yabancı personel istihdamı için ihtiyaç duyacağınız{" "}
                            <strong className="text-slate-200">tüm hizmetler tek çatı altında</strong>.
                            12 yıllık tecrübemizle süreçlerinizi yönetiyoruz.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            <Link
                                href="/iletisim"
                                className="group relative overflow-hidden inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95"
                                style={{ boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Ücretsiz Danışmanlık
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </span>
                            </Link>
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

            {/* ═══════════════ ADVANTAGES BAR ═══════════════ */}
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
                                    {advantages.map((adv, i) => (
                                        <motion.div
                                            key={adv.title}
                                            className="text-center group"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: i * 0.1,
                                                duration: 0.5,
                                            }}
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                                                {adv.icon}
                                            </div>
                                            <div className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                                {adv.title}
                                            </div>
                                            <div className="text-[12px] text-slate-500 leading-relaxed">
                                                {adv.desc}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ SERVICES GRID ═══════════════ */}
            <section
                className="py-28 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0c1222 50%, #020617 100%)",
                }}
            >
                {/* Radial accent */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
                    }}
                />

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
                            Hizmetlerimiz
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
                            Tüm Hizmetlerimiz
                        </h2>
                        <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto font-medium">
                            İhtiyacınıza uygun hizmeti seçin, uzman ekibimiz süreci sizin için yönetsin.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        ref={servicesRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate={servicesInView ? "visible" : "hidden"}
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="group relative"
                            >
                                {/* Hover gradient border */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(${service.accentColor},0.5), rgba(${service.accentColor},0.05), rgba(${service.accentColor},0.3))`,
                                    }}
                                >
                                    <div className="w-full h-full rounded-2xl bg-[#0f172a]" />
                                </div>

                                {/* Card */}
                                <Link
                                    href={service.href}
                                    className="relative z-10 block p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 transition-all duration-500 h-full"
                                >
                                    {/* Badge */}
                                    {service.badge && (
                                        <div
                                            className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                            style={{
                                                background: `rgba(${service.accentColor}, 0.12)`,
                                                color: `rgba(${service.accentColor}, 1)`,
                                                border: `1px solid rgba(${service.accentColor}, 0.2)`,
                                            }}
                                        >
                                            {service.badge}
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(${service.accentColor},0.15), rgba(${service.accentColor},0.05))`,
                                        }}
                                    >
                                        <div
                                            className="transition-colors duration-300"
                                            style={{ color: `rgba(${service.accentColor}, 0.9)` }}
                                        >
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {service.desc}
                                    </p>

                                    {/* Arrow */}
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-blue-400 transition-all duration-300">
                                        <span>Detayları İncele</span>
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-2 transition-transform duration-300"
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ PROCESS STEPS ═══════════════ */}
            <section
                className="py-28 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
                }}
            >
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
                            Nasıl Çalışıyoruz
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
                            4 Adımda Süreç Yönetimi
                        </h2>
                    </motion.div>

                    {/* Steps */}
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {[
                                {
                                    step: "01",
                                    title: "Ücretsiz Ön Değerlendirme",
                                    desc: "Durumunuzu analiz ediyor, en uygun çözüm yolunu belirliyoruz. İlk görüşme tamamen ücretsizdir.",
                                    icon: <CheckCircle2 size={20} />,
                                },
                                {
                                    step: "02",
                                    title: "Belge Hazırlığı",
                                    desc: "Gerekli tüm evrakları sizin için hazırlıyor, eksikleri tamamlıyor ve dosyanızı oluşturuyoruz.",
                                    icon: <FileText size={20} />,
                                },
                                {
                                    step: "03",
                                    title: "Başvuru & Takip",
                                    desc: "Başvurunuzu ilgili kurumlara yapıyor, süreç boyunca anlık bilgilendirme sağlıyoruz.",
                                    icon: <RefreshCw size={20} />,
                                },
                                {
                                    step: "04",
                                    title: "Sonuç & Teslimat",
                                    desc: "Onay sürecini tamamlıyor, belgelerinizi teslim ediyor ve sonraki adımlar için rehberlik ediyoruz.",
                                    icon: <Sparkles size={20} />,
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.step}
                                    variants={itemVariants}
                                    className="group relative"
                                >
                                    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/20 transition-all duration-500 h-full">
                                        <div className="flex items-start gap-5">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04))",
                                                    }}
                                                >
                                                    {item.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-blue-400/60 text-xs font-bold tracking-widest uppercase block mb-2">
                                                    Adım {item.step}
                                                </span>
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
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
                            <Phone size={14} />
                            İletişim
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
                            Hangi Hizmete İhtiyacınız Var?
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                            Sürecinizi birlikte değerlendirelim.{" "}
                            <strong className="text-slate-200">
                                İlk danışmanlık görüşmemiz ücretsizdir.
                            </strong>
                        </p>

                        {/* Spinning border CTA */}
                        <a
                            href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                            className="group relative inline-flex h-[72px] overflow-hidden rounded-full p-[2px] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#0f172a_50%,#3B82F6_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0f172a] px-10 text-white backdrop-blur-3xl relative z-10 transition-colors hover:bg-[#131c2e] overflow-hidden gap-3">
                                <Phone size={20} className="animate-pulse" />
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
