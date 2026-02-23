import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    CheckCircle,
    ArrowRight,
    AlertTriangle,
    Clock,
    FileText,
    Calendar,
    Shield,
    Ban,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Çalışma İzni Uzatma | Atasa Kurumsal",
    description:
        "Çalışma izni uzatma başvurularınızı zamanında ve sorunsuz yönetiyoruz. Gecikme riski olmadan, belge hazırlığından sonuca kadar tam destek.",
};

const extensionSteps = [
    "Mevcut çalışma izni süresinin ve uzatma şartlarının değerlendirilmesi",
    "Uzatma başvurusu için gerekli belgelerin listesinin hazırlanması",
    "Güncel maaş bilgileri ve SGK primlerinin kontrol edilmesi",
    "İşveren ve personel adayından gerekli evrakların toplanması",
    "e-İzin sistemi üzerinden uzatma başvurusunun yapılması",
    "Bakanlık tarafından istenebilecek ek evrakların tamamlanması",
    "Dosya takibi ve hızlı sonuçlandırma için bakanlık ile iletişim",
    "Uzatma onayı sonrası SGK ve bordro güncelleme danışmanlığı",
];

const requiredDocuments = [
    { title: "Pasaport Fotokopisi", desc: "Geçerlilik süresi en az 60 gün olan pasaport" },
    { title: "Mevcut Çalışma İzni", desc: "Süresi dolmak üzere olan çalışma izni belgesi" },
    { title: "İş Sözleşmesi", desc: "Güncellenmiş ve taraflarca imzalanmış iş sözleşmesi" },
    { title: "SGK Bildirgeleri", desc: "Son 3 aylık SGK prim bildirgesi ve hizmet dökümü" },
    { title: "Bilanço & Gelir Tablosu", desc: "Şirketin son yıl mali tabloları" },
    { title: "Vergi Levhası", desc: "Güncel vergi levhası ve faaliyet belgesi" },
    { title: "Biyometrik Fotoğraf", desc: "Son 6 ay içinde çekilmiş 2 adet biyometrik fotoğraf" },
    { title: "Ticaret Sicil Gazetesi", desc: "Şirketin güncel ticaret sicil kaydı" },
];

const risks = [
    {
        icon: <Ban size={24} />,
        title: "İznin Sona Ermesi",
        desc: "Süresi dolan çalışma izni ile çalışmaya devam etmek YASAKTIR. İşveren ve çalışan ağır para cezalarına tabi olur.",
    },
    {
        icon: <AlertTriangle size={24} />,
        title: "81.143 ₺ Para Cezası",
        desc: "2025 yılı itibarıyla, izinsiz her bir yabancı çalışan için işverene 81.143 ₺ idari para cezası uygulanır.",
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
            <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            UZATMA HİZMETİ
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Çalışma İzni Uzatma
                        </h1>
                        <p className="text-emerald-100 text-xl leading-relaxed max-w-3xl">
                            Yabancılar için çalışma izni uzatmanın en kolay yöntemlerini biliyor
                            ve sizler için uyguluyoruz. Gecikme riski olmadan, süreniz dolmadan
                            başvurunuzu tamamlıyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                            >
                                Teklif Alın <ArrowRight size={20} />
                            </Link>
                            <a
                                href="https://wa.me/908503086998"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-emerald-700/50 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all border border-white/20 active:scale-95"
                            >
                                WhatsApp ile Sor
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-6 bg-amber-50 border-y border-amber-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 max-w-4xl">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                            <Calendar size={24} />
                        </div>
                        <p className="text-amber-800 font-medium text-sm">
                            <strong>Önemli:</strong> Çalışma izni uzatma başvurusu, mevcut iznin bitiş tarihinden{" "}
                            <strong>en geç 2 ay önce</strong> yapılmalıdır. Geç kalınan başvurularda ret riski artar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Uzatma Süreci"
                        title="Adım Adım Uzatma İşlemi"
                        description="Çalışma izni uzatma sürecinin her aşamasında yanınızdayız."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {extensionSteps.map((step, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Gerekli Belgeler"
                        title="Uzatma İçin Hazırlamanız Gerekenler"
                        description="Eksiksiz belge teslimi, başarılı ve hızlı sonuçlanmanın anahtarıdır."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
                        {requiredDocuments.map((doc, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                                    <FileText size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{doc.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extension Duration Info */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Uzatma Süreleri"
                        title="Çalışma İzni Uzatma Süreleri"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-3xl font-black text-emerald-600 mb-2">2 Yıl</h3>
                            <p className="text-slate-600 font-medium">İlk Uzatma</p>
                            <p className="text-sm text-slate-500 mt-2">1 yıllık ilk çalışma izninden sonra, ilk uzatma 2 yıla kadar verilebilir.</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-3xl font-black text-blue-600 mb-2">3 Yıl</h3>
                            <p className="text-slate-600 font-medium">Sonraki Uzatmalar</p>
                            <p className="text-sm text-slate-500 mt-2">Aynı işverenle devam eden uzatmalarda 3 yıla kadar izin verilebilir.</p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-3xl font-black text-amber-600 mb-2">Süresiz</h3>
                            <p className="text-slate-600 font-medium">Süresiz Çalışma İzni</p>
                            <p className="text-sm text-slate-500 mt-2">8 yıl kesintisiz yasal çalışma sonrası süresiz çalışma izni hakkı doğar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risks */}
            <section className="py-24 bg-red-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="⚠️ Gecikme Riskleri"
                        title="Uzatmayı Geciktirmenin Bedeli"
                        description="Çalışma izni uzatmasını geciktirmek, telafisi zor sonuçlar doğurabilir."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                        {risks.map((risk, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border border-red-100 shadow-sm"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-5 border border-red-100">
                                    {risk.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{risk.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{risk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-emerald-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Süreniz Dolmadan Harekete Geçin</h2>
                    <p className="mb-8 text-emerald-100 max-w-2xl mx-auto">
                        Çalışma izni uzatma işleminizi profesyonelce yönetelim. Geç kalmayın.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        Hemen Başvurun <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
