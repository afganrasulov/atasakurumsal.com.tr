"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Home, Flag, RefreshCw, ArrowRightLeft, Building } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/shared/constants/company";

const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase size={24} />,
    Home: <Home size={24} />,
    Flag: <Flag size={24} />,
    RefreshCw: <RefreshCw size={24} />,
    ArrowRightLeft: <ArrowRightLeft size={24} />,
    Building: <Building size={24} />,
};

const colorMap: Record<string, string> = {
    blue: "from-blue-600 to-blue-800",
    emerald: "from-emerald-500 to-emerald-700",
    red: "from-red-500 to-red-700",
    orange: "from-orange-500 to-red-600",
    slate: "from-slate-700 to-slate-900",
    cyan: "from-cyan-500 to-cyan-700",
};

export function ServicesPreview() {
    return (
        <section
            className="py-16 bg-white border-t border-slate-100 relative z-10"
            aria-labelledby="services-heading"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 px-2">
                    <div>
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
                            Hizmetlerimiz
                        </span>
                        <h2
                            id="services-heading"
                            className="text-3xl font-bold text-slate-900 mt-2"
                        >
                            Kurumsal veya Kişisel, Hizmeti Bizden Alın
                        </h2>
                    </div>
                    <Link
                        href="/hizmetlerimiz"
                        className="hidden md:flex items-center gap-2 text-slate-600 font-semibold hover:text-blue-600 transition-colors"
                    >
                        Tüm Hizmetler <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link
                                href={service.href}
                                className="group relative h-[320px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${colorMap[service.color] || colorMap.blue}`}
                                />
                                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                                    <div>
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                            {iconMap[service.icon]}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-white/80">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 font-bold group-hover:gap-5 transition-all">
                                        Hemen Başla <ArrowRight size={20} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
