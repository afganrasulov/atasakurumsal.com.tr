import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    CheckCircle,
    ArrowRight,
    Building2,
    FileText,
    Wallet,
    Scale,
    Globe,
    ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Yabancı Ortaklı Şirket Kuruluşu",
    description:
        "Türkiye'de yabancı ortaklı şirket kuruluşu, ticaret odası kayıtları, vergi dairesi işlemleri. A'dan Z'ye profesyonel destek.",
};

const companyTypes = [
    {
        icon: <Building2 size={24} />,
        title: "Limited Şirket (Ltd. Şti.)",
        desc: "En az 1, en fazla 50 ortakla kurulabilir. 10.000 TL minimum sermaye gerektirir. En yaygın tercih edilen şirket türüdür.",
        features: ["Minimum 10.000 TL sermaye", "1-50 ortak kapasitesi", "Ortaklar sorumluluk sınırı koymanlı", "Hisse devri kolaylığı"],
    },
    {
        icon: <Scale size={24} />,
        title: "Anonim Şirket (A.Ş.)",
        desc: "En az 1 ortakla kurulabilir. 50.000 TL minimum sermaye gerektirir. Halka arz imkânı sunar.",
        features: ["Minimum 50.000 TL sermaye", "Halka arz imkânı", "Yönetim kurulu zorunluluğu", "Hisse senedi çıkarabilme"],
    },
    {
        icon: <Globe size={24} />,
        title: "Şube Açılışı",
        desc: "Yabancı bir şirketin Türkiye'de şube açarak faaliyet göstermesi. Ayrı bir tüzel kişiliği yoktur.",
        features: ["Ana şirket sorumluluğu", "Ayrı tüzel kişilik yok", "Sermaye şartı yok", "Ana şirket belgesi gerekli"],
    },
    {
        icon: <FileText size={24} />,
        title: "İrtibat Bürosu",
        desc: "Türkiye'de ticari faaliyet yapmadan pazar araştırması, tanıtım ve koordinasyon amacıyla açılan büro.",
        features: ["Ticari faaliyet yasağı", "Gelir elde edemez", "Giderler yurt dışından", "Pazar araştırması amaçlı"],
    },
];

const processSteps = [
    "Şirket türü belirlenmesi ve ticaret unvanı kontrolü",
    "Şirket ana sözleşmesinin hazırlanması",
    "MERSİS üzerinden başvuru yapılması",
    "Potansiyel vergi numarası alınması",
    "Sermayenin bankaya bloke edilmesi",
    "Ticaret Sicil Müdürlüğü'ne tescil başvurusu",
    "Vergi dairesi kaydı ve e-fatura / e-defter aktivasyonu",
    "SGK işyeri tescili ve hazırlıkların tamamlanması",
];

const advantages = [
    { icon: <Wallet size={24} />, title: "%100 Yabancı Sermaye", desc: "Türkiye'de yabancı yatırımcılar %100 sermaye ile şirket kurabilir. Yerli ortak zorunluluğu yoktur." },
    { icon: <ShieldCheck size={24} />, title: "Hukuki Güvence", desc: "Türk Ticaret Kanunu ve Doğrudan Yabancı Yatırımlar Kanunu ile yatırımlarınız korunur." },
    { icon: <Globe size={24} />, title: "Stratejik Konum", desc: "Avrupa, Asya ve Orta Doğu'nun kesişim noktasında, 1.5 milyar kişilik pazara erişim." },
];

export default function SirketKurulusuPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            ŞİRKET KURULUŞU
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Yabancı Ortaklı Şirket Kuruluşu
                        </h1>
                        <p className="text-orange-100 text-xl leading-relaxed max-w-3xl">
                            Türkiye&apos;de yabancı ortaklı şirket kuruluş sürecinizi A&apos;dan Z&apos;ye
                            yönetiyoruz. Ticaret odası kayıtlarından vergi dairesine kadar tam destek.
                        </p>
                        <Link
                            href="/iletisim"
                            className="mt-8 inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                        >
                            Teklif Alın <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Company Types */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Şirket Türleri"
                        title="Hangi Şirket Türü Size Uygun?"
                        description="İhtiyacınıza en uygun şirket yapısını birlikte belirleyelim."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {companyTypes.map((type, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 border border-orange-100">
                                    {type.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{type.desc}</p>
                                <ul className="space-y-2">
                                    {type.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle size={16} className="text-orange-500 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Kuruluş Süreci"
                        title="Adım Adım Şirket Kuruluşu"
                        description="MERSİS başvurusundan SGK kaydına kadar tüm süreci yönetiyoruz."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {processSteps.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Avantajlar"
                        title="Türkiye'de Yatırım Avantajları"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                        {advantages.map((a, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 border border-orange-100">
                                    {a.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{a.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-orange-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Şirketinizi Kurmaya Hazır Mısınız?</h2>
                    <p className="mb-8 text-orange-100 max-w-2xl mx-auto">
                        Türkiye&apos;deki şirket kuruluş sürecinizi profesyonelce yönetelim.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
