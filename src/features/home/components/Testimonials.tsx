"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";

const TESTIMONIALS = [
    {
        name: "M. Yıldırım",
        role: "İnşaat Şirketi Sahibi",
        text: "12 yabancı personelimizin çalışma izni sürecini eksiksiz yönettiler. Hız ve profesyonellik konusunda benzersizler.",
        rating: 5,
    },
    {
        name: "A. Kaya",
        role: "Tekstil Fabrikası Müdürü",
        text: "Daha önce iki kez ret aldığımız başvuruyu Atasa ile ilk seferde onaylattık. Tecrübe farkı kendini gösteriyor.",
        rating: 5,
    },
    {
        name: "S. Demir",
        role: "Lojistik Firma Yöneticisi",
        text: "Toplu başvuru sürecimizi çok hızlı tamamladılar. İletişimleri mükemmel, her aşamayı anlık bildirdiler.",
        rating: 5,
    },
    {
        name: "N. Aksoy",
        role: "Restoran İşletmecisi",
        text: "WhatsApp'tan ulaştım, aynı gün içinde süreç başladı. Bu kadar hızlı olacağını düşünmemiştim.",
        rating: 5,
    },
    {
        name: "E. Çelik",
        role: "Holding İK Direktörü",
        text: "50'den fazla çalışma izni başvurumuzu yönettiler. Kurumsal düzeyde hizmet veriyorlar, güvenilir iş ortağımız.",
        rating: 5,
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () =>
        setCurrent(
            (c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        );
    const next = () =>
        setCurrent((c) => (c + 1) % TESTIMONIALS.length);

    return (
        <section
            className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
            aria-labelledby="testimonials-heading"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        {/* Left — Header & Google info */}
                        <div className="lg:col-span-2">
                            <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 block">
                                Müşteri Yorumları
                            </span>
                            <h2
                                id="testimonials-heading"
                                className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                            >
                                Müşterilerimiz{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Ne Diyor?
                                </span>
                            </h2>

                            {/* Google rating card */}
                            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <div className="flex items-center gap-3 mb-3">
                                    {/* Google G logo */}
                                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                        <span className="text-lg font-black">
                                            <span className="text-blue-500">G</span>
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">
                                            Google Reviews
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className="text-amber-400 fill-current"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-slate-900">
                                        {COMPANY_INFO.stats.googleRating}
                                    </span>
                                    <span className="text-sm font-bold text-slate-400">
                                        / 5 ({COMPANY_INFO.stats.googleReviews}+ değerlendirme)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right — Testimonial carousel */}
                        <div className="lg:col-span-3 relative">
                            <Quote
                                size={80}
                                className="absolute -top-4 -left-4 text-blue-50 z-0"
                            />

                            <div className="relative z-10 bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[260px]">
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
                                            {[
                                                ...Array(
                                                    TESTIMONIALS[current].rating
                                                ),
                                            ].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={18}
                                                    className="text-amber-400 fill-current"
                                                />
                                            ))}
                                        </div>

                                        {/* Quote text */}
                                        <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-6 italic">
                                            &ldquo;{TESTIMONIALS[current].text}&rdquo;
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg">
                                                {TESTIMONIALS[current].name[0]}
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">
                                                    {TESTIMONIALS[current].name}
                                                </div>
                                                <div className="text-sm text-slate-400 font-medium">
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
                                        className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer"
                                        aria-label="Önceki yorum"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    {TESTIMONIALS.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrent(i)}
                                            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === current
                                                    ? "bg-blue-600 w-6"
                                                    : "bg-slate-200 hover:bg-slate-300"
                                                }`}
                                            aria-label={`Yorum ${i + 1}`}
                                        />
                                    ))}
                                    <button
                                        onClick={next}
                                        className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer"
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
        </section>
    );
}
