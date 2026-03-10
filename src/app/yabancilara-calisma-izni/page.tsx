import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Breadcrumb } from "@/shared/components/ui/Breadcrumb";
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
    Briefcase,
    Building,
    CheckCircle2
} from "lucide-react";
import type { PricingRow } from "@/shared/types";
import { COMPANY_INFO } from "@/shared/constants/company";
import { formatPhone } from "@/shared/lib/utils";

export const metadata: Metadata = {
    title: "Yabancılara Çalışma İzni Alma | Atasa Danışmanlık",
    description:
        "Türkiye'de yabancı personel çalışma izni alma sürecini %98 başarı oranıyla yönetiyoruz. Kurumsal firmalar için uçtan uca yasal danışmanlık ve evrak takibi.",
    alternates: {
        canonical: "https://www.atasakurumsal.com.tr/yabancilara-calisma-izni",
    },
};

const processSteps = [
    { title: "Ön Değerlendirme & Uygunluk Analizi", desc: "Çalıştırılacak yabancının eğitim durumu, uzmanlığı ve şirketin yasal kriterleri detaylıca incelenir." },
    { title: "Evrak ve Belge Hazırlığı", desc: "İş sözleşmeleri, apostilli diplomalar, tercümeler ve diğer gerekli hukuki belgeler eksiksiz toplanır." },
    { title: "Maaş & SGK Kriterleri Belirleme", desc: "Bakanlığın mesleğe göre belirlediği asgari ücret tutarları kontrol edilir ve şirkete raporlanır." },
    { title: "e-İzin Sistemi Üzerinden Başvuru", desc: "Çalışma ve Sosyal Güvenlik Bakanlığı sistemine profesyonel giriş ve kayıt işlemleri yapılır." },
    { title: "Bakanlık Takibi & Süreç Yönetimi", desc: "İstenilen ek evrak veya açıklama taleplerine anında yanıt verilir, süreç hızlandırılır." },
    { title: "Onay & SGK Süreci", desc: "Onaylanan izin sonrası 15 gün içinde yapılması gereken SGK girişleri için detaylı rehberlik sunulur." }
];

const requirements = [
    { icon: <Building size={24} />, title: "Sermaye Şartı", desc: "İşverenin ödenmiş sermayesinin en az 100.000 TL olması veya brüt satışlarının en az 800.000 TL olması gerekir." },
    { icon: <Users size={24} />, title: "İstihdam Şartı", desc: "Çalışma izni talep edilen işyerinde en az 5 Türkiye Cumhuriyeti vatandaşı çalışıyor olmalıdır." },
    { icon: <Briefcase size={24} />, title: "Mesleki Yeterlilik", desc: "Yabancının eğitim veya deneyim durumu, başvurulan pozisyona tam olarak uygun olmalıdır." },
];

export default function YabancilaraCalismaIzniPage() {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-[#020617] via-blue-950 to-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <Breadcrumb items={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Yabancılara Çalışma İzni Alma" }]} />
                        <Badge variant="blue" className="bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
                            KURUMSAL İSTİHDAM ÇÖZÜMLERİ
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                            <span className="text-blue-400 block mb-2">Yabancılara</span>
                            Çalışma İzni Alma
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                            Türkiye'de yabancı personel istihdam etmek isteyen işletmeler için A'dan Z'ye profesyonel çalışma izni danışmanlığı. 12 yıllık tecrübemiz ve %98 başarı oranımızla bürokratik engelleri ortadan kaldırıyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20 hover:scale-105"
                            >
                                Hemen Başvurun <ArrowRight size={20} />
                            </Link>
                            <a
                                href={`tel:${formatPhone(COMPANY_INFO.phone)}`}
                                className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/10 backdrop-blur-md"
                            >
                                Bilgi Alın
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is it & Why us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                badge="Hizmet Detayları"
                                title="Yabancı Çalışma İzni Nedir?"
                                description="Türkiye'de yasal olarak bir işveren nezdinde çalışmak isteyen yabancı uyruklular için Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) tarafından verilen resmi onay belgesidir."
                            />
                            <div className="mt-8 space-y-6">
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Başvuru süreci, teknik yeterlilikler, doğru kodlama ve evrak noksanlığı nedeniyle sık sık ret ile sonuçlanabilmektedir. Yanlış başvuru yapmak, yabancının ilerideki haklarını da kısıtlayabilmektedir.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Atasa Kurumsal olarak, <strong>istihdam edilecek personelin niteliğine</strong>, şirketinizin mali yapısına ve faaliyet alanına göre en optimum yasal stratjiyi belirliyoruz. Ret alma riskini minimize ediyor, süreci sizin adınıza şeffaf bir şekilde uçtan uca yönetiyoruz.
                                </p>
                                
                                <ul className="space-y-4 mt-8">
                                    {['Ev değerlendirmesi ve dosya açılışı', 'Bakanlık e-izin portali yönetimi', 'Şirket KEP ve e-imza entegrasyonu', 'Yabancı meslek kodunun doğru seçimi'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Right Stats / Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-4xl font-black text-blue-600 mb-2">%98</h3>
                                <p className="font-bold text-slate-800 mb-2">Başarı Oranı</p>
                                <p className="text-sm text-slate-500">Doğru başvuru ile yüksek onay oranı garantisi.</p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow sm:-mt-10 sm:mb-10">
                                <h3 className="text-4xl font-black text-blue-600 mb-2">15-30</h3>
                                <p className="font-bold text-slate-800 mb-2">Günlük Süreç</p>
                                <p className="text-sm text-slate-500">Ortalama onay sürecimiz sektör standartlarının altında.</p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-4xl font-black text-blue-600 mb-2">5+</h3>
                                <p className="font-bold text-slate-800 mb-2">Yabancı Dil</p>
                                <p className="text-sm text-slate-500">Geniş dil destekli tercüme ve danışmanlık.</p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow sm:-mt-10 sm:mb-10">
                                <h3 className="text-4xl font-black text-blue-600 mb-2">7/24</h3>
                                <p className="font-bold text-slate-800 mb-2">Anlık Takip</p>
                                <p className="text-sm text-slate-500">Sürecin her aşamasında şeffaf bilgilendirme.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Criteria Criteria */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Bakanlık Kriterleri"
                        title="İşveren İçin Temel Şartlar"
                        description="Çalışma izni başvurusu yapabilmek için işverenin sağlaması gereken ÇSGB temel kriterleri."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {requirements.map((req, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                    {req.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{req.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{req.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-slate-500 mt-10 max-w-2xl mx-auto text-sm">
                        * Bazı spesifik sektörler (havacılık, eğitim, ev hizmetleri) veya Doğrudan Yabancı Yatırımlar (FDI) için bu kriterlerde istisnalar uygulanabilmektedir. Detaylar için danışmanlarımızla görüşün.
                    </p>
                </div>
            </section>

            {/* Step by step */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Süreç"
                        title="Adım Adım Çalışma İzni"
                        description="Karmaşık süreçleri sizin için basit, anlaşılır ve izlenebilir adımlara ayırdık."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {processSteps.map((step, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 font-black text-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Yabancı Personel İstihdamına Başlayın</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Şirketinizin ihtiyaç duyduğu global yetenekleri yasal ve güvenli bir şekilde bünyenize katmak için bugün uzman danışmanlarımızla iletişime geçin.
                    </p>
                    <Link
                        href="/iletisim"
                        className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-xl inline-flex items-center gap-3 text-lg hover:scale-105 active:scale-95"
                    >
                        Ücretsiz Ön Görüşme Yapın <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
}
