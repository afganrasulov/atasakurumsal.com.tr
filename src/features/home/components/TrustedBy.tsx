"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STORAGE_BASE =
    "https://khlvkvusavalbkjrwbsy.supabase.co/storage/v1/object/public/public-assets/atasa_kurumsal_web_sitesi/referanslar";

const TRUSTED_LOGOS = [
    { name: "Cengiz Holding", file: "cengiz-holding.png" },
    { name: "NAMA Yapı", file: "nama-yapi.png" },
    { name: "Twins Company", file: "twins-company.png" },
    { name: "Maxx", file: "maxx.png" },
    { name: "TOR Industry", file: "tor-industry.png" },
    { name: "Gusto", file: "gusto.png" },
    { name: "Altınpamuk Tekstil", file: "altinpamuk-tekstil.png" },
    { name: "Arnes Mekanik", file: "arnes-mekanik.png" },
    { name: "BNB İnşaat", file: "bnb-insaat.png" },
    { name: "Techno Tool", file: "techno-tool.png" },
    { name: "Bayraktar Ambalaj", file: "bayraktar-ambalaj.png" },
    { name: "Nüans Group", file: "nuans-group.png" },
    { name: "CIAR Medical", file: "ciar-medical.png" },
    { name: "Nef Teknik", file: "nef-teknik.png" },
];

export function TrustedBy() {
    return (
        <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            Güvenilir Ortaklıklar
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">
                            Bize Güvenen Firmalar
                        </h3>
                    </div>
                    <Link
                        href="/referanslar"
                        className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                    >
                        Tüm Referanslarımız
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Improved Marquee with CSS animation for better performance */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {/* Row 1 - Left to right */}
                <div className="marquee-track mb-6">
                    <div className="marquee-content">
                        {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo, index) => (
                            <div key={`row1-${logo.name}-${index}`} className="flex-shrink-0 mx-6 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`${STORAGE_BASE}/${logo.file}`}
                                    alt={logo.name}
                                    className="h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right to left (reversed) */}
                <div className="marquee-track-reverse">
                    <div className="marquee-content-reverse">
                        {[...TRUSTED_LOGOS.slice().reverse(), ...TRUSTED_LOGOS.slice().reverse()].map((logo, index) => (
                            <div key={`row2-${logo.name}-${index}`} className="flex-shrink-0 mx-6 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`${STORAGE_BASE}/${logo.file}`}
                                    alt={logo.name}
                                    className="h-10 w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS keyframe animations */}
            <style jsx>{`
                .marquee-track {
                    overflow: hidden;
                    width: 100%;
                }
                .marquee-content {
                    display: flex;
                    align-items: center;
                    animation: marquee-scroll 35s linear infinite;
                    width: max-content;
                }
                .marquee-track-reverse {
                    overflow: hidden;
                    width: 100%;
                }
                .marquee-content-reverse {
                    display: flex;
                    align-items: center;
                    animation: marquee-scroll-reverse 40s linear infinite;
                    width: max-content;
                }
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-scroll-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .marquee-track:hover .marquee-content,
                .marquee-track-reverse:hover .marquee-content-reverse {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
