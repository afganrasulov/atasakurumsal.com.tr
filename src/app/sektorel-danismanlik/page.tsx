import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Breadcrumb } from "@/shared/components/ui/Breadcrumb";
import { Badge } from "@/shared/components/ui/Badge";
import {
    ArrowRight,
    Hotel,
    Code,
    Stethoscope,
    GraduationCap,
    ShoppingCart,
    Factory,
    CheckCircle2,
    PlaneTakeoff,
    Zap
} from "lucide-react";

export const metadata: Metadata = {
    title: "Sektörel Çalışma İzni Danışmanlığı | Atasa Danışmanlık",
    description:
        "Teknoloji, turizm, sağlık ve sanayi gibi kilit sektörlere özel, mevzuatın tüm detaylarına hakim profesyonel çalışma izni danışmanlığı sunuyoruz.",
    alternates: {
        canonical: "https://www.atasakurumsal.com.tr/sektorel-danismanlik",
    },
};

const sectors = [
    {
        icon: <Code size={28} />,
        title: "Bilişim & Teknoloji",
        desc: "Yazılımcılar, veri mimarları ve IT uzmanları için özel kriterli, hızlı sonuçlanan çalışma izni başvuruları.",
        color: "bg-blue-600",
        lightColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
        icon: <Hotel size={28} />,
        title: "Turizm & Konaklama",
        desc: "Oteller, acenteler ve restoranlar için dönemsel veya kalıcı yabancı personel/gösteri sanatçısı izinleri.",
        color: "bg-emerald-600",
        lightColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
        icon: <Stethoscope size={28} />,
        title: "Sağlık & Medikal",
        desc: "Sağlık Bakanlığı ön izin süreçleriyle entegre; yabancı doktor, hemşire ve uzman teknisyen başvuruları.",
        color: "bg-rose-600",
        lightColor: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
        icon: <GraduationCap size={28} />,
        title: "Eğitim Hizmetleri",
        desc: "MEB ve YÖK denklikleri / ön izinleri alınarak yabancı öğretmen ve akademisyenlerin istihdam süreçleri.",
        color: "bg-amber-600",
        lightColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
        icon: <ShoppingCart size={28} />,
        title: "İthalat & İhracat",
        desc: "Bölge yöneticisi, satış müdürü gibi uzman kadrolar için Doğrudan Yabancı Yatırım teşviklerinden faydalanılan başvurular.",
        color: "bg-teal-600",
        lightColor: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
        icon: <Factory size={28} />,
        title: "Üretim & Sanayi",
        desc: "Ağır sanayi, montaj işleri, fabrika teknisyenleri ve üretim mühendisleri için kalifiye işgücü çözümleri.",
        color: "bg-slate-700",
        lightColor: "bg-slate-50 text-slate-700 border-slate-200",
    },
    {
        icon: <PlaneTakeoff size={28} />,
        title: "Havacılık",
        desc: "Yabancı pilot ve havacılık uzmanları için SHGM ön izin koordinasyonuyla hızlı çalışma izni işlemleri.",
        color: "bg-sky-600",
        lightColor: "bg-sky-50 text-sky-600 border-sky-100",
    }
];

const advantages = [
    "Sektöre özel bakanlık kriterlerini (örn: Turizmdeki istisnalar) lehinize çeviriyoruz.",
    "Ön izin gerektiren mesleklerde (Sağlık, Eğitim, Havacılık) kurumsal entegrasyon sağlıyoruz.",
    "İthalat-ihracat hacminize göre kota muafiyetlerini denetliyoruz.",
    "Bilişim sektöründeki maaş istisnalarını kullanarak şirket/prim maliyetini optimize ediyoruz.",
    "Sektörel kriz veya acil personel ihtiyaçlarında hızlandırılmış süreç yönetimi uyguluyoruz.",
    "Her sektör için referans ve emsal teşkil eden dosyalarımızla başarı garantisi sunuyoruz."
];

export default function SektorelDanismanlikPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl pt-10 pb-16">
                        <Breadcrumb items={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Sektörel Danışmanlık" }]} />
                        <Badge variant="blue" className="bg-slate-800 text-blue-400 border border-slate-700 mb-6">
                            NİŞ UZMANLIK
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                            Sektörel <br />
                            <span className="text-blue-400">Danışmanlık</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                            Her sektörün dinamikleri ve Bakanlık nezdindeki değerlendirme kriterleri farklıdır. Bilişimden turizme, sağlıktan sanayiye uzanan geniş yelpazede, sektörünüzün dilinden anlayan uzman yaklaşımlar sunuyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                            >
                                Sektörünüze Özel Teklif <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Sektörler"
                        title="Hangi Sektörlere Tam Hakimiyet Sağlıyoruz?"
                        description="Sektörel kodlar, iş tanımı eşleşmeleri ve özel teşvikler baz alınarak hazırlanan spesifik başvurular."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {sectors.map((sector, i) => (
                            <div key={i} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 flex flex-col">
                                <div className={`w-16 h-16 rounded-2xl ${sector.lightColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {sector.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {sector.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                                    {sector.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                badge="Neden Sektörel Uzmanlık?"
                                title="Genel Geçer Değil, Nokta Atışı Stratejiler"
                            />
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                Standart bir çalışma izni başvurusu, teknoloji firmasının ihtiyaçlarıyla bir turizm firmasının ihtiyaçlarını aynı sepete koyduğunda genellikle hüsranla sonuçlanır. Atasa Kurumsal olarak başvurularınızı "Terzi İşi" şekillendiriyoruz.
                            </p>
                            <Link href="/referanslar" className="font-bold text-blue-600 flex items-center gap-2 hover:text-blue-700 transition-colors">
                                Sektörel Referanslarımızı İnceleyin <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <h3 className="flex items-center gap-2 text-slate-900 font-bold text-xl mb-6">
                                <Zap className="text-amber-500" />
                                Bize Kazandıran Farklarımız
                            </h3>
                            <ul className="space-y-4">
                                {advantages.map((adv, i) => (
                                    <li key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                                        <span className="text-slate-700 font-medium text-sm leading-relaxed">{adv}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Firmanıza Özel Analiz İsteyin</h2>
                    <p className="mb-10 text-slate-400 max-w-2xl mx-auto text-lg pt-2 leading-relaxed">
                        Mevcut yabancı personel alım sürecinizde takıldığınız noktaları sektör uzmanlarımızla paylaşın, size en uygun yasal rotayı hemen çizelim.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 inline-flex items-center gap-3 text-lg"
                    >
                        Danışmanlık Alın <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
