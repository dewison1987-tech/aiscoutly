import { promises as fs } from "fs";
import path from "path";

export type ToolContent = {
  description: string;
  unique?: string;
  alternatives?: string[];
  faq?: { q: string; a: string }[];
};

let cache: Record<string, ToolContent> | null = null;

export async function getToolContent(
  slug: string
): Promise<ToolContent | undefined> {
  if (!cache) {
    try {
      const raw = await fs.readFile(
        path.join(process.cwd(), "data", "tool-content.json"),
        "utf-8"
      );
      cache = JSON.parse(raw);
    } catch {
      cache = {};
    }
  }
  return cache[slug];
}
