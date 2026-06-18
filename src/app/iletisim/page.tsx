"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Send,
    Phone,
    Mail,
    MapPin,
    CheckCircle,
    AlertCircle,
    Loader2,
    Clock,
    Sparkles,
    MessageSquare,
    Globe,
    ArrowRight,
    Shield,
    Headphones,
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";
import { NetworkBackground } from "@/shared/components/NetworkBackground";
import { TiltCard } from "@/shared/components/TiltCard";
import { z } from "zod";

/* ── Validation ──────────────────────────────────────────── */
const contactSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
    phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
    email: z.string().email("Geçerli bir e-posta adresi giriniz"),
    message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

/* ── Animation variants ────────────────────────────────── */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ── Trust Badges ────────────────────────────────────────── */
const TRUST_BADGES = [
    {
        icon: <Shield size={20} />,
        label: "SSL Korumalı Form",
    },
    {
        icon: <Headphones size={20} />,
        label: "24 Saat İçinde Dönüş",
    },
    {
        icon: <Globe size={20} />,
        label: "3 Ülkede Hizmet",
    },
];

/* ── Premium Input Component ─────────────────────────────── */
function PremiumInput({
    id,
    name,
    label,
    type = "text",
    value,
    onChange,
    error,
    placeholder,
    icon,
}: {
    id: string;
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder: string;
    icon: React.ReactNode;
}) {
    const [focused, setFocused] = useState(false);

    return (
        <div className="group">
            <label
                htmlFor={id}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] mb-3 transition-colors duration-300"
                style={{ color: focused ? "#60a5fa" : error ? "#f87171" : "#64748b" }}
            >
                <span
                    className="transition-colors duration-300"
                    style={{ color: focused ? "#3b82f6" : error ? "#ef4444" : "#475569" }}
                >
                    {icon}
                </span>
                {label}
            </label>
            <div className="relative">
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]"
                    style={{
                        background: error
                            ? "linear-gradient(135deg, rgba(239,68,68,0.4), rgba(239,68,68,0.1))"
                            : "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(59,130,246,0.05), rgba(59,130,246,0.2))",
                    }}
                >
                    <div className="w-full h-full rounded-2xl bg-[#0f172a]" />
                </div>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="relative z-10 w-full px-5 py-4 rounded-2xl border bg-white/[0.03] backdrop-blur-sm text-white placeholder-slate-600 transition-all duration-300 outline-none"
                    style={{
                        borderColor: focused
                            ? "rgba(59,130,246,0.5)"
                            : error
                                ? "rgba(239,68,68,0.5)"
                                : "rgba(255,255,255,0.06)",
                        boxShadow: focused
                            ? "0 0 0 3px rgba(59,130,246,0.1), 0 0 30px rgba(59,130,246,0.05)"
                            : error
                                ? "0 0 0 3px rgba(239,68,68,0.1)"
                                : "none",
                    }}
                    placeholder={placeholder}
                />
            </div>
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs text-red-400 flex items-center gap-1.5 font-medium"
                >
                    <AlertCircle size={12} /> {error}
                </motion.p>
            )}
        </div>
    );
}

/* ── Page Component ──────────────────────────────────────── */
export default function IletisimPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [messageFocused, setMessageFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
        if (submitError) setSubmitError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: FormErrors = {};
            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof FormErrors;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        setLoading(true);
        setSubmitError(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: result.data.name,
                    phone: result.data.phone,
                    email: result.data.email,
                    message: result.data.message,
                    source: "iletisim",
                }),
            });
            setLoading(false);
            if (!res.ok) {
                setSubmitError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
                return;
            }
            setSubmitted(true);
        } catch {
            setLoading(false);
            setSubmitError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        }
    };

    return (
        <>
            {/* ═══════════════ CINEMATIC HERO ═══════════════ */}
            <section className="relative min-h-[50vh] overflow-hidden flex items-center">
                {/* Background layers */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(180deg, #020617 0%, rgba(2,6,23,0.85) 40%, rgba(15,23,42,0.95) 100%)",
                        }}
                    />
                    <NetworkBackground />
                </div>

                {/* Radial glow */}
                <div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
                    }}
                />

                <div className="container mx-auto px-4 relative z-10 py-32">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-blue-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-8"
                            style={{
                                background: "rgba(59,130,246,0.08)",
                                border: "1px solid rgba(59,130,246,0.15)",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <MessageSquare size={14} />
                            İletişim
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <span className="block text-white/40 mb-2">Sizinle</span>
                            <span
                                className="block"
                                style={{
                                    background:
                                        "linear-gradient(to right, #ffffff 0%, #e2e8f0 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                İletişime Geçelim
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            Uzman danışmanlarımız en kısa sürede size dönüş yapacaktır.{" "}
                            <strong className="text-slate-200">
                                Görüşmelerimiz ücretsizdir.
                            </strong>
                        </motion.p>

                        {/* Trust Badges */}
                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-6 mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            {TRUST_BADGES.map((badge, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 text-slate-500 text-sm font-medium"
                                >
                                    <span className="text-blue-400/60">{badge.icon}</span>
                                    {badge.label}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
            </section>

            {/* ═══════════════ FORM + CONTACT INFO ═══════════════ */}
            <section
                className="py-28 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
                }}
            >
                {/* Radial accent */}
                <div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(139,92,246,0.04) 0%, transparent 70%)",
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                        {/* ── Form Section (3 cols) ── */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {submitted ? (
                                /* ── Success State ── */
                                <motion.div
                                    className="relative rounded-3xl overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div
                                        className="absolute inset-0 rounded-3xl p-[1px]"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(34,197,94,0.4), rgba(34,197,94,0.05), rgba(34,197,94,0.2))",
                                        }}
                                    >
                                        <div className="w-full h-full rounded-3xl bg-[#0f172a]" />
                                    </div>
                                    <div className="relative z-10 p-16 text-center">
                                        <div
                                            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))",
                                                border: "1px solid rgba(34,197,94,0.2)",
                                            }}
                                        >
                                            <CheckCircle size={36} className="text-green-400" />
                                        </div>
                                        <h3
                                            className="text-3xl font-black mb-3"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #ffffff, #4ade80)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                            }}
                                        >
                                            Mesajınız Alındı!
                                        </h3>
                                        <p className="text-slate-400 text-lg">
                                            En kısa sürede sizinle iletişime geçeceğiz.
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                /* ── Form Card ── */
                                <div
                                    className="relative group/form rounded-[24px] p-[1.5px] transition-all duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.1) 40%, rgba(59,130,246,0.25) 100%)";
                                        e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        className="relative z-10 p-8 md:p-10 rounded-[22.5px] overflow-hidden"
                                        style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                    >
                                        {/* Form Header */}
                                        <div className="mb-8">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))",
                                                    }}
                                                >
                                                    <Send size={18} className="text-blue-400" />
                                                </div>
                                                <h2 className="text-xl font-bold text-white">
                                                    Bize Yazın
                                                </h2>
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium">
                                                Formu doldurun, 24 saat içinde dönüş yapalım.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <PremiumInput
                                                    id="name"
                                                    name="name"
                                                    label="İsim"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    error={errors.name}
                                                    placeholder="Adınız Soyadınız"
                                                    icon={<Sparkles size={12} />}
                                                />
                                                <PremiumInput
                                                    id="phone"
                                                    name="phone"
                                                    label="Telefon"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    error={errors.phone}
                                                    placeholder="+90 5XX XXX XX XX"
                                                    icon={<Phone size={12} />}
                                                />
                                            </div>

                                            <PremiumInput
                                                id="email"
                                                name="email"
                                                label="E-posta"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                error={errors.email}
                                                placeholder="ornek@email.com"
                                                icon={<Mail size={12} />}
                                            />

                                            {/* Textarea */}
                                            <div className="group">
                                                <label
                                                    htmlFor="message"
                                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] mb-3 transition-colors duration-300"
                                                    style={{
                                                        color: messageFocused
                                                            ? "#60a5fa"
                                                            : errors.message
                                                                ? "#f87171"
                                                                : "#64748b",
                                                    }}
                                                >
                                                    <span
                                                        className="transition-colors duration-300"
                                                        style={{
                                                            color: messageFocused
                                                                ? "#3b82f6"
                                                                : errors.message
                                                                    ? "#ef4444"
                                                                    : "#475569",
                                                        }}
                                                    >
                                                        <MessageSquare size={12} />
                                                    </span>
                                                    Mesajınız
                                                </label>
                                                <div className="relative">
                                                    <div
                                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]"
                                                        style={{
                                                            background: errors.message
                                                                ? "linear-gradient(135deg, rgba(239,68,68,0.4), rgba(239,68,68,0.1))"
                                                                : "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(59,130,246,0.05), rgba(59,130,246,0.2))",
                                                        }}
                                                    >
                                                        <div className="w-full h-full rounded-2xl bg-[#0f172a]" />
                                                    </div>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={5}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        onFocus={() => setMessageFocused(true)}
                                                        onBlur={() => setMessageFocused(false)}
                                                        className="relative z-10 w-full px-5 py-4 rounded-2xl border bg-white/[0.03] backdrop-blur-sm text-white placeholder-slate-600 transition-all duration-300 outline-none resize-none"
                                                        style={{
                                                            borderColor: messageFocused
                                                                ? "rgba(59,130,246,0.5)"
                                                                : errors.message
                                                                    ? "rgba(239,68,68,0.5)"
                                                                    : "rgba(255,255,255,0.06)",
                                                            boxShadow: messageFocused
                                                                ? "0 0 0 3px rgba(59,130,246,0.1), 0 0 30px rgba(59,130,246,0.05)"
                                                                : errors.message
                                                                    ? "0 0 0 3px rgba(239,68,68,0.1)"
                                                                    : "none",
                                                        }}
                                                        placeholder="Size nasıl yardımcı olabiliriz?"
                                                    />
                                                </div>
                                                {errors.message && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="mt-2 text-xs text-red-400 flex items-center gap-1.5 font-medium"
                                                    >
                                                        <AlertCircle size={12} /> {errors.message}
                                                    </motion.p>
                                                )}
                                            </div>

                                            {/* Submit Error */}
                                            {submitError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="rounded-2xl p-4 flex items-center gap-3"
                                                    style={{
                                                        background: "rgba(239,68,68,0.08)",
                                                        border: "1px solid rgba(239,68,68,0.15)",
                                                    }}
                                                >
                                                    <AlertCircle
                                                        size={18}
                                                        className="text-red-400 shrink-0"
                                                    />
                                                    <p className="text-sm text-red-400 font-medium">
                                                        {submitError}
                                                    </p>
                                                </motion.div>
                                            )}

                                            {/* Submit Button — Spinning border CTA */}
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="group relative w-full inline-flex h-[60px] overflow-hidden rounded-2xl p-[1.5px] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
                                            >
                                                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#0f172a_50%,#3B82F6_100%)]" />
                                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[14px] bg-[#0f172a] text-white backdrop-blur-3xl relative z-10 transition-colors hover:bg-[#131c2e] overflow-hidden gap-3 font-bold text-base">
                                                    {loading ? (
                                                        <>
                                                            <Loader2
                                                                size={20}
                                                                className="animate-spin"
                                                            />
                                                            Gönderiliyor...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send size={18} />
                                                            İletişime Geç
                                                            <ArrowRight
                                                                size={16}
                                                                className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                                                            />
                                                        </>
                                                    )}
                                                    <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none" />
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* ── Contact Info Sidebar (2 cols) ── */}
                        <motion.div
                            className="lg:col-span-2 space-y-6"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Direct Contact Card */}
                            <TiltCard glowColor="59, 130, 246">
                                <div
                                    className="relative group rounded-[20px] p-[1.5px] transition-all duration-500 hover:-translate-y-2"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.1) 40%, rgba(59,130,246,0.35) 100%)";
                                        e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        className="rounded-[19px] p-7 relative overflow-hidden"
                                        style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                    >
                                    <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                        Doğrudan Ulaşın
                                    </h3>
                                    <div className="space-y-5">
                                        <a
                                            href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                            className="flex items-center gap-4 group/link"
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover/link:scale-110"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))",
                                                    border: "1px solid rgba(59,130,246,0.1)",
                                                }}
                                            >
                                                <Phone size={18} className="text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                                                    Telefon
                                                </div>
                                                <div className="text-white font-bold group-hover/link:text-blue-400 transition-colors">
                                                    {COMPANY_INFO.phone}
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href={`mailto:${COMPANY_INFO.email}`}
                                            className="flex items-center gap-4 group/link"
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover/link:scale-110"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))",
                                                    border: "1px solid rgba(139,92,246,0.1)",
                                                }}
                                            >
                                                <Mail size={18} className="text-violet-400" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                                                    E-posta
                                                </div>
                                                <div className="text-white font-bold group-hover/link:text-violet-400 transition-colors">
                                                    {COMPANY_INFO.email}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </TiltCard>

                            {/* Office Cards */}
                            {Object.values(COMPANY_INFO.offices).map((office, i) => (
                                <motion.div
                                    key={office.city}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                >
                                    <TiltCard glowColor="59, 130, 246">
                                        <div
                                            className="relative group rounded-[20px] p-[1.5px] transition-all duration-500 hover:-translate-y-2"
                                            style={{
                                                background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.1) 40%, rgba(59,130,246,0.35) 100%)";
                                                e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.1)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)";
                                                e.currentTarget.style.boxShadow = "none";
                                            }}
                                        >
                                            <div
                                                className="rounded-[19px] p-7 relative overflow-hidden"
                                                style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                            >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04))",
                                                    }}
                                                >
                                                    <MapPin
                                                        size={16}
                                                        className="text-blue-400"
                                                    />
                                                </div>
                                                <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                                                    {office.city} Ofisi
                                                </h3>
                                            </div>
                                            {office.googleMapsUrl && (
                                                <a
                                                    href={office.googleMapsUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[10px] font-bold text-blue-400/60 hover:text-blue-400 transition-colors uppercase tracking-wider"
                                                >
                                                    Yol Tarifi →
                                                </a>
                                            )}
                                        </div>
                                        <address className="not-italic text-slate-500 leading-relaxed text-xs mb-3">
                                            {office.address}
                                        </address>
                                        <a
                                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-400 transition-colors"
                                        >
                                            <Phone size={12} className="text-blue-400/50" />
                                            {office.phone}
                                        </a>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}

                            {/* Working Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <TiltCard glowColor="59, 130, 246">
                                    <div
                                        className="relative group rounded-[20px] p-[1.5px] transition-all duration-500 hover:-translate-y-2"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.1) 40%, rgba(59,130,246,0.35) 100%)";
                                            e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.1)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0.15) 100%)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <div
                                            className="rounded-[19px] p-7 relative overflow-hidden"
                                            style={{ background: "linear-gradient(135deg, #131c2e 0%, #0f172a 100%)" }}
                                        >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))",
                                            }}
                                        >
                                            <Clock size={16} className="text-green-400" />
                                        </div>
                                        <h3 className="text-sm font-bold text-white">
                                            Çalışma Saatleri
                                        </h3>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-500 font-medium">
                                                Pazartesi – Cuma
                                            </span>
                                            <span
                                                className="font-bold text-xs px-3 py-1 rounded-full"
                                                style={{
                                                    background: "rgba(34,197,94,0.1)",
                                                    color: "#4ade80",
                                                    border: "1px solid rgba(34,197,94,0.15)",
                                                }}
                                            >
                                                {COMPANY_INFO.hours.weekday}
                                            </span>
                                        </div>
                                        <div
                                            className="w-full h-[1px]"
                                            style={{
                                                background:
                                                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                                            }}
                                        />
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-500 font-medium">
                                                Cumartesi
                                            </span>
                                            <span
                                                className="font-bold text-xs px-3 py-1 rounded-full"
                                                style={{
                                                    background: "rgba(59,130,246,0.1)",
                                                    color: "#60a5fa",
                                                    border: "1px solid rgba(59,130,246,0.15)",
                                                }}
                                            >
                                                {COMPANY_INFO.hours.saturday}
                                            </span>
                                        </div>
                                        <div
                                            className="w-full h-[1px]"
                                            style={{
                                                background:
                                                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                                            }}
                                        />
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-500 font-medium">
                                                Pazar
                                            </span>
                                            <span
                                                className="font-bold text-xs px-3 py-1 rounded-full"
                                                style={{
                                                    background: "rgba(239,68,68,0.1)",
                                                    color: "#f87171",
                                                    border: "1px solid rgba(239,68,68,0.15)",
                                                }}
                                            >
                                                {COMPANY_INFO.hours.sunday}
                                            </span>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ MAP / CTA SECTION ═══════════════ */}
            <section
                className="py-20 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(180deg, #020617 0%, #0c1222 50%, #020617 100%)",
                }}
            >
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.25em]">
                            Hemen Başlayın
                        </span>
                        <h2
                            className="text-3xl md:text-5xl font-black mt-4 tracking-tight mb-6"
                            style={{
                                background:
                                    "linear-gradient(135deg, #ffffff 0%, #60a5fa 60%, #3b82f6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Ücretsiz Danışmanlık Alın
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                            Çalışma izni süreçlerinizle ilgili tüm sorularınızı yanıtlayalım.{" "}
                            <strong className="text-slate-200">
                                Görüşmelerimiz ücretsizdir.
                            </strong>
                        </p>

                        {/* Spinning border CTA */}
                        <a
                            href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                            className="group relative inline-flex h-[72px] overflow-hidden rounded-full p-[2px] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#0f172a_50%,#3B82F6_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0f172a] px-10 text-white backdrop-blur-3xl relative z-10 transition-colors hover:bg-[#131c2e] overflow-hidden gap-3">
                                <Phone size={20} className="animate-pulse" />
                                <span className="text-lg font-bold">Hemen Arayın</span>
                                <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none" />
                            </span>
                        </a>

                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600 font-medium">
                            <Phone size={14} className="text-blue-400/40" />
                            {COMPANY_INFO.phone}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
