"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const FAQ_ITEMS = [
    {
        question: "Çalışma izni başvurusu ne kadar sürer?",
        answer: "Başvuru süreci ortalama 30-45 gün sürmektedir. Ancak evrak hazırlığı ve ön değerlendirme dahil edildiğinde toplam süreç 2-3 hafta içinde başlatılabilir. Uzman ekibimiz süreci %40 daha hızlı tamamlamaktadır.",
    },
    {
        question: "Başvuru ret alırsa ne olur?",
        answer: "Ret oranımız %2'nin altındadır. Nadir durumlarda ret alınması halinde, itiraz sürecini ücretsiz olarak yönetir ve alternatif çözümler sunarız. Başvuru öncesi detaylı analiz yaparak ret riskini minimize ediyoruz.",
    },
    {
        question: "Hangi belgeler gerekiyor?",
        answer: "Gerekli belgeler başvuru türüne göre değişir. İlk görüşmede size özel belge listesi hazırlıyoruz. Genel olarak; pasaport, diploma, iş sözleşmesi ve şirket belgeleri temel dokümanlardır.",
    },
    {
        question: "Ücretlendirme nasıl yapılıyor?",
        answer: "Aracı komisyonu almıyoruz. Direkt Bakanlık üzerinden süreç yürütüyoruz, bu sayede ekstra maliyet oluşmaz. Danışmanlık ücretimiz başvuru türüne göre belirlenir ve ilk görüşmede net fiyat bilgisi verilir.",
    },
    {
        question: "Toplu başvuru yapabilir miyiz?",
        answer: "Evet, kurumsal müşterilerimize toplu başvuru hizmeti sunuyoruz. 5 ve üzeri başvurularda özel fiyatlandırma ve öncelikli işlem avantajı sağlıyoruz. 1.220+ kurumsal müşterimiz bu hizmetten yararlanmaktadır.",
    },
    {
        question: "Süreç takibini nasıl yapabilirim?",
        answer: "7/24 anlık süreç takibi imkanı sunuyoruz. WhatsApp, telefon veya e-posta üzerinden her aşamada bilgilendirilirsiniz. Başvurunuzun güncel durumunu istediğiniz zaman öğrenebilirsiniz.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            className="py-24 bg-white relative overflow-hidden"
            aria-labelledby="faq-heading"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
                            <HelpCircle size={14} />
                            SSS
                        </div>
                        <h2
                            id="faq-heading"
                            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
                        >
                            Sık Sorulan{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Sorular
                            </span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">
                            Merak ettiklerinizi yanıtlıyoruz. Daha fazlası için
                            bize ulaşın.
                        </p>
                    </motion.div>

                    {/* Accordion */}
                    <div className="space-y-3">
                        {FAQ_ITEMS.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                                        ? "bg-blue-50/50 border-blue-200 shadow-lg shadow-blue-100/50"
                                        : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-md"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(
                                            openIndex === index ? null : index
                                        )
                                    }
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                    aria-expanded={openIndex === index}
                                >
                                    <span
                                        className={`font-bold text-base md:text-lg pr-4 transition-colors ${openIndex === index
                                                ? "text-blue-700"
                                                : "text-slate-900"
                                            }`}
                                    >
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{
                                            rotate: openIndex === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index
                                                ? "bg-blue-600 text-white"
                                                : "bg-slate-100 text-slate-400"
                                            }`}
                                    >
                                        <ChevronDown size={18} />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-slate-500 font-medium mb-4">
                            Sorunuzun cevabını bulamadınız mı?
                        </p>
                        <Link
                            href="/iletisim"
                            className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Bize Sorun
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
