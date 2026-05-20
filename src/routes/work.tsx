import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { experience, type ExperienceItem } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work & Experience — Daniel Ababu Tegegen" },
      {
        name: "description",
        content:
          "Selected case studies and a timeline of work and education across backend development, distributed systems, and competitive programming.",
      },
      { property: "og:title", content: "Work & Experience" },
      {
        property: "og:description",
        content: "Detailed case studies and work timeline.",
      },
    ],
  }),
  component: WorkAndExperience,
});

type Filter = "all" | "work" | "education";

function WorkAndExperience() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = experience.filter((e) => filter === "all" || e.type === filter);

  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10 overflow-hidden">
      <Reveal>
        <p className="section-num mb-6">— Index 01 / Work</p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
          Case
          <br />
          <span className="italic text-primary">studies.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted-foreground">
          A small set of projects, each written up properly: the context, the decisions, the
          trade-offs, and what I'd do differently. No demo reels.
        </p>
      </Reveal>

      <div className="mt-24 border-t border-rule">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group grid grid-cols-12 items-center gap-4 md:gap-6 border-b border-rule py-10 transition-colors hover:bg-secondary/40"
            >
              <span className="col-span-2 md:col-span-1 font-mono-ui text-xs text-muted-foreground">
                / 0{i + 1}
              </span>
              <h3 className="col-span-10 md:col-span-5 font-display text-3xl md:text-4xl lg:text-6xl tracking-tight transition-transform group-hover:translate-x-2">
                {p.title}
              </h3>
              <p className="col-span-12 md:col-span-3 text-sm text-muted-foreground mt-2 md:mt-0">
                {p.summary}
              </p>
              <div className="col-span-8 md:col-span-2 flex flex-wrap gap-1.5 mt-2 md:mt-0">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-rule px-2 py-0.5 font-mono-ui text-[10px] uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="col-span-4 md:col-span-1 text-right font-mono-ui text-xs text-muted-foreground mt-2 md:mt-0">
                {p.year} ↗
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-40">
        <Reveal>
          <p className="section-num mb-6">— 02 / Experience</p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.85] tracking-[-0.04em]">
            A working
            <br />
            <span className="italic text-primary">timeline.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex gap-2 border-b border-rule pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {(["all", "work", "education"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`border px-4 py-2 font-mono-ui text-xs uppercase tracking-wider transition-colors shrink-0 ${
                  filter === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-rule hover:border-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-rule md:left-1/2" />
          <ul className="space-y-16">
            {items.map((item, i) => (
              <TimelineEntry key={`${item.org}-${item.dates}`} item={item} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TimelineEntry({ item, index }: { item: ExperienceItem; index: number }) {
  const left = index % 2 === 0;
  return (
    <Reveal as="li" delay={index * 0.04}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div
          className={`relative pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`}
        >
          <span
            className={`absolute top-2 h-3 w-3 rounded-full border-2 border-background bg-primary left-[10px] md:left-auto ${left ? "md:right-[-7px]" : "md:left-[-7px]"}`}
          />
          <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {item.dates} · {item.type === "education" ? "Education" : "Work"}
          </p>
          <h3 className="mt-2 font-display text-2xl md:text-3xl lg:text-4xl tracking-tight">
            {item.title}
          </h3>
          <p className="mt-1 text-base">
            <span className="text-primary">{item.org}</span>
            {item.location ? (
              <span className="text-muted-foreground flex-col md:flex-row"> · {item.location}</span>
            ) : null}
          </p>
          <ul
            className={`mt-4 space-y-2 text-sm text-muted-foreground ${left ? "md:ml-auto" : ""}`}
          >
            {item.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                — {b}
              </li>
            ))}
          </ul>
          {item.tech && (
            <div className={`mt-4 flex flex-wrap gap-1.5 ${left ? "md:justify-end" : ""}`}>
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="border border-rule px-2 py-0.5 font-mono-ui text-[10px] uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className={`hidden md:block ${left ? "" : "md:order-1"}`} aria-hidden />
      </div>
    </Reveal>
  );
}
