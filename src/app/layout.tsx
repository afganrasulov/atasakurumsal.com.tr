import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import { ServiceWorkerRegistrar } from "@/shared/components/ServiceWorkerRegistrar";
import { FloatingWhatsApp } from "@/shared/components/FloatingWhatsApp";
import { StickyCTABar } from "@/shared/components/StickyCTABar";
import { ExitIntentPopup } from "@/shared/components/ExitIntentPopup";
import { PageLoadAnimation } from "@/shared/components/PageLoadAnimation";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateServiceSchemas,
} from "@/lib/blog/aiSeoSchema";




const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0047BB",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atasakurumsal.com.tr"),
  title: {
    default: "Atasa Danışmanlık | Çalışma İzni & İkamet Danışmanlık",
    template: "%s | Atasa Danışmanlık",
  },
  description:
    "Türkiye'de yabancı personel çalışma izni, ikamet izni ve vatandaşlık danışmanlığında 12 yıllık deneyim. Profesyonel ve güvenilir çözüm ortağınız.",
  keywords: [
    "çalışma izni",
    "çalışma izni danışmanlık",
    "yabancılar için çalışma izni",
    "ikamet izni",
    "oturma izni",
    "vatandaşlık danışmanlığı",
  ],
  authors: [{ name: "Atasa Danışmanlık" }],
  creator: "Atasa Danışmanlık",
  publisher: "Atasa Danışmanlık",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Atasa Danışmanlık",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Atasa Danışmanlık",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased text-slate-900`} suppressHydrationWarning>
        {/* Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchemas()) }}
        />
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
