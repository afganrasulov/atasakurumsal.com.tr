"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STORAGE_BASE =
    "https://khlvkvusavalbkjrwbsy.supabase.co/storage/v1/object/public/public-assets/atasa_kurumsal_web_sitesi/referanslar";

const TRUSTED_LOGOS = [
    { name: "Cengiz Holding", file: "cengiz-holding.png" },
    { name: "NAMA Yapı", file: "nama-yapi.png", hasBg: true },
    { name: "Twins Company", file: "twins-company.png", hasBg: true },
    { name: "Maxx", file: "maxx.png" },
    { name: "TOR Industry", file: "tor-industry.png" },
    { name: "Gusto", file: "gusto.png" },
    { name: "Altınpamuk Tekstil", file: "altinpamuk-tekstil.png" },
    { name: "Arnes Mekanik", file: "arnes-mekanik.png" },
    { name: "BNB İnşaat", file: "bnb-insaat.png" },
    { name: "Techno Tool", file: "techno-tool.png" },
    { name: "Bayraktar Ambalaj", file: "bayraktar-ambalaj.png" },
    { name: "Nüans Group", file: "nuans-group.png" },
    { name: "CIAR Medical", file: "ciar-medical.png", hasBg: true },
    { name: "Nef Teknik", file: "nef-teknik.png", hasBg: true },
];

export function TrustedBy() {
    return (
        <section
            className="py-36 overflow-hidden relative"
            style={{
                background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
            }}
        >
            {/* Pexels background — partnership */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.04] blur-sm pointer-events-none select-none"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div className="container mx-auto px-4 mb-8">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                            Güvenilir Ortaklıklar
                        </span>
                        <h3 className="text-xl font-semibold text-white mt-1 tracking-tight">
                            Bize Güvenen Firmalar
                        </h3>
                    </div>
                    <Link
                        href="/referanslar"
                        className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                        Tüm Referanslarımız
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Marquee */}
            <div className="relative">
                {/* Fade edges — dark */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #0f172a, transparent)" }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #0f172a, transparent)" }}
                />

                {/* Row 1 */}
                <div className="marquee-track mb-6">
                    <div className="marquee-content">
                        {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo, index) => (
                            <div key={`row1-${logo.name}-${index}`} className="flex-shrink-0 mx-6 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`${STORAGE_BASE}/${logo.file}`}
                                    alt={logo.name}
                                    className={`h-12 w-auto object-contain transition-all duration-500 ${
                                        logo.hasBg
                                            ? "opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 rounded-md"
                                            : "opacity-30 group-hover:opacity-70 brightness-0 invert"
                                    }`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="marquee-track-reverse">
                    <div className="marquee-content-reverse">
                        {[...TRUSTED_LOGOS.slice().reverse(), ...TRUSTED_LOGOS.slice().reverse()].map((logo, index) => (
                            <div key={`row2-${logo.name}-${index}`} className="flex-shrink-0 mx-6 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`${STORAGE_BASE}/${logo.file}`}
                                    alt={logo.name}
                                    className={`h-10 w-auto object-contain transition-all duration-500 ${
                                        logo.hasBg
                                            ? "opacity-30 grayscale group-hover:opacity-70 group-hover:grayscale-0 rounded-md"
                                            : "opacity-20 group-hover:opacity-60 brightness-0 invert"
                                    }`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
