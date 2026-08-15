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

export const metadata: Metadata = {
  title: {
    default: "AI Tools Directory for Marketing & Content",
    template: "%s | AI Tools Directory",
  },
  description:
    "Curated directory of the best AI tools for marketing, content creation and SEO. Filter by category, compare pricing, find the right tool.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
        <footer className="mt-auto border-t border-gray-200 py-6">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} AI Tools Directory</span>
            <span>Curated AI tools for marketing &amp; content</span>
          </div>
        </footer>
        <SiteAnalytics />
        <AdSense />
      </body>
    </html>
  );
}
