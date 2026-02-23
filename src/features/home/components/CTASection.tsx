"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Phone, Clock, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-[#0f1d3a] to-blue-950 text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                            Uzman Danışmanlar{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                                Sizleri Bekliyor
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                            Çalışma izni sürecinizi birlikte yönetelim. İlk görüşme tamamen ücretsizdir.
                        </p>

                        <motion.div
                            className="space-y-5"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div className="flex items-center gap-4" variants={itemVariants}>
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Telefon</div>
                                    <a href={`tel:${formatPhone(COMPANY_INFO.phone)}`} className="text-white font-bold text-lg hover:text-blue-400 transition-colors">
                                        {COMPANY_INFO.phone}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-center gap-4" variants={itemVariants}>
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                                    <Clock size={22} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Çalışma Saatleri</div>
                                    <span className="text-white font-bold">Hafta İçi {COMPANY_INFO.hours.weekday}</span>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-center gap-4" variants={itemVariants}>
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Ofisler</div>
                                    <span className="text-white font-bold">İstanbul & Ankara</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right — CTA Buttons */}
                    <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-black mb-2 tracking-tight">Hemen İletişime Geçin</h3>
                        <p className="text-slate-400 text-sm mb-8 font-medium">Size en uygun çözümü birlikte belirleyelim.</p>

                        <motion.div
                            className="flex flex-col gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={itemVariants}>
                                <Link
                                    href="/iletisim"
                                    className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-xl inline-flex items-center justify-center gap-3 text-lg active:scale-95 w-full"
                                >
                                    İletişime Geçin <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <a
                                    href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                    className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10 inline-flex items-center justify-center gap-3 text-lg w-full"
                                >
                                    <Phone size={20} /> {COMPANY_INFO.phone}
                                </a>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <a
                                    href="https://wa.me/908503086998"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#20BD5A] transition-all flex items-center justify-center gap-3 text-lg shadow-lg active:scale-95 w-full"
                                >
                                    <MessageCircle size={24} fill="currentColor" /> WhatsApp&apos;tan Yazın
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
