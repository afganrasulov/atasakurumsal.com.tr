import type { Metadata } from "next";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { COMPANY_INFO } from "@/shared/constants/company";
import { MapPin, Phone, Mail, ShieldCheck, Users, Globe, Award, BookOpen, Scale } from "lucide-react";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description: "Atasa Kurumsal Danışmanlık hakkında — 12 yıllık deneyim, güvenilirlik ve profesyonel çalışma izni danışmanlığı.",
};

const values = [
    { icon: <ShieldCheck size={24} />, title: "Güvenilirlik", desc: "İş ihtiyaçlarında öncelik güvenilirliktir. Şirketimizin çekirdeğini \"güven\" oluşturur." },
    { icon: <Users size={24} />, title: "Saygılı Olmak", desc: "Pozisyon, unvan, yaş, cinsiyet hiçbir farklılık bizim için ayırıcı özellik değildir." },
    { icon: <Globe size={24} />, title: "Basit Düşünmek", desc: "Müşterilerimizin hayatını kolaylaştırmak, karmaşık süreçlerden uzak durmak temel amacımız." },
    { icon: <Award size={24} />, title: "Uzmanlık", desc: "Tüm personellerimiz alanında uzman ve eğitimlidir. Beş ayrı dilde akıcı iletişim kuruyoruz." },
    { icon: <BookOpen size={24} />, title: "Sürekli Güncellenme", desc: "Sektörümüzü dakika dakika takip eden istatistik departmanımızla müşterilerimizi anlık bilgilendiriyoruz." },
    { icon: <Scale size={24} />, title: "Sorumluluk", desc: "İş tanımı kurgulanmıştır, görev ve sorumluluklarımızın bilincinde çalışırız." },
];

export default function HakkimizdaPage() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <SectionHeader
                            badge="Hakkımızda"
                            title="Güvendiğiniz Uzmanlığı Sunuyoruz"
                            description="Atasa Kurumsal Danışmanlık A.Ş., 19.04.2012 yılında Ankara Ticaret Odası'na kayıt olarak hizmet hayatına başladı. 12 yıllık tecrübemizle Türkiye'deki yabancı personel istihdamında güvenilir çözüm ortağınızız."
                        />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-black text-blue-600">{COMPANY_INFO.stats.workPermits.toLocaleString("tr-TR")}</div>
                            <div className="text-sm font-bold text-slate-500 mt-1">Çalışma İzni</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-blue-600">{COMPANY_INFO.stats.corporateClients.toLocaleString("tr-TR")}</div>
                            <div className="text-sm font-bold text-slate-500 mt-1">Kurumsal Müşteri</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-blue-600">{COMPANY_INFO.stats.internationalReferences}</div>
                            <div className="text-sm font-bold text-slate-500 mt-1">Uluslararası Referans</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-blue-600">{COMPANY_INFO.experienceYears}+</div>
                            <div className="text-sm font-bold text-slate-500 mt-1">Yıllık Tecrübe</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Değerlerimiz"
                        title="Neden Atasa Kurumsal Danışmanlık?"
                        align="center"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offices */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Ofislerimiz"
                        title="Her İki Şehirde de Yanınızdayız"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        {Object.values(COMPANY_INFO.offices).map((office) => (
                            <div
                                key={office.city}
                                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{office.city}</h3>
                                </div>
                                <address className="not-italic text-slate-600 leading-relaxed text-sm">
                                    {office.address}
                                </address>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                            <Phone size={16} className="text-blue-600" />
                            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="font-medium hover:text-blue-600">
                                {COMPANY_INFO.phone}
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                            <Mail size={16} className="text-blue-600" />
                            <a href={`mailto:${COMPANY_INFO.email}`} className="font-medium hover:text-blue-600">
                                {COMPANY_INFO.email}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
