"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoadAnimation() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed inset-0 z-[200] bg-slate-950 flex items-center justify-center"
                >
                    <div className="flex flex-col items-center gap-6">
                        {/* Logo with Shimmer */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                damping: 20,
                                delay: 0.2,
                            }}
                            className="relative overflow-hidden rounded-xl"
                        >
                            <Image
                                src="/images/atasa-logo.png"
                                alt="Atasa Kurumsal Logo"
                                width={260}
                                height={93}
                                priority
                                className="h-20 md:h-24 w-auto object-contain drop-shadow-2xl brightness-0 invert"
                            />

                            {/* Shimmer Effect */}
                            <motion.div
                                className="absolute inset-0 top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] pointer-events-none z-10"
                                initial={{ left: "-150%", opacity: 0 }}
                                animate={{ left: "250%", opacity: [0, 1, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatDelay: 6,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div
                            className="w-48 h-1 bg-white/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.6,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
