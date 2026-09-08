import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about the AI Tools Directory team, our editorial standards, and how we research, test and review AI tools for marketers.",
};

const LAST_UPDATED = "September 8, 2026";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">About AI Tools Directory</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

      <section className="mt-6 space-y-4 text-gray-600">
        <p>
          AI Tools Directory is an independent editorial project that helps
          marketers, content teams and small businesses find the right AI tools
          for their work. We curate tools by category, compare pricing and
          features, and publish hands-on reviews with real usage notes — not
          vendor marketing copy.
        </p>
        <p>
          Our audience is English-speaking marketing and content professionals,
          with the majority of readers in the United States, the United Kingdom,
          Canada and Australia. We write for practitioners who need to make a
          buying decision this week, not for hype.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">Our editorial standards</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-600">
          <li>
            <span className="font-medium text-gray-800">First-hand testing.</span>{" "}
            Every tool in our directory is reviewed against its live product.
            We verify that the tool still exists, what it actually costs at
            sign-up, and whether the features on the marketing page match what
            users get in-app.
          </li>
          <li>
            <span className="font-medium text-gray-800">Clear opinions.</span>{" "}
            Reviews state a verdict based on real testing — not paraphrased
            feature lists. If a tool is not worth your money, we say so.
          </li>
          <li>
            <span className="font-medium text-gray-800">Pricing kept current.</span>{" "}
            We re-check pricing tiers at least quarterly. Each review page shows
            a &ldquo;Last reviewed&rdquo; date so you know how fresh the data is.
          </li>
          <li>
            <span className="font-medium text-gray-800">Affiliate disclosure.</span>{" "}
            We disclose every paid relationship. Sponsored and affiliate
            placements are clearly labelled on the page. See our{" "}
            <a href="/disclaimer" className="text-gray-900 underline">
              disclaimer
            </a>{" "}
            for the full policy.
          </li>
          <li>
            <span className="font-medium text-gray-800">Corrections are public.</span>{" "}
            If we get something wrong, we correct it openly and update the
            &ldquo;Last reviewed&rdquo; date. Email us if you spot an error.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">Who we are</h2>
        <p className="mt-3 text-gray-600">
          We are a small, globally distributed editorial team of marketers,
          content strategists and developers who use AI tools in our own work
          every day. Reviews are written by our editors and signed under the
          byline <span className="font-medium text-gray-800">AI Scoutly Editorial</span>{" "}
          to keep accountability clear and our writing consistent.
        </p>
        <p className="mt-3 text-gray-600">
          We launched the directory in 2024 with a simple idea: there were
          plenty of &ldquo;best AI tools&rdquo; listicles that read like they had
          been rewritten from the same press release, and very few that told
          you what a tool was actually like to use on a Tuesday afternoon.
          That is the gap we are trying to fill.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">How we stay independent</h2>
        <p className="mt-3 text-gray-600">
          Our directory is free to use and supported by advertising (Google
          AdSense) and, in some cases, affiliate commissions when a reader signs
          up for a paid tool through one of our links. Affiliate relationships
          never determine whether a tool is included in the directory, and they
          never change the rating or our written opinion. We sometimes turn
          down sponsorship from tools we would not recommend.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">Contact</h2>
        <p className="mt-3 text-gray-600">
          For corrections, tool submissions, partnership inquiries or press,
          please email{" "}
          <a
            href="mailto:dewison1987@gmail.com"
            className="text-gray-900 underline"
          >
            dewison1987@gmail.com
          </a>{" "}
          or use the{" "}
          <a href="/contact" className="text-gray-900 underline">
            contact page
          </a>
          . We usually reply within two business days.
        </p>
      </section>
    </main>
  );
}
