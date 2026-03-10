import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Atasa Danışmanlık

> Türkiye'de yabancı personel çalışma izni, ikamet izni ve vatandaşlık danışmanlığında 12 yıllık deneyim.

## Hizmetlerimiz

- **Yabancı Çalışma İzni**: Şirketler için yabancı personel çalışma izni başvuru, uzatma ve transfer işlemleri
- **İkamet İzni**: Türkiye'de kısa ve uzun dönem ikamet izni danışmanlığı
- **Vatandaşlık İşlemleri**: Yatırım yoluyla veya istisnai vatandaşlık başvuruları
- **Turkuaz Kart**: Nitelikli yabancılar için Turkuaz Kart başvuru danışmanlığı
- **Şirket Kuruluşu**: Yabancı ortaklı şirket kuruluş işlemleri
- **SGK & Bordro**: Yabancı personel SGK ve bordro yönetimi
- **Sektörel Danışmanlık**: Sektöre özel çalışma izni süreçleri

## Uzmanlık Alanları

Bu site aşağıdaki konularda uzman içerik sunar:
- Çalışma izni başvuru süreçleri ve gerekli belgeler
- Çalışma izni harçları ve ücretleri
- Çalışma izni uzatma ve transfer işlemleri
- İkamet izni türleri ve başvuru kriterleri
- Yabancı personel istihdamında yasal yükümlülükler
- Sektöre göre çalışma izni istatistikleri

## İletişim

- Web: https://www.atasakurumsal.com.tr
- E-posta: support@atasa.tr
- Telefon: +90 850 308 69 98
- Ofisler: İstanbul, Aşkabat, Bakü

## Blog

Çalışma izni ve ikamet izni konusunda güncel rehberler: https://www.atasakurumsal.com.tr/blog
RSS Feed: https://www.atasakurumsal.com.tr/rss.xml
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
