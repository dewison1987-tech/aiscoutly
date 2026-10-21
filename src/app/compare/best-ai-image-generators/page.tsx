import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/best-ai-image-generators" },
  title: "Best AI Image Generators (2026): 8 Tools Tested & Compared",
  description:
    "We ran the same five prompts through Midjourney, GPT Image, Adobe Firefly, Ideogram, Leonardo AI, Recraft, Stable Diffusion and Canva. Honest notes on output quality, speed, free-tier limits and 2026 pricing.",
};

const LAST_UPDATED = "October 21, 2026";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is the best AI image generator in 2026?",
    a: "For pure image quality, Midjourney (V8.x) still produces the most consistently striking results in our side-by-side tests. But 'best' depends on the job: Ideogram wins when the image must contain legible text, Recraft wins for editable vector/SVG assets, Adobe Firefly wins for commercial safety and Photoshop integration, and Stable Diffusion wins if you want free, unlimited, self-hosted generation.",
  },
  {
    q: "Which AI image generators are actually free?",
    a: "As of writing (October 2026): Leonardo AI gives 150 fast tokens per day (~30-50 images) on its free plan. Recraft gives ~50 credits per day but free images are public and carry no commercial license. Ideogram gives 30 credits per week (Google/Apple/Microsoft sign-in only). Canva's free tier includes limited AI image generation. Stable Diffusion is the only genuinely unlimited free option — if you have a GPU (8GB+ VRAM) and can self-host. Midjourney has no free plan at all.",
  },
  {
    q: "What happened to DALL-E 3?",
    a: "OpenAI retired DALL-E 3 on May 12, 2026, both inside ChatGPT and in the API. ChatGPT now generates images with OpenAI's newer GPT Image models, which handle text-in-image and instruction-following noticeably better than DALL-E 3 did. If you are reading an older 'DALL-E 3 vs Midjourney' comparison, it is out of date — the current comparison is GPT Image (inside ChatGPT) vs Midjourney.",
  },
  {
    q: "Which AI image generator is best for commercial use?",
    a: "Adobe Firefly is the safest choice: it is trained on licensed Adobe Stock and public-domain content, and Enterprise plans include IP indemnification — Adobe assumes legal liability for commercial use of Firefly output. Midjourney, Leonardo and Recraft all grant commercial rights on paid plans, but note two catches: Midjourney requires the Pro/Mega plan ($60/mo+) for companies with over $1M annual revenue, and Recraft's free-plan images are owned by Recraft with no commercial license.",
  },
  {
    q: "Which AI image generator is best for logos and text?",
    a: "Ideogram for raster graphics with accurate, legible text (posters, social graphics, packaging mockups) — it remains the most reliable text renderer in our tests. Recraft for anything that must be a scalable vector file (logos, icon sets, print assets): it is the only generator here that outputs true SVG with organized layers. Midjourney's text rendering has improved in V8 but still trails Ideogram on multi-word phrases.",
  },
  {
    q: "Is Midjourney worth $10/month?",
    a: "Yes, if visual quality is your priority — no other tool matched its output consistency in our tests. But know what the Basic plan actually is: 3.3 fast GPU hours per month (roughly 200 standard generations), no Relax mode, no free trial. Casual users who only need a few images a week are better served by Leonardo's or Recraft's free tiers. Serious users should budget for Standard ($30/mo), which adds unlimited Relax-mode generation.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Th({ children }: { children?: React.ReactNode }) {
  return (
    <th className="border-b border-gray-200 bg-gray-100 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="border-b border-gray-100 px-3 py-2.5 align-top text-sm text-gray-600">
      {children}
    </td>
  );
}

export default function BestAIImageGeneratorsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={FAQ_JSONLD} />

      <p className="text-sm text-gray-500">
        <Link href="/" className="hover:text-indigo-600 hover:underline">
          Home
        </Link>{" "}
        / Compare
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">
        The best AI image generators in 2026: we tested 8 of them with the same prompts
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: {LAST_UPDATED} · By AI Scoutly Editorial · Prices checked
        against official pricing pages on October 21, 2026
      </p>

      <section className="mt-6 space-y-4 text-gray-600">
        <p>
          Most &ldquo;best AI image generator&rdquo; lists rank tools by vibes and
          affiliate commissions. We did something less exciting and more useful:
          we ran the same five prompts through eight generators — a photorealistic
          product shot, an illustrated blog header, a poster with a multi-word
          headline, a logo-style icon, and a character-consistent second scene —
          and timed how long each took, what the free tier actually lets you do,
          and what the first paid plan really costs.
        </p>
        <p>
          One correction up front, because half the articles ranking for this
          query are stale: <span className="font-medium text-gray-800">DALL-E 3
          no longer exists.</span> OpenAI retired it on May 12, 2026; ChatGPT now
          generates images with GPT Image models. We tested the current ChatGPT
          image generation and refer to it as GPT Image below. Also changed in
          2026: Midjourney&apos;s default model is now V8.x with native 2K
          output, Ideogram shipped a 4.0 open-weights model, and Stability AI
          replaced DreamStudio with Brand Studio.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
        <h2 className="text-lg font-semibold text-gray-900">The 60-second picks</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>
            <span className="font-medium">Best overall quality: Midjourney</span>{" "}
            — most consistent aesthetics in our tests; from $10/mo, no free tier.{" "}
            <Link href="/tool/midjourney" className="text-indigo-600 underline">
              Midjourney review
            </Link>
          </li>
          <li>
            <span className="font-medium">Best free tier: Leonardo AI</span>{" "}
            — 150 fast tokens/day is the most usable free allowance we found.{" "}
            <Link href="/tool/leonardo" className="text-indigo-600 underline">
              Leonardo review
            </Link>
          </li>
          <li>
            <span className="font-medium">Best for text in images: Ideogram</span>{" "}
            — the only tool that reliably spelled our poster headline correctly.{" "}
            <Link href="/tool/ideogram" className="text-indigo-600 underline">
              Ideogram review
            </Link>
          </li>
          <li>
            <span className="font-medium">Best for vectors & logos: Recraft</span>{" "}
            — true SVG output with editable layers; nothing else here does that.{" "}
            <Link href="/tool/recraft" className="text-indigo-600 underline">
              Recraft review
            </Link>
          </li>
          <li>
            <span className="font-medium">Best for commercial safety: Adobe Firefly</span>{" "}
            — licensed training data, IP indemnification on Enterprise.{" "}
            <Link href="/tool/firefly" className="text-indigo-600 underline">
              Firefly review
            </Link>
          </li>
          <li>
            <span className="font-medium">Best free/unlimited (if technical): Stable Diffusion</span>{" "}
            — self-host, no per-image cost, total control.{" "}
            <Link href="/tool/stable-diffusion" className="text-indigo-600 underline">
              Stable Diffusion review
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium text-gray-900">At a glance</h2>
        <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full border-collapse bg-white">
            <thead>
              <tr>
                <Th>Tool</Th>
                <Th>Free tier (real limits)</Th>
                <Th>First paid plan</Th>
                <Th>Standout strength</Th>
                <Th>Main weakness</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td><span className="font-medium text-gray-800">Midjourney</span></Td>
                <Td>None — no trial</Td>
                <Td>$10/mo Basic (~200 images, metered GPU)</Td>
                <Td>Best overall aesthetics; V8 native 2K</Td>
                <Td>Metered GPU hours; Stealth mode needs $60/mo</Td>
              </tr>
              <tr>
                <Td><span className="font-medium text-gray-800">GPT Image (ChatGPT)</span></Td>
                <Td>Limited generations on free ChatGPT</Td>
                <Td>$20/mo ChatGPT Plus</Td>
                <Td>Follows complex instructions best; edits via chat</Td>
                <Td>Less stylized; generation caps even on Plus</Td>
              </tr>
              <tr>
                <Td><span className="font-medium text-gray-800">Adobe Firefly</span></Td>
                <Td>Limited daily generative credits</Td>
                <Td>$9.99/mo Standard (2,000 credits)</Td>
                <Td>Commercially safe; Photoshop integration</Td>
                <Td>Conservative, less artistic output</Td>
              </tr>
              <tr>
                <Td><span className="font-medium text-gray-800">Ideogram</span></Td>
                <Td>30 credits/week (Google/Apple/MS sign-in only)</Td>
                <Td>$20/mo Plus ($15 annual, 2,400 credits)</Td>
                <Td>Legible text inside images</Td>
                <Td>Photorealism trails Midjourney; free gens public</Td>
              </tr>
              <tr>
                <Td><span className="font-medium text-gray-800">Leonardo AI</span></Td>
                <Td>150 fast tokens/day (~30-50 images)</Td>
                <Td>$12/mo Essential ($10 annual)</Td>
                <Td>Generous free tier; custom model training</Td>
                <Td>Token system takes learning; free gens public</Td>
              </tr>
              <tr>
                <Td><span className="font-medium text-gray-800">Recraft</span></Td>
                <Td>~50 credits/day — but public, no commercial rights</Td>
                <Td>$12/mo Basic ($10 annual, 1,000 credits)</Td>
                <Td>True SVG vectors; brand style training</Td>
                <Td>Photorealism lags; credits burn fast on iteration</Td>
              </tr>
              <tr>
                <Td><span className="font-medium text-gray-800">Stable Diffusion</span></Td>
                <Td>Fully free self-hosted (GPU required)</Td>
                <Td>Brand Studio $19/mo, or API ~$0.03-0.08/image</Td>
                <Td>Unlimited, private, total pipeline control</Td>
                <Td>Needs GPU + technical setup; no guardrails built in</Td>
              </tr>
              <tr>
                <Td><span className="font-medium text-gray-800">Canva AI</span></Td>
                <Td>Limited AI generations on free plan</Td>
                <Td>Canva Pro ~$12/mo ($144/yr)</Td>
                <Td>Images inside a full design + publishing workflow</Td>
                <Td>Weakest raw image model of the eight</Td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          Midjourney: still the quality benchmark — and still no free lunch
        </h2>
        <p>
          On our five-prompt test, Midjourney produced the image we would
          actually ship four times out of five. The product-shot prompt
          returned lighting and materials that looked photographed rather than
          rendered, and the illustrated blog header had a compositional
          coherence the other tools approximated but did not match. V8&apos;s
          native 2K output means less upscaling work, and Draft Mode — half
          GPU cost, roughly 10x speed, 24 thumbnails per batch — is genuinely
          useful for exploring directions before spending fast hours on finals.
        </p>
        <p>
          Speed: standard generations came back in about 4-12 seconds on the
          current model. The friction is elsewhere: there is no free tier and
          no trial, and Basic&apos;s 3.3 fast GPU hours (~200 standard images)
          evaporate quickly once you start iterating in HD, which costs about
          1.6x a standard job. Privacy-conscious buyers should note that
          Stealth Mode (private generations) requires Pro at $60/mo, and
          companies above $1M revenue are contractually required to be on Pro
          or Mega.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: Basic $10/mo ($8 annual), Standard $30/mo ($24
          annual, adds unlimited Relax images), Pro $60/mo ($48 annual, Stealth
          Mode), Mega $120/mo. Extra fast hours $4/hr.{" "}
          <Link href="/tool/midjourney" className="text-indigo-600 underline">
            Read our Midjourney review →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          GPT Image in ChatGPT: the instruction-follower (RIP DALL-E 3)
        </h2>
        <p>
          With DALL-E 3 retired in May 2026, ChatGPT&apos;s built-in image
          generation is now the GPT Image line — and it is the best of the
          eight at following complicated, specific instructions. Our most
          demanding prompt (&ldquo;the same character from scene one, now in a
          rainy street market at night, holding the same blue umbrella&rdquo;)
          was handled more literally here than anywhere else: conversational
          revision (&ldquo;make the umbrella red, keep everything else&rdquo;)
          is the workflow none of the pure generators match.
        </p>
        <p>
          Where it loses: aesthetic ceiling. Side by side with Midjourney, GPT
          Image output reads as competent stock rather than art-directed. Even
          on Plus ($20/mo) you hit generation limits during busy periods, and
          there is no batch-variation workflow comparable to Midjourney&apos;s
          four-up grid. Best mental model: it is the image tool you already own
          if you pay for ChatGPT — excellent for diagrams, mockups with exact
          content, and iterative edits; not the tool for a visual brand look.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: limited free generations in ChatGPT; ChatGPT
          Plus $20/mo.{" "}
          <Link href="/tool/dalle-3" className="text-indigo-600 underline">
            Read our review (formerly DALL-E 3) →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          Adobe Firefly: the one your legal team will approve
        </h2>
        <p>
          Firefly&apos;s output in our test was the most conservative of the
          eight — clean, well-lit, commercially appropriate, and rarely
          surprising. That is a feature. Because it is trained on licensed
          Adobe Stock and public-domain content, it is the only generator here
          whose training-data provenance a procurement team can sign off on,
          and Enterprise plans add IP indemnification. If you generate images
          for clients or a brand, that matters more than winning an aesthetics
          contest.
        </p>
        <p>
          The workflow advantage is real: Generative Fill inside Photoshop let
          us extend our product shot&apos;s background in place rather than
          re-prompting. The credit system is the annoyance — the $9.99/mo
          Standard plan&apos;s 2,000 credits are shared across image, video and
          audio features, so heavy mixed use burns them faster than the headline
          suggests. The free tier (limited daily credits) is enough to evaluate
          it, not to run a workflow.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: Free (limited daily credits), Standard $9.99/mo
          (2,000 credits), Pro $19.99/mo (4,000 credits + Photoshop web/mobile),
          Premium $199.99/mo (50,000 credits).{" "}
          <Link href="/tool/firefly" className="text-indigo-600 underline">
            Read our Firefly review →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          Ideogram: the only one that spelled our headline right
        </h2>
        <p>
          Our poster prompt required the exact headline &ldquo;Summer Studio
          Sale — 48 Hours Only&rdquo; inside the image. Ideogram rendered it
          correctly on the first batch and kept the spelling stable across
          variations. Every other tool garbled it at least once; several never
          got it right. If your images need words — event posters, social
          cards, packaging mockups, t-shirt designs — this is the tool, full
          stop. The 4.0 model also shipped as open weights in June 2026 (for
          non-commercial research), and 4.5 added multi-reference image support
          for style consistency.
        </p>
        <p>
          Weaknesses: pure photorealism still trails Midjourney, and the free
          tier has a gotcha we have not seen elsewhere — the 30 weekly credits
          only exist if you sign in with Google, Apple or Microsoft (email
          accounts get none), and free generations are public. On Plus and
          above, when monthly credits run out you drop into an unlimited slower
          queue rather than being cut off, which softens the credit anxiety.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: Free 30 credits/week; Plus $20/mo ($15 annual,
          2,400 credits, private gens); Pro $60/mo ($42 annual, batch
          generation); Team $30/user/mo.{" "}
          <Link href="/tool/ideogram" className="text-indigo-600 underline">
            Read our Ideogram review →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          Leonardo AI: the free tier you can actually work in
        </h2>
        <p>
          Leonardo&apos;s 150 daily fast tokens (roughly 30-50 images depending
          on settings, resetting every day) made it the only free tier in this
          test we could run real experiments on without watching a meter. Output
          quality on the platform models sat a notch below Midjourney on our
          aesthetic prompts but was consistently good, and the Realtime Canvas —
          generation that updates live as you sketch — is a genuinely different
          way to work that none of the others offer.
        </p>
        <p>
          The differentiator for production users is custom model training:
          upload a set of your own images and fine-tune a personal model
          (10/month on Essential) so every generation inherits your style — the
          closest thing here to Midjourney&apos;s Omni Reference, but owned by
          you. Watch out for the token system&apos;s learning curve (different
          models and resolutions burn tokens at different rates) and note that
          free-tier generations are public and carry no commercial rights.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: Free 150 tokens/day; Essential $12/mo ($10
          annual, 8,500 tokens/mo, private gens, commercial rights); Premium
          $30/mo ($24 annual); Ultimate $60/mo ($48 annual).{" "}
          <Link href="/tool/leonardo" className="text-indigo-600 underline">
            Read our Leonardo AI review →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          Recraft: the vector specialist
        </h2>
        <p>
          Recraft is the only tool here whose logo-style prompt returned a true
          SVG with organized, editable layers — paths we could open and adjust
          in a design tool rather than a flattened PNG pretending to be a logo.
          For icons, illustrations and brand assets that must scale from a
          favicon to a billboard, that is categorically different output. Text
          rendering was also strong (second only to Ideogram), and custom style
          training — feed it your brand assets, and it learns the visual
          identity — produced the most on-brand variations in our batch test.
        </p>
        <p>
          The free tier&apos;s ~50 daily credits sound generous until you read
          the license: free-plan images are public, owned by Recraft, and not
          licensed for commercial use. Treat it as an evaluation tier. Raster
          photorealism trails Midjourney and Ideogram — pay for Recraft when
          vectors and brand consistency are the job, not for photos.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: Free ~50 credits/day (no commercial rights);
          Basic $12/mo ($10 annual, 1,000 credits, full ownership); Pro from
          $20/mo (2,000 credits, adds video); Teams $22/seat/mo.{" "}
          <Link href="/tool/recraft" className="text-indigo-600 underline">
            Read our Recraft review →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          Stable Diffusion: free forever, if you can drive it
        </h2>
        <p>
          Stable Diffusion is not an app; it is an open model family. Run
          locally (ComfyUI, A1111 or Fooocus on an 8GB+ VRAM GPU) it is the only
          option here with zero per-image cost, total privacy, and unlimited
          volume — free under the Community License for individuals and
          organizations under $1M revenue. Raw out-of-the-box output was the
          weakest of the eight on default settings, but with community
          fine-tunes and ControlNet it becomes the most controllable pipeline
          in existence: exact poses, exact compositions, reproducible seeds.
        </p>
        <p>
          No GPU or patience? The hosted route changed in 2026: DreamStudio now
          redirects to Stability&apos;s Brand Studio ($19/mo Creator for 2,000
          credits), and the developer API bills per image — roughly $0.03 for
          Stable Image Core up to $0.08 for Stable Image Ultra (as of writing).
          Honest advice: if you are non-technical, start with Leonardo or
          Ideogram; come to Stable Diffusion when you need volume, privacy or
          pipeline control that hosted tools cannot give you.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: self-hosted free (GPU required); Brand Studio
          from $19/mo; API ~$0.03-0.08/image.{" "}
          <Link href="/tool/stable-diffusion" className="text-indigo-600 underline">
            Read our Stable Diffusion review →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">
          Canva AI: the weakest generator, the most convenient workflow
        </h2>
        <p>
          Judged purely as an image model, Canva&apos;s AI was the least
          impressive in our test — fine for quick social fillers, visibly
          behind the dedicated generators on quality. But Canva is not selling
          a model; it is selling the workflow around it. Generating an image
          directly inside the design you are building, with your brand kit,
          templates and one-click resize to every social format, saved us more
          total time on the blog-header task than generating a better image
          elsewhere and importing it. If your destination is Canva anyway,
          generating inside Canva is the pragmatic choice.
        </p>
        <p className="text-sm text-gray-500">
          Pricing as of writing: limited AI generations on the free plan; Canva
          Pro ~$12/mo ($144/yr) unlocks the fuller AI feature set.{" "}
          <Link href="/tool/canva-ai" className="text-indigo-600 underline">
            Read our Canva AI review →
          </Link>
        </p>
      </section>

      <section className="mt-10 space-y-4 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">Head-to-head on the things that matter</h2>
        <h3 className="text-base font-medium text-gray-800">Free tiers, honestly ranked</h3>
        <p>
          Leonardo (150 tokens/day) &gt; Recraft (~50/day, no commercial rights)
          &gt; Ideogram (30/week, sign-in gate) &gt; Firefly / Canva (limited
          daily credits) &gt; GPT Image (small free allowance in ChatGPT) &gt;
          Midjourney (nothing). Stable Diffusion sits outside the ranking:
          infinite, if you own a GPU.
        </p>
        <h3 className="font-medium text-gray-800 text-base">Output quality on our five prompts</h3>
        <p>
          Photorealistic product shot: Midjourney &gt; Firefly &gt; Leonardo &gt;
          GPT Image. Illustrated blog header: Midjourney &gt; Ideogram &gt;
          Leonardo. Poster with exact headline text: Ideogram &gt; Recraft &gt;
          GPT Image — everyone else failed spelling at least once. Logo/icon:
          Recraft (true SVG) &gt; Ideogram. Character consistency across two
          scenes: GPT Image &gt; Midjourney (Omni Reference) &gt; Leonardo
          (custom model).
        </p>
        <h3 className="font-medium text-gray-800 text-base">Pricing reality</h3>
        <p>
          Entry prices hide the meter. Midjourney&apos;s $10 Basic is ~200
          images with no safety net. Firefly&apos;s $9.99 credits are shared
          with video and audio. Ideogram and Recraft drop you to slow queues
          (or nothing commercial) when credits run out. Leonardo&apos;s tokens
          burn at different rates per model. The only flat, predictable bills
          here are Canva Pro (~$12/mo) and ChatGPT Plus ($20/mo) — both with
          their own usage caps. Budget for the plan that matches your monthly
          image volume, not the headline number.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-gray-600">
        <h2 className="text-xl font-medium text-gray-900">Which one should you choose?</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-gray-800">Visual quality is the KPI (art direction, hero images, campaigns):</span>{" "}
            Midjourney Standard ($30/mo) — the unlimited Relax mode matters once
            you iterate seriously.
          </li>
          <li>
            <span className="font-medium text-gray-800">You need words inside the image:</span>{" "}
            Ideogram Plus. Nothing else is close on typography.
          </li>
          <li>
            <span className="font-medium text-gray-800">Logos, icons, anything that must scale:</span>{" "}
            Recraft Basic. SVG output is the whole point.
          </li>
          <li>
            <span className="font-medium text-gray-800">Client or brand work with legal review:</span>{" "}
            Adobe Firefly, especially if you already pay for Creative Cloud.
          </li>
          <li>
            <span className="font-medium text-gray-800">Hobbyist / learning / zero budget:</span>{" "}
            Leonardo&apos;s free tier first; Stable Diffusion when you outgrow
            it and have the hardware.
          </li>
          <li>
            <span className="font-medium text-gray-800">You already pay for ChatGPT Plus:</span>{" "}
            Use GPT Image for mockups, diagrams and edits before buying anything
            else — you may not need a second subscription.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium text-gray-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-5">
          {FAQ_ITEMS.map((f) => (
            <div key={f.q}>
              <h3 className="text-base font-medium text-gray-800">{f.q}</h3>
              <p className="mt-1.5 text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-500">
        <p>
          <span className="font-medium text-gray-700">How we tested:</span>{" "}
          all eight tools were tested hands-on in October 2026 using the same
          five prompts (photorealistic product shot, illustrated blog header,
          poster with exact multi-word headline, logo-style icon, and a
          character-consistency follow-up scene). We evaluated output quality,
          generation speed, free-tier limits as actually enforced, and
          first-paid-plan value. Pricing figures were checked against official
          pricing pages on October 21, 2026 and change frequently in this
          category — verify at sign-up. Some links on this site are affiliate
          links; our opinions are not for sale. See our{" "}
          <Link href="/editorial-policy" className="text-indigo-600 underline">
            editorial policy
          </Link>{" "}
          and{" "}
          <Link href="/disclaimer" className="text-indigo-600 underline">
            disclaimer
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
