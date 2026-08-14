import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with the AI Tools Directory team for corrections, submissions, advertising or partnerships.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
      <p className="mt-3 text-gray-600">
        Have a correction, a tool to submit, or a partnership question? We
        usually reply within 2 business days.
      </p>

      {/* TODO: 替换为真实联系邮箱 */}
      <section className="mt-8 rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-medium">Email</h2>
        <p className="mt-2 text-gray-600">
          <a
            href="mailto:hello@example.com"
            className="font-medium text-gray-900 underline"
          >
            hello@example.com
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-500">
          For tool submissions, include the tool URL, category and pricing
          model. For business inquiries, use the subject prefix{" "}
          <span className="font-medium">[Business]</span>.
        </p>
      </section>

      <section className="mt-6 rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-medium">What we respond to</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
          <li>Factual corrections on any tool listing</li>
          <li>Tool submission or listing updates</li>
          <li>Sponsored listing and advertising inquiries</li>
          <li>Data privacy questions</li>
        </ul>
      </section>
    </main>
  );
}
