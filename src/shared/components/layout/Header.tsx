"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { COMPANY_INFO, NAV_LINKS } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

export function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl hidden md:block">
                <nav
                    aria-label="Ana Navigasyon"
                    className={cn(
                        "rounded-full px-6 py-1.5 flex justify-between items-center transition-all duration-500",
                        "bg-white/75 backdrop-blur-3xl border border-white/50",
                        scrolled
                            ? "shadow-2xl shadow-slate-400/15"
                            : "shadow-lg shadow-slate-400/10"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center group" aria-label="Ana Sayfa">
                        <div className="relative group-hover:scale-105 transition-transform duration-500">
                            <span className="text-xl font-black text-slate-900 tracking-tight">
                                Atasa<span className="text-blue-600"> Kurumsal</span>
                            </span>
                        </div>
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center gap-1 bg-slate-100/40 p-1 rounded-full border border-white/40">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    isActive(link.href)
                                        ? "text-slate-900 bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)] font-bold scale-105"
                                        : "text-slate-500 hover:text-slate-900 hover:bg-white/50 hover:scale-105"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex flex-col items-end text-right">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                DESTEK HATTI
                            </span>
                            <span className="text-xs font-black text-slate-800 font-mono">
                                {COMPANY_INFO.phone}
                            </span>
                        </div>
                        <a
                            href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                            aria-label={`Bizi arayın: ${COMPANY_INFO.phone}`}
                            className="group relative px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 bg-slate-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 active:scale-95"
                        >
                            <Phone size={16} className="fill-current" />
                            <span>Hemen Ara</span>
                        </a>
                    </div>
                </nav>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-100 px-4 py-2 flex justify-between items-center shadow-sm">
                <Link href="/" className="flex items-center" aria-label="Ana Sayfa">
                    <span className="text-lg font-black text-slate-900 tracking-tight">
                        Atasa<span className="text-blue-600"> Kurumsal</span>
                    </span>
                </Link>
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-expanded={mobileOpen}
                    aria-label="Menüyü Aç/Kapat"
                    className="p-2 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 active:scale-95 transition-transform cursor-pointer"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-300">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-2xl font-black text-slate-900 active:scale-95 transition-transform"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                        className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xl flex items-center gap-3 active:scale-95 transition-all shadow-xl shadow-blue-600/20"
                    >
                        <Phone size={24} className="fill-current" />
                        Hemen Ara
                    </a>
                </div>
            )}
        </>
    );
}
