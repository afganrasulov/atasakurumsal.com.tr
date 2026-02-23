"use client";

import { motion } from "framer-motion";
import {
    Phone,
    FileText,
    Send,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

const STEPS = [
    {
        step: 1,
        icon: <Phone size={28} />,
        title: "İlk Görüşme",
        description: "Ücretsiz analiz ve ön değerlendirme. İhtiyaçlarınızı dinliyoruz.",
        color: "from-blue-500 to-blue-600",
    },
    {
        step: 2,
        icon: <FileText size={28} />,
        title: "Evrak Hazırlığı",
        description: "Eksiksiz dosya oluşturma. Ret riski sıfıra indirme.",
        color: "from-indigo-500 to-indigo-600",
    },
    {
        step: 3,
        icon: <Send size={28} />,
        title: "Bakanlık Başvurusu",
        description: "Direkt bakanlık üzerinden başvuru ve süreç takibi.",
        color: "from-blue-600 to-blue-700",
    },
    {
        step: 4,
        icon: <CheckCircle2 size={28} />,
        title: "Onay & Teslim",
        description: "Çalışma izniniz elinizde. Süreç tamamlandı.",
        color: "from-emerald-500 to-emerald-600",
    },
];

export function ProcessTimeline() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="process-heading">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 hidden lg:block" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 block">
                        Süreç
                    </span>
                    <h2
                        id="process-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
                    >
                        4 Adımda{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Çalışma İzni
                        </span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">
                        Bürokratik karmaşada kaybolmayın. Biz sizin için hallederiz.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.step}
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            {/* Connector line (desktop) */}
                            {index < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-slate-200 to-slate-100 z-0" />
                            )}

                            <div className="relative z-10 text-center">
                                {/* Step number + icon */}
                                <div className="relative inline-flex mb-6">
                                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-slate-100 rounded-xl flex items-center justify-center text-xs font-black text-slate-900 shadow-md">
                                        {step.step}
                                    </div>
                                </div>

                                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mini CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        href="/iletisim"
                        className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Siz de Başlayın
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
