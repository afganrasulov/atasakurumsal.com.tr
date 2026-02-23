#!/usr/bin/env node
/**
 * Referans logolarını Railway'den indirip Supabase Storage'a yükler
 */

const SUPABASE_URL = "https://khlvkvusavalbkjrwbsy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtobHZrdnVzYXZhbGJranJ3YnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MjYxODQsImV4cCI6MjA4NDQwMjE4NH0.n-e2Dy_YTyWuzvUsKNyie10H_i_X50Kv-KMAtX2c2CY";
const BUCKET = "public-assets";
const FOLDER = "atasa_kurumsal_web_sitesi/referanslar";

const LOGOS = [
    { name: "nama-yapi", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262210-748462668.png" },
    { name: "altinpamuk-tekstil", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262190-579011951.png" },
    { name: "ar-ge-prefabrik", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262183-751061879.png" },
    { name: "teo-yapi", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262172-112066654.png" },
    { name: "adetas-yapi", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262167-450606002.png" },
    { name: "bnb-insaat", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262114-332273875.png" },
    { name: "iyiokur-metal", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262090-226933314.png" },
    { name: "ozgul-yapi", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262078-152287494.png" },
    { name: "saltanat-gida", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262071-504688047.png" },
    { name: "nuans-group", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262058-749689102.png" },
    { name: "arnes-mekanik", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262040-58399250.png" },
    { name: "ciar-medical", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262027-691910070.png" },
    { name: "maxx", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262019-836473486.png" },
    { name: "sismanoglu-tekstil", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261988-244933493.png" },
    { name: "twins-company", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261942-771582326.png" },
    { name: "bayraktar-ambalaj", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261923-955212227.png" },
    { name: "cengiz-holding", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261896-326901415.png" },
    { name: "usco", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261879-322599022.png" },
    { name: "techno-tool", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261879-832849862.png" },
    { name: "tor-industry", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261868-232213843.png" },
    { name: "gusto", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261860-914961073.png" },
    { name: "nfess-peyzaj", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261830-205100406.png" },
    { name: "yk-kablo", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261818-100530903.png" },
    { name: "seven-sut", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261789-770922514.png" },
    { name: "dolunay-tekstil", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261754-537045318.png" },
    { name: "nef-teknik", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261668-625980626.png" },
    { name: "pcderslerim", url: "http://upload-service-production-dd42.up.railway.app/files/1766852261907-516511860.png" },
    { name: "bakir-nakliyat", url: "http://upload-service-production-dd42.up.railway.app/files/1766919567168-795362619.png" },
    { name: "big-denim", url: "http://upload-service-production-dd42.up.railway.app/files/1766919567166-77035413.png" },
    { name: "eg-ambalaj", url: "http://upload-service-production-dd42.up.railway.app/files/1766919567026-887454868.png" },
    { name: "marco-plas", url: "http://upload-service-production-dd42.up.railway.app/files/1766919567025-63619381.png" },
    { name: "usce", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566714-947011863.png" },
    { name: "ada-tibbi", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566712-932093444.png" },
    { name: "pergola", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566575-336705140.png" },
    { name: "alarga", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566501-238091210.jpg" },
    { name: "ceslas", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566325-17463615.jpg" },
    { name: "mustafa-ekmekci", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566180-924937382.jpg" },
    { name: "bvr-otelcilik", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566112-514775513.webp" },
    { name: "burgaz-mobilya", url: "http://upload-service-production-dd42.up.railway.app/files/1766919566112-443372728.png" },
    { name: "saltart-makina", url: "http://upload-service-production-dd42.up.railway.app/files/1766919564136-56664808.png" },
    { name: "mirat-gida", url: "http://upload-service-production-dd42.up.railway.app/files/1766919564136-490598283.webp" },
    { name: "mubdi-group", url: "http://upload-service-production-dd42.up.railway.app/files/1766919564129-685672608.jpg" },
    { name: "tekya", url: "http://upload-service-production-dd42.up.railway.app/files/1766919564052-488192200.png" },
    { name: "np-iz-yapi", url: "http://upload-service-production-dd42.up.railway.app/files/1766919564047-420163624.png" },
    { name: "arnes-ambalaj", url: "http://upload-service-production-dd42.up.railway.app/files/1766852262040-58399250.png" },
    { name: "seven-hayvancilik", url: "http://upload-service-production-dd42.up.railway.app/files/1766919563893-452293806.jpg" },
    { name: "nuans-sts", url: "http://upload-service-production-dd42.up.railway.app/files/1766919563887-319640976.png" },
    { name: "maxx-tasarim", url: "http://upload-service-production-dd42.up.railway.app/files/1766919563718-322193067.png" },
    { name: "tor-metal", url: "http://upload-service-production-dd42.up.railway.app/files/1766919563718-855249083.jpg" },
    { name: "demet-akalin", url: "http://upload-service-production-dd42.up.railway.app/files/1766919563352-874766814.jpg" },
    { name: "akin-akinozu", url: "http://upload-service-production-dd42.up.railway.app/files/1766920101899-174551240.jpg" },
    { name: "erkin-ergin", url: "http://upload-service-production-dd42.up.railway.app/files/1766920101674-36062219.jpg" },
];

const MIME_MAP = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp" };

async function uploadLogo({ name, url }) {
    try {
        const ext = url.split(".").pop().split("?")[0];
        const mime = MIME_MAP[ext] || "application/octet-stream";
        const fileName = `${name}.${ext}`;
        const storagePath = `${FOLDER}/${fileName}`;

        // Download from Railway
        const res = await fetch(url);
        if (!res.ok) { console.error(`❌ Download failed: ${name} (${res.status})`); return false; }
        const buffer = await res.arrayBuffer();

        // Upload to Supabase
        const uploadRes = await fetch(
            `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${storagePath}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${ANON_KEY}`,
                    "Content-Type": mime,
                    "x-upsert": "true",
                },
                body: buffer,
            }
        );

        if (uploadRes.ok) {
            console.log(`✅ ${fileName}`);
            return true;
        } else {
            const err = await uploadRes.text();
            console.error(`❌ Upload failed: ${name} — ${err}`);
            return false;
        }
    } catch (e) {
        console.error(`❌ Error: ${name} — ${e.message}`);
        return false;
    }
}

async function main() {
    console.log(`\n🚀 ${LOGOS.length} logo yüklenecek...\n`);
    let ok = 0, fail = 0;

    // Process in batches of 5 for speed
    for (let i = 0; i < LOGOS.length; i += 5) {
        const batch = LOGOS.slice(i, i + 5);
        const results = await Promise.all(batch.map(uploadLogo));
        results.forEach((r) => (r ? ok++ : fail++));
    }

    console.log(`\n📊 Sonuç: ${ok} başarılı, ${fail} başarısız\n`);
}

main();
