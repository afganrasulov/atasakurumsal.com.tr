import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    CheckCircle,
    ArrowRight,
    Flag,
    DollarSign,
    Building2,
    Heart,
    Award,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Vatandaşlık İşlemleri",
    description:
        "Türk vatandaşlığı başvurusu — yatırım yoluyla, istisnai ve genel vatandaşlık süreçlerinde profesyonel hukuki destek.",
};

const citizenshipPaths = [
    {
        icon: <DollarSign size={24} />,
        title: "Yatırım Yoluyla Vatandaşlık",
        desc: "En az 400.000 USD gayrimenkul yatırımı, 500.000 USD sabit sermaye yatırımı veya 500.000 USD banka mevduatı ile Türk vatandaşlığı başvurusu.",
        features: [
            "400.000 USD gayrimenkul alımı",
            "500.000 USD sabit sermaye yatırımı",
            "500.000 USD banka mevduatı",
            "50 kişiye istihdam sağlama",
        ],
    },
    {
        icon: <Award size={24} />,
        title: "İstisnai Vatandaşlık",
        desc: "Türkiye'ye önemli katkıda bulunan veya bulunacağı değerlendirilen kişilere Cumhurbaşkanı kararıyla verilen vatandaşlık.",
        features: [
            "Bilim ve teknoloji alanında katkı",
            "Ekonomik katkı sağlama",
            "Sosyal ve sportif alandaki başarılar",
            "Cumhurbaşkanı onayı ile",
        ],
    },
    {
        icon: <Heart size={24} />,
        title: "Evlilik Yoluyla Vatandaşlık",
        desc: "Türk vatandaşı ile en az 3 yıl evli olan yabancılar, aile birliği içinde yaşama şartıyla vatandaşlık başvurusu yapabilir.",
        features: [
            "En az 3 yıl evlilik şartı",
            "Aile birliği içinde yaşama",
            "Milli güvenlik engeli olmama",
            "Türkiye'de ikamet zorunluluğu",
        ],
    },
    {
        icon: <Building2 size={24} />,
        title: "Genel Başvuru Yoluyla",
        desc: "Türkiye'de kesintisiz 5 yıl ikamet eden, yeterli geliri olan ve Türkçe bilen yabancılar genel başvuru yapabilir.",
        features: [
            "5 yıl kesintisiz ikamet",
            "Geçim kaynağı gösterme",
            "Türkçe yeterlilik",
            "Sağlık ve güvenlik şartları",
        ],
    },
];

const processSteps = [
    "Vatandaşlık yolu değerlendirmesi ve en uygun seçeneğin belirlenmesi",
    "Gerekli belgelerin listelenmesi ve evrak hazırlığı",
    "Yatırım şartlarının yerine getirilmesi (yatırım yolu için)",
    "İl Nüfus ve Vatandaşlık Müdürlüğü'ne başvurunun yapılması",
    "Bakanlık incelemesi sürecinin takibi",
    "Cumhurbaşkanlığı onay sürecinin takibi",
    "Vatandaşlık kararının müşteriye bildirilmesi",
    "Nüfus cüzdanı ve pasaport başvuru desteği",
];

export default function VatandaslikPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            VATANDAŞLIK
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Vatandaşlık İşlemleri
                        </h1>
                        <p className="text-red-100 text-xl leading-relaxed max-w-3xl">
                            Yatırım yoluyla, istisnai, evlilik veya genel başvuru ile Türk
                            vatandaşlığı süreçlerinde profesyonel hukuki destek sağlıyoruz.
                        </p>
                        <Link
                            href="/iletisim"
                            className="mt-8 inline-flex items-center gap-3 bg-white text-red-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                        >
                            Danışmanlık Alın <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Citizenship Paths */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Başvuru Yolları"
                        title="Türk Vatandaşlığı Nasıl Alınır?"
                        description="Durumunuza en uygun vatandaşlık başvuru yolunu birlikte belirleyelim."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {citizenshipPaths.map((path, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5 border border-red-100">
                                    {path.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{path.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{path.desc}</p>
                                <ul className="space-y-2">
                                    {path.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle size={16} className="text-red-500 shrink-0" />
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
                        badge="Süreç"
                        title="Vatandaşlık Başvuru Adımları"
                        description="Başvurudan vatandaşlık belgesine kadar tüm süreci yönetiyoruz."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {processSteps.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-red-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Vatandaşlık Başvurunuzu Başlatın</h2>
                    <p className="mb-8 text-red-100 max-w-2xl mx-auto">
                        Türk vatandaşlığı sürecinizi uzman kadromuzla yönetelim.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-red-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
