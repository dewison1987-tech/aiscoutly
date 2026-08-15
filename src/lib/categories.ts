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

export const CATEGORY_META: Record<string, { description: string }> = {
  content: {
    description:
      "Best AI writing assistants and content generation tools for copywriting, blogging and marketing content.",
  },
  video: {
    description:
      "Best AI video tools — text-to-video, AI avatars, voiceovers and video editing for marketing teams.",
  },
  image: {
    description:
      "Best AI image generators and design tools for creating visuals, brand assets and ad creatives.",
  },
  seo: {
    description:
      "Best AI SEO tools for keyword research, content optimization and on-page ranking.",
  },
  marketing: {
    description:
      "Best AI marketing tools for ad creative, campaign optimization and demand generation.",
  },
  social: {
    description:
      "Best AI social media tools for scheduling, content repurposing and engagement.",
  },
  email: {
    description:
      "Best AI email marketing and outreach tools for campaigns, cold email and CRM.",
  },
  productivity: {
    description:
      "Best AI productivity tools for workflows, automation, presentations and notes.",
  },
  analytics: {
    description:
      "Best AI data analytics tools for dashboards, insights and decision-making.",
  },
  sales: {
    description:
      "Best AI sales tools for call intelligence, prospecting and customer support.",
  },
  translation: {
    description:
      "Best AI translation and localization tools for reaching global audiences.",
  },
  dev: {
    description:
      "Best AI development tools — AI code editors, app builders and low-code platforms.",
  },
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
