import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import { ServiceWorkerRegistrar } from "@/shared/components/ServiceWorkerRegistrar";
import { FloatingWhatsApp } from "@/shared/components/FloatingWhatsApp";
import { StickyCTABar } from "@/shared/components/StickyCTABar";
import { ExitIntentPopup } from "@/shared/components/ExitIntentPopup";
import { PageLoadAnimation } from "@/shared/components/PageLoadAnimation";
import { JsonLd } from "@/shared/components/seo/JsonLd";
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
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Atasa Danışmanlık",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Atasa Danışmanlık",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MCLFPJ47');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${montserrat.variable} font-sans antialiased text-slate-900`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCLFPJ47"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Global Structured Data */}
        <JsonLd schema={generateOrganizationSchema()} />
        <JsonLd schema={generateLocalBusinessSchema()} />
        <JsonLd schema={generateWebSiteSchema()} />
        <JsonLd schema={generateServiceSchemas()} />
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
