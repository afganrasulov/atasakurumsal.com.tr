import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Türkiye'nin lider kurumlarından en parlak isimlere kadar, on binlerce başarılı işlemle yasal süreçlerinizi güvene taşıyoruz. Gurur duyduğumuz referanslarımız.",
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
