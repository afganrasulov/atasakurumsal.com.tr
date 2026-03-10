import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description:
    "Çalışma izni, ikamet izni, yabancı sermayeli şirket kuruluşu ve vatandaşlık işlemlerinde kurumsal firmalara özel, uçtan uca hukuki danışmanlık hizmetleri.",

  alternates: {
    canonical: "https://www.atasakurumsal.com.tr/hizmetlerimiz",
  },
};

export default function HizmetlerimizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
