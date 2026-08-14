import { promises as fs } from "fs";
import path from "path";

export type ToolContent = {
  tagline?: string;
  description: string;
  best_for?: string;
  key_features?: string[];
  unique?: string;
  pricing?: { tier: string; price: string; note?: string }[];
  pros?: string[];
  cons?: string[];
  use_cases?: string[];
  alternatives?: string[];
  faq?: { q: string; a: string }[];
};

let cache: Record<string, ToolContent> | null = null;

export async function getToolContent(
  slug: string
): Promise<ToolContent | undefined> {
  if (!cache) {
    let data: Record<string, ToolContent> = {};
    try {
      const raw = await fs.readFile(
        path.join(process.cwd(), "data", "tool-content.json"),
        "utf-8"
      );
      data = JSON.parse(raw);
    } catch {
      // 内容文件缺失时保持空缓存
    }
    cache = data;
  }
  return cache[slug];
}
