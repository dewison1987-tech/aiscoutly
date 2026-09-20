import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { CATEGORY_LABELS } from "@/lib/categories";

// 必须与站点实际 200 的主机名一致：
// 裸域 aiscoutly.com 会 308 跳转到 www.aiscoutly.com，
// 若 sitemap 里写裸域，Google 抓到的每一条都是重定向 → 判定为「网页已重定向」，不予收录。
const BASE_URL = "https://www.aiscoutly.com";

// 所有静态页面（不含 /tool/* /category/*）
const STATIC_PAGES = [
  "/about",
  "/contact",
  "/privacy",
  "/disclaimer",
  "/terms",
  "/editorial-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
  ];

  // 静态页面
  for (const p of STATIC_PAGES) {
    entries.push({
      url: `${BASE_URL}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  // 分类页
  for (const cat of Object.keys(CATEGORY_LABELS)) {
    entries.push({
      url: `${BASE_URL}/category/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // 工具页
  try {
    const csv = await fs.readFile(
      path.join(process.cwd(), "data", "tools-seed.csv"),
      "utf-8"
    );
    const lines = csv.split("\n").slice(1).filter(Boolean);
    for (const line of lines) {
      const slug = line.split(",")[0]?.trim();
      if (slug) {
        entries.push({
          url: `${BASE_URL}/tool/${slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  } catch {
    // 数据文件缺失时跳过工具页
  }

  return entries;
}
