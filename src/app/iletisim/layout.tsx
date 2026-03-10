import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Uzman danışmanlarımız size yardımcı olmaktan memnuniyet duyar. Çalışma izni, ikamet izni ve diğer konularda bize ulaşın.",
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
