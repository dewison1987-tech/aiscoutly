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

let cache: Tool[] | null = null;

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

export { categoryLabel };
