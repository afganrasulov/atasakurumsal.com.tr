"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Phone } from "lucide-react";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { SectionSubtitle } from "@/shared/components/ui/SectionSubtitle";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

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
    const [error, setError] = useState(false);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const serviceRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const name = nameRef.current?.value ?? "";
        const phone = phoneRef.current?.value ?? "";
        const service = serviceRef.current?.value ?? "";

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    email: "",
                    message: `[Hızlı Form] Hizmet: ${service}`,
                    subject: service,
                    source: "mini",
                }),
            });
            setLoading(false);
            if (!res.ok) {
                setError(true);
                return;
            }
            setSubmitted(true);
        } catch {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <section
            className="py-40 relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Pexels background — contact / support */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left — Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeading className="text-3xl md:text-4xl mb-4">
                                Hemen Bilgi Alın
                            </SectionHeading>
                            <SectionSubtitle className="mb-6">
                                Formu doldurun, uzman danışmanımız sizi{" "}
                                <strong className="text-slate-200">
                                    15 dakika içinde
                                </strong>{" "}
                                arasın.
                            </SectionSubtitle>
                            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-blue-400" />
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
                                <div className="rounded-[20px] p-[1.5px]" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.15) 100%)" }}>
                                    <motion.div
                                        className="rounded-[19px] p-8 text-center"
                                        style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                    >
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                            style={{
                                                background: "rgba(59,130,246,0.1)",
                                                border: "1px solid rgba(59,130,246,0.15)",
                                            }}
                                        >
                                            <CheckCircle2 size={32} className="text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-black text-white mb-2">
                                            Talebiniz Alındı!
                                        </h3>
                                        <p className="text-slate-400 font-normal">
                                            Danışmanımız en kısa sürede sizi arayacak.
                                        </p>
                                    </motion.div>
                                </div>
                            ) : (
                                <div className="rounded-[20px] p-[1.5px]" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0.15) 100%)" }}>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="rounded-[19px] p-8 space-y-4"
                                        style={{
                                            background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)",
                                        }}
                                    >
                                        <input
                                            ref={nameRef}
                                            type="text"
                                            placeholder="Adınız Soyadınız"
                                            required
                                            className="w-full rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 font-medium focus:outline-none transition-all"
                                            style={{
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; }}
                                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                                        />
                                        <input
                                            ref={phoneRef}
                                            type="tel"
                                            placeholder="Telefon Numaranız"
                                            required
                                            className="w-full rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 font-medium focus:outline-none transition-all"
                                            style={{
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; }}
                                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                                        />
                                        <select
                                            ref={serviceRef}
                                            required
                                            defaultValue=""
                                            className="w-full rounded-xl px-5 py-3.5 text-white font-medium focus:outline-none transition-all appearance-none cursor-pointer"
                                            style={{
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                            }}
                                            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; }}
                                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                                        >
                                            <option value="" disabled className="bg-slate-900 text-slate-400">
                                                Hizmet Seçin
                                            </option>
                                            {SERVICES_OPTIONS.map((s) => (
                                                <option key={s} value={s} className="bg-slate-900 text-white">
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                        {error && (
                                            <div className="flex flex-wrap items-center gap-2 rounded-xl px-4 py-3 text-sm" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)" }}>
                                                <span className="text-red-300">Gönderilemedi. Lütfen tekrar deneyin veya arayın:</span>
                                                <a href={`tel:${formatPhone(COMPANY_INFO.phone)}`} className="inline-flex items-center gap-1 font-semibold text-white">
                                                    <Phone size={14} /> {COMPANY_INFO.phone}
                                                </a>
                                            </div>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                                            style={{ boxShadow: "0 0 30px rgba(255,255,255,0.08)" }}
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
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
