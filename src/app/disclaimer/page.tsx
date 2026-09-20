import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/disclaimer" },
  title: "Disclaimer",
  description:
    "Important disclosures about advertising, affiliate links, editorial independence and the accuracy of tool information on AI Tools Directory.",
};

const LAST_UPDATED = "September 8, 2026";

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Disclaimer</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

      <section className="mt-6 space-y-4 text-gray-600">
        <p>
          The information published on AI Tools Directory
          (&ldquo;the website&rdquo;) is provided for general informational
          purposes only. By using the site you agree that nothing on it
          constitutes professional, legal, financial or investment advice.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">1. Advertising (Google AdSense)</h2>
        <p className="mt-3 text-gray-600">
          This website displays ads served by Google AdSense. Google uses
          cookies (including the DoubleClick cookie) to serve ads based on a
          user&apos;s prior visits to this and other websites. You may opt
          out of personalised advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            className="text-gray-900 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a
            href="https://www.aboutads.info"
            className="text-gray-900 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            www.aboutads.info
          </a>
          . Third-party vendors, including Google, use cookies to serve ads on
          this site. Users may opt out of the use of the DART cookie by
          visiting the Google Ad and Content Network privacy policy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">2. Affiliate disclosure (FTC compliance)</h2>
        <p className="mt-3 text-gray-600">
          Some of the links on this website are &ldquo;affiliate links&rdquo;.
          That means if you click on one of these links and then go on to
          sign up, purchase or subscribe to the product, we may receive a
          commission or referral fee at <span className="font-medium">no extra cost to you</span>.
        </p>
        <p className="mt-3 text-gray-600">
          Affiliate partnerships are disclosed in two ways:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
          <li>
            On this page (a general, site-wide disclosure, as recommended by
            the U.S. Federal Trade Commission&apos;s 16 CFR Part 255).
          </li>
          <li>
            Next to the specific link or card, where the relationship is most
            relevant to the reader&apos;s decision.
          </li>
        </ul>
        <p className="mt-3 text-gray-600">
          Affiliate relationships <span className="font-medium">never</span>{" "}
          determine whether a tool is included in the directory, and they
          never change the rating, score or written opinion on a tool page.
          We sometimes decline paid placements from tools we would not
          recommend.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">3. Sponsored listings</h2>
        <p className="mt-3 text-gray-600">
          From time to time we may accept payment to feature a tool more
          prominently in the directory. Any such listing is clearly labelled
          &ldquo;Sponsored&rdquo; in both the directory view and on the tool&apos;s
          own page. Sponsored placement does not influence the rating or the
          editorial review, and the tool must still pass the same quality
          bar as any other entry in the directory.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">4. Accuracy of tool information</h2>
        <p className="mt-3 text-gray-600">
          We work hard to keep tool descriptions, pricing tiers and feature
          lists accurate. Each tool page shows a &ldquo;Last reviewed&rdquo;
          date so you can tell how recent the data is. However, AI tools
          change quickly: pricing tiers are revised, features are added or
          deprecated, and companies are acquired or shut down.
        </p>
        <p className="mt-3 text-gray-600">
          We make no warranty that any specific tool, price or feature
          described on the site is still accurate at the moment you read it.
          Always confirm pricing and feature availability on the tool&apos;s
          own website before making a purchase decision.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">5. No professional advice</h2>
        <p className="mt-3 text-gray-600">
          Nothing on this website constitutes legal, financial, medical,
          investment or other professional advice. The content is provided
          for general informational purposes only and should not be relied
          upon as a substitute for professional advice tailored to your
          specific situation. If you need professional advice, please
          consult a qualified professional in the relevant field.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">6. External links</h2>
        <p className="mt-3 text-gray-600">
          The website contains links to third-party websites that are not
          owned or controlled by us. We have no control over, and assume no
          responsibility for, the content, privacy policies or practices of
          any third-party websites or services. You acknowledge and agree
          that we shall not be responsible or liable, directly or
          indirectly, for any damage or loss caused by the use of any such
          linked third-party website or service.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">7. Changes to this disclaimer</h2>
        <p className="mt-3 text-gray-600">
          We may update this disclaimer from time to time to reflect changes
          in our practices, our advertising partners, or applicable law. The
          &ldquo;Last updated&rdquo; date at the top of the page will always
          reflect the most recent change. Continued use of the website after
          any change constitutes your acceptance of the updated disclaimer.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-gray-900">8. Contact</h2>
        <p className="mt-3 text-gray-600">
          If you have any questions about this disclaimer, please email{" "}
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
