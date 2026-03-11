"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Briefcase, Home, Flag, RefreshCw, ArrowRightLeft, Building, Heart, ShieldCheck, Zap, CheckCircle, Target, Building2, FileText, Landmark, Youtube, Instagram, Star, MapPin } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

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
];

const ICON_MAP: Record<string, React.ElementType> = {
    Briefcase,
    Home,
    Flag,
    RefreshCw,
    ArrowRightLeft,
    Building,
    Target,
    Heart,
    Building2,
    FileText,
    Landmark
};

const SHORT_DESC_MAP: Record<string, string> = {
    "sektorel-danismanlik": "Terzi işi izni ve destek",
    "yabanci-bakici-calisma-izni": "Ev personeli ve bakıcı izni",
    "calisma-izni": "Yabancı personel süreçleri",
    "calisma-izni-uzatma": "İzin süresi uzatma",
    "calisma-izni-transferi": "Şube/işyeri değişikliği",
    "toplu-basvuru": "50+ personel başvurusu",
    "ikamet-izni": "Uzun ve kısa dönem oturum",
    "vatandaslik": "Yatırım & İstisnai haklar",
    "sirket-kurulusu": "Yabancı ortaklı şirket açılışı",
    "sgk-bordro": "Bordro ve maliyet hesaplaması",
    "turkuaz-kart": "Nitelikli personel başvurusu",
};

export function MobileHeroSection() {
    return (
        <section className="lg:hidden bg-[#0014B4] relative overflow-hidden flex flex-col pt-safe -mt-20 pt-10">
            {/* Top Area: Deep Navigation Blue Background with Ambient Details */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#0a84ff] rounded-full blur-[80px]" />
                <div className="absolute -top-10 -right-20 w-80 h-80 bg-[#1c39bb] rounded-full blur-[100px]" />
                {/* Simulated wave or subtle pattern */}
                <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 pt-4 pb-[12%] flex flex-col items-center">
                 {/* Central 3D-like Immersive Beating Heart Graphic - Entrance Only */}
                 <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 1.25, 0.95, 1.15, 1], opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="relative w-24 h-24 mb-6 flex items-center justify-center"
                 >
                    {/* Pulsing ambient glow behind the heart (Entrance Only) */}
                    <motion.div 
                        className="absolute inset-0 bg-blue-400 rounded-full blur-2xl z-0" 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0.2, 0.9, 0.2, 0.6, 0.3], scale: [0.8, 1.4, 0.8, 1.2, 0.8] }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* The Heart Icon */}
                    <Heart 
                        size={80} 
                        fill="#0a84ff" 
                        strokeWidth={1} 
                        className="text-blue-200 z-10 relative drop-shadow-[0_10px_20px_rgba(10,132,255,0.6)]" 
                    />
                 </motion.div>

                 {/* Welcoming Text */}
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center px-6"
                 >
                    <h1 className="text-[26px] font-bold text-white tracking-tight mb-2 leading-tight">
                        Atasa&apos;yla İşim Kolay;
                    </h1>
                    <p className="text-white/80 text-[14px] font-medium leading-normal max-w-[280px] mx-auto">
                        Tüm kurumsal bürokrasi süreçlerinize tek bir yerden kolayca ulaşın.
                    </p>
                 </motion.div>

                 {/* Mini Trusted Logos Marquee */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-[120%] -ml-[10%] mt-6 overflow-hidden relative"
                 >
                     {/* Fade edges to mix with blue background */}
                     <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-r from-[#0014B4] to-transparent" />
                     <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none bg-gradient-to-l from-[#0014B4] to-transparent" />
                     
                     <div className="flex items-center w-max animate-[marquee-scroll_25s_linear_infinite]">
                         {/* Seamless loop array */}
                         {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo, index) => (
                             <div key={`mobile-logo-${logo.name}-${index}`} className="flex-shrink-0 mx-3">
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                 <img
                                     src={`${STORAGE_BASE}/${logo.file}`}
                                     alt={logo.name}
                                     className={`h-4 w-auto object-contain ${
                                         logo.hasBg
                                             ? "opacity-60 grayscale"
                                             : "opacity-40 brightness-0 invert"
                                     }`}
                                     loading="lazy"
                                 />
                             </div>
                         ))}
                     </div>
                 </motion.div>
            </div>

            {/* Bottom Area: White Intersecting Container with Menu Grid */}
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.3 }}
                className="relative z-20 bg-[#f4f6fa] rounded-t-[32px] px-5 pt-8 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] w-full -mt-[10%]"
            >
                 <div className="flex justify-between items-center mb-5">
                     <h2 className="text-lg font-bold text-[#1e293b]">İşlemlerim</h2>
                     <a href={`tel:${formatPhone(COMPANY_INFO.phone)}`} className="bg-blue-100 text-[#0014B4] p-2 rounded-full active:scale-95 transition-transform flex items-center gap-2 px-3 text-xs font-bold">
                        <Phone size={14} fill="currentColor" /> Müşteri Hizmetleri
                     </a>
                 </div>

                 {/* 2-Column Grid exactly like İşCep */}
                 <div className="grid grid-cols-2 gap-3 pb-safe">
                     {SERVICES.map((service, index) => {
                         const Icon = ICON_MAP[service.icon] || Briefcase;
                         return (
                             <motion.div 
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                             >
                                 <Link 
                                     href={service.href}
                                     className="flex flex-col h-full bg-white p-4 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/60 active:bg-slate-50 transition-colors"
                                 >
                                    {/* Icon Container with very soft color */}
                                    <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center mb-3">
                                        <Icon size={20} className="text-[#0014B4]" strokeWidth={2} />
                                    </div>
                                    <div className="flex flex-col flex-1 justify-end">
                                        <h3 className="font-bold text-[15px] text-slate-800 leading-tight mb-1">{service.title}</h3>
                                        <p className="text-[11px] text-slate-500 font-medium leading-snug">
                                            {SHORT_DESC_MAP[service.id] || service.description.slice(0, 30) + '...'}
                                        </p>
                                    </div>
                                 </Link>
                             </motion.div>
                         )
                     })}
                     
                     {/* --- Custom Metric Boxes --- */}
                     {/* 1. YouTube */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + SERVICES.length * 0.05 }}
                     >
                         <a href="https://youtube.com/@atasadanismanlik" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-[20px] shadow-[0_4px_20px_rgba(255,0,0,0.05)] border border-red-200/60 active:bg-red-200/50 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center mb-3">
                                <Youtube size={20} className="text-white" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col flex-1 justify-end">
                                <h3 className="font-bold text-[18px] text-red-700 leading-tight mb-0.5">100B+</h3>
                                <p className="text-[11px] text-red-600/80 font-bold leading-snug">
                                    YouTube Abonesi
                                </p>
                            </div>
                         </a>
                     </motion.div>

                     {/* 2. Instagram */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (SERVICES.length + 1) * 0.05 }}
                     >
                         <a href="https://instagram.com/atasadanismanlik" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full bg-gradient-to-br from-fuchsia-50 to-pink-100 p-4 rounded-[20px] shadow-[0_4px_20px_rgba(236,72,153,0.05)] border border-pink-200/60 active:bg-pink-200/50 transition-colors relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 opacity-10 rounded-full blur-xl" />
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center mb-3 relative z-10">
                                <Instagram size={20} className="text-white" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col flex-1 justify-end relative z-10">
                                <h3 className="font-bold text-[18px] text-pink-700 leading-tight mb-0.5">60B+</h3>
                                <p className="text-[11px] text-pink-600/80 font-bold leading-snug">
                                    Instagram Takipçisi
                                </p>
                            </div>
                         </a>
                     </motion.div>

                     {/* 3. Google Rating */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (SERVICES.length + 2) * 0.05 }}
                     >
                         <a href="https://g.page/atasadanismanlik" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full bg-gradient-to-br from-emerald-50 to-teal-100 p-4 rounded-[20px] shadow-[0_4px_20px_rgba(16,185,129,0.05)] border border-teal-200/60 active:bg-teal-200/50 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-[#34A853] flex items-center justify-center mb-3">
                                <Star size={20} className="text-white fill-white" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col flex-1 justify-end">
                                <div className="flex items-center gap-1 mb-0.5">
                                    <h3 className="font-bold text-[18px] text-emerald-800 leading-tight">4.9</h3>
                                    <Star size={12} className="text-emerald-600 fill-emerald-600" />
                                </div>
                                <p className="text-[11px] text-emerald-700/80 font-bold leading-snug">
                                    1000+ Google Yorumu
                                </p>
                            </div>
                         </a>
                     </motion.div>

                     {/* 4. Global Offices */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (SERVICES.length + 3) * 0.05 }}
                     >
                         <Link href="/iletisim" className="flex flex-col h-full bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-700 active:bg-slate-800 transition-colors relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 Mix-blend-overlay pointer-events-none" />
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-3 relative z-10">
                                <MapPin size={20} className="text-blue-400" strokeWidth={2} />
                            </div>
                            <div className="flex flex-col flex-1 justify-end relative z-10">
                                <h3 className="font-bold text-[18px] text-white leading-tight mb-0.5">3 Ülkede</h3>
                                <p className="text-[10px] text-blue-200 font-medium leading-snug opacity-90">
                                    İstanbul, Aşkabat, Bakü
                                </p>
                            </div>
                         </Link>
                     </motion.div>
                     {/* --- End Custom Metric Boxes --- */}
                     {/* "Tüm Hizmetler" Extra Action */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + SERVICES.length * 0.05 }}
                     >
                         <Link 
                             href="/hizmetlerimiz"
                             className="flex flex-col h-full bg-[#0014B4]/5 p-4 rounded-[20px] border border-[#0014B4]/10 active:bg-[#0014B4]/10 transition-colors justify-center items-center text-center"
                         >
                            <div className="w-10 h-10 rounded-xl bg-[#0014B4]/10 flex items-center justify-center mb-2">
                                <CheckCircle size={20} className="text-[#0014B4]" strokeWidth={2} />
                            </div>
                            <h3 className="font-bold text-[15px] text-[#0014B4] leading-tight mb-1">Tüm Hizmetler</h3>
                            <p className="text-[11px] text-slate-500 font-medium leading-snug">
                                Diğer tüm çözümlerimizi inceleyin
                            </p>
                         </Link>
                     </motion.div>
                 </div>

                 {/* Quick Trust Indicators Below Grid */}
                 <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                    className="flex justify-between mt-6 px-1 border-t border-slate-200/60 pt-5"
                 >
                     <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-emerald-500" />
                        <span className="text-xs font-semibold text-slate-600">%98 Başarı Oranı</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Zap size={18} className="text-amber-500" />
                        <span className="text-xs font-semibold text-slate-600">Hızlı Sonuçlanma</span>
                     </div>
                 </motion.div>
            </motion.div>

        </section>
    );
}
