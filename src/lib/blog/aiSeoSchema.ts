import { COMPANY_INFO } from "@/shared/constants/company";

const SITE_URL = "https://www.atasakurumsal.com.tr";

export function generateArticleSchema(post: {
  title: string;
  summary: string | null;
  slug: string;
  keywords: string[];
  created_at: string;
  updated_at: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary || "",
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.created_at,
    dateModified: post.updated_at,
    keywords: post.keywords.join(", "),
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function generateFAQSchema(
  items: Array<{ question: string; answer: string }>
) {
  if (!items || items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: String(COMPANY_INFO.foundedYear),
    description:
      "Türkiye'de yabancı personel çalışma izni, ikamet izni ve vatandaşlık danışmanlığında 12 yıllık deneyim.",
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Şişli",
      addressRegion: "İstanbul",
      addressCountry: "TR",
      streetAddress: COMPANY_INFO.offices.istanbul.address,
    },
    sameAs: [
      COMPANY_INFO.social.youtube,
      COMPANY_INFO.social.instagram,
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.tiktok,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(COMPANY_INFO.stats.googleRating),
      reviewCount: String(COMPANY_INFO.stats.googleReviews),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY_INFO.name,
    url: SITE_URL,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: "$$",
    image: `${SITE_URL}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Şişli",
      addressRegion: "İstanbul",
      addressCountry: "TR",
      streetAddress: COMPANY_INFO.offices.istanbul.address,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(COMPANY_INFO.stats.googleRating),
      reviewCount: String(COMPANY_INFO.stats.googleReviews),
    },
  };
}

// ─── HowTo Schema ────────────────────────────────────────

export function generateHowToSchema(post: {
  title: string;
  slug: string;
  content: string;
  summary: string | null;
}) {
  // HTML'den adımları çıkar (h3 etiketlerini adım olarak al)
  const stepRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
  const steps: Array<{ name: string; text: string }> = [];
  let match;
  while ((match = stepRegex.exec(post.content)) !== null) {
    steps.push({
      name: match[1].replace(/<[^>]*>/g, '').trim(),
      text: match[2].replace(/<[^>]*>/g, '').trim().slice(0, 300),
    });
  }

  if (steps.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.title,
    description: post.summary || "",
    url: `${SITE_URL}/blog/${post.slug}`,
    totalTime: "PT30M",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${SITE_URL}/blog/${post.slug}#step-${i + 1}`,
    })),
  };
}

// ─── Service Schema ──────────────────────────────────────

interface ServiceInfo {
  name: string;
  slug: string;
  description: string;
}

const SERVICES: ServiceInfo[] = [
  {
    name: "Yabancılara Çalışma İzni Alma",
    slug: "calisma-izni",
    description: "Türkiye'de çalışmak isteyen yabancı personel için çalışma izni başvuru, takip ve danışmanlık hizmeti.",
  },
  {
    name: "İkamet İzni Danışmanlığı",
    slug: "ikamet-izni",
    description: "Kısa ve uzun dönem ikamet izni başvuru danışmanlığı.",
  },
  {
    name: "Yabancılar İçin Çalışma İzni Uzatma",
    slug: "calisma-izni-uzatma",
    description: "Mevcut çalışma izinlerinin süre uzatma işlemleri. Yabancı çalışanlarınızın izinlerini sorunsuz uzatın.",
  },
  {
    name: "Çalışma İzni Transferi",
    slug: "calisma-izni-transferi",
    description: "Yabancı çalışanların bir şirketten başka bir şirkete çalışma izni transfer işlemleri. İşveren değişikliğinde kesintisiz geçiş.",
  },
  {
    name: "Yabancı Bakıcı Çalışma İzni",
    slug: "calisma-izni",
    description: "Evinizde çalışacak yabancı bakıcı, temizlikçi ve ev personeli için çalışma izni alma hizmeti.",
  },
  {
    name: "Türk Vatandaşlığı Danışmanlığı",
    slug: "vatandaslik",
    description: "Türk vatandaşlığı başvuru ve istisnai vatandaşlık danışmanlığı.",
  },
  {
    name: "Turkuaz Kart Danışmanlığı",
    slug: "turkuaz-kart",
    description: "Nitelikli yabancılar için Turkuaz Kart başvuru danışmanlığı.",
  },
  {
    name: "Toplu Başvuru Yönetimi",
    slug: "toplu-basvuru",
    description: "Çok sayıda yabancı personel için toplu çalışma izni yönetimi.",
  },
  {
    name: "SGK ve Bordro Hizmetleri",
    slug: "sgk-bordro",
    description: "Yabancı personel SGK kaydı, bordro ve yasal uyum hizmetleri.",
  },
  {
    name: "Şirket Kuruluşu Danışmanlığı",
    slug: "sirket-kurulusu",
    description: "Yabancı yatırımcılar için Türkiye'de şirket kuruluşu ve ticari danışmanlık hizmetleri.",
  },
  {
    name: "Sektörel Danışmanlık",
    slug: "sektorel-danismanlik",
    description: "Farklı sektörlere özel yabancı personel istihdamı ve çalışma izni danışmanlığı.",
  },
];

export function generateServiceSchemas() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    serviceType: "Danışmanlık",
  }));
}

// ─── WebSite Schema (Sitelinks Search Box) ───────────────

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_INFO.name,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
