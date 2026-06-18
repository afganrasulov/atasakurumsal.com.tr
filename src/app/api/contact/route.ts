import { NextRequest, NextResponse } from "next/server";

// Kurumsal iletişim formları → self-hosted VPS PostgREST (atasa_mobi.form_submissions,
// project='atasakurumsal'). Superadmin paneli (superadmin.atasa.tr) bu kayıtları gösterir.
// Sunucu tarafı çağrı → CORS yok, anon key client'a sızmaz.
const VPS_RPC_URL =
  process.env.ATASA_VPS_RPC_URL ||
  "https://api.atasa.mobi/rest/v1/rpc/insert_form_submission";
// role=anon JWT — public key (atasa.mobi blogService ile aynı mantık).
const VPS_ANON_KEY =
  process.env.ATASA_VPS_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6ImF0YXNhLXNlbGYtaG9zdGVkIiwiaWF0IjoxNzgwNTE3ODUwLCJleHAiOjIwOTU4Nzc4NTB9.BwV5H9msUN_XbBFsgH4sL7OD6nG4PV6RHU6ibfigspU";

const MAX_ATTEMPTS = 3;
const TIMEOUT_MS = 8000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// VPS RPC'ye yazar. Mesaj kaybını önlemek için ağ hatası / timeout / 5xx'te retry eder.
// 4xx kalıcı hata → retry yok. Başarıda true döner.
async function insertToVps(
  payload: Record<string, unknown>,
): Promise<boolean> {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(VPS_RPC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: VPS_ANON_KEY,
          Authorization: `Bearer ${VPS_ANON_KEY}`,
          "Content-Profile": "atasa_mobi",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (res.ok) return true;

      // 4xx = kalıcı (payload sorunu) → retry anlamsız, çık.
      if (res.status >= 400 && res.status < 500) {
        const detail = await res.text().catch(() => "");
        console.error("contact: VPS 4xx (retry yok):", res.status, detail);
        return false;
      }
      // 5xx → retry'e düş.
      console.error(`contact: VPS ${res.status} (deneme ${attempt}/${MAX_ATTEMPTS})`);
    } catch (err) {
      clearTimeout(timer);
      // Ağ hatası / timeout (abort) → retry.
      console.error(
        `contact: VPS ağ hatası/timeout (deneme ${attempt}/${MAX_ATTEMPTS}):`,
        (err as Error)?.name || err,
      );
    }
    if (attempt < MAX_ATTEMPTS) await sleep(attempt * 500); // 0.5s, 1s artan bekleme
  }
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Ad ve telefon zorunludur." },
        { status: 400 },
      );
    }

    // Gerçek ziyaretçi IP'si + user-agent (panelde doğru görünsün).
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;
    const ua = req.headers.get("user-agent") || null;

    const payload = {
      p_form_type: "contact",
      p_first_name: name,
      p_last_name: "", // RPC'de zorunlu (default yok); ad tek alanda → first_name
      p_email: String(body.email ?? "").trim() || null,
      p_phone: phone,
      p_message: String(body.message ?? "").trim() || null,
      p_subject: String(body.subject ?? "").trim() || null,
      p_project: "atasakurumsal",
      p_source: body.source === "mini" ? "kurumsal_mini" : "kurumsal_iletisim",
      p_ip_address: ip,
      p_user_agent: ua,
    };

    const ok = await insertToVps(payload);
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "Mesaj kaydedilemedi." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası." },
      { status: 500 },
    );
  }
}
