import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import SiteAnalytics from "@/components/SiteAnalytics";
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
      <body className="min-h-full flex flex-col">
        <header className="border-b border-gray-200">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              AI Tools Directory
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900"
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
      </body>
    </html>
  );
}
