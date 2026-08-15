import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about the team behind AI Tools Directory, our editorial standards and how we research and test AI tools.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">About us</h1>

      <section className="mt-6">
        <h2 className="text-xl font-medium">What we do</h2>
        <p className="mt-2 text-gray-600">
          AI Tools Directory helps marketers, content creators and small teams
          find the right AI tools. We curate tools by category, compare pricing
          and features, and publish hands-on reviews with real usage notes.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium">Our editorial standards</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
          <li>
            Every tool is reviewed against its live product — we verify it still
            exists, what it actually costs and what changed since launch.
          </li>
          <li>
            Reviews state clear opinions based on real testing, not vendor
            marketing pages.
          </li>
          <li>
            We disclose affiliate relationships and sponsored listings clearly.
          </li>
          <li>
            Corrections are published openly — contact us if you spot an error.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium">Who we are</h2>
        <p className="mt-2 text-gray-600">
          {/* TODO: 替换为团队真实信息，强化 E-E-A-T 信号（AdSense 审核关注） */}
          We are a small independent team of marketers and developers who rely
          on AI tools daily. [Your team name], founded in [Year], based in
          [City, Country].
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-medium">Contact</h2>
        <p className="mt-2 text-gray-600">
          Reach us at{" "}
          {}
          <a href="mailto:dewison1987@gmail.com" className="text-gray-900 underline">
            dewison1987@gmail.com
          </a>{" "}
          or via the contact page.
        </p>
      </section>
    </main>
  );
}
