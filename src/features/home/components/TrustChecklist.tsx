"use client";

import { motion } from "framer-motion";
import {
    CheckCircle2,
    TrendingUp,
    FileCheck,
    Clock,
    Headphones,
} from "lucide-react";

const TRUST_ITEMS = [
    {
        icon: <TrendingUp size={28} />,
        title: "%98 Başarı Oranı",
        description:
            "Ret riski minimize edilmiş, uzman ekibimizle başvurularınızı en yüksek onay oranıyla sonuçlandırıyoruz.",
        highlight: "%98",
    },
    {
        icon: <FileCheck size={28} />,
        title: "Direkt Bakanlık Süreci",
        description:
            "Ajans komisyonu yok. Başvurularınız doğrudan Bakanlık üzerinden yürütülür, ek maliyet oluşmaz.",
        highlight: "0₺",
    },
    {
        icon: <Clock size={28} />,
        title: "Hızlı Sonuçlandırma",
        description:
            "12+ yıllık tecrübe ile hatasız evrak yönetimi. Ortalama süreçleri %40 daha hızlı tamamlıyoruz.",
        highlight: "%40",
    },
    {
        icon: <Headphones size={28} />,
        title: "Anlık Süreç Takibi",
        description:
            "Başvurunuz hangi aşamada? 7/24 erişilebilir ekibimiz sizi anında bilgilendirir.",
        highlight: "7/24",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export function TrustChecklist() {
    return (
        <section
            className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
            aria-labelledby="trust-heading"
        >
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <CheckCircle2 size={14} />
                        Neden Biz?
                    </motion.div>
                    <h2
                        id="trust-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
                    >
                        Doğru Danışmanlık Firması{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Size Zaman Kazandırır
                        </span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Ret alacak başvuruları almıyoruz. Önce analiz, sonra başvuru prensibimizle
                        sürecinizi güvence altına alıyoruz.
                    </p>
                </motion.div>

                {/* Cards Grid with stagger */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {TRUST_ITEMS.map((item) => (
                        <motion.div
                            key={item.title}
                            className="group relative bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
                            variants={cardVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            {/* Highlight number */}
                            <div className="absolute top-6 right-8 text-5xl font-black text-slate-50 group-hover:text-blue-50 transition-colors select-none">
                                {item.highlight}
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
