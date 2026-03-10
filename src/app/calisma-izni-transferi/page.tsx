import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    ArrowRight,
    ArrowRightLeft,
    CheckCircle,
    AlertCircle,
    Building2,
    Briefcase,
    FileText,
    Users
} from "lucide-react";

export const metadata: Metadata = {
    title: "Çalışma İzni Transferi | Atasa Danışmanlık",
    description:
        "Şirketler arası veya şubeler arası yabancı personel çalışma izni transfer işlemlerinde riskleri sıfırlayan kurumsal danışmanlık. Süreci yasal güvenceyle uyguluyoruz.",
    alternates: {
        canonical: "https://www.atasakurumsal.com.tr/calisma-izni-transferi",
    },
};

const transferTypes = [
    {
        title: "Şirketler Arası Transfer",
        desc: "Yabancı personelin A şirketinden ayrılarak, tamamen bağımsız B şirketinde çalışmaya başlaması durumudur. Yeni bir başvuru olarak değerlendirilir.",
        icon: <Building2 size={24} />,
        badge: "Yeni İşveren",
        badgeColor: "bg-orange-100 text-orange-700",
        note: "A şirketinden çıkış yapılmadan veya izin iptal edilmeden geçiş sağlanmalıdır."
    },
    {
        title: "Şube/Adres Transferi",
        desc: "Aynı işverene bağlı farklı bir şubeye veya farklı adresteki bir çalışma yerine yapılacak transfer işlemleridir.",
        icon: <ArrowRightLeft size={24} />,
        badge: "Aynı İşveren",
        badgeColor: "bg-blue-100 text-blue-700",
        note: "Bakanlığa adres değişikliği veya şube nakil bildirimi olarak yapılır."
    }
];

const transferSteps = [
    { title: "Durum Değerlendirmesi", desc: "Mevcut çalışma izninin geçerliliği ve yeni işverenin/şubenin kriterleri(5 Türk kotası vb.) analiz edilir." },
    { title: "Transfer Stratejisi", desc: "Çıkış işlemlerinin ne zaman yapılacağı, yeni başvurunun ne zaman açılacağı planlanır." },
    { title: "Evrakların Hazırlanması", desc: "Yeni şirket için gerekli sözleşmeler, sicil gazeteleri ve dilekçeler hazırlanır." },
    { title: "Bakanlık Başvurusu", desc: "E-İzin sistemi üzerinden transfer / yeni başvuru süreci başlatılır ve takip edilir." },
];

export default function CalismaIzniTransferiPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl pt-10 pb-16">
                        <Badge variant="blue" className="bg-orange-500/20 text-orange-300 border border-orange-400/30 mb-6">
                            GÜVENLİ İŞVEREN DEĞİŞİKLİĞİ
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                            Çalışma İzni <br />
                            <span className="text-orange-400">Transferi</span>
                        </h1>
                        <p className="text-orange-50 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                            Profesyonel yabancı çalışanların farklı şirketlere veya aynı grubun farklı şubelerine yasal geçiş süreçleri. Statü kaybı yaşamadan, hukuki güvenlik içinde transfer işlemlerini anahtar teslim yönetiyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-400 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
                            >
                                Transfer Başlatın <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transfer Types */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Transfer Türleri"
                        title="Hangi Transfer Türüne İhtiyacınız Var?"
                        description="İki farklı transfer türü olduğunu bilmek, doğru adımı atmanın ilk koşuludur."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {transferTypes.map((type, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-100 shadow-sm">
                                        {type.icon}
                                    </div>
                                    <span className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full ${type.badgeColor}`}>
                                        {type.badge}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">{type.desc}</p>
                                <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                    <AlertCircle size={20} className="text-blue-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-slate-700 font-medium">{type.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Transfer Süreci"
                        title="Adım Adım Transfer İşlemi"
                        description="Hata kabul etmeyen bu süreci uzman ekibimizle profesyonelce koordine ediyoruz."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {transferSteps.map((step, i) => (
                            <div
                                key={i}
                                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 transition-colors group relative"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-[100px] rounded-tr-3xl transition-colors group-hover:bg-orange-500/10"></div>
                                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-black text-xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors relative z-10">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Considerations */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Kritik Uyarılar"
                        title="Transfer Sürecinde Bilinmesi Gerekenler"
                        description="Başarısız bir transfer başvurusu yabancının ülkeyi terk etmesine neden olabilir."
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                            {[
                                "Transfer başvurusu yapılmadan önce mevcut çalışma izninin mutlaka geçerli olması gerekir.",
                                "İşveren değişikliğinde, yeni şirketin yabancı istihdam kotasını (5 Türk) karşılaması zorunludur.",
                                "Yeni işverenin mali yeterlilik şartlarını (sermaye vb.) karşılaması gerekir.",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 mb-6 last:mb-0">
                                    <CheckCircle size={24} className="text-orange-500 shrink-0" />
                                    <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                             {[
                                "Transfer sırasında eski şirketten SGK çıkışı ve onay sonrası yeni şirkete giriş bildirgeleri zamanında yapılmalıdır.",
                                "Transfer başvurusu sonuçlanana kadar yabancı personel fiilen yeni işyerinde SGK'lı olarak çalışmaya başlayamaz.",
                                "Maaş seviyesi eski işyerinden düşük gösterilmemelidir."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 mb-6 last:mb-0">
                                    <CheckCircle size={24} className="text-orange-500 shrink-0" />
                                    <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-orange-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Transfer Sürecinizi Hızlandırın</h2>
                    <p className="mb-8 text-orange-100 max-w-2xl mx-auto text-lg pt-2">
                        Değerli bir personeli bünyenize katarken yasal engellere takılmayın. Transferinizi risk almadan profesyonelce yönetelim.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-3 text-lg"
                    >
                        Hemen Başvurun <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
