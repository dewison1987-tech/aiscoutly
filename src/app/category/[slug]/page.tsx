import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ToolDirectory from "@/components/ToolDirectory";
import { getTools } from "@/lib/tools";
import { CATEGORY_LABELS, CATEGORY_META } from "@/lib/categories";

export async function generateStaticParams() {
  const tools = await getTools();
  return [...new Set(tools.map((t) => t.category))].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug];
  if (!label) return {};
  return {
    title: `Best ${label} AI Tools (2026) — reviews, pricing & alternatives`,
    description:
      CATEGORY_META[slug]?.description ??
      `Compare the best ${label} AI tools with pricing, features and hands-on reviews.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tools = await getTools();
  const label = CATEGORY_LABELS[slug];
  if (!label) notFound();
  const catTools = tools.filter((t) => t.category === slug);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="text-sm text-gray-500">
        <Link href="/" className="hover:text-indigo-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{label}</span>
      </nav>

      <section className="mt-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Best {label} AI Tools
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          {CATEGORY_META[slug]?.description ?? `Compare the best ${label} AI tools.`}{" "}
          {catTools.length} tools, ranked and reviewed for marketing teams.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {Object.entries(CATEGORY_LABELS)
            .filter(([s]) => s !== slug)
            .map(([s, l]) => (
              <Link
                key={s}
                href={`/category/${s}`}
                className="rounded-full border border-gray-200 px-3 py-1 text-gray-500 transition-colors hover:border-indigo-300 hover:text-indigo-600"
              >
                {l}
              </Link>
            ))}
        </div>
      </section>

      <div className="mt-8">
        <ToolDirectory tools={catTools} initialCategory={slug} showCategoryFilter={false} />
      </div>
    </main>
  );
}
