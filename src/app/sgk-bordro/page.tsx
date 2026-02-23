import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    CheckCircle,
    ArrowRight,
    Calculator,
    FileText,
    Shield,
    Users,
    Clock,
    Banknote,
} from "lucide-react";

export const metadata: Metadata = {
    title: "SGK & Bordro Danışmanlık",
    description:
        "Yabancı personel SGK işlemleri, bordro hesaplamaları, asgari ücret güncellemeleri. Ücretsiz danışmanlık hizmeti.",
};

const services = [
    {
        icon: <Calculator size={24} />,
        title: "Bordro Hesaplama",
        desc: "Yabancı personellerinizin maaş bordrosunu mevzuata uygun şekilde hazırlıyoruz. Brüt-net hesaplama, SGK prim kesintileri ve vergi dilimi hesaplamaları.",
        features: ["Brüt-net maaş hesaplama", "SGK prim kesintileri", "Gelir vergisi dilimi takibi", "AGİ hesaplama"],
    },
    {
        icon: <Shield size={24} />,
        title: "SGK İşe Giriş / Çıkış",
        desc: "Yabancı çalışanlarınızın SGK işe giriş ve çıkış bildirgelerini zamanında ve eksiksiz hazırlıyoruz.",
        features: ["İşe giriş bildirimi", "İşten çıkış bildirimi", "APHB düzenleme", "İşsizlik sigortası"],
    },
    {
        icon: <Banknote size={24} />,
        title: "Asgari Ücret Takibi",
        desc: "Her asgari ücret değişiminde müşterilerimizi bilgilendirir, bordro güncellemelerini otomatik yaparız.",
        features: ["Anlık bilgilendirme", "Bordro güncelleme", "Maliyet analizi", "Karşılaştırma tablosu"],
    },
    {
        icon: <FileText size={24} />,
        title: "Teşvik ve İndirimler",
        desc: "Yabancı çalışan istihdamında kullanılabilecek SGK teşvik ve prim indirimleri hakkında bilgilendirme.",
        features: ["5510 sayılı kanun", "6111 teşvikleri", "7252 normalleşme desteği", "İlave istihdam teşviki"],
    },
];

const freeServices = [
    "Yabancı personel SGK bildirimi danışmanlığı",
    "Asgari ücret güncelleme bildirimi",
    "Bordro hesaplama ve kontrol desteği",
    "SGK e-bildirge işlemleri rehberliği",
    "İşe giriş/çıkış prosedür danışmanlığı",
    "Teşvik ve indirim bilgilendirmesi",
];

export default function SgkBordroPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <Badge variant="blue" className="bg-white/20 text-white mb-4">
                            ÜCRETSİZ HİZMET
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            SGK &amp; Bordro Danışmanlık
                        </h1>
                        <p className="text-purple-100 text-xl leading-relaxed max-w-3xl">
                            Yabancı personellerinizin SGK işlemleri, bordro hesaplamaları ve
                            asgari ücret güncellemelerinde ücretsiz danışmanlık hizmeti sunuyoruz.
                        </p>
                        <Link
                            href="/iletisim"
                            className="mt-8 inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                        >
                            Ücretsiz Danışmanlık <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Hizmetler"
                        title="SGK & Bordro Hizmetlerimiz"
                        description="Yabancı personel istihdamının tüm SGK ve bordro süreçlerinde yanınızdayız."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                        {services.map((service, i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 border border-purple-100">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                                <ul className="space-y-2">
                                    {service.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle size={16} className="text-purple-500 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Services */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Ücretsiz"
                        title="Ücretsiz Danışmanlık Kapsamı"
                        description="Çalışma izni müşterilerimize aşağıdaki hizmetleri ücretsiz sunuyoruz."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {freeServices.map((service, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                                    <CheckCircle size={20} />
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed pt-1.5">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl bg-purple-50 rounded-3xl p-10 border border-purple-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Kimler Yararlanabilir?</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    SGK &amp; Bordro danışmanlık hizmetimiz, Atasa Kurumsal üzerinden çalışma izni başvurusu
                                    yapan tüm müşterilerimize ücretsiz olarak sunulmaktadır. Çalışma izni onaylandıktan
                                    sonra SGK bildirim, bordro hesaplama ve teşvik süreçlerinde tam destek sağlıyoruz.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-purple-700 font-medium">
                            <Clock size={16} />
                            Hafta içi 10:00 - 19:00 arasında destek hattımızdan bize ulaşabilirsiniz.
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-purple-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">SGK Sürecinizi Kolaylaştırın</h2>
                    <p className="mb-8 text-purple-100 max-w-2xl mx-auto">
                        Yabancı personel SGK ve bordro işlemlerinde uzman desteği alın.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg inline-flex items-center gap-2"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
