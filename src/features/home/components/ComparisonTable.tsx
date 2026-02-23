"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

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
            className="py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 relative overflow-hidden"
            aria-labelledby="comparison-heading"
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4 block">
                            Karşılaştırma
                        </span>
                        <h2
                            id="comparison-heading"
                            className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4"
                        >
                            Neden{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Atasa?
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium">
                            Farkımızı rakamlarla ve hizmet kalitesiyle ortaya
                            koyuyoruz.
                        </p>
                    </motion.div>

                    {/* Table */}
                    <motion.div
                        className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Table header */}
                        <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
                            <div className="p-5 text-sm font-bold text-slate-400 uppercase tracking-widest">
                                Özellik
                            </div>
                            <div className="p-5 text-center">
                                <span className="text-sm font-black text-blue-400 uppercase tracking-widest">
                                    Atasa
                                </span>
                            </div>
                            <div className="p-5 text-center">
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                    Diğerleri
                                </span>
                            </div>
                        </div>

                        {/* Rows */}
                        {FEATURES.map((item, index) => (
                            <motion.div
                                key={item.feature}
                                className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${index % 2 === 0 ? "bg-white/[0.02]" : ""
                                    }`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                <div className="p-5 text-white font-medium text-sm md:text-base flex items-center">
                                    {item.feature}
                                </div>
                                <div className="p-5 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Check
                                            size={18}
                                            className="text-emerald-400"
                                        />
                                    </div>
                                </div>
                                <div className="p-5 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                        <X
                                            size={18}
                                            className="text-red-400/60"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="/iletisim"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Farkı Yaşayın
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
