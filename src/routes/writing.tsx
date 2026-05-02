import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/lib/site-data";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Notes on systems & craft" },
      {
        name: "description",
        content: "Essays on building software well: distributed systems, performance, design, and the craft of engineering.",
      },
      { property: "og:title", content: "Writing — Notes on systems & craft" },
      { property: "og:description", content: "Essays on building software well." },
    ],
  }),
  component: Writing,
});

function Writing() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10">
      <Reveal>
        <p className="section-num mb-6">— Index 04 / Writing</p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
          Notes on
          <br />
          <span className="italic text-primary">the craft.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted-foreground">
          Occasional essays on building software — what worked, what didn't,
          and what I'd tell my younger self about the trade-offs.
        </p>
      </Reveal>

      <div className="mt-24 border-t border-rule">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.05}>
            <Link
              to="/writing/$slug"
              params={{ slug: a.slug }}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-rule py-10 transition-colors hover:bg-secondary/40"
            >
              <span className="col-span-2 md:col-span-1 font-mono-ui text-xs text-muted-foreground">
                {new Date(a.date).getFullYear()}
              </span>
              <h2 className="col-span-10 md:col-span-7 font-display text-3xl tracking-tight transition-transform group-hover:translate-x-2 md:text-5xl">
                {a.title}
              </h2>
              <p className="col-span-12 md:col-span-3 text-sm text-muted-foreground">
                {a.excerpt}
              </p>
              <span className="col-span-12 md:col-span-1 text-right font-mono-ui text-xs text-muted-foreground">
                {a.readingTime} ↗
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
