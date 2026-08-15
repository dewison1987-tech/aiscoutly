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

export default function ToolDirectory({
  tools,
  initialCategory,
  showCategoryFilter = true,
}: {
  tools: Tool[];
  initialCategory?: string;
  showCategoryFilter?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory ?? "all");
  const [price, setPrice] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (price !== "all" && t.priceModel !== price) return false;
      if (q && !`${t.name} ${t.keyword}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [tools, query, category, price]);

  const categories = ["all", ...new Set(tools.map((t) => t.category))];
  const priceOptions = ["all", "free", "freemium", "paid"];

  const chipCls = (active: boolean) =>
    `cursor-pointer rounded-full border px-3 py-1 text-sm transition-colors ${
      active
        ? "border-indigo-600 bg-indigo-600 text-white"
        : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
    }`;

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-indigo-400 focus-within:bg-white">
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

        {showCategoryFilter && (
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={chipCls(category === c)}
              >
                {c === "all" ? "All" : CATEGORY_LABELS[c] ?? c}
              </button>
            ))}
          </div>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-500">Price:</span>
          {priceOptions.map((p) => (
            <button
              key={p}
              onClick={() => setPrice(p)}
              className={chipCls(price === p)}
            >
              {p === "all" ? "Any" : p === "free" ? "Free" : p === "freemium" ? "Free + paid" : "Paid"}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {filtered.length} of {tools.length} tools
        {query && <span className="text-indigo-600"> · results for &quot;{query}&quot;</span>}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 py-16 text-center">
          <p className="text-gray-500">No tools match your search.</p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("all");
              setPrice("all");
            }}
            className="mt-3 text-sm font-medium text-indigo-600 hover:underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/tool/${t.slug}`}
                className="group block h-full rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-3">
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
                  </div>
                  <span
                    className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs capitalize ${
                      PRICE_STYLES[t.priceModel] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {t.priceModel}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                  {t.keyword}
                </p>
                <p className="mt-2 text-xs font-medium text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
                  View details →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
