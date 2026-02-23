import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    CheckCircle,
    ArrowRight,
    ShieldCheck,
    Clock,
    Users,
    Zap,
    Globe,
    FileText,
} from "lucide-react";
import type { PricingRow } from "@/shared/types";

export const metadata: Metadata = {
    title: "Çalışma İzni Danışmanlık",
    description:
        "Çalışma izni danışmanlık hizmetimiz, şirketimizin %100 uzmanı olduğu konuların başında gelmektedir. Binlerce başarılı başvuru.",
};

const processSteps = [
    "Başvuru yönteminin değerlendirilmesi ve onayı",
    "Personel adayının unvanına göre asgari maaşının müşteriye bildirilmesi",
    "Personel adayı ile iletişime geçilip gerekli evrakların hazırlatılması",
    "Çalışma Bakanlığı'na çalışma izni başvurusunun yapılması",
    "Başvuru sürecinde istenebilecek ek evrakların tamamlanması",
    "Bakanlıktan izinlerin erken çıkması için dosya takibi yapılması",
    "Süreç boyunca oluşabilecek aksaklıkların çözümü",
    "Çalışma izni çıktıktan sonra bilgilendirme ve SGK danışmanlığı",
];

const reasons = [
    { icon: <ShieldCheck size={24} />, title: "Gizlilik", desc: "ISO 27001 Bilgi Güvenliği Sertifikası sahibiyiz. Müşteri bilgilerini asla kaydetmez veya paylaşmayız." },
    { icon: <Globe size={24} />, title: "Uzmanlık", desc: "2012'den beri hiçbir müşterimizden şikayet almadık. Google'da en yüksek puana sahip firmayız." },
    { icon: <Users size={24} />, title: "Müşteri Memnuniyeti", desc: "Her asgari ücret değişiminde müşterilerimizi bilgilendirir, yapay zeka ile tüm süreleri takip ederiz." },
    { icon: <Clock size={24} />, title: "Satış Sonrası Hizmet", desc: "İşlem sonrası sektörel değişiklikleri, uzatma başvurularını ve SGK güncellemelerini takip ediyoruz." },
    { icon: <Zap size={24} />, title: "Sürekli Güncellenme", desc: "Sektörü dakika dakika takip eden istatistik departmanımız tüm değişiklikleri anında raporlar." },
    { icon: <FileText size={24} />, title: "Doğru İnisiyatif", desc: "Uyguladığımız her karar iş gerekçesine bağlıdır. Ret alacak başvuruları kabul etmiyoruz." },
];

const pricing: PricingRow[] = [
    { category: "Ev Hizmetleri", domestic: "14.000 ₺", abroad: "14.000 ₺", transfer: "14.000 ₺" },
    { category: "Satış Elemanı vb.", domestic: "14.000 ₺", abroad: "14.000 ₺", transfer: "14.000 ₺" },
    { category: "Animatör, Masöz, Akrobat vb.", domestic: "14.000 ₺", abroad: "14.000 ₺", transfer: "14.000 ₺" },
    { category: "Şirket Ortağı", domestic: "15.750 ₺", abroad: "15.750 ₺", transfer: "15.750 ₺" },
    { category: "Öğretmen, Doktor, Psikolog vb.", domestic: "17.500 ₺", abroad: "17.500 ₺", transfer: "17.500 ₺" },
    { category: "Mühendis, Mimar ve Müdürler", domestic: "17.500 ₺", abroad: "17.500 ₺", transfer: "17.500 ₺" },
    { category: "Üst Düzey Yöneticiler – Pilotlar", domestic: "21.000 ₺", abroad: "21.000 ₺", transfer: "21.000 ₺" },
];

export default function CalismaIzniPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            UZMANLIK ALANIMIZ
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Çalışma İzni Danışmanlık
                        </h1>
                        <p className="text-blue-100 text-xl leading-relaxed max-w-3xl">
                            Şirketimizin %100 uzmanı olduğu konuların başında gelen çalışma izni
                            danışmanlık hizmeti. Binlerce müşterimizin başvurularını başarılı ve
                            şeffaf bir şekilde yönettik.
                        </p>
                        <Link
                            href="/iletisim"
                            className="mt-8 inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                        >
                            Teklif Alın <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Hizmet Kronolojisi"
                        title="Bizimle Çalışmak Çok Kolay"
                        description="Çalışma izni sürecinin her aşamasında yanınızdayız."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="5 Neden"
                        title="Atasa Kurumsal ile Çalışmak İçin"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                        {reasons.map((r, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                                    {r.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{r.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Fiyat Listesi"
                        title="Danışmanlık Ücretlerimiz"
                        description="Tüm fiyatlara KDV dahil değildir. Her pozisyon için aynı şeffaf fiyat politikası."
                    />
                    <div className="max-w-5xl overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="px-6 py-4 rounded-tl-2xl font-bold text-sm">Hizmet</th>
                                    <th className="px-6 py-4 font-bold text-sm">Yurt İçi</th>
                                    <th className="px-6 py-4 font-bold text-sm">Yurt Dışı</th>
                                    <th className="px-6 py-4 rounded-tr-2xl font-bold text-sm">Transfer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricing.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-slate-900 text-sm">{row.category}</td>
                                        <td className="px-6 py-4 text-slate-600 text-sm font-medium">{row.domestic} + KDV</td>
                                        <td className="px-6 py-4 text-slate-600 text-sm font-medium">{row.abroad} + KDV</td>
                                        <td className="px-6 py-4 text-slate-600 text-sm font-medium">{row.transfer} + KDV</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Hemen Başvurun</h2>
                    <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
                        Çalışma izni sürecinizi profesyonelce yönetelim.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
