import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog/blogService";

const SITE_URL = "https://www.atasakurumsal.com.tr";

// Mevcut "src/app" dizindeki tüm `page.tsx` dosyalarını tarayan yardımcı fonksiyon
async function getStaticRoutes(): Promise<string[]> {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes: string[] = [];

  async function scanDirectory(currentPath: string, routePath: string) {
    try {
      const entries = await fs.readdir(currentPath, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isDirectory()) {
          // Özel Next.js klasörlerini ve blog/api gibi dinamik dizinleri atla
          if (
            entry.name.startsWith("(") ||
            entry.name.startsWith("_") ||
            entry.name === "api" ||
            entry.name === "blog"
          ) {
            continue;
          }
          await scanDirectory(
            path.join(currentPath, entry.name),
            `${routePath}/${entry.name}`
          );
        } else if (entry.name === "page.tsx") {
          // Ana sayfa için root, diğerleri için directory adı
          routes.push(routePath === "" ? "/" : routePath);
        }
      }
    } catch (error) {
      console.error("Error reading directory for sitemap:", error);
    }
  }

  await scanDirectory(appDir, "");

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Dinamik olarak klasörlerden statik rotaları al
  const staticRoutes = await getStaticRoutes();

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    let priority = 0.8;
    if (route === "/") priority = 1.0;
    else if (route === "/hizmetlerimiz" || route === "/iletisim") priority = 0.9;
    else if (route === "/referanslar" || route === "/sss" || route === "/hakkimizda") priority = 0.7;

    return {
      url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority,
    };
  });

  // Blog klasörünü otomatik taramadan hariç tuttuğumuz için ana blog sayfasını ekleyelim
  staticPages.push({
    url: `${SITE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  });

  // 2. Veritabanından (Supabase) dinamik blog yazılarını al
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const { posts } = await getPosts(1, 1000);
    blogPages = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.created_at!),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch {
    // DB hatası olursa sadece statik sayfalar döner
  }

  return [...staticPages, ...blogPages];
}
