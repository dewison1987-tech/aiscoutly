import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";

const BASE_URL = "https://aiscoutly.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
  ];

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
    // 数据文件缺失时仅输出首页
  }

  return entries;
}
