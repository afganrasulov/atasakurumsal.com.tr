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
    FileCheck,
    Home,
    CalendarDays,
    Users,
} from "lucide-react";

export const metadata: Metadata = {
    title: "İkamet İzni Danışmanlık",
    description:
        "Türkiye'de kısa dönem, uzun dönem, öğrenci ve aile ikamet izni başvurularında profesyonel danışmanlık hizmeti.",
};

const permitTypes = [
    {
        title: "Kısa Dönem İkamet İzni",
        desc: "Turistik, iş, eğitim veya tedavi amaçlı Türkiye'de kalmak isteyen yabancılar için 2 yıla kadar verilen ikamet izni.",
        features: ["Turizm amaçlı kalış", "Gayrimenkul sahipliği", "İş bağlantısı kurma", "Eğitim ve kurs takibi"],
        icon: <CalendarDays size={24} />,
    },
    {
        title: "Uzun Dönem İkamet İzni",
        desc: "Türkiye'de kesintisiz en az 8 yıl ikamet eden yabancılara verilen süresiz ikamet iznidir.",
        features: ["Süresiz ikamet hakkı", "Çalışma izni muafiyeti", "Askerlik dışında vatandaşlık hakları", "Aile birleşimi kolaylığı"],
        icon: <Home size={24} />,
    },
    {
        title: "Aile İkamet İzni",
        desc: "Türk vatandaşlarının veya ikamet izni sahiplerinin eş ve çocuklarına verilen ikamet iznidir.",
        features: ["Eş ve 18 yaş altı çocuklar", "Bağımlı yetişkin çocuklar", "Sponsorun ikamet süresiyle bağlı", "Eğitim ve sağlık hakları"],
        icon: <Users size={24} />,
    },
    {
        title: "Öğrenci İkamet İzni",
        desc: "Türkiye'de lisans, yüksek lisans veya dil eğitimi alan yabancı öğrencilere verilen ikamet iznidir.",
        features: ["Üniversite öğrencileri", "Dil kursu öğrencileri", "Part-time çalışma imkânı", "Eğitim süresiyle bağlı"],
        icon: <FileCheck size={24} />,
    },
];

const processSteps = [
    "İkamet izni türünün belirlenmesi (kısa, uzun dönem, aile, öğrenci)",
    "Gerekli evrakların listelenmesi ve müşteriye bildirilmesi",
    "Randevu alınması (e-ikamet sistemi üzerinden)",
    "Başvuru dosyasının hazırlanması ve kontrolü",
    "İl Göç İdaresi'ne başvurunun yapılması",
    "Başvuru sonucunun takibi ve müşteriye bildirilmesi",
    "İkamet izni kartının teslim alınması",
    "Uzatma süreçleri için hatırlatma ve destek",
];

const reasons = [
    { icon: <ShieldCheck size={24} />, title: "Hukuki Güvence", desc: "Uzman hukukçu kadromuzla başvurunuzun mevzuata uygun şekilde hazırlanmasını sağlıyoruz." },
    { icon: <Clock size={24} />, title: "Hızlı Süreç", desc: "Randevu ve başvuru süreçlerinizi en kısa sürede tamamlıyoruz. Gereksiz beklemelere son." },
    { icon: <CheckCircle size={24} />, title: "Yüksek Onay Oranı", desc: "Başvurularımızın %98'i ilk seferde onaylanmaktadır. Ret riskinizi minimize ediyoruz." },
];

export default function IkametIzniPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            İKAMET HİZMETLERİ
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            İkamet İzni Danışmanlık
                        </h1>
                        <p className="text-emerald-100 text-xl leading-relaxed max-w-3xl">
                            Kısa dönem, uzun dönem, öğrenci ve aile ikamet izni başvurularında
                            başvurudan sonuca kadar sürecin tamamını yönetiyoruz.
                        </p>
                        <Link
                            href="/iletisim"
                            className="mt-8 inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                        >
                            Teklif Alın <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Permit Types */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="İzin Türleri"
                        title="İkamet İzni Çeşitleri"
                        description="Durumunuza en uygun ikamet izni türünü birlikte belirleyelim."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {permitTypes.map((type, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                                    {type.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{type.desc}</p>
                                <ul className="space-y-2">
                                    {type.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle size={16} className="text-emerald-500 shrink-0" />
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
                        badge="Başvuru Süreci"
                        title="Adım Adım İkamet İzni"
                        description="Başvurudan kart teslimine kadar her aşamada yanınızdayız."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
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

            {/* Why Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Neden Biz?"
                        title="Atasa Kurumsal Farkı"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                        {reasons.map((r, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                                    {r.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{r.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-emerald-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">İkamet İzni Başvurunuzu Başlatın</h2>
                    <p className="mb-8 text-emerald-100 max-w-2xl mx-auto">
                        Uzman ekibimiz ikamet izni sürecinizi en verimli şekilde yönetsin.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
