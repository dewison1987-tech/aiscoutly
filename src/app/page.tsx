import Link from "next/link";
import { getTools, categoryLabel } from "@/lib/tools";

export default async function Home() {
  const tools = await getTools();
  const categories = [...new Set(tools.map((t) => t.category))];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          AI Tools Directory for Marketing &amp; Content
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Curated directory of the best AI tools for marketing, content creation
          and SEO. Compare pricing, features and find the right alternative.
        </p>
      </section>

      <p className="text-sm text-gray-500">
        {tools.length} tools · {categories.length} categories
      </p>

      {categories.map((cat) => (
        <section key={cat} className="mt-8">
          <h2 className="text-xl font-medium">{categoryLabel(cat)}</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tools
              .filter((t) => t.category === cat)
              .map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tool/${t.slug}`}
                    className="block rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-400"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-medium">{t.name}</span>
                      <span className="text-sm capitalize text-gray-500">
                        {t.priceModel}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{t.keyword}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
