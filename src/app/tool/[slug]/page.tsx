import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolBySlug, getTools, categoryLabel } from "@/lib/tools";
import { getToolContent } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import ToolLogo from "@/components/ToolLogo";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-medium text-gray-900">
      <span className="h-5 w-1 rounded-full bg-indigo-500" />
      {children}
    </h2>
  );
}

function RatingStars({ value }: { value: number }) {
  const pct = Math.min(100, (value / 5) * 100);
  return (
    <span className="relative inline-flex text-lg leading-none">
      <span className="text-gray-300">★★★★★</span>
      <span
        className="absolute inset-0 overflow-hidden whitespace-nowrap text-amber-400"
        style={{ width: `${pct}%` }}
      >
        ★★★★★
      </span>
    </span>
  );
}

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
    title: `${tool.name} review, pricing & alternatives`,
    description: `See how ${tool.name} helps marketers. Pricing, features, hands-on review and alternatives.`,
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
  // 取根域名（chat.openai.com → openai.com），让 logo 服务正确解析品牌
  const rootDomain = tool.url
    ? new URL(tool.url).hostname.split(".").slice(-2).join(".")
    : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description:
      content?.description ??
      `Find the best ${tool.keyword}. Compare pricing, features and alternatives.`,
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

  const priceBadge =
    tool.priceModel === "free"
      ? "bg-green-100 text-green-700"
      : tool.priceModel === "freemium"
        ? "bg-blue-100 text-blue-700"
        : "bg-amber-100 text-amber-700";

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={schema} />

      {/* 顶部信息卡 */}
      <section
        className="rounded-2xl border border-indigo-100 p-6"
        style={{
          background:
            "linear-gradient(135deg, #eef2ff 0%, #ffffff 55%, #fdf4ff 100%)",
        }}
      >
        <div className="flex items-start gap-4">
          {rootDomain && <ToolLogo hostname={rootDomain} name={tool.name} />}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
              {categoryLabel(tool.category)}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {tool.name}
            </h1>
            {content?.tagline && (
              <p className="mt-2 text-gray-700">{content.tagline}</p>
            )}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {tool.url && (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  Visit website
                </a>
              )}
              {content?.rating && (
                <span className="flex items-center gap-1.5 text-sm text-gray-600">
                  <RatingStars value={content.rating} />
                  <span className="font-medium text-gray-800">
                    {content.rating.toFixed(1)}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-indigo-100 pt-4 text-center">
          <div>
            <p className="text-xs text-gray-500">Pricing</p>
            <p className={`mt-0.5 text-sm font-medium capitalize ${priceBadge} inline-block rounded-full px-2 py-0.5`}>
              {tool.priceModel}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Our rating</p>
            <p className="mt-0.5 text-sm font-medium text-gray-800">
              {content?.rating ? content.rating.toFixed(1) : "—"} / 5
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Category</p>
            <p className="mt-0.5 text-sm font-medium text-gray-800">
              {categoryLabel(tool.category)}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mt-8">
        <SectionTitle>Overview</SectionTitle>
        {content?.description ? (
          <p className="mt-3 text-gray-700">{content.description}</p>
        ) : (
          <p className="mt-3 text-gray-700">
            {tool.keyword}. Detailed hands-on review and comparison coming soon.
          </p>
        )}
        {content?.unique && (
          <p className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-sm text-indigo-900">
            <span className="font-medium text-indigo-700">Our take: </span>
            {content.unique}
          </p>
        )}
      </section>

      {content?.best_for && (
        <section className="mt-7">
          <SectionTitle>Best for</SectionTitle>
          <p className="mt-3 text-gray-700">{content.best_for}</p>
        </section>
      )}

      {content?.key_features && content.key_features.length > 0 && (
        <section className="mt-7">
          <SectionTitle>Key features</SectionTitle>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-700">
            {content.key_features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
      )}

      {content?.use_cases && content.use_cases.length > 0 && (
        <section className="mt-7">
          <SectionTitle>Use cases for marketers</SectionTitle>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-700">
            {content.use_cases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </section>
      )}

      {content?.comparison && content.comparison.length > 0 && (
        <section className="mt-7">
          <SectionTitle>How {tool.name} compares</SectionTitle>
          <p className="mt-1 text-sm text-gray-500">
            At a glance, for marketing teams.
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-indigo-50 text-left text-indigo-900">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Tool</th>
                  <th className="px-4 py-2.5 font-medium">Best for</th>
                  <th className="px-4 py-2.5 font-medium">Price</th>
                  <th className="px-4 py-2.5 font-medium">Strengths</th>
                  <th className="px-4 py-2.5 font-medium">Watch out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {content.comparison.map((c) => {
                  const isCurrent = c.tool === tool.name;
                  return (
                    <tr key={c.tool} className={isCurrent ? "bg-indigo-50/60" : ""}>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {c.tool}
                        {isCurrent && (
                          <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                            THIS
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{c.best_for}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-gray-600">
                        {c.price}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{c.strengths}</td>
                      <td className="px-4 py-3 text-gray-600">{c.weaknesses}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {content?.pricing && content.pricing.length > 0 && (
        <section className="mt-7">
          <SectionTitle>Pricing</SectionTitle>
          <div className="mt-3 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-indigo-50 text-left text-indigo-900">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Plan</th>
                  <th className="px-4 py-2.5 font-medium">Price</th>
                  <th className="px-4 py-2.5 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {content.pricing.map((p) => (
                  <tr key={p.tier}>
                    <td className="px-4 py-2.5 font-medium text-gray-900">
                      {p.tier}
                    </td>
                    <td className="px-4 py-2.5 text-gray-700">{p.price}</td>
                    <td className="px-4 py-2.5 text-gray-600">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {(content?.pros || content?.cons) && (
        <section className="mt-7 grid gap-6 sm:grid-cols-2">
          {content?.pros && content.pros.length > 0 && (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
              <h2 className="text-lg font-medium text-emerald-700">Pros</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                {content.pros.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-emerald-500">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {content?.cons && content.cons.length > 0 && (
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-4">
              <h2 className="text-lg font-medium text-red-600">Cons</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                {content.cons.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-red-400">✕</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {content?.faq && content.faq.length > 0 && (
        <section className="mt-7">
          <SectionTitle>FAQ</SectionTitle>
          <div className="mt-3 space-y-4">
            {content.faq.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <p className="font-medium text-gray-900">{item.q}</p>
                <p className="mt-1.5 text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-7">
        <SectionTitle>Alternatives</SectionTitle>
        {altTools.length > 0 ? (
          <ul className="mt-3 space-y-1">
            {altTools.map((alt) => (
              <li key={alt.slug}>
                <Link
                  href={`/tool/${alt.slug}`}
                  className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
                >
                  {alt.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-gray-600">
            Explore similar tools in the {categoryLabel(tool.category)} category.
          </p>
        )}
      </section>
    </main>
  );
}
