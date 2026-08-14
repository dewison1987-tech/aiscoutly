import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getToolBySlug, getTools, categoryLabel } from "@/lib/tools";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
  const tools = await getTools();
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} review & alternatives`,
    description: `Find the best ${tool.keyword}. Compare pricing, features and alternatives in the AI tools directory.`,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: `Find the best ${tool.keyword}. Compare pricing, features and alternatives.`,
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: tool.priceModel === "free" ? "0" : undefined,
      priceCurrency: "USD",
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={schema} />
      <p className="text-sm text-gray-500">{categoryLabel(tool.category)}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{tool.name}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm capitalize">
          {tool.priceModel}
        </span>
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-3 py-1 text-sm text-white"
          >
            Visit website
          </a>
        )}
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-medium">Overview</h2>
        {/* TODO(内容线): 人工撰写 80-200 字英文介绍 + 独特点（实测体验 / 替代品对比 / 价格变化），防止 scaled content 判定 */}
        <p className="mt-2 text-gray-600">
          {tool.keyword}. Detailed hands-on review and comparison coming soon.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium">Alternatives</h2>
        {/* TODO(内容线): 补充 3-5 个同类工具对比（如 "[name] alternatives" 长尾词目标） */}
        <p className="mt-2 text-gray-600">
          Explore similar tools in the {categoryLabel(tool.category)} category.
        </p>
      </section>
    </main>
  );
}
