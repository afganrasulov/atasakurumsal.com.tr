import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    ArrowRight,
    Hotel,
    Code,
    Stethoscope,
    GraduationCap,
    ShoppingCart,
    Factory,
    Utensils,
    Shirt,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sektörel Danışmanlık",
    description:
        "Tekstil, turizm, yazılım, sağlık, eğitim ve ithalat-ihracat sektörlerinde uzmanlaşmış çalışma izni danışmanlığı.",
};

const sectors = [
    {
        icon: <Shirt size={28} />,
        title: "Tekstil & Konfeksiyon",
        desc: "Tekstil sektöründe yabancı uzman istihdamı için sektöre özel evrak hazırlığı ve mevzuat uyumu.",
        stats: "250+ başvuru",
        color: "bg-slate-800",
        lightColor: "bg-slate-50 text-slate-800 border-slate-200",
    },
    {
        icon: <Hotel size={28} />,
        title: "Turizm & Otelcilik",
        desc: "Otel, restoran ve seyahat acentelerinde yabancı personel çalışma izni danışmanlığı.",
        stats: "180+ başvuru",
        color: "bg-sky-600",
        lightColor: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
        icon: <Code size={28} />,
        title: "Yazılım & Teknoloji",
        desc: "Teknoloji şirketlerinde yabancı yazılımcı ve mühendis istihdamında uzman danışmanlık.",
        stats: "320+ başvuru",
        color: "bg-violet-600",
        lightColor: "bg-violet-50 text-violet-600 border-violet-100",
    },
    {
        icon: <Stethoscope size={28} />,
        title: "Sağlık",
        desc: "Hastane, klinik ve medikal firmalarında yabancı doktor, hemşire ve teknisyen çalışma izni.",
        stats: "90+ başvuru",
        color: "bg-rose-600",
        lightColor: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
        icon: <GraduationCap size={28} />,
        title: "Eğitim",
        desc: "Üniversite, dil okulu ve özel eğitim kurumlarında yabancı öğretmen ve akademisyen istihdamı.",
        stats: "150+ başvuru",
        color: "bg-amber-600",
        lightColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
        icon: <ShoppingCart size={28} />,
        title: "İthalat & İhracat",
        desc: "Dış ticaret firmalarında yabancı personel ve yönetici çalışma izni başvuru danışmanlığı.",
        stats: "200+ başvuru",
        color: "bg-teal-600",
        lightColor: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
        icon: <Utensils size={28} />,
        title: "Gıda & Restoran",
        desc: "Restoran, kafe ve gıda üretim tesislerinde yabancı aşçı ve uzman personel istihdamı.",
        stats: "130+ başvuru",
        color: "bg-orange-600",
        lightColor: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
        icon: <Factory size={28} />,
        title: "Üretim & Sanayi",
        desc: "Fabrika ve üretim tesislerinde yabancı mühendis, tekniker ve operatör çalışma izni.",
        stats: "170+ başvuru",
        color: "bg-zinc-700",
        lightColor: "bg-zinc-50 text-zinc-700 border-zinc-200",
    },
];

const advantages = [
    "Sektöre özel evrak listesi ve başvuru stratejisi",
    "İlgili bakanlık ve meslek kuruluşu bağlantıları",
    "Sektörel kota ve kısıtlamaların takibi",
    "Daha önce onaylanan pozisyon referansları",
    "Sektöre göre asgari ücret ve maaş danışmanlığı",
    "Ret durumunda itiraz ve yeniden başvuru desteği",
];

export default function SektorelDanismanlikPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-950 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            SEKTÖREL UZMANLIK
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Sektörel Danışmanlık
                        </h1>
                        <p className="text-slate-300 text-xl leading-relaxed max-w-3xl">
                            Tekstil, turizm, yazılım, sağlık, eğitim ve daha birçok sektörde
                            uzmanlaşmış çalışma izni danışmanlığı sunuyoruz.
                        </p>
                        <Link
                            href="/iletisim"
                            className="mt-8 inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                        >
                            Sektörünüzü Seçin <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Sektörler"
                        title="Uzmanlaştığımız Sektörler"
                        description="Her sektörün kendine özgü mevzuat gereklilikleri vardır. Biz hepsini biliyoruz."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
                        {sectors.map((sector, i) => (
                            <div key={i} className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl ${sector.lightColor} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {sector.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {sector.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">
                                    {sector.desc}
                                </p>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    {sector.stats}
                                </div>
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
                        title="Sektörel Danışmanlık Farkımız"
                        description="Her sektör için özelleştirilmiş başvuru stratejisi geliştiriyoruz."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {advantages.map((adv, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{adv}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Sektörünüze Özel Danışmanlık Alın</h2>
                    <p className="mb-8 text-slate-400 max-w-2xl mx-auto">
                        Sektörünüzün gerekliliklerini bilen ekibimizle çalışma izni sürecinizi hızlandırın.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
