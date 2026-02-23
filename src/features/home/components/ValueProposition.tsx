"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                {value.toLocaleString("tr-TR")}{suffix}
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {label}
            </div>
        </motion.div>
    );
}

export function ValueProposition() {
    return (
        <section
            className="py-24 bg-white relative overflow-hidden border-t border-slate-100"
            aria-labelledby="value-heading"
        >
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <Sparkles size={14} />
                        {COMPANY_INFO.shortName}
                    </motion.div>

                    {/* Heading */}
                    <h2
                        id="value-heading"
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
                    >
                        Yabancılar İçin{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Kişiselleştirilmiş
                        </span>{" "}
                        Çözümler Sunar.
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Her başvuru kendine özeldir. Şirketinizin ihtiyaçlarına göre{" "}
                        <strong className="text-slate-700">özel strateji</strong>{" "}
                        geliştiriyor, bürokratik süreçleri sizin yerinize yönetiyoruz.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/iletisim"
                            className="group inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Ücretsiz Danışmanlık Alın
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </motion.div>

                {/* Animated Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
                    <AnimatedStat end={COMPANY_INFO.experienceYears} suffix="+" label="Yıllık Tecrübe" />
                    <AnimatedStat end={COMPANY_INFO.stats.workPermits} label="Çalışma İzni" />
                    <AnimatedStat end={COMPANY_INFO.stats.corporateClients} label="Kurumsal Müşteri" />
                    <AnimatedStat end={98} suffix="%" label="Başarı Oranı" />
                </div>
            </div>
        </section>
    );
}
