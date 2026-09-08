import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial policy",
  description:
    "How the AI Scoutly Editorial team researches, tests, scores and updates the AI tools in our directory — and how we correct mistakes.",
};

const LAST_UPDATED = "September 8, 2026";

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Editorial policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

      <section className="mt-6 text-gray-600">
        <p>
          AI Tools Directory is published under the byline{" "}
          <span className="font-medium text-gray-800">AI Scoutly Editorial</span>.
          This page explains how that team decides what gets into the
          directory, how tools are scored, and how we handle corrections.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">1. Selection criteria</h2>
        <p className="mt-3 text-gray-600">
          A tool is added to the directory if it meets all three of the
          following:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
          <li>
            <span className="font-medium text-gray-800">Relevance.</span> The
            tool is genuinely useful to marketers or content teams. It does
            not need to be the most popular tool in its category, but it has
            to solve a real workflow problem.
          </li>
          <li>
            <span className="font-medium text-gray-800">Availability.</span>{" "}
            The tool is publicly available to individuals or teams, with a
            working sign-up flow. We do not list closed betas, internal-only
            products, or vaporware.
          </li>
          <li>
            <span className="font-medium text-gray-800">Quality floor.</span>{" "}
            We can describe a real, defensible use case for the tool, and we
            can name at least one thing it does better than the obvious
            alternative.
          </li>
        </ul>
        <p className="mt-3 text-gray-600">
          We do not accept payment in exchange for a tool being added to the
          directory. Sponsored placements are handled separately and are always
          clearly labelled.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">2. How we test and review</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-600">
          <li>
            <span className="font-medium text-gray-800">Hands-on use.</span>{" "}
            Wherever possible, at least one editor signs up for the tool and
            uses it on a real task before a review is published. Where that is
            not possible (for example, a $5,000/month enterprise plan), we
            evaluate the tool against its documentation, demo material, and
            independent user reports, and we say so in the review.
          </li>
          <li>
            <span className="font-medium text-gray-800">Pricing verification.</span>{" "}
            We check the live pricing page at the time of review. Reviews are
            re-verified at least quarterly.
          </li>
          <li>
            <span className="font-medium text-gray-800">Source policy.</span>{" "}
            Factual claims about pricing, features, integrations and
            company-stage are cross-checked against the tool&apos;s own
            website, its public changelog, and at least one independent source
            where possible. We do not copy vendor press releases.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">3. Scoring (the &ldquo;/5&rdquo; rating)</h2>
        <p className="mt-3 text-gray-600">
          Every reviewed tool carries a score from 0 to 5. The score is the
          editor&apos;s overall judgment, not a mechanical average. We weigh:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
          <li>How well the tool solves the problem it is designed for.</li>
          <li>Quality of the user experience and onboarding.</li>
          <li>Value for money at each pricing tier.</li>
          <li>Reliability, support and pace of product updates.</li>
          <li>How it compares head-to-head with the main alternatives.</li>
        </ul>
        <p className="mt-3 text-gray-600">
          A score is not a recommendation to buy. The written review is
          always the source of truth — please read it before deciding.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">4. Updates and freshness</h2>
        <p className="mt-3 text-gray-600">
          Each tool page shows a &ldquo;Last reviewed&rdquo; date. We re-check
          high-traffic pages at least once every 90 days, and lower-priority
          pages at least once a year. If a tool changes substantially — a
          price increase, a major rebrand, a shutdown, an acquisition — we
          update the review and the date as soon as we confirm the change.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">5. Conflicts of interest</h2>
        <p className="mt-3 text-gray-600">
          Our main commercial relationships are:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
          <li>Google AdSense (display advertising on the site).</li>
          <li>
            Affiliate programmes with some of the tools we list, where the
            tool has an active public affiliate programme. See our{" "}
            <a href="/disclaimer" className="text-gray-900 underline">
              disclaimer
            </a>{" "}
            for the full disclosure.
          </li>
          <li>
            Occasional sponsored placements, which are always labelled as
            such.
          </li>
        </ul>
        <p className="mt-3 text-gray-600">
          None of these relationships change our editorial opinion. If a
          tool offers us a commission, that fact does not move its score up
          or down.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">6. Corrections</h2>
        <p className="mt-3 text-gray-600">
          We get things wrong sometimes. Pricing changes, tools ship a new
          feature we have not tested yet, a company is acquired. If you spot
          an error, please email{" "}
          <a
            href="mailto:dewison1987@gmail.com"
            className="text-gray-900 underline"
          >
            dewison1987@gmail.com
          </a>{" "}
          with the URL of the page and the specific fact to correct. We aim
          to acknowledge corrections within two business days and to publish
          a fix within one week for clear factual errors.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">7. Removal requests</h2>
        <p className="mt-3 text-gray-600">
          If you are the operator of a tool listed in the directory and you
          would like it removed, please email us with proof that you are
          associated with the tool. We will action removal requests within
          five business days.
        </p>
      </section>
    </main>
  );
}
