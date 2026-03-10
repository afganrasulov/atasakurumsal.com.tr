import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    ArrowRight,
    AlertTriangle,
    Clock,
    FileText,
    Calendar,
    Shield,
    Ban,
    UserCheck,
    CheckCircle2
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

export const metadata: Metadata = {
    title: "Yabancılar İçin Çalışma İzni Uzatma | Atasa Danışmanlık",
    description:
        "Yabancı personel çalışma izni uzatma işlemlerinde %100 güvenilir ve profesyonel süreç yönetimi. Süreniz dolmadan hızlı, yasal ve garantili danışmanlık hizmeti.",
    alternates: {
        canonical: "https://www.atasakurumsal.com.tr/calisma-izni-uzatma",
    },
};

const extensionSteps = [
    { title: "Süre ve Şart Analizi", desc: "Mevcut çalışma izni bitiş tarihine ve yabancının aynı işyerinde devam edip etmeyeceğine göre uzatma stratejisi belirlenir." },
    { title: "Maaş ve SGK Kontrolü", desc: "Geçen çalışma dönemi boyunca SGK primlerinin eksiksiz yatıp yatmadığı ve maaş limitleri denetlenir." },
    { title: "Eksik Evrakların Tamamlanması", desc: "Vergi borcu, SGK borcu gibi uzatmayı engelleyecek pürüzler tespit edilip hızla çözüme kavuşturulur." },
    { title: "Bakanlık Başvurusu", desc: "Sürenin bitimine en fazla 60 gün kala e-İzin sistemi üzerinden resmi başvuru tamamlanır." },
];

const requiredDocuments = [
    { title: "Pasaport Fotokopisi", desc: "Geçerlilik süresi en az 60 gün olan pasaport" },
    { title: "Mevcut Çalışma İzni", desc: "Süresi dolmak üzere olan çalışma izni belgesi" },
    { title: "İş Sözleşmesi", desc: "Güncellenmiş ve taraflarca imzalanmış iş sözleşmesi" },
    { title: "SGK Bildirgeleri", desc: "Son 3 aylık SGK prim bildirgesi ve hizmet dökümü" },
];

const risks = [
    {
        icon: <Ban size={24} />,
        title: "İznin Sona Ermesi",
        desc: "Süresi dolan çalışma izni ile çalışmaya devam etmek YASAKTIR. İşveren ve çalışan ağır para cezalarına tabi olur.",
    },
    {
        icon: <AlertTriangle size={24} />,
        title: "Ağır Para Cezası",
        desc: "İzinsiz her bir yabancı çalışan için işverene yüksek miktarda (her yıl güncellenen) idari para cezası uygulanır.",
    },
    {
        icon: <Shield size={24} />,
        title: "Sınır Dışı Riski",
        desc: "Geçerli çalışma izni olmadan bulunan yabancılar için sınır dışı etme kararı verilebilir ve giriş yasağı uygulanabilir.",
    },
];

export default function CalismaIzniUzatmaPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-[#020617] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8348984/pexels-photo-8348984.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl pt-10 pb-16">
                        <Badge variant="blue" className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-6">
                            SÜRE UZATIMI & TAKİP
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                            Yabancılar İçin <br />
                            <span className="text-emerald-400">Çalışma İzni Uzatma</span>
                        </h1>
                        <p className="text-emerald-50 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                            Çalışma izni uzatma başvuruları, teknik detayların ve zamanlamanın en kritik olduğu süreçtir. Süreniz dolmadan %100 başarı hedefiyle başvurunuzu yeniliyor, şirketinizin ve çalışanınızın yasal güvenliğini garanti altına alıyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
                            >
                                Uzatma Başvurusu Yapın <ArrowRight size={20} />
                            </Link>
                            <a
                                href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/10 backdrop-blur-md active:scale-95"
                            >
                                Bizi Arayın
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-8 bg-amber-50 border-y border-amber-200 shadow-inner">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
                        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm border border-amber-200">
                            <Calendar size={32} />
                        </div>
                        <div>
                            <h3 className="text-amber-900 font-bold text-lg mb-1">Zamanlama Her Şeydir!</h3>
                            <p className="text-amber-800 font-medium text-base">
                                Çalışma izni uzatma başvurusu, mevcut iznin bitiş tarihinden <strong>en geç 60 gün önce</strong> başlatılmalı ve en geç izin süresi dolmadan tamamlanmalıdır. İzni biten yabancının çalışmaya devam etmesi ağır yaptırımlara tabidir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps enriched */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Uzatma Süreci"
                        title="Adım Adım Uzatma İşlemi"
                        description="Sürecin her aşamasında şirketinizin yanındayız. Belgelerin hazırlanmasından onaya kadar pürüzsüz deneyim."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {extensionSteps.map((step, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-emerald-100 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-black text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extension Duration Info */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Uzatma Süreleri"
                        title="Çalışma İzni Uzatma Periyotları"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-2">2 Yıl</h3>
                            <p className="text-emerald-600 font-bold mb-4 uppercase tracking-wide text-sm">İlk Uzatma</p>
                            <p className="text-slate-600 leading-relaxed">1 yıllık ilk çalışma izninden sonra, yabancının aynı işyerinde aynı meslekte çalışmaya devam etmesi şartıyla ilk uzatma 2 yıla kadar verilebilir.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-2">3 Yıl</h3>
                            <p className="text-blue-600 font-bold mb-4 uppercase tracking-wide text-sm">Sonraki Uzatmalar</p>
                            <p className="text-slate-600 leading-relaxed">İki yıllık yasal çalışma süresinin ardından, aynı işverenle devam eden müteakip uzatmalar 3 yıla kadar değerlendirilip onaylanabilir.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                                <UserCheck size={28} />
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-2">Süresiz</h3>
                            <p className="text-amber-600 font-bold mb-4 uppercase tracking-wide text-sm">Süresiz Çalışma İzni</p>
                            <p className="text-slate-600 leading-relaxed">Türkiye'de 8 yıl kesintisiz yasal çalışma izni ile bulunan yabancılar tamamen süresiz çalışma izni başvurusunda bulunma hakkı kazanır.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risks */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="⚠️ Gecikme Riskleri"
                        title="Uzatmayı Geciktirmenin Bedeli"
                        description="Süreyi kaçırmak geri dönülemez zararlara ve maddi kayıplara yol açar."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {risks.map((risk, i) => (
                            <div
                                key={i}
                                className="bg-red-50/50 rounded-3xl p-8 border border-red-100"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white text-red-500 flex items-center justify-center mb-6 shadow-sm">
                                    {risk.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{risk.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{risk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents basic */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Gerekli Belgeler"
                        title="Başvuru Evrakları"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {requiredDocuments.map((doc, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-4 border border-slate-100">
                                    <FileText size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{doc.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-emerald-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Süreniz Dolmadan Harekete Geçin</h2>
                    <p className="mb-8 text-emerald-100 max-w-2xl mx-auto">
                        Çalışma izni uzatma işleminizi biz profesyonelce yönetelim, siz işinize odaklanın.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-3 text-lg"
                    >
                        Hemen Başvurun <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
