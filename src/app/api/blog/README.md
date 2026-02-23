# Blog API — Kullanım Kılavuzu

Anahtar kelimelerle OpenAI web search üzerinden güncel konu keşfi yapan, kullanıcı onayı ile SEO uyumlu Türkçe blog makaleleri üreten API sistemi.

---

## Sistem Mimarisi

```
Anahtar Kelimeler ("çalışma izni" vb.)
        │
        ▼
  ┌─────────────┐
  │  /discover   │  OpenAI web search ile konu keşfi
  └──────┬──────┘
         │ status: "discovered"
         ▼
  ┌─────────────┐
  │  /topics     │  Konuları incele & onayla
  └──────┬──────┘
         │ status: "approved"
         ▼
  ┌─────────────┐
  │  /generate   │  OpenAI + Web Search ile makale üret
  └──────┬──────┘
         │ status: "published"
         ▼
  ┌─────────────┐
  │  /posts      │  Blog yazılarını listele & göster
  └─────────────┘
```

---

## Kullanım Akışı

### Adım 1: Anahtar Kelimeleri Yönet

3 anahtar kelime varsayılan olarak ekli gelir. Yeni kelime eklemek, güncellemek veya silmek için:

```bash
# Listele
curl http://localhost:6002/api/blog/keywords

# Yeni ekle
curl -X POST http://localhost:6002/api/blog/keywords \
  -H "Content-Type: application/json" \
  -d '{"keyword": "ikamet izni"}'

# Güncelle (kelime veya aktif/pasif)
curl -X PUT http://localhost:6002/api/blog/keywords \
  -H "Content-Type: application/json" \
  -d '{"id": "UUID", "keyword": "yeni kelime", "is_active": false}'

# Sil
curl -X DELETE "http://localhost:6002/api/blog/keywords?id=UUID"
```

### Adım 2: Konu Keşfi

Tüm aktif anahtar kelimeleri OpenAI web search ile tarar, güncel haber ve makale konularını `topics` tablosuna `discovered` olarak kaydeder. Daha önce keşfedilmiş konuları atlar (duplikat kontrolü).

```bash
curl -X POST http://localhost:6002/api/blog/discover
```

**Yanıt:**

```json
{
  "keywordsScanned": 3,
  "newTopics": 18
}
```

### Adım 3: Konuları İncele

Keşfedilen konuları listele ve hangilerini makaleye dönüştürmek istediğine karar ver.

```bash
curl http://localhost:6002/api/blog/topics?status=discovered
```

**Yanıt:**

```json
{
  "topics": [
    {
      "id": "uuid-1",
      "title": "2026 Yılında Çalışma İzni Başvuru Şartları Güncellendi",
      "description": "Çalışma ve Sosyal Güvenlik Bakanlığı yeni düzenlemeleri açıkladı.",
      "source_url": "https://example.com/calisma-izni-2026",
      "status": "discovered",
      "keyword": {
        "id": "kw-uuid",
        "keyword": "çalışma izni"
      }
    }
  ]
}
```

### Adım 4: Konuyu Onayla veya Reddet

```bash
# Onayla
curl -X PATCH http://localhost:6002/api/blog/topics \
  -H "Content-Type: application/json" \
  -d '{"id": "uuid-1", "status": "approved"}'

# Reddet
curl -X PATCH http://localhost:6002/api/blog/topics \
  -H "Content-Type: application/json" \
  -d '{"id": "uuid-2", "status": "rejected"}'
```

### Adım 5: Makale Üret

Onaylanan konular için OpenAI GPT-4o + web araştırması ile SEO uyumlu makale üretir.

```bash
# Tek konu için
curl -X POST http://localhost:6002/api/blog/generate \
  -H "Content-Type: application/json" \
  -d '{"topicId": "uuid-1"}'

# Tüm onaylı konular için (toplu üretim)
curl -X POST http://localhost:6002/api/blog/generate \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Yanıt (tek konu):**

```json
{
  "success": true,
  "message": "Makale üretildi: 2026 Çalışma İzni Başvuru Rehberi"
}
```

**Yanıt (toplu):**

```json
{
  "success": true,
  "generated": 3,
  "total": 5,
  "errors": ["Hata (Konu X): Rate limit exceeded"]
}
```

### Adım 6: Yazıları Görüntüle

```bash
# Listeleme (paginasyonlu)
curl "http://localhost:6002/api/blog/posts?page=1&limit=10"

# Tekil yazı
curl http://localhost:6002/api/blog/posts/turkiyede-calisma-izni-nasil-alinir
```

---

## Endpoint Referansı

### `GET /api/blog/keywords`

Kayıtlı anahtar kelimeleri listeler.

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|-----|---------|----------|
| — | — | — | Parametre almaz |

**Yanıt:** `{ keywords: Keyword[] }`

---

### `POST /api/blog/keywords`

Yeni anahtar kelime ekler.

| Body | Tip | Zorunlu | Açıklama |
|------|-----|---------|----------|
| keyword | string | ✅ | Anahtar kelime |

**Yanıt:** `{ keyword: Keyword }` — `201 Created`

**Hata:** `409 Conflict` — Bu anahtar kelime zaten mevcutsa

---

### `PUT /api/blog/keywords`

Mevcut anahtar kelimeyi günceller.

| Body | Tip | Zorunlu | Açıklama |
|------|-----|---------|----------|
| id | uuid | ✅ | Anahtar kelime ID |
| keyword | string | ❌ | Yeni anahtar kelime |
| is_active | boolean | ❌ | Aktif/pasif durumu |

**Yanıt:** `{ keyword: Keyword }`

---

### `DELETE /api/blog/keywords?id=UUID`

Anahtar kelimeyi ve ilişkili tüm konuları siler (cascade).

| Query | Tip | Zorunlu | Açıklama |
|-------|-----|---------|----------|
| id | uuid | ✅ | Anahtar kelime ID |

**Yanıt:** `{ success: true }`

---

### `POST /api/blog/discover`

Tüm aktif anahtar kelimeleri OpenAI web search ile tarar ve yeni konu başlıklarını keşfeder. Daha önce keşfedilmiş konuları atlar (URL ve başlık bazlı duplikat kontrolü).

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|-----|---------|----------|
| — | — | — | Parametre almaz |

**Yanıt:**

```json
{
  "keywordsScanned": 3,
  "newTopics": 18
}
```

> ⚠️ Bu endpoint OpenAI API çağrısı yapar, süresi anahtar kelime sayısına göre değişir.

---

### `GET /api/blog/topics`

Konuları listeler. Opsiyonel durum filtresi ile.

| Query | Tip | Zorunlu | Açıklama |
|-------|-----|---------|----------|
| status | string | ❌ | `discovered`, `approved`, `generating`, `published`, `rejected`, `failed` |

**Yanıt:** `{ topics: Topic[] }`

Her topic içinde ilişkili `keyword` objesi de döner.

---

### `PATCH /api/blog/topics`

Konu durumunu günceller (onay/red).

| Body | Tip | Zorunlu | Açıklama |
|------|-----|---------|----------|
| id | uuid | ✅ | Konu ID |
| status | string | ✅ | `discovered`, `approved`, `rejected` |

**Yanıt:** `{ success: true }`

---

### `POST /api/blog/generate`

Onaylanan konular için AI makale üretir.

| Body | Tip | Zorunlu | Açıklama |
|------|-----|---------|----------|
| topicId | uuid | ❌ | Belirli konu ID. Verilmezse tüm `approved` konular üretilir |

**Yanıt (tek konu):**

```json
{
  "success": true,
  "message": "Makale üretildi: Başlık"
}
```

**Yanıt (toplu):**

```json
{
  "success": true,
  "generated": 3,
  "total": 5,
  "errors": []
}
```

> ⚠️ Her makale üretimi OpenAI API + web search kullanır. Toplu üretimde süre uzayabilir.

---

### `GET /api/blog/posts`

Yayınlanan blog yazılarını paginasyonlu olarak döner.

| Query | Tip | Zorunlu | Varsayılan | Açıklama |
|-------|-----|---------|------------|----------|
| page | number | ❌ | 1 | Sayfa numarası |
| limit | number | ❌ | 10 | Sayfa başına yazı |

**Yanıt:**

```json
{
  "posts": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 35,
    "totalPages": 4
  }
}
```

---

### `GET /api/blog/posts/[slug]`

Tekil blog yazısını slug ile döner.

| Param | Tip | Zorunlu | Açıklama |
|-------|-----|---------|----------|
| slug | string | ✅ | URL slug |

**Yanıt:** `{ post: Post }` veya `404`

---

## Konu Durumları (Topic Status Flow)

```
discovered ──► approved ──► generating ──► published
     │                          │
     ▼                          ▼
  rejected                    failed
```

| Durum | Açıklama |
|-------|----------|
| `discovered` | Web search ile keşfedildi, onay bekliyor |
| `approved` | Kullanıcı onayladı, AI üretim bekliyor |
| `generating` | AI makale üretimi devam ediyor |
| `published` | Makale üretildi ve yayında |
| `rejected` | Kullanıcı reddetti |
| `failed` | AI üretimi başarısız oldu |

---

## Veritabanı Şeması

Tüm tablolar Supabase `atasa_kurumsal_blog` schema'sında:

### `atasa_kurumsal_blog.keywords`

| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | uuid PK | Otomatik UUID |
| keyword | text UNIQUE | Anahtar kelime |
| is_active | boolean | Aktif/pasif (varsayılan: true) |
| created_at | timestamptz | Oluşturulma tarihi |
| updated_at | timestamptz | Güncellenme tarihi |

### `atasa_kurumsal_blog.topics`

| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | uuid PK | Otomatik UUID |
| keyword_id | uuid FK → keywords | Hangi anahtar kelimeden keşfedildi |
| title | text | Keşfedilen konu başlığı |
| description | text | Kısa açıklama |
| source_url | text | Kaynak URL (web search sonucu) |
| status | text | discovered / approved / generating / published / rejected / failed |
| created_at | timestamptz | Oluşturulma tarihi |
| updated_at | timestamptz | Güncellenme tarihi |

### `atasa_kurumsal_blog.posts`

| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | uuid PK | Otomatik UUID |
| topic_id | uuid FK → topics | İlişkili konu |
| title | text | SEO başlık (50-60 karakter) |
| slug | text UNIQUE | URL slug |
| content | text | HTML makale içeriği |
| summary | text | Meta description (150-160 karakter) |
| keywords | text[] | SEO anahtar kelimeler |
| faq | jsonb | FAQ bölümü (soru-cevap dizisi) |
| seo_score | integer | SEO skoru (1-100) |
| schema_json | jsonb | Schema.org JSON-LD (Article + FAQPage) |
| created_at | timestamptz | Oluşturulma tarihi |
| updated_at | timestamptz | Güncellenme tarihi |

---

## SEO Özellikleri

Her üretilen makale şunları içerir:

- **Title**: 50-60 karakter, anahtar kelime optimizeli
- **Meta Description**: 150-160 karakter, CTA içerir
- **Heading Yapısı**: H2/H3 hiyerarşisi
- **FAQ Bölümü**: 3-5 soru-cevap (AI alıntılama için)
- **Schema.org JSON-LD**: Article + FAQPage markup
- **Keywords**: Otomatik anahtar kelime listesi
- **SEO Skoru**: 1-100 arası değerlendirme

---

## Varsayılan Anahtar Kelimeler

Sistem kurulumunda 3 anahtar kelime seed olarak eklenir:

| Anahtar Kelime |
|----------------|
| çalışma izni |
| yabancı çalışma izni |
| çalışma izni başvurusu |

---

## Ortam Değişkenleri

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase proje URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (blog schema erişimi) |
| `OPENAI_API_KEY` | OpenAI API key (GPT-4o + web search) |

---

## Backend Dosya Yapısı

```
web/src/
├── lib/blog/
│   ├── supabaseAdmin.ts      ← Admin Supabase client (lazy init)
│   ├── blogService.ts        ← Supabase CRUD (keywords, topics, posts)
│   ├── keywordDiscovery.ts   ← OpenAI web search konu keşfi
│   └── seoOptimizer.ts       ← OpenAI makale üretimi + Schema.org
│
└── app/api/blog/
    ├── README.md              ← Bu dosya
    ├── keywords/route.ts      ← GET/POST/PUT/DELETE anahtar kelimeler
    ├── discover/route.ts      ← POST konu keşfi
    ├── topics/route.ts        ← GET/PATCH konuları yönet
    ├── generate/route.ts      ← POST AI makale üret
    └── posts/
        ├── route.ts           ← GET yazıları listele
        └── [slug]/route.ts    ← GET tekil yazı
```

---

## Supabase Yapılandırması

- **Proje ID**: `khlvkvusavalbkjrwbsy`
- **Schema**: `atasa_kurumsal_blog`
- **PostgREST**: Schema `pgrst.db_schemas` üzerinden expose edilmiştir
- **İzinler**: `service_role`, `anon`, `authenticated` rolleri için tam erişim verilmiştir
