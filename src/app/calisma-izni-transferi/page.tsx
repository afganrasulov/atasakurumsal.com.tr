import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    ArrowRight,
    ArrowRightLeft,
    CheckCircle,
    FileText,
    AlertCircle,
    Building2,
    Users,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Çalışma İzni Transferi | Atasa Kurumsal",
    description:
        "Çalışma izni transferi ile personellerinizin işyeri veya şube değişikliğini hukuki süreçlere uygun şekilde gerçekleştiriyoruz.",
};

const transferTypes = [
    {
        icon: <Building2 size={28} />,
        title: "Şube / Pozisyon Değişikliği",
        desc: "Aynı işveren bünyesinde farklı şubeye veya farklı pozisyona geçiş durumunda çalışma izni üzerinde güncelleme yapılır.",
        note: "Yeni çalışma izni başvurusu gerekmez — mevcut izin üzerinden güncelleme yapılır.",
        badge: "Güncelleme",
        badgeColor: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: <ArrowRightLeft size={28} />,
        title: "İşveren Değişikliği (Transfer)",
        desc: "Personelin tamamen farklı bir işverene geçmesi durumunda yeni bir çalışma izni başvurusu yapılması zorunludur.",
        note: "Mevcut izin geçerliliğini kaybeder — yeni işveren adına tam başvuru gereklidir.",
        badge: "Yeni Başvuru",
        badgeColor: "bg-orange-100 text-orange-700",
    },
];

const transferSteps = [
    "Transfer türünün belirlenmesi (şube değişikliği mi, işveren değişikliği mi?)",
    "Mevcut çalışma izninin durumunun ve geçerlilik süresinin kontrol edilmesi",
    "Yeni işveren veya şube bilgilerinin hazırlanması",
    "Gerekli belgelerin (yeni iş sözleşmesi, ticaret sicil vb.) toplanması",
    "Çalışma Bakanlığı'na transfer / yeni başvurunun yapılması",
    "Başvuru sürecinde istenebilecek ek evrakların tamamlanması",
    "Bakanlık ile iletişim ve dosya takibi",
    "Transfer onayı sonrası SGK geçiş işlemlerinin yönetilmesi",
];

const requiredDocuments = [
    { title: "Pasaport Fotokopisi", desc: "Geçerli pasaport sureti" },
    { title: "Mevcut Çalışma İzni", desc: "Transfer edilecek mevcut çalışma izni belgesi" },
    { title: "Yeni İş Sözleşmesi", desc: "Yeni işveren ile imzalanmış iş sözleşmesi" },
    { title: "Ticaret Sicil Gazetesi", desc: "Yeni işverenin güncel ticaret sicil kaydı" },
    { title: "Vergi Levhası", desc: "Yeni işyerinin vergi levhası" },
    { title: "İmza Sirküleri", desc: "Yeni işverenin noter onaylı imza sirküleri" },
    { title: "Bilanço & Gelir Tablosu", desc: "Yeni işverenin mali tabloları" },
    { title: "SGK İşten Ayrılış Bildirgesi", desc: "Eski işverenden SGK çıkış belgesi" },
];

export default function CalismaIzniTransferiPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            TRANSFER HİZMETİ
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Çalışma İzni Transferi
                        </h1>
                        <p className="text-orange-100 text-xl leading-relaxed max-w-3xl">
                            Profesyonel çalışanların başka şirketlere transferlerini zaman kaybetmeden
                            sağlıyoruz. Şube değişikliğinden tam işveren değişikliğine kadar tüm
                            transfer süreçlerini yönetiyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                            >
                                Teklif Alın <ArrowRight size={20} />
                            </Link>
                            <a
                                href="https://wa.me/908503086998"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-orange-600/50 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all border border-white/20 active:scale-95"
                            >
                                WhatsApp ile Sor
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transfer Types */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Transfer Türleri"
                        title="Hangi Transfer Türüne İhtiyacınız Var?"
                        description="İki farklı transfer türü olduğunu bilmek, doğru adımı atmanın ilk koşuludur."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {transferTypes.map((type, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                                        {type.icon}
                                    </div>
                                    <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${type.badgeColor}`}>
                                        {type.badge}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                                <p className="text-slate-500 leading-relaxed mb-4">{type.desc}</p>
                                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <AlertCircle size={20} className="text-blue-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-slate-600 font-medium">{type.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Transfer Süreci"
                        title="Adım Adım Transfer İşlemi"
                        description="Transfer sürecinin her aşamasında profesyonel destek sağlıyoruz."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {transferSteps.map((step, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Gerekli Belgeler"
                        title="Transfer İçin Hazırlamanız Gerekenler"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
                        {requiredDocuments.map((doc, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 border border-orange-100">
                                    <FileText size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{doc.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Considerations */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Dikkat Edilmesi Gerekenler"
                        title="Transfer Sürecinde Bilinmesi Gerekenler"
                    />
                    <div className="max-w-4xl space-y-4">
                        {[
                            "Transfer başvurusu yapılmadan önce mevcut çalışma izninin hâlâ geçerli olması gerekir.",
                            "İşveren değişikliğinde, yeni işverenin 5:1 Türk vatandaşı istihdam kotasını karşılaması zorunludur.",
                            "Yeni işverenin mali yeterlilik şartlarını (sermaye, satış, ihracat) karşılaması gerekir.",
                            "Transfer sırasında SGK çıkış ve giriş bildirgelerinin zamanında yapılması kritik önem taşır.",
                            "Transfer başvurusu sonuçlanana kadar yabancı personel yeni işyerinde çalışmaya başlayamaz.",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100">
                                <CheckCircle size={20} className="text-orange-500 shrink-0 mt-0.5" />
                                <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Transfer Sürecinizi Hızlandırın</h2>
                    <p className="mb-8 text-orange-100 max-w-2xl mx-auto">
                        Çalışma izni transferinizi profesyonelce yönetelim. Zaman kaybetmeyin.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        Hemen Başvurun <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
