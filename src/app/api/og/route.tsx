import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Başlık ve alt başlık bilgilerini URL parametrelerinden al (fallback'lerle birlikte)
    const title = searchParams.get("title") || "Atasa Danışmanlık";
    const badge = searchParams.get("badge") || "Profesyonel Hizmetlerimiz";

    // Renk yapılandırması (Koyu mavi/Slate temalı premium görünüm)
    const bgGradient = "linear-gradient(135deg, #020617 0%, #1e1b4b 100%)";
    const textBase = "#f8fafc"; // slate-50

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: bgGradient,
            fontFamily: "sans-serif",
            padding: "80px",
            position: "relative",
          }}
        >
          {/* Logo / Badge Alanı */}
          <div
            style={{
              // @ts-ignore
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                // @ts-ignore
                display: "flex",
                alignItems: "center",
                background: "rgba(59, 130, 246, 0.15)", // blue-500/15
                border: "1px solid rgba(59, 130, 246, 0.3)",
                padding: "8px 24px",
                borderRadius: "9999px",
                color: "#60a5fa", // blue-400
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {badge}
            </div>
          </div>

          {/* Ana Başlık */}
          <div
            style={{
              // @ts-ignore
              display: "flex",
              textAlign: "center",
              fontSize: title.length > 30 ? 64 : 84,
              fontWeight: 900,
              color: textBase,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>

          {/* Alt Slogan / Marka */}
          <div
            style={{
              position: "absolute",
              bottom: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                // @ts-ignore
                display: "flex",
                alignItems: "center",
                fontSize: 32,
                fontWeight: 600,
                color: "#94a3b8", // slate-400
                letterSpacing: "0.05em",
              }}
            >
              Türkiye'nin Lider Çalışma İzni & İkamet Danışmanlığı
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
