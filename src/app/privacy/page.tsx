import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Privacy policy for AI Tools Directory — how we use cookies, analytics and advertising data.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: August 2026</p>

      <section className="mt-6 space-y-6 text-gray-600">
        <div>
          <h2 className="text-xl font-medium text-gray-900">1. Overview</h2>
          <p className="mt-2">
            This privacy policy explains how AI Tools Directory (&quot;we&quot;,
            &quot;us&quot;) collects, uses and protects information when you
            visit this website. We are committed to protecting your privacy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-900">
            2. Information we collect
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-medium">Usage data:</span> pages visited,
              time on site, approximate location (city/country level), browser
              and device type — collected via Google Analytics.
            </li>
            <li>
              <span className="font-medium">Contact data:</span> information you
              voluntarily send us via email (we do not run a contact form that
              stores submissions).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-900">
            3. Cookies and advertising
          </h2>
          <p className="mt-2">
            This site uses cookies and similar technologies to improve your
            experience and to serve personalized advertising.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-medium">Google Analytics</span> (GA4) uses
              cookies to measure traffic and usage.
            </li>
            <li>
              <span className="font-medium">Google AdSense</span> uses cookies
              (including the DoubleClick cookie) to serve ads based on your
              visits to this and other websites.
            </li>
          </ul>
          <p className="mt-2">
            You can opt out of personalized advertising by visiting{" "}
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
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-900">
            4. Affiliate disclosure
          </h2>
          <p className="mt-2">
            Some links on this site are affiliate links. If you make a purchase
            through them, we may earn a commission at no extra cost to you.
            Sponsored listings are always clearly marked.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-900">
            5. Your rights
          </h2>
          <p className="mt-2">
            Depending on your location (e.g. GDPR in the EU, CCPA in
            California), you may have the right to access, correct or delete
            your personal data. To exercise any of these rights, contact us at
            the email address below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-gray-900">
            6. Contact
          </h2>
          <p className="mt-2">
            Questions about this policy? Email us at{" "}
            {}
            <a
              href="mailto:dewison1987@gmail.com"
              className="text-gray-900 underline"
            >
              dewison1987@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
