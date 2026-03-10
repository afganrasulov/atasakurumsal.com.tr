import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Çalışma izni ve kurumsal yabancı personel danışmanlık ihtiyaçlarınız için Atasa'nın uzman hukuk ekibiyle anında iletişime geçin. Size özel çözümler hazırlayalım.",
  alternates: {
    canonical: "https://www.atasakurumsal.com.tr/iletisim",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
