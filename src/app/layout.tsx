import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import { ServiceWorkerRegistrar } from "@/shared/components/ServiceWorkerRegistrar";
import { FloatingWhatsApp } from "@/shared/components/FloatingWhatsApp";
import { StickyCTABar } from "@/shared/components/StickyCTABar";
import { ExitIntentPopup } from "@/shared/components/ExitIntentPopup";
import { PageLoadAnimation } from "@/shared/components/PageLoadAnimation";


const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0047BB",
};

export const metadata: Metadata = {
  title: {
    default: "Atasa Kurumsal | Çalışma İzni & İkamet Danışmanlık",
    template: "%s | Atasa Kurumsal",
  },
  description:
    "Türkiye'de yabancı personel çalışma izni, ikamet izni ve vatandaşlık danışmanlığında 12 yıllık deneyim. Profesyonel ve güvenilir çözüm ortağınız.",
  keywords: [
    "çalışma izni",
    "çalışma izni danışmanlık",
    "ikamet izni",
    "yabancı çalışma izni",
    "atasa kurumsal",
    "vatandaşlık",
    "yabancı personel",
  ],
  authors: [{ name: "Atasa Kurumsal Danışmanlık" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Atasa Kurumsal",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Atasa Kurumsal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-slate-900`}>
        <QueryProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20 md:pt-24">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <StickyCTABar />
            <ExitIntentPopup />
            <PageLoadAnimation />

          </div>
        </QueryProvider>
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
