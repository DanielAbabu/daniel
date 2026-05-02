import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Case Studies" },
      {
        name: "description",
        content:
          "Selected case studies: realtime systems, ML infrastructure, design tooling. Detailed write-ups of what was built and why.",
      },
      { property: "og:title", content: "Work — Case Studies" },
      {
        property: "og:description",
        content: "Detailed case studies of systems built across realtime, ML, and developer tools.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10">
      <Reveal>
        <p className="section-num mb-6">— Index 01 / Work</p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
          Case
          <br />
          <span className="italic text-primary">studies.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted-foreground">
          A small set of projects, each written up properly: the context, the
          decisions, the trade-offs, and what I'd do differently. No demo reels.
        </p>
      </Reveal>

      <div className="mt-24 border-t border-rule">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group grid grid-cols-12 items-center gap-6 border-b border-rule py-10 transition-colors hover:bg-secondary/40"
            >
              <span className="col-span-1 font-mono-ui text-xs text-muted-foreground">
                / 0{i + 1}
              </span>
              <h3 className="col-span-11 md:col-span-5 font-display text-4xl tracking-tight transition-transform group-hover:translate-x-2 md:text-6xl">
                {p.title}
              </h3>
              <p className="col-span-12 md:col-span-3 text-sm text-muted-foreground">
                {p.summary}
              </p>
              <div className="col-span-8 md:col-span-2 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-rule px-2 py-0.5 font-mono-ui text-[10px] uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="col-span-4 md:col-span-1 text-right font-mono-ui text-xs text-muted-foreground">
                {p.year} ↗
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
