import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Türkiye'nin lider kurumlarından sanat dünyasının en parlak isimlerine kadar, saygın referanslarımızla yabancıların yasal süreçlerinde profesyonel çözüm ortağıyız.",
  alternates: {
    canonical: "https://www.atasakurumsal.com.tr/referanslar",
  },
};

export default function ReferanslarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
