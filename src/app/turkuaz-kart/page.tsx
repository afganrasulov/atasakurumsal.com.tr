import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    CheckCircle,
    ArrowRight,
    Landmark,
    Globe,
    Briefcase,
    GraduationCap,
    Award,
    ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Turkuaz Kart",
    description:
        "Nitelikli yabancılar için Turkuaz Kart başvurusu — süresiz çalışma ve ikamet izni. Profesyonel hukuki danışmanlık.",
};

const benefits = [
    {
        icon: <Briefcase size={24} />,
        title: "Süresiz Çalışma Hakkı",
        desc: "Turkuaz Kart sahibi yabancılar, herhangi bir ek izin almadan Türkiye'de süresiz olarak çalışabilir.",
    },
    {
        icon: <Globe size={24} />,
        title: "Süresiz İkamet Hakkı",
        desc: "Ek bir ikamet izni başvurusuna gerek kalmadan Türkiye'de süresiz ikamet edebilirsiniz.",
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Eğitim & Sağlık Hakları",
        desc: "Türk vatandaşlarıyla aynı eğitim ve sağlık hizmetlerinden yararlanma imkânı.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Sosyal Güvenlik",
        desc: "SGK kapsamında sosyal güvenlik hizmetlerinden yararlanma hakkı sağlar.",
    },
];

const eligibilityCriteria = [
    {
        icon: <GraduationCap size={24} />,
        title: "Akademisyen & Araştırmacılar",
        desc: "Uluslararası düzeyde bilimsel çalışmaları bulunan akademisyenler ve araştırma görevlileri.",
    },
    {
        icon: <Award size={24} />,
        title: "Nitelikli Yatırımcılar",
        desc: "Türkiye'ye önemli miktarda yatırım yapan veya yatırım taahhüdünde bulunan girişimciler.",
    },
    {
        icon: <Globe size={24} />,
        title: "Sporcular & Sanatçılar",
        desc: "Uluslararası düzeyde başarıya sahip sporcular, sanatçılar ve kültürel alanda tanınmış kişiler.",
    },
    {
        icon: <Briefcase size={24} />,
        title: "Üst Düzey Yöneticiler",
        desc: "Uluslararası şirketlerde üst düzey yöneticilik deneyimine sahip profesyoneller.",
    },
];

const processSteps = [
    "Turkuaz Kart uygunluk değerlendirmesi",
    "Gerekli belgelerin ve referansların hazırlanması",
    "Çalışma Bakanlığı'na Turkuaz Kart başvurusu",
    "Başvuru dosyasının MYK değerlendirmesi",
    "Bakanlık onay sürecinin takibi",
    "Turkuaz Kart'ın teslimi (ilk 3 yıl geçiş süreli)",
    "3 yıl sonra süresiz Turkuaz Kart'a geçiş başvurusu",
    "Aile fertleri için bağımlı Turkuaz Kart başvurusu",
];

export default function TurkuazKartPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            NİTELİKLİ YABANCILARA ÖZEL
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Turkuaz Kart
                        </h1>
                        <p className="text-cyan-100 text-xl leading-relaxed max-w-3xl">
                            Nitelikli yabancılar için Türkiye&apos;de süresiz çalışma ve ikamet hakkı
                            sağlayan Turkuaz Kart başvuru sürecinde profesyonel hukuki destek.
                        </p>
                        <Link
                            href="/iletisim"
                            className="mt-8 inline-flex items-center gap-3 bg-white text-cyan-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                        >
                            Uygunluk Değerlendirmesi <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Avantajlar"
                        title="Turkuaz Kart Nedir?"
                        description="Turkuaz Kart, nitelikli yabancılara Türkiye'de kapsamlı haklar sağlayan özel bir çalışma izni türüdür."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
                        {benefits.map((b, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center">
                                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5 border border-cyan-100 mx-auto">
                                    {b.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Kimler Başvurabilir?"
                        title="Turkuaz Kart Uygunluk Kriterleri"
                        description="Aşağıdaki kategorilerden birine giren nitelikli yabancılar Turkuaz Kart'a başvurabilir."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {eligibilityCriteria.map((c, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5 border border-cyan-100">
                                    {c.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{c.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Başvuru Süreci"
                        title="Turkuaz Kart Başvuru Adımları"
                        description="Başvurudan kart teslimine kadar tüm süreç profesyonelce yönetilir."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {processSteps.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Box */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl bg-cyan-50 rounded-3xl p-10 border border-cyan-100">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0">
                                <Landmark size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Geçiş Süresi Hakkında</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Turkuaz Kart ilk olarak 3 yıllık geçiş süresi ile verilir. Bu süre içinde iptal şartlarına
                                    uyulmadığının tespiti halinde kart iptal edilebilir. 3 yılın sonunda başarıyla tamamlayan
                                    yabancılara süresiz Turkuaz Kart verilir. Aile fertleri de bağımlı Turkuaz Kart alabilir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-cyan-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Turkuaz Kart Başvurunuzu Başlatın</h2>
                    <p className="mb-8 text-cyan-100 max-w-2xl mx-auto">
                        Nitelikli yabancı olarak Türkiye&apos;de süresiz çalışma ve ikamet hakkı elde edin.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-cyan-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
