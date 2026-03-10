"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 5 && !dismissed) {
                setShow(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () =>
            document.removeEventListener("mouseleave", handleMouseLeave);
    }, [dismissed]);

    const handleClose = () => {
        setShow(false);
        setDismissed(true);
    };

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[100]"
                        onClick={handleClose}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 30 }}
                        transition={{ type: "spring", damping: 22, stiffness: 300 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90vw] max-w-md"
                    >
                        {/* Animated gradient border wrapper */}
                        <div className="relative rounded-[28px] p-[2px] overflow-hidden">
                            {/* Rotating gradient border */}
                            <div
                                className="absolute inset-0 rounded-[28px]"
                                style={{
                                    background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6)",
                                    animation: "spin 4s linear infinite",
                                }}
                            />

                            <div className="relative bg-white rounded-[26px] overflow-hidden">
                                {/* Close button */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 hover:rotate-90 transition-all duration-300 z-10 cursor-pointer"
                                    aria-label="Kapat"
                                >
                                    <X size={18} strokeWidth={2.5} />
                                </button>

                                {/* Top section with gradient background */}
                                <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-8 pt-10 pb-8 text-center overflow-hidden">
                                    {/* Decorative circles */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                                    {/* Icon with pulse */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                                        className="relative mx-auto mb-5"
                                    >
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto ring-4 ring-white/10">
                                            <Sparkles size={30} className="text-white" />
                                        </div>
                                        {/* Pulse ring */}
                                        <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl ring-2 ring-white/30 animate-ping" style={{ animationDuration: "2s" }} />
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight"
                                    >
                                        Bir Dakika!
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-blue-100 font-medium text-sm md:text-base max-w-xs mx-auto leading-relaxed"
                                    >
                                        Çalışma izni sürecinizi <strong className="text-white">ücretsiz ön değerlendirme</strong> ile hemen başlatın.
                                    </motion.p>
                                </div>

                                {/* Bottom section */}
                                <div className="px-8 py-7">
                                    {/* Free badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 rounded-full py-2.5 px-5 mb-6 mx-auto w-fit"
                                    >
                                        <CheckCircle2 size={16} strokeWidth={2.5} />
                                        <span className="font-bold text-sm">Görüşmelerimiz tamamen ücretsizdir</span>
                                    </motion.div>

                                    <div className="flex flex-col gap-3">
                                        {/* CTA Button with shimmer */}
                                        <Link
                                            href="/iletisim"
                                            onClick={handleClose}
                                            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-600/25 active:scale-[0.97] overflow-hidden"
                                        >
                                            {/* Shimmer effect */}
                                            <span
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{
                                                    background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)",
                                                    animation: "shimmer 2s infinite",
                                                }}
                                            />
                                            <span className="relative z-10 flex items-center gap-2">
                                                Ücretsiz Danışmanlık Al
                                                <ArrowRight
                                                    size={20}
                                                    className="group-hover:translate-x-1 transition-transform"
                                                />
                                            </span>
                                        </Link>

                                        {/* Phone button */}
                                        <a
                                            href="tel:+908503086998"
                                            className="group inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-700 px-8 py-3.5 rounded-2xl font-bold hover:bg-slate-100 transition-all border border-slate-200/80"
                                        >
                                            <Phone size={18} className="text-blue-600" />
                                            <span>Hemen Ara: 0850 308 69 98</span>
                                        </a>
                                    </div>

                                    <button
                                        onClick={handleClose}
                                        className="mt-5 text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors cursor-pointer block mx-auto"
                                    >
                                        Hayır, teşekkürler
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Global keyframes */}
                    <style jsx global>{`
                        @keyframes shimmer {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }
                    `}</style>
                </>
            )}
        </AnimatePresence>
    );
}
