import HomeDirectory from "@/components/HomeDirectory";
import { getTools } from "@/lib/tools";

export default async function Home() {
  const tools = await getTools();

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20">
      <section className="pb-8 pt-14 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
          Curated for marketers &amp; content teams
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Find the right AI tool for{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #4338ca, #c026d3)",
            }}
          >
            every marketing task
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Search, compare and review the best AI tools for content, SEO, social,
          video and ads — with hands-on notes from people who actually use them.
        </p>
      </section>

      <HomeDirectory tools={tools} />
    </main>
  );
}
