import type { Metadata } from "next";
import { BlogListingClient } from "./BlogListingClient";
import { generateOrganizationSchema } from "@/lib/blog/aiSeoSchema";
import { getPosts } from "@/lib/blog/blogService";

export const metadata: Metadata = {
  title: "Blog | Çalışma İzni Rehberleri & Güncel Haberler",
  description:
    "Türkiye'de çalışma izni, ikamet izni ve yabancı personel istihdamı hakkında uzman rehberler, güncel mevzuat değişiklikleri ve pratik bilgiler.",
  keywords: [
    "çalışma izni blog",
    "çalışma izni rehberi",
    "yabancı çalışma izni",
    "ikamet izni bilgi",
    "çalışma izni başvurusu",
  ],
  openGraph: {
    title: "Blog | Atasa Danışmanlık",
    description:
      "Çalışma izni, ikamet izni ve yabancı personel istihdamı hakkında uzman rehberler.",
    type: "website",
    locale: "tr_TR",
  },

  alternates: {
    canonical: "https://www.atasakurumsal.com.tr/blog",
  },
};

export const revalidate = 300; // ISR: 5 dakika

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  let posts: Array<Record<string, unknown>> = [];
  let pagination = { page: 1, limit: 12, total: 0, totalPages: 0 };

  try {
    const result = await getPosts(page, 12);
    posts = result.posts as Array<Record<string, unknown>>;
    pagination = result.pagination;
  } catch {
    // Empty state
  }

  const orgSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <BlogListingClient posts={posts as never[]} pagination={pagination} />
    </>
  );
}
