import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { experience, type ExperienceItem } from "@/lib/site-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Émile Vasari" },
      {
        name: "description",
        content: "A timeline of work and education across realtime systems, ML infrastructure, and design tooling.",
      },
      { property: "og:title", content: "Experience — Émile Vasari" },
      { property: "og:description", content: "Work history and education timeline." },
    ],
  }),
  component: Experience,
});

type Filter = "all" | "work" | "education";

function Experience() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = experience.filter((e) => filter === "all" || e.type === filter);

  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10">
      <Reveal>
        <p className="section-num mb-6">— Index 03 / Experience</p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
          A working
          <br />
          <span className="italic text-primary">timeline.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 flex gap-2 border-b border-rule pb-4">
          {(["all", "work", "education"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`border px-4 py-2 font-mono-ui text-xs uppercase tracking-wider transition-colors ${
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
  );
}

function TimelineEntry({ item, index }: { item: ExperienceItem; index: number }) {
  const left = index % 2 === 0;
  return (
    <Reveal as="li" delay={index * 0.04}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div className={`relative pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`}>
          <span
            className={`absolute top-2 h-3 w-3 rounded-full border-2 border-background bg-primary left-[10px] md:left-auto ${left ? "md:right-[-7px]" : "md:left-[-7px]"}`}
          />
          <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {item.dates} · {item.type === "education" ? "Education" : "Work"}
          </p>
          <h3 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-1 text-base">
            <span className="text-primary">{item.org}</span>
            {item.location ? <span className="text-muted-foreground"> · {item.location}</span> : null}
          </p>
          <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${left ? "md:ml-auto" : ""}`}>
            {item.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">— {b}</li>
            ))}
          </ul>
          {item.tech && (
            <div className={`mt-4 flex flex-wrap gap-1.5 ${left ? "md:justify-end" : ""}`}>
              {item.tech.map((t) => (
                <span key={t} className="border border-rule px-2 py-0.5 font-mono-ui text-[10px] uppercase tracking-wider">
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
