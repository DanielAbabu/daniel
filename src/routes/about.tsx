import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { site, skillGroups } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Émile Vasari" },
      {
        name: "description",
        content: "About Émile Vasari: a software engineer working on realtime systems, ML infrastructure, and developer tools.",
      },
      { property: "og:title", content: "About — Émile Vasari" },
      { property: "og:description", content: site.shortBio },
    ],
  }),
  component: About,
});

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className="border-t border-rule py-3">
      <div className="flex items-baseline justify-between">
        <span className="text-base">{name}</span>
        <span className="font-mono-ui text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-2 h-px w-full bg-rule">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left bg-primary"
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10">
      <Reveal>
        <p className="section-num mb-6">— Index 02 / About</p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
          A few notes
          <br />
          <span className="italic text-primary">on me.</span>
        </h1>
      </Reveal>

      <section className="mt-24 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="section-num">— Bio</p>
        </Reveal>
        <div className="md:col-span-8 md:col-start-4 space-y-6 text-lg leading-relaxed">
          {site.longBio.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={i === 0 ? "font-display text-2xl drop-cap md:text-3xl" : "text-muted-foreground"}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-32 border-y border-rule py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="section-num">— Skills</p>
            <h2 className="mt-4 font-display text-4xl">What I reach for.</h2>
          </Reveal>
          <div className="md:col-span-9 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {skillGroups.map((g, gi) => (
              <Reveal key={g.group} delay={gi * 0.05}>
                <h3 className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  / {g.group}
                </h3>
                <div className="mt-4">
                  {g.items.map((s, i) => (
                    <SkillBar key={s.name} {...s} delay={i * 0.06} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-32 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="section-num">— Currently</p>
        </Reveal>
        <div className="md:col-span-8 md:col-start-4 grid gap-8 md:grid-cols-3">
          {[
            { label: "Reading", value: "Designing Data-Intensive Applications, again." },
            { label: "Learning", value: "Verifiable computation in zk circuits." },
            { label: "Listening", value: "Caroline Polachek & Bill Frisell on shuffle." },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="border-t-2 border-primary pt-4">
                <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-3 font-display text-xl">{c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
