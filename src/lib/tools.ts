import { promises as fs } from "fs";
import path from "path";
import { categoryLabel } from "@/lib/categories";

export type Tool = {
  slug: string;
  name: string;
  category: string;
  url: string;
  priceModel: string;
  keyword: string;
};

export type Affiliate = {
  url: string;
  program?: string;
  commission?: string;
  cookie?: string;
};

let cache: Tool[] | null = null;
let affiliateCache: Record<string, Affiliate> | null = null;

export async function getTools(): Promise<Tool[]> {
  if (cache) return cache;
  const csv = await fs.readFile(
    path.join(process.cwd(), "data", "tools-seed.csv"),
    "utf-8"
  );
  const lines = csv.split("\n").slice(1).filter(Boolean);
  cache = lines.map((line) => {
    const [slug, name, category, url, priceModel, keyword] = line.split(",");
    return {
      slug: slug.trim(),
      name: name.trim(),
      category: category.trim(),
      url: url.trim(),
      priceModel: priceModel.trim(),
      keyword: keyword.trim(),
    };
  });
  return cache;
}

export async function getToolBySlug(slug: string): Promise<Tool | undefined> {
  const tools = await getTools();
  return tools.find((t) => t.slug === slug);
}

/**
 * 读取工具对应的 affiliate 链接配置（data/affiliate.json）。
 * 未配置的工具返回 undefined，页面会自动回退到官网原始链接。
 */
export async function getAffiliate(slug: string): Promise<Affiliate | undefined> {
  if (!affiliateCache) {
    try {
      const raw = await fs.readFile(
        path.join(process.cwd(), "data", "affiliate.json"),
        "utf-8"
      );
      affiliateCache = JSON.parse(raw) as Record<string, Affiliate>;
    } catch {
      affiliateCache = {};
    }
  }
  const entry = affiliateCache[slug];
  return entry && entry.url ? entry : undefined;
}

export { categoryLabel };
