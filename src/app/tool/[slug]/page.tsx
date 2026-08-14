import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolBySlug, getTools, categoryLabel } from "@/lib/tools";
import { getToolContent } from "@/lib/content";
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
  const content = await getToolContent(slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: content?.description ?? `Find the best ${tool.keyword}. Compare pricing, features and alternatives.`,
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: tool.priceModel === "free" ? "0" : undefined,
      priceCurrency: "USD",
    },
  };

  const altTools =
    content?.alternatives && content.alternatives.length > 0
      ? await Promise.all(
          content.alternatives.map((altSlug) => getToolBySlug(altSlug))
        ).then((list) => list.filter((t) => t !== undefined))
      : [];

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
        {content?.description ? (
          <p className="mt-2 text-gray-600">{content.description}</p>
        ) : (
          <p className="mt-2 text-gray-600">
            {tool.keyword}. Detailed hands-on review and comparison coming soon.
          </p>
        )}
        {content?.unique && (
          <p className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
            <span className="font-medium">Our take: </span>
            {content.unique}
          </p>
        )}
      </section>

      {content?.faq && content.faq.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-medium">FAQ</h2>
          <div className="mt-2 space-y-4">
            {content.faq.map((item) => (
              <div key={item.q}>
                <p className="font-medium text-gray-900">{item.q}</p>
                <p className="mt-1 text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6">
        <h2 className="text-xl font-medium">Alternatives</h2>
        {altTools.length > 0 ? (
          <ul className="mt-2 space-y-1">
            {altTools.map((alt) => (
              <li key={alt.slug}>
                <Link
                  href={`/tool/${alt.slug}`}
                  className="text-gray-700 underline underline-offset-2 hover:text-gray-900"
                >
                  {alt.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-600">
            Explore similar tools in the {categoryLabel(tool.category)} category.
          </p>
        )}
      </section>
    </main>
  );
}
