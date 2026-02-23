import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    Youtube,
    Instagram,
    Facebook,
    ArrowRight,
    Users,
    Settings,
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

function TikTokIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
    );
}

function SocialButton({
    href,
    ariaLabel,
    children,
    hoverClass,
}: {
    href: string;
    ariaLabel: string;
    children: React.ReactNode;
    hoverClass: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center transition-all duration-300 ${hoverClass}`}
        >
            {children}
        </a>
    );
}

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Col 1: Şirket */}
                    <div>
                        <div className="flex items-center mb-6">
                            <span className="text-xl font-bold text-white tracking-tight">
                                Atasa Kurumsal
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                            Türkiye&apos;de faaliyet gösteren yabancı şirketler için profesyonel
                            çalışma izni ve ikamet danışmanlığı. Güvenilir ve hızlı çözüm
                            ortağınız.
                        </p>

                        <Link
                            href="/hakkimizda"
                            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-3 mb-8 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                                <Users size={20} />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm flex items-center gap-1">
                                    Biz Kimiz?{" "}
                                    <ArrowRight
                                        size={12}
                                        className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-400"
                                    />
                                </div>
                                <div className="text-slate-500 text-xs group-hover:text-slate-400">
                                    Hikayemizi ve ekibimizi tanıyın
                                </div>
                            </div>
                        </Link>

                        {/* Social Stats */}
                        <div className="space-y-3 mb-8">
                            <a
                                href={COMPANY_INFO.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-slate-900 border border-slate-800/60 rounded-xl p-4 hover:bg-slate-800/80 hover:border-red-900/30 transition-all group"
                            >
                                <div>
                                    <div className="text-white font-bold text-lg leading-none mb-1">
                                        100.000+
                                    </div>
                                    <div className="text-xs text-slate-500 group-hover:text-red-400 transition-colors font-medium">
                                        YouTube Takipçisi
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                                    <Youtube
                                        size={16}
                                        className="text-slate-600 group-hover:text-red-500 transition-colors"
                                    />
                                </div>
                            </a>

                            <div className="flex items-center justify-between bg-slate-900 border border-slate-800/60 rounded-xl p-4 group cursor-default">
                                <div>
                                    <div className="flex items-baseline gap-1.5 mb-1">
                                        <span className="text-white font-bold text-lg leading-none">
                                            Google
                                        </span>
                                        <span className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                                            Partner
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium">
                                        Resmi İş Ortağı
                                    </div>
                                </div>
                                <div className="flex gap-1" aria-hidden="true">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-pulse" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EA4335] animate-pulse" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FBBC05] animate-pulse" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <SocialButton
                                href={COMPANY_INFO.social.youtube}
                                ariaLabel="YouTube"
                                hoverClass="hover:bg-red-600 hover:border-red-600 hover:text-white"
                            >
                                <Youtube size={20} />
                            </SocialButton>
                            <SocialButton
                                href={COMPANY_INFO.social.instagram}
                                ariaLabel="Instagram"
                                hoverClass="hover:bg-pink-600 hover:border-pink-600 hover:text-white"
                            >
                                <Instagram size={20} />
                            </SocialButton>
                            <SocialButton
                                href={COMPANY_INFO.social.tiktok}
                                ariaLabel="TikTok"
                                hoverClass="hover:bg-cyan-950 hover:border-cyan-500 hover:text-cyan-400"
                            >
                                <TikTokIcon size={20} />
                            </SocialButton>
                            <SocialButton
                                href={COMPANY_INFO.social.facebook}
                                ariaLabel="Facebook"
                                hoverClass="hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                            >
                                <Facebook size={20} />
                            </SocialButton>
                        </div>
                    </div>

                    {/* Col 2: Hizmetler */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">
                            Hizmetlerimiz
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-4 mb-2">
                                Çalışma İzinleri
                            </li>
                            <li>
                                <Link href="/calisma-izni" className="hover:text-blue-400 transition-colors block">
                                    Çalışma İzni Danışmanlık
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetlerimiz" className="hover:text-blue-400 transition-colors block">
                                    Süreli Çalışma İzni
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetlerimiz" className="hover:text-blue-400 transition-colors block">
                                    Süresiz Çalışma İzni
                                </Link>
                            </li>
                            <li className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-4 mb-2">
                                İkamet & Vatandaşlık
                            </li>
                            <li>
                                <Link href="/hizmetlerimiz" className="hover:text-blue-400 transition-colors block">
                                    İkamet İzni
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetlerimiz" className="hover:text-blue-400 transition-colors block">
                                    Vatandaşlık İşlemleri
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetlerimiz" className="hover:text-blue-400 transition-colors block">
                                    Yabancı Ortaklı Şirket Kuruluşu
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Bilgi Bankası */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-orange-500 pl-3">
                            Bilgi Bankası
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/sss" className="hover:text-orange-400 transition-colors block font-medium">
                                    Sık Sorulan Sorular
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetlerimiz" className="hover:text-orange-400 transition-colors block">
                                    Sektörel Çözümler
                                </Link>
                            </li>
                            <li>
                                <Link href="/calisma-izni" className="hover:text-orange-400 transition-colors block">
                                    Fiyat Listesi
                                </Link>
                            </li>
                            <li>
                                <Link href="/kvkk" className="hover:text-orange-400 transition-colors block">
                                    KVKK Aydınlatma Metni
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: İletişim */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-blue-600 pl-3">
                            Bize Ulaşın
                        </h3>
                        <div className="space-y-5 text-sm">
                            <div className="flex items-start gap-3 group">
                                <MapPin
                                    className="shrink-0 text-blue-500 mt-1 group-hover:text-blue-400 transition-colors"
                                    size={18}
                                />
                                <address className="not-italic leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                                    {COMPANY_INFO.offices.istanbul.address}
                                </address>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <MapPin
                                    className="shrink-0 text-blue-500 mt-1 group-hover:text-blue-400 transition-colors"
                                    size={18}
                                />
                                <address className="not-italic leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                                    {COMPANY_INFO.offices.ankara.address}
                                </address>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Phone
                                    className="shrink-0 text-blue-500 group-hover:text-blue-400 transition-colors"
                                    size={18}
                                />
                                <a
                                    href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                    className="hover:text-white transition-colors font-medium"
                                >
                                    {COMPANY_INFO.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Mail
                                    className="shrink-0 text-blue-500 group-hover:text-blue-400 transition-colors"
                                    size={18}
                                />
                                <a
                                    href={`mailto:${COMPANY_INFO.email}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {COMPANY_INFO.email}
                                </a>
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/iletisim"
                                    className="w-full block text-center bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg border border-white/10 transition-all font-semibold"
                                >
                                    İletişime Geçin
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>© {new Date().getFullYear()} Atasa Kurumsal Danışmanlık. Tüm hakları saklıdır.</p>
                    <div className="flex flex-wrap gap-6 justify-center md:justify-end">
                        <Link href="/hakkimizda" className="hover:text-slate-400 transition-colors font-medium">
                            Hakkımızda
                        </Link>
                        <Link href="/kvkk" className="hover:text-slate-400 transition-colors">
                            KVKK
                        </Link>
                        <Link href="/sss" className="hover:text-slate-400 transition-colors">
                            SSS
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
