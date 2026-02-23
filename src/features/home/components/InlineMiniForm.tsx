"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const SERVICES_OPTIONS = [
    "Çalışma İzni",
    "İkamet İzni",
    "Vatandaşlık",
    "Toplu Başvuru",
    "Diğer",
];

export function InlineMiniForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left — Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                                Hemen Bilgi Alın
                            </h2>
                            <p className="text-blue-100 text-lg font-medium leading-relaxed mb-6">
                                Formu doldurun, uzman danışmanımız sizi{" "}
                                <strong className="text-white">
                                    15 dakika içinde
                                </strong>{" "}
                                arasın.
                            </p>
                            <div className="flex items-center gap-3 text-blue-200 text-sm font-bold">
                                <CheckCircle2 size={16} className="text-emerald-300" />
                                Tamamen ücretsiz ön değerlendirme
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            {submitted ? (
                                <motion.div
                                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                >
                                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2">
                                        Talebiniz Alındı!
                                    </h3>
                                    <p className="text-blue-100 font-medium">
                                        Danışmanımız en kısa sürede sizi arayacak.
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 space-y-4"
                                >
                                    <input
                                        type="text"
                                        placeholder="Adınız Soyadınız"
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-blue-200/60 font-medium focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Telefon Numaranız"
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-blue-200/60 font-medium focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                                    />
                                    <select
                                        required
                                        defaultValue=""
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white font-medium focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="text-slate-900">
                                            Hizmet Seçin
                                        </option>
                                        {SERVICES_OPTIONS.map((s) => (
                                            <option
                                                key={s}
                                                value={s}
                                                className="text-slate-900"
                                            >
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-white text-blue-700 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Beni Arayın
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
