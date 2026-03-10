import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Breadcrumb } from "@/shared/components/ui/Breadcrumb";
import { Badge } from "@/shared/components/ui/Badge";
import {
    ArrowRight,
    Building2,
    CheckCircle,
    FileText,
    Wallet,
    Scale,
    Globe,
    ShieldCheck,
    LineChart,
    Briefcase
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

export const metadata: Metadata = {
    title: "Yabancı Ortaklı Şirket Kuruluşu | Atasa Danışmanlık",
    description:
        "Türkiye'de %100 yabancı sermayeli şirket kuruluşu işlemlerinde uçtan uca yasal rehberlik. Ticaret odası ve vergi süreçlerinizi profesyonelce yönetiyoruz.",
    alternates: {
        canonical: "https://www.atasakurumsal.com.tr/sirket-kurulusu",
    },
};

const companyTypes = [
    {
        icon: <Building2 size={24} />,
        title: "Limited Şirket (Ltd. Şti.)",
        desc: "Yabancı yatırımcıların en çok tercih ettiği, asgari 10.000 TL sermaye ile tek kişi tarafından dahi kurulabilen esnek yapı.",
        features: ["Sermaye sınırı ile sınırlı sorumluluk", "Yabancı müdür atanabilmesi", "Hızlı kuruluş süreci", "Daha az bürokratik işlem"],
    },
    {
        icon: <Scale size={24} />,
        title: "Anonim Şirket (A.Ş.)",
        desc: "Büyük çaplı yatırımlar için ideal olan, asgari 50.000 TL sermaye gerektiren ve halka açılabilme imkanı sunan kurumsal yapı.",
        features: ["Geniş ortaklık yapısı", "Borsada işlem görebilme imkanı", "Kamu borçlarına karşı sınırlı sorumluluk", "Hisse senedi çıkarabilme"],
    },
    {
        icon: <Globe size={24} />,
        title: "Şube Açılışı",
        desc: "Merkezi yurt dışında bulunan şirketlerin, Türkiye pazarında doğrudan aynı unvanla faaliyet göstermesini sağlayan yapı.",
        features: ["Ayrı bir tüzel kişilik olmaması", "Asgari sermaye şartı aranmaması", "Ana şirketin yasal güvencesi", "Konsolide bilanço avantajı"],
    },
    {
        icon: <FileText size={24} />,
        title: "İrtibat Bürosu",
        desc: "Türkiye pazarını tanımak, pazar araştırması yapmak ve ticari ortamı koklamak isteyen yabancı firmalar için ön adım.",
        features: ["Ticari faaliyette bulunamama", "Gelir vergisi ve KDV muafiyeti", "Tüm giderlerin yurtdışından karşılanması", "Pazar girişi öncesi en risksiz yöntem"],
    },
];

const processSteps = [
    { title: "Planlama", desc: "Şirket türünün seçimi, unvan sorgulaması, amaç ve konu tespitinin yapılması." },
    { title: "Sözleşme Hazırlığı", desc: "Sözleşme taslağının hazırlanıp MERSİS sistemine girilmesi ve randevu alınması." },
    { title: "Evrak ve Sicil İşlemleri", desc: "Tercümeli, apostilli kuruluş ve yabancı ortak belgelerinin Ticaret Odası'na tescili." },
    { title: "Vergi & SGK Tescili", desc: "Potansiyel vergi numarası, banka bloke işlemleri ve SGK işyeri açılışı." }
];

const advantages = [
    { icon: <Wallet size={24} />, title: "Tamamıyla Yabancı Sermaye", desc: "Yabancı yatırımcılar Türkiye'de %100 hisseye sahip şirketler kurabilir. Türk ortak zorunluluğu yoktur." },
    { icon: <ShieldCheck size={24} />, title: "Eşit Haklar İlkesi", desc: "Yabancı yatırımcılar, Türk yatırımcılarla anayasal ve yasal olarak tamamen aynı hak ve yükümlülüklere sahiptir." },
    { icon: <LineChart size={24} />, title: "Teşviklerden Yararlanma", desc: "Kurulan yabancı ortaklı şirketler, uygun görülmesi halinde devletin sunduğu tüm yatırım teşviklerinden faydalanabilir." },
];

export default function SirketKurulusuPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-violet-900 via-[#1e1b4b] to-[#020617] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl pt-10 pb-16">
                        <Breadcrumb items={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Şirket Kuruluşu Danışmanlığı" }]} />
                        <Badge variant="blue" className="bg-violet-500/20 text-violet-300 border border-violet-400/30 mb-6">
                            TİCARİ DANIŞMANLIK
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                            Yabancı Ortaklı <br />
                            <span className="text-violet-400">Şirket Kuruluşu</span>
                        </h1>
                        <p className="text-violet-50 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                            Türkiye'deki yatırım yolculuğunuzda yalnız değilsiniz. Şirket türü seçiminden vergi levhasının alınmasına kadar yorucu bürokratik süreci sizin adınıza profesyonelce yönetiyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-violet-600 text-white px-8 py-4 rounded-full font-bold hover:bg-violet-500 transition-all shadow-xl shadow-violet-600/20 active:scale-95"
                            >
                                Şirketinizi Kurun <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Types */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Yatırım Seçenekleri"
                        title="Hangi Şirket Türü Size Uygun?"
                        description="Amacınıza, bütçenize ve pazar hedefinize göre en doğru şirket yapısını birlikte inşa edelim."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {companyTypes.map((type, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-violet-300 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 group-hover:scale-110 transition-transform">
                                        {type.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-6">{type.desc}</p>
                                <ul className="space-y-3">
                                    {type.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-3 text-slate-700 font-medium">
                                            <CheckCircle size={18} className="text-violet-500 shrink-0 mt-0.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 hidden md:block"></div>
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Aşamalar"
                        title="Adım Adım Kuruluş Süreci"
                        description="Karar verdiğiniz andan itibaren işlemleriniz ortalama 3-5 iş günü içinde sonuçlanır."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {processSteps.map((step, i) => (
                            <div key={i} className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-violet-600 text-white font-black flex items-center justify-center mb-6 shadow-lg shadow-violet-600/30">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Avantajlar"
                        title="Türkiye'de Yatırım Yapmanın Gücü"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {advantages.map((a, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                <div className="w-16 h-16 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6 border border-violet-100">
                                    {a.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{a.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-violet-700 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Yeni Şirketiniz İçin İlk Adımı Atın</h2>
                    <p className="mb-10 text-violet-200 max-w-2xl mx-auto text-lg pt-2 leading-relaxed">
                        Yabancı yönetici atamaları, kuruluş aşamasındaki çalışma izni süreçleri ve banka hesabı açılışlarında referanslı uçtan uca danışmanlık alın.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-violet-700 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl inline-flex items-center gap-3 text-lg"
                    >
                        Ücretsiz Ön Görüşme <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
