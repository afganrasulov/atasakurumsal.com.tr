"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Clock,
    Youtube,
    Instagram,
    Star,
    BadgeCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";

export function WhyUsSection() {
    return (
        <section
            className="py-24 relative overflow-hidden bg-white/50 backdrop-blur-sm border-t border-slate-100"
            aria-labelledby="why-atasa"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Image */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                            <div className="text-center text-white p-12">
                                <div className="text-7xl font-black mb-4">
                                    {COMPANY_INFO.experienceYears}+
                                </div>
                                <div className="text-xl font-bold uppercase tracking-widest opacity-80">
                                    Yıllık Tecrübe
                                </div>
                                <div className="mt-8 grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-3xl font-black">
                                            {COMPANY_INFO.stats.workPermits.toLocaleString("tr-TR")}
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-wider opacity-70">
                                            Çalışma İzni
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black">
                                            {COMPANY_INFO.stats.corporateClients.toLocaleString("tr-TR")}
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-wider opacity-70">
                                            Kurumsal Müşteri
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2
                            id="why-atasa"
                            className="text-blue-600 font-bold tracking-wide uppercase mb-3 text-sm"
                        >
                            Neden Atasa Kurumsal?
                        </h2>
                        <h3 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">
                            Güvenilirlik Bizim Birinci Önceliğimiz
                        </h3>

                        {/* Social Proof Card */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 border border-slate-100 mb-10 hover:scale-[1.02] transition-transform duration-300">
                            <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    BİNLERCE KİŞİ GÜVENİYOR
                                </h4>
                                <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                                    <BadgeCheck size={12} /> GOOGLE PARTNER
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 divide-x divide-slate-100">
                                <a
                                    href={COMPANY_INFO.social.youtube}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex flex-col items-center group"
                                >
                                    <Youtube
                                        size={28}
                                        className="text-red-600 mb-2 group-hover:scale-110 transition-transform"
                                    />
                                    <span className="text-2xl font-black text-slate-900 tracking-tight">
                                        {COMPANY_INFO.stats.youtubeFollowers}
                                    </span>
                                    <span className="text-xs font-bold text-slate-500">YouTube</span>
                                </a>
                                <a
                                    href={COMPANY_INFO.social.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex flex-col items-center group"
                                >
                                    <Instagram
                                        size={28}
                                        className="text-pink-600 mb-2 group-hover:scale-110 transition-transform"
                                    />
                                    <span className="text-2xl font-black text-slate-900 tracking-tight">
                                        {COMPANY_INFO.stats.instagramFollowers}
                                    </span>
                                    <span className="text-xs font-bold text-slate-500">Instagram</span>
                                </a>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center gap-1 mb-2">
                                        <span className="bg-yellow-400 text-white rounded px-1.5 py-0.5 text-xs font-bold">
                                            {COMPANY_INFO.stats.googleRating}
                                        </span>
                                        <Star size={12} className="text-yellow-400" fill="currentColor" />
                                    </div>
                                    <span className="text-2xl font-black text-slate-900 tracking-tight">
                                        {COMPANY_INFO.stats.googleReviews}+
                                    </span>
                                    <span className="text-xs font-bold text-slate-500">
                                        Google Yorum
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Points */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Yasal Güvence</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Tüm işlemlerimiz resmi kanunlara %100 uygun yürütülür. ISO
                                        27001 Bilgi Güvenliği Sertifikalı.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Zaman Tasarrufu</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Başvuruları sizin adınıza en hızlı şekilde sonuçlandırıyoruz.
                                        Ret alacak başvuruları almayız.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
