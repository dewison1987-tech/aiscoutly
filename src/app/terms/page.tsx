import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of service",
  description:
    "The terms and conditions governing your use of AI Tools Directory, including acceptable use, intellectual property and limitation of liability.",
};

const LAST_UPDATED = "September 8, 2026";
const EFFECTIVE_DATE = "September 8, 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of service</h1>
      <p className="mt-2 text-sm text-gray-500">
        Effective: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED}
      </p>

      <section className="mt-6 space-y-4 text-gray-600">
        <p>
          These terms of service (the &ldquo;Terms&rdquo;) govern your use of
          AI Tools Directory (the &ldquo;Service&rdquo;). By accessing or using
          the Service, you agree to be bound by these Terms. If you do not
          agree, please do not use the Service.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">1. Use of the Service</h2>
        <p className="mt-3 text-gray-600">
          AI Tools Directory is a free, advertising-supported directory of AI
          tools aimed at marketing and content professionals. You may use it
          for personal or internal business research. You agree to use the
          Service only for lawful purposes and in a way that does not infringe
          the rights of, restrict, or inhibit anyone else&apos;s use and
          enjoyment of the Service.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">2. No professional advice</h2>
        <p className="mt-3 text-gray-600">
          The content on the Service is for general informational purposes
          only. It does not constitute legal, financial, investment, medical or
          other professional advice. You are responsible for evaluating the
          accuracy and relevance of any information provided on the Service
          before acting on it. See our{" "}
          <a href="/disclaimer" className="text-gray-900 underline">
            disclaimer
          </a>{" "}
          for more.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">3. Intellectual property</h2>
        <p className="mt-3 text-gray-600">
          All editorial content published on the Service — including tool
          reviews, comparison tables, FAQ entries, photographs and the design
          of the site itself — is owned by AI Tools Directory or its licensors
          and is protected by copyright and other applicable laws.
        </p>
        <p className="mt-3 text-gray-600">
          You may read, quote and link to our content for personal or
          non-commercial use, provided you give clear attribution and a link
          back to the source page. You may not republish full articles,
          scrape the site at scale, or use our content to train machine
          learning models without our prior written permission.
        </p>
        <p className="mt-3 text-gray-600">
          All trademarks, logos and brand names for third-party tools
          (including any tool listed in our directory) are the property of
          their respective owners. Their use here is for informational and
          nominative fair-use purposes only and does not imply endorsement.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">4. User submissions</h2>
        <p className="mt-3 text-gray-600">
          If you send us a tool submission, correction, or any other feedback
          by email, you grant us a non-exclusive, royalty-free, worldwide
          licence to use, edit and publish that content on the Service. You
          confirm that you have the right to grant this licence and that the
          content does not infringe any third-party rights.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">5. Third-party tools and links</h2>
        <p className="mt-3 text-gray-600">
          The Service contains links to third-party websites, products and
          services that we do not own or control. We are not responsible for
          the content, accuracy, availability or practices of any third-party
          service. Your use of any third-party service is at your own risk
          and subject to that provider&apos;s own terms and privacy policy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">6. Limitation of liability</h2>
        <p className="mt-3 text-gray-600">
          To the maximum extent permitted by applicable law, AI Tools
          Directory, its editors, and its affiliates shall not be liable for
          any indirect, incidental, special, consequential or punitive
          damages, or any loss of profits or revenues, whether incurred
          directly or indirectly, or any loss of data, use, goodwill, or
          other intangible losses, resulting from (a) your use or inability
          to use the Service; (b) any conduct or content of any third party
          on or through the Service; or (c) any content obtained from or
          through the Service.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">7. Changes to the Service</h2>
        <p className="mt-3 text-gray-600">
          We reserve the right to modify, suspend or discontinue any part of
          the Service at any time, with or without notice. We may also revise
          these Terms from time to time. The &ldquo;Last updated&rdquo; date
          will reflect the most recent change. Continued use of the Service
          after any change constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">8. Governing law</h2>
        <p className="mt-3 text-gray-600">
          These Terms shall be governed by and construed in accordance with
          applicable law, without regard to its conflict of law provisions.
          Any dispute arising out of or in connection with these Terms shall
          be subject to the exclusive jurisdiction of the competent courts in
          the jurisdiction in which the Service operator is established.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">9. Contact</h2>
        <p className="mt-3 text-gray-600">
          If you have any questions about these Terms, please email{" "}
          <a
            href="mailto:dewison1987@gmail.com"
            className="text-gray-900 underline"
          >
            dewison1987@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
