import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    ArrowRight,
    Users,
    Building2,
    ShieldCheck,
    Clock,
    AlertTriangle,
    BarChart3,
    Headphones,
    FileStack,
    Globe,
    CheckCircle,
    Phone,
    Factory,
    UtensilsCrossed,
    HardHat,
    Laptop,
    Truck,
    Heart,
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

export const metadata: Metadata = {
    title: "Kurumsal Toplu Başvuru | Atasa Kurumsal",
    description:
        "50+ yabancı personel istihdam eden kurumsal şirketlere özel toplu çalışma izni başvuru yönetimi. Dedicated hesap yöneticisi, öncelikli destek ve toplu fiyatlandırma.",
};

const challenges = [
    {
        icon: <Users size={24} />,
        title: "5:1 Kota Kuralı",
        desc: "Her 1 yabancı için en az 5 Türk vatandaşı istihdam zorunluluğu. 200 yabancı = 1.000 Türk çalışan gerekiyor.",
        severity: "Kritik",
    },
    {
        icon: <FileStack size={24} />,
        title: "Belge Yönetimi Kabusu",
        desc: "100 yabancı = 100 ayrı dosya, 100 ayrı pasaport, diploma, sözleşme ve SGK takibi.",
        severity: "Yüksek",
    },
    {
        icon: <AlertTriangle size={24} />,
        title: "81.143 ₺/Kişi Ceza",
        desc: "2025 itibarıyla izinsiz her bir yabancı çalışan için 81.143 ₺ idari para cezası. 50 kişi = 4M+ ₺ risk.",
        severity: "Kritik",
    },
    {
        icon: <Clock size={24} />,
        title: "Süre Takibi",
        desc: "Her personelin izin bitiş tarihi farklı. Tek bir gecikme = yasal riskler ve operasyonel aksama.",
        severity: "Yüksek",
    },
    {
        icon: <Building2 size={24} />,
        title: "Mali Yeterlilik",
        desc: "500K TL sermaye veya 8M TL satış veya 150K USD ihracat şartı karşılanmalı.",
        severity: "Orta",
    },
    {
        icon: <Globe size={24} />,
        title: "Çok Ülkeli Koordinasyon",
        desc: "Farklı ülkelerden gelen personel = farklı konsolosluk süreçleri, çeviri ihtiyaçları, apostil işlemleri.",
        severity: "Yüksek",
    },
];

const solutions = [
    {
        icon: <Headphones size={24} />,
        title: "Dedicated Hesap Yöneticisi",
        desc: "Tek muhatap. Tüm dosyalarınızı, sürelerinizi ve takibi tek bir uzman yönetir.",
    },
    {
        icon: <FileStack size={24} />,
        title: "Toplu Dosya Yönetimi",
        desc: "Yüzlerce personelin belge toplama, düzenleme ve başvuru süreçlerini merkezi olarak yönetiyoruz.",
    },
    {
        icon: <Clock size={24} />,
        title: "AI Destekli Süre Takibi",
        desc: "Yapay zeka ile tüm personellerinizin izin bitiş tarihlerini takip eder, zamanında uzatma başvurusu yaparız.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "%98 Başarı Oranı",
        desc: "Ret alacak başvuruları kabul etmiyoruz. Her dosyayı başvurmadan önce detaylı değerlendiriyoruz.",
    },
    {
        icon: <BarChart3 size={24} />,
        title: "Aylık Raporlama",
        desc: "Tüm başvuruların durumu, onaylanan ve bekleyen dosyalar hakkında düzenli raporlama.",
    },
    {
        icon: <Globe size={24} />,
        title: "Çok Dilli Destek",
        desc: "Türkçe, İngilizce, Arapça, Rusça ve Farsça dahil çoklu dil desteği.",
    },
];

const sectors = [
    { icon: <Factory size={24} />, name: "Üretim & Tekstil", count: "300+" },
    { icon: <UtensilsCrossed size={24} />, name: "Turizm & Otelcilik", count: "200+" },
    { icon: <HardHat size={24} />, name: "İnşaat", count: "150+" },
    { icon: <Laptop size={24} />, name: "Teknoloji", count: "100+" },
    { icon: <Truck size={24} />, name: "Lojistik", count: "80+" },
    { icon: <Heart size={24} />, name: "Sağlık", count: "60+" },
];

export default function TopluBasvuruPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-blue-500/20 text-blue-300 border-blue-400/30 mb-4">
                            KURUMSAL ÇÖZÜM
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                            <span className="text-slate-400">50+ Yabancı Personel Mi?</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                Size Özel Çözümümüz Var.
                            </span>
                        </h1>
                        <p className="text-slate-300 text-xl leading-relaxed max-w-3xl">
                            Kurumsal şirketlerin yüzlerce, binlerce yabancı personel istihdamında
                            yaşadığı tüm sorunlara tek elden çözüm üretiyoruz.
                            <strong className="text-white"> 2012&apos;den beri 1.220+ kurumsal müşteri.</strong>
                        </p>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link
                                href="/iletisim"
                                className="group relative inline-flex h-16 overflow-hidden rounded-full p-[2px] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform duration-300"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#10B981_50%,#3B82F6_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-10 text-white backdrop-blur-3xl gap-3 relative z-10 font-bold text-lg">
                                    Kurumsal Teklif Alın <ArrowRight size={20} />
                                </span>
                            </Link>
                            <a
                                href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                className="inline-flex h-16 items-center gap-3 rounded-full bg-white/10 px-10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
                            >
                                <Phone size={20} /> Hemen Arayın
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
                        {[
                            { value: "1.321+", label: "Çalışma İzni" },
                            { value: "1.220+", label: "Kurumsal Müşteri" },
                            { value: "%98", label: "Başarı Oranı" },
                            { value: "12+", label: "Yıllık Deneyim" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-3xl font-black text-white">{stat.value}</div>
                                <div className="text-sm text-slate-400 font-medium mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Kurumsal Zorluklar"
                        title="Toplu İstihdamda Karşılaştığınız Sorunlar"
                        description="Yüzlerce yabancı personel istihdam etmek istiyorsunuz ama mevzuat engelleri çok mu karmaşık?"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                        {challenges.map((challenge, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center">
                                        {challenge.icon}
                                    </div>
                                    <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${challenge.severity === "Kritik"
                                            ? "bg-red-100 text-red-700"
                                            : challenge.severity === "Yüksek"
                                                ? "bg-orange-100 text-orange-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}>
                                        {challenge.severity}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{challenge.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{challenge.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Atasa Çözümü"
                        title="Tüm Bu Sorunları Biz Çözüyoruz"
                        description="Tek muhatap, merkezi yönetim, proaktif takip. Siz işinize odaklanın."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                        {solutions.map((solution, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Sektörel Deneyim"
                        title="Hangi Sektörde Olursanız Olun"
                        description="Her sektörün kendine has zorlukları ve istisnaları var. Biz hepsini biliyoruz."
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl">
                        {sectors.map((sector, i) => (
                            <div
                                key={i}
                                className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white text-slate-400 group-hover:text-blue-600 flex items-center justify-center mx-auto mb-4 border border-slate-100 transition-colors">
                                    {sector.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{sector.name}</h3>
                                <p className="text-xs text-slate-400 font-bold">{sector.count} başvuru</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Nasıl Çalışır?"
                        title="Kurumsal Süreç"
                    />
                    <div className="max-w-4xl space-y-4">
                        {[
                            { step: "1", title: "Ücretsiz Ön Değerlendirme", desc: "Şirketinizin mevcut durumunu, personel ihtiyacını ve mevzuat uyumunu değerlendiriyoruz." },
                            { step: "2", title: "Özel Fiyat Teklifi", desc: "Personel sayısına, sektöre ve ihtiyaçlarınıza göre kurumsal fiyat teklifi sunuyoruz." },
                            { step: "3", title: "Dedicated Hesap Yöneticisi Atama", desc: "Size özel bir hesap yöneticisi atanır, tüm süreç tek elden yönetilir." },
                            { step: "4", title: "Toplu Belge Toplama & Organizasyonu", desc: "Tüm personelin belgelerini merkezi olarak toplar ve organize ederiz." },
                            { step: "5", title: "Seri Başvuru & Takip", desc: "Bakanlık ile koordineli şekilde toplu başvuruları yapar, takip eder ve sonuçlandırırız." },
                            { step: "6", title: "Sürekli Destek & Raporlama", desc: "İzin uzatmaları, transferler ve SGK işlemleri dahil sürekli destek sağlarız." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 font-bold">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">
                        Kurumsal Çözüm İçin Hemen İletişime Geçin
                    </h2>
                    <p className="mb-10 text-slate-300 max-w-2xl mx-auto text-lg">
                        Yüzlerce yabancı personel istihdam edecek misiniz? Size özel çözüm ve fiyatlandırma için konuşalım.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/iletisim"
                            className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl inline-flex items-center gap-2"
                        >
                            Kurumsal Teklif Alın <ArrowRight size={18} />
                        </Link>
                        <a
                            href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                            className="bg-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center gap-2"
                        >
                            <Phone size={18} /> {COMPANY_INFO.phone}
                        </a>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
