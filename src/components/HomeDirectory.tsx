"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/tools";
import { CATEGORY_LABELS, rootDomain } from "@/lib/categories";

const PRICE_STYLES: Record<string, string> = {
  free: "bg-green-100 text-green-800",
  freemium: "bg-blue-100 text-blue-800",
  paid: "bg-amber-100 text-amber-800",
};

function faviconUrl(url: string, size = 64) {
  const domain = rootDomain(url);
  return domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
    : "";
}

function ToolCard({ t }: { t: Tool }) {
  return (
    <Link
      href={`/tool/${t.slug}`}
      className="group block h-full rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        {faviconUrl(t.url) && (
          <img
            src={faviconUrl(t.url)}
            alt=""
            className="h-9 w-9 flex-shrink-0 rounded-lg bg-white p-1 ring-1 ring-gray-200"
            loading="lazy"
          />
        )}
        <span className="truncate font-medium text-gray-900 group-hover:text-indigo-600">
          {t.name}
        </span>
        <span
          className={`ml-auto flex-shrink-0 rounded-full px-2 py-0.5 text-xs capitalize ${
            PRICE_STYLES[t.priceModel] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {t.priceModel}
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-gray-500">{t.keyword}</p>
    </Link>
  );
}

export default function HomeDirectory({ tools }: { tools: Tool[] }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      tools.filter(
        (t) =>
          !q || `${t.name} ${t.keyword}`.toLowerCase().includes(q)
      ),
    [tools, q]
  );

  const grouped = useMemo(() => {
    const map = new Map<string, Tool[]>();
    for (const t of tools) {
      if (!map.has(t.category)) map.set(t.category, []);
      map.get(t.category)!.push(t);
    }
    return map;
  }, [tools]);

  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
          <svg
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI tools... (e.g. video, SEO, writing)"
            className="w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-sm text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {q ? (
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            {results.length} result{results.length === 1 ? "" : "s"} for{" "}
            <span className="font-medium text-indigo-600">&quot;{query}&quot;</span>
          </p>
          {results.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-gray-300 py-16 text-center">
              <p className="text-gray-500">No tools match your search.</p>
              <button
                onClick={() => setQuery("")}
                className="mt-3 text-sm font-medium text-indigo-600 hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((t) => (
                <li key={t.slug}>
                  <ToolCard t={t} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="mt-4 space-y-12">
          {[...grouped.keys()].map((cat) => {
            const items = grouped.get(cat)!.slice(0, 6);
            return (
              <section key={cat}>
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {CATEGORY_LABELS[cat] ?? cat}
                    </h2>
                    <span className="text-sm text-gray-400">
                      {grouped.get(cat)!.length}
                    </span>
                  </div>
                  <Link
                    href={`/category/${cat}`}
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((t) => (
                    <li key={t.slug}>
                      <ToolCard t={t} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
