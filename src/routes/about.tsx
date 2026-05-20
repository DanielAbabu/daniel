import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { site, skillGroups } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      {
        name: "description",
        content: `About ${site.name}: a software engineer specializing in backend systems and distributed architecture.`,
      },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: site.shortBio },
    ],
  }),
  component: About,
});

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
        <Reveal className="md:col-span-4">
          <div className="aspect-[3/4] w-full overflow-hidden bg-secondary/20">
            <img
              src="/profile.png"
              alt={site.name}
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>
        </Reveal>
        <div className="md:col-span-5 space-y-6 text-lg leading-relaxed">
          {site.longBio.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={
                  i === 0 ? "font-display text-2xl drop-cap md:text-3xl" : "text-muted-foreground"
                }
              >
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
                <h3 className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-rule pb-3">
                  / {g.group}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s.name}
                      className="border border-rule px-4 py-2 font-mono-ui text-sm text-foreground hover:border-foreground transition-colors"
                    >
                      {s.name}
                    </span>
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
            { label: "Solving", value: "Advanced graph problems on Codeforces." },
            { label: "Learning", value: "Distributed consensus and Raft in Go." },
            { label: "Building", value: "High-performance messaging APIs." },
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
