import type { Metadata } from "next";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Accordion } from "@/shared/components/ui/Accordion";

export const metadata: Metadata = {
    title: "Sık Sorulan Sorular",
    description: "Atasa Kurumsal Danışmanlık hakkında sık sorulan sorular ve cevapları.",
};

const faqItems = [
    {
        question: "Neden Atasa Kurumsal?",
        answer: "Bu sorunun birçok cevabı var ama tek cümle ile açıklamak gerekirse kurumlar çalıştıkları şirketin uzmanlığına güvenmek ister, şirketimiz 12 yıllık uzmanlığa sahiptir.",
    },
    {
        question: "Danışmanlık ücretleriniz niye yüksek?",
        answer: "Aslında değil, Atasa Kurumsal Türkiye'de yabancılar için çalışma izni danışmanlık hizmeti alacak firmalara maliyetlerini net bir şekilde belirttiği için diğer meslektaşlarımız bizim altımızda teklif sunduklarında ücretlerimizin yüksek olduğunu düşünebilirsiniz.",
    },
    {
        question: "Müşterilerinize garanti veriyor musunuz?",
        answer: "Hayır, elbette garanti vermiyoruz, biz müşterilerimizin zamanını alacak başvuruları onların adına yapmaktayız. Son karar Çalışma Bakanlığı'nındır. Fakat biz olumsuz sonuçlanması yüksek müşteri taleplerini kabul etmiyoruz.",
    },
    {
        question: "Çalışma izni danışmanlık hizmetinizin kapsamı nedir?",
        answer: "Şirketimiz müşterimizin çalıştırmak istediği yabancı personelin yapacağı görevi üzerine gerekli aksiyonu alıyor ve yetki vermenizin ardından bütün başvuruları uzmanlarımız yapıyor ve sonuçlanıncaya kadar takip ediyor.",
    },
    {
        question: "Bazı durumlarda telefonla ulaşamıyoruz neden?",
        answer: "Şirketimiz web sitesi günde 5000-6000 civarında tekil ziyaretçi almaktadır ve bazı konularda bizden bilgi almak isteyen kullanıcılarımıza call center'ımız çok nadiren de olsa yetişememektedir.",
    },
    {
        question: "Neden danışmanlık ücretlerini peşin talep ediyorsunuz?",
        answer: "Her şirketin bir ödeme prensibi olduğunu biliyoruz, bazı ödeme yöntemleri maalesef ki şirketimizin finans döngüsüne uygun olmadığı için ilk defa çalıştığımız müşterilerimizden peşin ödeme talep etmekteyiz.",
    },
    {
        question: "Başka konularda danışmanlık hizmeti veren şirketlerle iş ortaklığı yapıyor musunuz?",
        answer: "Evet, Atasa Kurumsal Danışmanlık olarak bir iş ortaklığı modeli oluşturduk. Bize avukatlar, mali müşavirler ve diğer danışmanlık şirketleri üzerinden yönlendirilen müşteriler için fiyat listemiz üzerinden %20 oranında komisyon ödüyoruz.",
    },
];

export default function SSSPage() {
    return (
        <PageTransition>
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="SSS"
                        title="Sık Sorulan Sorular"
                        description="Merak ettiğiniz konular hakkında hızlı cevaplar."
                        align="center"
                    />
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Accordion items={faqItems} />
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
