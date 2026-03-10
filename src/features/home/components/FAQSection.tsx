"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { SectionSubtitle } from "@/shared/components/ui/SectionSubtitle";
import Link from "next/link";

const FAQ_ITEMS = [
    { question: "Çalışma izni başvurusu ne kadar sürer?", answer: "Başvuru süreci ortalama 30-45 gün sürmektedir. Ancak evrak hazırlığı ve ön değerlendirme dahil edildiğinde toplam süreç 2-3 hafta içinde başlatılabilir. Uzman ekibimiz süreci %40 daha hızlı tamamlamaktadır." },
    { question: "Başvuru ret alırsa ne olur?", answer: "Ret oranımız %2'nin altındadır. Nadir durumlarda ret alınması halinde, itiraz sürecini ücretsiz olarak yönetir ve alternatif çözümler sunarız. Başvuru öncesi detaylı analiz yaparak ret riskini minimize ediyoruz." },
    { question: "Hangi belgeler gerekiyor?", answer: "Gerekli belgeler başvuru türüne göre değişir. İlk görüşmede size özel belge listesi hazırlıyoruz. Genel olarak; pasaport, diploma, iş sözleşmesi ve şirket belgeleri temel dokümanlardır." },
    { question: "Ücretlendirme nasıl yapılıyor?", answer: "Aracı komisyonu almıyoruz. Direkt Bakanlık üzerinden süreç yürütüyoruz, bu sayede ekstra maliyet oluşmaz. Danışmanlık ücretimiz başvuru türüne göre belirlenir ve ilk görüşmede net fiyat bilgisi verilir." },
    { question: "Toplu başvuru yapabilir miyiz?", answer: "Evet, kurumsal müşterilerimize toplu başvuru hizmeti sunuyoruz. 5 ve üzeri başvurularda özel fiyatlandırma ve öncelikli işlem avantajı sağlıyoruz. 1.220+ kurumsal müşterimiz bu hizmetten yararlanmaktadır." },
    { question: "Süreç takibini nasıl yapabilirim?", answer: "7/24 anlık süreç takibi imkanı sunuyoruz. WhatsApp, telefon veya e-posta üzerinden her aşamada bilgilendirilirsiniz. Başvurunuzun güncel durumunu istediğiniz zaman öğrenebilirsiniz." },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            className="py-40 relative overflow-hidden"
            aria-labelledby="faq-heading"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Pexels background — knowledge / FAQ */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
                            style={{
                                background: "rgba(59,130,246,0.1)",
                                border: "1px solid rgba(59,130,246,0.15)",
                            }}
                        >
                            <HelpCircle size={14} />
                            SSS
                        </div>
                        <SectionHeading id="faq-heading" className="text-3xl md:text-5xl mb-4">
                            Sık Sorulan Sorular
                        </SectionHeading>
                        <SectionSubtitle>
                            Merak ettiklerinizi yanıtlıyoruz. Daha fazlası için bize ulaşın.
                        </SectionSubtitle>
                    </motion.div>

                    {/* Accordion */}
                    <div className="space-y-3">
                        {FAQ_ITEMS.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                className="rounded-2xl transition-all duration-300"
                                style={{
                                    background: openIndex === index ? "rgba(59,130,246,0.05)" : "rgba(255,255,255,0.02)",
                                    border: openIndex === index
                                        ? "1px solid rgba(59,130,246,0.15)"
                                        : "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                    aria-expanded={openIndex === index}
                                >
                                    <span
                                        className={`font-semibold text-base md:text-lg pr-4 transition-colors tracking-tight ${openIndex === index ? "text-blue-400" : "text-slate-300"}`}
                                    >
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{
                                            background: openIndex === index
                                                ? "rgba(59,130,246,0.2)"
                                                : "rgba(255,255,255,0.05)",
                                            border: "1px solid " + (openIndex === index
                                                ? "rgba(59,130,246,0.3)"
                                                : "rgba(255,255,255,0.08)"),
                                        }}
                                    >
                                        <ChevronDown
                                            size={18}
                                            className={openIndex === index ? "text-blue-400" : "text-slate-500"}
                                        />
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
                                            <div className="px-6 pb-6 text-slate-400 font-normal leading-relaxed text-[15px]">
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
                        <p className="text-slate-500 font-normal mb-4">
                            Sorunuzun cevabını bulamadınız mı?
                        </p>
                        <Link
                            href="/iletisim"
                            className="group inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95"
                            style={{ boxShadow: "0 0 40px rgba(255,255,255,0.08)" }}
                        >
                            Bize Sorun
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
