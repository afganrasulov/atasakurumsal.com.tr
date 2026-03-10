import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description:
    "Türkiye'de ve globalde edindiğimiz 12 yıllık deneyimle, yabancı personel çalışma izni ve ikamet süreçlerinde en güvenilir profesyonel çözüm ortağınız.",

  alternates: {
    canonical: "https://www.atasakurumsal.com.tr/hakkimizda",
  },
};

export default function HakkimizdaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
