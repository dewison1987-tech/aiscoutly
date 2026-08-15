export const CATEGORY_LABELS: Record<string, string> = {
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

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}

export function rootDomain(url: string): string {
  try {
    return new URL(url).hostname.split(".").slice(-2).join(".");
  } catch {
    return "";
  }
}
