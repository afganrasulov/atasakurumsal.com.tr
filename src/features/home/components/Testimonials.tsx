"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/shared/constants/company";

const TESTIMONIALS = [
    { name: "M. Yıldırım", role: "İnşaat Şirketi Sahibi", text: "12 yabancı personelimizin çalışma izni sürecini eksiksiz yönettiler. Hız ve profesyonellik konusunda benzersizler.", rating: 5 },
    { name: "A. Kaya", role: "Tekstil Fabrikası Müdürü", text: "Daha önce iki kez ret aldığımız başvuruyu Atasa ile ilk seferde onaylattık. Tecrübe farkı kendini gösteriyor.", rating: 5 },
    { name: "S. Demir", role: "Lojistik Firma Yöneticisi", text: "Toplu başvuru sürecimizi çok hızlı tamamladılar. İletişimleri mükemmel, her aşamayı anlık bildirdiler.", rating: 5 },
    { name: "N. Aksoy", role: "Restoran İşletmecisi", text: "WhatsApp'tan ulaştım, aynı gün içinde süreç başladı. Bu kadar hızlı olacağını düşünmemiştim.", rating: 5 },
    { name: "E. Çelik", role: "Holding İK Direktörü", text: "50'den fazla çalışma izni başvurumuzu yönettiler. Kurumsal düzeyde hizmet veriyorlar, güvenilir iş ortağımız.", rating: 5 },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

    return (
        <section
            className="py-40 relative overflow-hidden"
            aria-labelledby="testimonials-heading"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Pexels background — customer satisfaction */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        {/* Left — Header & Google info */}
                        <div className="lg:col-span-2">
                            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-4 block">
                                Müşteri Yorumları
                            </span>
                            <SectionHeading id="testimonials-heading" className="text-3xl md:text-4xl mb-8">
                                Müşterilerimiz Ne Diyor?
                            </SectionHeading>

                            {/* Google rating card — gradient border */}
                            <div
                                className="rounded-[20px] p-[1.5px]"
                                style={{
                                    background: "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.12) 100%)",
                                }}
                            >
                                <div
                                    className="rounded-[19px] p-6"
                                    style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            <span className="text-lg font-black text-white">G</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-slate-300">Google Reviews</div>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} className="text-amber-400 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black text-white">{COMPANY_INFO.stats.googleRating}</span>
                                        <span className="text-sm font-medium text-slate-500">
                                            / 5 ({COMPANY_INFO.stats.googleReviews}+ değerlendirme)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Testimonial carousel */}
                        <div className="lg:col-span-3 relative">
                            <Quote size={80} className="absolute -top-4 -left-4 text-white/[0.03] z-0" />

                            {/* Gradient border wrapper */}
                            <div
                                className="relative z-10 rounded-[20px] p-[1.5px]"
                                style={{
                                    background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)",
                                }}
                            >
                                <div
                                    className="rounded-[19px] p-8 md:p-10 min-h-[260px]"
                                    style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={current}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Stars */}
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                                                    <Star key={i} size={18} className="text-amber-400 fill-current" />
                                                ))}
                                            </div>

                                            {/* Quote text */}
                                            <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-6 italic">
                                                &ldquo;{TESTIMONIALS[current].text}&rdquo;
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center text-blue-400 font-bold text-lg"
                                                    style={{
                                                        background: "rgba(59,130,246,0.1)",
                                                        border: "1px solid rgba(59,130,246,0.15)",
                                                    }}
                                                >
                                                    {TESTIMONIALS[current].name[0]}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-white">
                                                        {TESTIMONIALS[current].name}
                                                    </div>
                                                    <div className="text-sm text-slate-500 font-normal">
                                                        {TESTIMONIALS[current].role}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation */}
                                    <div className="flex items-center gap-2 mt-8">
                                        <button
                                            onClick={prev}
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-all cursor-pointer"
                                            style={{
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                            aria-label="Önceki yorum"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        {TESTIMONIALS.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrent(i)}
                                                className={`h-2 rounded-full transition-all cursor-pointer ${i === current
                                                    ? "bg-blue-400 w-6"
                                                    : "bg-white/10 w-2 hover:bg-white/20"
                                                    }`}
                                                aria-label={`Yorum ${i + 1}`}
                                            />
                                        ))}
                                        <button
                                            onClick={next}
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-all cursor-pointer"
                                            style={{
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                            aria-label="Sonraki yorum"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
