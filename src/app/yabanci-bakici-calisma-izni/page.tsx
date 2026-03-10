import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import {
    Heart,
    ArrowRight,
    Home,
    Baby,
    UserCheck,
    Clock,
    FileText,
    CheckCircle2,
    BriefcaseMedical
} from "lucide-react";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

export const metadata: Metadata = {
    title: "Yabancı Bakıcı Çalışma İzni | Atasa Danışmanlık",
    description:
        "Ev hizmetleri, bebek, çocuk ve yaşlı bakımı için yabancı bakıcı çalışma izni süreçlerini yasal güvenceyle yönetiyoruz. Aileniz için profesyonel ve güvenilir danışmanlık.",
    alternates: {
        canonical: "https://www.atasakurumsal.com.tr/yabanci-bakici-calisma-izni",
    },
};

const serviceAreas = [
    { icon: <Baby size={32} />, title: "Bebek & Çocuk Bakıcısı", desc: "15 yaşından küçük çocukların bakımı için yabancı personel istihdamına izin verilmektedir." },
    { icon: <Heart size={32} />, title: "Yaşlı Bakıcısı", desc: "65 yaşından büyük aile büyüklerinin evde bakımı için yabancı bakıcı izni alınabilmektedir." },
    { icon: <BriefcaseMedical size={32} />, title: "Hasta Bakıcısı", desc: "Yaş sınırı olmaksızın, sürekli bakım gerektiren hastalar için sağlık raporuyla izin alınır." }
];

const requirements = [
    { title: "Çocuk veya Yaşlı Şartı", desc: "Evde bakıma muhtaç 65 yaş üstü bir fert veya 15 yaşından küçük bir çocuk bulunmalıdır." },
    { title: "Gelir Kriteri", desc: "İşverenin yabancının asgari maaş ve SGK giderlerini karşılayabilecek belgelenebilir yeterli geliri olmalıdır." },
    { title: "Sağlık Raporu (Gerekirse)", desc: "15-65 yaş arası bakım gerektiren hastalar için tam teşekküllü hastaneden sağlık kurulu raporu alınmalıdır." },
    { title: "Yabancı Şartı", desc: "Yabancının Türkiye'de yasal olarak ikamet etmesi (min 6 aylık ikamet izni) veya yurtdışı konsolosluk başvurusu yapılması gerekir." }
];

export default function YabanciBakiciCalismaIzniPage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-rose-50 via-rose-100 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl pt-10 pb-16">
                        <Badge variant="blue" className="bg-rose-100 text-rose-600 border border-rose-200 mb-6">
                            EV HİZMETLERİ & BAKIM
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.1]">
                            Yabancı Bakıcı <br />
                            <span className="text-rose-600">Çalışma İzni</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                            Ailenizin en değerli üyelerini emanet ettiğiniz yabancı bakıcılar için gerekli yasal izin süreçlerini güvenle yönetiyoruz. Bebek, çocuk, yaşlı ve hasta bakıcı çalışma izni işlemlerinde A'dan Z'ye profesyonel danışmanlık hizmeti sunuyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-600/20 hover:scale-105"
                            >
                                Hemen Bilgi Alın <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Önemli Kriterler"
                        title="Ev Hizmetlerinde Çalışma İzni Şartları"
                        description="Bakanlık, ev hizmetlerinde suistimalleri önlemek amacıyla son derece sıkı kriterler uygulamaktadır. Basit bir ev temizliği veya gündelik işler için çalışma izni verilmemektedir."
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {serviceAreas.map((area, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-rose-100 transition-all text-center group">
                                <div className="w-20 h-20 mx-auto bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-rose-100">
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Critical Info & Requirements */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                badge="Bilinmesi Gerekenler"
                                title="Yabancı Bakıcı İzni Başvuru Şartları"
                                description="Türkiye Cumhuriyeti kanunlarına göre ev hizmetlerinde yabancı çalıştırmak sıkı kurallara bağlanmıştır."
                            />
                            
                            <div className="space-y-6 mt-8">
                                <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl">
                                    <p className="text-rose-900 font-medium my-0">
                                        <strong>Önemli Uyarı:</strong> Sadece genel ev temizliği, ütü vb. ev işleri için (bakıma muhtaç çocuk, hasta veya yaşlı olmaksızın) yabancı personele çalışma izni <strong>verilmemektedir</strong>. Mutlaka bakım hizmeti şartı aranır.
                                    </p>
                                </div>
                                
                                <p className="text-slate-600 leading-relaxed">
                                    Başvuru süreci, yabancının halihazırda Türkiye'de geçerli bir ikamet izni (turistik, öğrenci vb. en az 6 ay süreli) olup olmamasına göre değişiklik gösterir. İkamet izni olanlar için yurt içinden, olmayanlar için kişinin uyruğunda bulunduğu ülkedeki Türk Konsolosluklarından başvuru yapılır.
                                </p>
                            </div>
                        </div>
                        
                        {/* Requirements List */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <UserCheck className="text-rose-500" />
                                Temel Şartlar
                            </h3>
                            <ul className="space-y-6">
                                {requirements.map((req, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 font-bold border border-slate-200">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">{req.title}</h4>
                                            <p className="text-sm text-slate-500">{req.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <Badge variant="blue" className="bg-slate-100 text-slate-600 mb-6">NEDEN ATASA?</Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Ailenizin Güvenliği İçin Doğru Danışmanlık</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Ev hizmetlerinde kaçak yabancı çalıştırmanın cezai boyutları oldukça yüksektir. Ayrıca SGK ve e-Devlet üzerinden her ay yapılması gereken yasal yükümlülükler karmaşık olabilir. Atasa Kurumsal olarak, ilk başvurudan SGK kapanışına kadar ailenize tam tekmil refakat ediyoruz.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                        {[
                            "Evrak Düzeni Sağlıyoruz",
                            "E-Devlet Üzerinden SGK İşlemleri",
                            "Süre Uzatma Takipleri",
                            "Yasal Haklar Konusunda Bilgilendirme"
                        ].map((perk, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center gap-3 border border-slate-100 hover:border-rose-200 transition-colors">
                                <CheckCircle2 className="text-rose-500" size={28} />
                                <span className="font-bold text-slate-800 text-sm">{perk}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-rose-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Süreci Uzmanlara Bırakın</h2>
                    <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
                        Evinizde istihdam edeceğiniz yabancı bakıcılar için riskleri ortadan kaldırın. Ücretsiz değerlendirme için bizimle iletişime geçin.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-rose-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl inline-flex items-center gap-3 text-lg hover:scale-105 active:scale-95"
                    >
                        Danışmanlık Alın <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
