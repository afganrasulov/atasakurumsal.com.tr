import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import {
    ArrowRight,
    Briefcase,
    Home,
    Flag,
    Building2,
    FileText,
    Users,
    Landmark,
    RefreshCw,
    ArrowRightLeft,
    Building,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description: "Atasa Kurumsal Danışmanlık hizmetleri — çalışma izni, çalışma izni uzatma, çalışma izni transferi, toplu başvuru, ikamet izni ve daha fazlası.",
};

const services = [
    {
        icon: <Briefcase size={28} />,
        title: "Yabancı Çalışma İzni",
        desc: "Binlerce müşterimiz istihdam edecekleri yabancı personeller için bizi tercih ettiler, yanılmadılar. %98 başarı oranı ile başvurularınızı yönetiyoruz.",
        href: "/calisma-izni",
        color: "bg-blue-600",
        lightColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
        icon: <RefreshCw size={28} />,
        title: "Çalışma İzni Uzatma",
        desc: "Yabancılar için çalışma izni uzatmanın en kolay yöntemlerini biliyoruz ve sizler için uyguluyoruz. Süre takibi, belge hazırlığı ve başvuru yönetimi.",
        href: "/calisma-izni-uzatma",
        color: "bg-emerald-600",
        lightColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
        icon: <ArrowRightLeft size={28} />,
        title: "Çalışma İzni Transferi",
        desc: "Profesyonel çalışanların başka şirketlere transferlerini zaman kaybetmeden sağlıyoruz. Şube ve işyeri değişikliklerinde hukuki süreç yönetimi.",
        href: "/calisma-izni-transferi",
        color: "bg-orange-600",
        lightColor: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
        icon: <Building size={28} />,
        title: "Kurumsal Toplu Başvuru",
        desc: "50+ yabancı personel istihdam eden kurumsal şirketlere özel toplu başvuru yönetimi. Dedicated hesap yöneticisi ve öncelikli destek.",
        href: "/toplu-basvuru",
        color: "bg-slate-800",
        lightColor: "bg-slate-50 text-slate-800 border-slate-200",
    },
    {
        icon: <Home size={28} />,
        title: "İkamet İzni",
        desc: "Kısa dönem, uzun dönem, öğrenci ve aile ikamet izni başvurularında tam destek. Başvurudan sonuca kadar sürecin tamamını yönetiyoruz.",
        href: "/ikamet-izni",
        color: "bg-cyan-600",
        lightColor: "bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
        icon: <Flag size={28} />,
        title: "Vatandaşlık İşlemleri",
        desc: "Yatırım yoluyla vatandaşlık başvurusu ve istisnai vatandaşlık süreçlerinde hukuki destek sağlıyoruz.",
        href: "/vatandaslik",
        color: "bg-red-600",
        lightColor: "bg-red-50 text-red-600 border-red-100",
    },
    {
        icon: <Building2 size={28} />,
        title: "Yabancı Ortaklı Şirket Kuruluşu",
        desc: "Türkiye'de yabancı ortaklı şirket kuruluş sürecinizi A'dan Z'ye yönetiyoruz. Ticaret odası kayıtlarından vergi dairesine kadar tam destek.",
        href: "/sirket-kurulusu",
        color: "bg-purple-600",
        lightColor: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
        icon: <FileText size={28} />,
        title: "SGK & Bordro Danışmanlık",
        desc: "Yabancı personellerinizin SGK işlemleri, bordro hesaplamaları ve asgari ücret güncellemelerinde ücretsiz danışmanlık.",
        href: "/sgk-bordro",
        color: "bg-violet-600",
        lightColor: "bg-violet-50 text-violet-600 border-violet-100",
    },
    {
        icon: <Landmark size={28} />,
        title: "Turkuaz Kart",
        desc: "Nitelikli yabancılar için Turkuaz Kart başvuru sürecinde rehberlik ve hukuki destek.",
        href: "/turkuaz-kart",
        color: "bg-teal-600",
        lightColor: "bg-teal-50 text-teal-600 border-teal-100",
    },
];

export default function HizmetlerimizPage() {
    return (
        <PageTransition>
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Hizmetlerimiz"
                        title="Size En Uygun Hizmeti Seçin"
                        description="Türkiye'deki yabancı personel istihdamı için ihtiyaç duyacağınız tüm hizmetler tek çatı altında."
                    />
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${service.lightColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                                    {service.desc}
                                </p>
                                <div className="flex items-center gap-2 mt-6 text-sm font-bold text-slate-400 group-hover:text-blue-600 group-hover:gap-4 transition-all">
                                    Detaylar <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
