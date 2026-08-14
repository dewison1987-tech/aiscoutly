import { promises as fs } from "fs";
import path from "path";

export type Tool = {
  slug: string;
  name: string;
  category: string;
  url: string;
  priceModel: string;
  keyword: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  content: "Content Writing",
  video: "Video & Audio",
  image: "Image & Design",
  seo: "SEO & Research",
  marketing: "Marketing & Ads",
  social: "Social Media",
  email: "Email & CRM",
  productivity: "Workflow & Productivity",
  analytics: "Data & Analytics",
  sales: "Sales & Support",
  translation: "Translation",
  dev: "Development",
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

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}
