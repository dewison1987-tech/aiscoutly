import ToolDirectory from "@/components/ToolDirectory";
import { getTools } from "@/lib/tools";

export default async function Home() {
  const tools = await getTools();

  return (
    <main>
      <section
        className="px-4 pb-24 pt-20 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #4338ca 0%, #6d28d9 45%, #c026d3 100%)",
        }}
      >
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-200">
          Curated for marketers &amp; content teams
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Find the right AI tool for every marketing task
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
          Search, compare and review the best AI tools for content, SEO, social,
          video and ads — with hands-on notes from people who actually use them.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur">
            {tools.length}+ tools
          </span>
          <span className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur">
            {new Set(tools.map((t) => t.category)).size} categories
          </span>
          <span className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur">
            Updated weekly
          </span>
        </div>
      </section>

      <section className="mx-auto -mt-12 max-w-5xl px-4 pb-16">
        <ToolDirectory tools={tools} />
      </section>
    </main>
  );
}
