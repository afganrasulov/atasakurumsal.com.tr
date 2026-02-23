import type { Metadata } from "next";
import { PageTransition } from "@/shared/components/PageTransition";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni",
    description: "Atasa Kurumsal Danışmanlık KVKK Aydınlatma Metni — kişisel veri koruma politikası.",
};

export default function KVKKPage() {
    return (
        <PageTransition>
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        badge="Yasal"
                        title="KVKK Aydınlatma Metni"
                    />
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl prose prose-slate prose-lg">
                        <h2>Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h2>

                        <p>
                            Atasa Kurumsal Danışmanlık A.Ş. (&quot;Şirket&quot;) olarak kişisel verilerinizin güvenliği konusunda
                            azami hassasiyet göstermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
                            kapsamında veri sorumlusu sıfatıyla aşağıda belirtilen amaçlarla ve yöntemlerle kişisel verilerinizi
                            işlemekteyiz.
                        </p>

                        <h3>1. Veri Sorumlusu</h3>
                        <p>
                            Atasa Kurumsal Danışmanlık A.Ş.<br />
                            Adres: İstiklal Cd. No 187 Beyoğlu İş Merkezi Kat:1 D:133 Beyoğlu / İstanbul<br />
                            E-posta: info@atasakurumsal.com
                        </p>

                        <h3>2. Kişisel Verilerin İşlenme Amacı</h3>
                        <ul>
                            <li>Çalışma izni danışmanlık hizmetlerinin yerine getirilmesi</li>
                            <li>İkamet izni başvuru süreçlerinin yönetilmesi</li>
                            <li>Müşteri ilişkilerinin yönetimi</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                            <li>İletişim faaliyetlerinin yürütülmesi</li>
                        </ul>

                        <h3>3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h3>
                        <p>
                            Kişisel verileriniz, internet sitemiz, müşteri görüşmeleri, e-posta ve telefon iletişimi
                            yoluyla toplanmaktadır. Bu veriler KVKK&apos;nın 5. ve 6. maddelerinde belirtilen hukuki
                            sebeplere dayanarak işlenmektedir.
                        </p>

                        <h3>4. Kişisel Verilerin Aktarılması</h3>
                        <p>
                            Toplanan kişisel veriler, hizmet gereklilikleri kapsamında ve yasal zorunluluklar dahilinde
                            ilgili kamu kurumları ile paylaşılabilmektedir. Şirketimiz ISO 27001 Bilgi Güvenliği
                            Yönetim Sistemi Sertifikası sahibidir ve müşteri bilgilerini üçüncü kişilerle veya reklam
                            şirketleri ile asla paylaşmamaktadır.
                        </p>

                        <h3>5. Veri Sahibi Hakları</h3>
                        <p>KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
                        <ul>
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>İşlenmiş ise buna ilişkin bilgi talep etme</li>
                            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yanlış veya eksik işlenmiş olması halinde düzeltilmesini isteme</li>
                            <li>Kanun kapsamında silinmesini veya yok edilmesini isteme</li>
                        </ul>

                        <p className="text-sm text-slate-500 mt-12 border-t border-slate-200 pt-6">
                            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
                            hazırlanmıştır. Son güncelleme: 2025
                        </p>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
