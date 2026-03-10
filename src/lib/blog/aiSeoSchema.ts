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
