"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORY_LABELS } from "@/lib/categories";

export default function CategoryNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors ${
          open ? "bg-indigo-700" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
        aria-expanded={open}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h10"
          />
        </svg>
        Categories
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-full z-20 mt-2 w-60 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
            {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                {label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
