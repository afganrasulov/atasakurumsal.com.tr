"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ArrowRight, Gift } from "lucide-react";
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        onClick={handleClose}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90vw] max-w-lg"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-all z-10 cursor-pointer"
                                aria-label="Kapat"
                            >
                                <X size={18} />
                            </button>

                            {/* Top gradient bar */}
                            <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600" />

                            <div className="p-8 text-center">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Gift size={32} className="text-blue-600" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                                    Gitmeden Önce!
                                </h3>
                                <p className="text-slate-500 font-medium mb-8 max-w-sm mx-auto">
                                    Ücretsiz ön değerlendirme ile çalışma izni
                                    sürecinizi{" "}
                                    <strong className="text-slate-700">
                                        hemen başlatın
                                    </strong>
                                    . İlk görüşme tamamen ücretsiz.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="/iletisim"
                                        onClick={handleClose}
                                        className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                                    >
                                        Ücretsiz Danışmanlık Al
                                        <ArrowRight
                                            size={20}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </Link>
                                    <a
                                        href="tel:+908503086998"
                                        className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                    >
                                        <Phone size={18} />
                                        Hemen Ara: 0850 308 69 98
                                    </a>
                                </div>

                                <button
                                    onClick={handleClose}
                                    className="mt-4 text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors cursor-pointer"
                                >
                                    Hayır, teşekkürler
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
