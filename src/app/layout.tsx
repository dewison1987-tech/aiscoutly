import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import SiteAnalytics from "@/components/SiteAnalytics";
import AdSense from "@/components/AdSense";
import CategoryNav from "@/components/CategoryNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 站点主域名（与 Vercel 实际 200 的主机名一致：裸域会 308 跳到 www）
export const SITE_URL = "https://www.aiscoutly.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Tools Directory for Marketing & Content",
    template: "%s | AI Tools Directory",
  },
  description:
    "Curated directory of the best AI tools for marketing, content creation and SEO. Filter by category, compare pricing, find the right tool.",
  openGraph: {
    type: "website",
    siteName: "AI Tools Directory",
    url: SITE_URL,
  },
};

const FOOTER_LINKS: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  const year = new Date().getFullYear();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #4338ca, #c026d3)" }}>
                Ai
              </span>
              <span className="text-gray-900">AI Tools Directory</span>
            </Link>
            <div className="flex items-center gap-1 text-sm">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Home
              </Link>
              <CategoryNav />
              <Link
                href="/about"
                className="rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="hidden rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 sm:inline-block"
              >
                Privacy
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-auto border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-600">
            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {FOOTER_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gray-700 transition-colors hover:text-indigo-600 hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="mt-4 leading-relaxed text-gray-500">
              <span className="font-medium text-gray-700">Affiliate disclosure:</span>{" "}
              Some links on this site are affiliate links. If you sign up or
              purchase through them, we may earn a commission at no extra
              cost to you. Sponsored placements are always clearly labelled.{" "}
              <Link
                href="/disclaimer"
                className="text-gray-700 underline underline-offset-2 hover:text-indigo-600"
              >
                Read the full disclaimer
              </Link>
              .
            </p>
            <p className="mt-3 text-xs text-gray-500">
              © {year} AI Tools Directory · Reviews by{" "}
              <span className="font-medium text-gray-700">
                AI Scoutly Editorial
              </span>
              . All trademarks are the property of their respective owners.
            </p>
          </div>
        </footer>
        <SiteAnalytics />
        <AdSense />
      </body>
    </html>
  );
}
