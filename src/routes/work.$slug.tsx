import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Case Study" }] };
    return {
      meta: [
        { title: `${p.title} — Case Study` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Case Study` },
        { property: "og:description", content: p.summary },
      ],
    };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl px-6 pt-40 text-center">
        <p className="section-num">— Error</p>
        <h1 className="mt-4 font-display text-5xl">Something broke.</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 editorial-link"
        >
          Try again →
        </button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 pt-40 text-center">
      <p className="section-num">— 404</p>
      <h1 className="mt-4 font-display text-5xl">Project not found.</h1>
      <Link to="/work" className="mt-6 inline-block editorial-link">All work →</Link>
    </div>
  ),
  component: CaseStudy,
});

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^(-?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) { setDisplayed(value); return; }
    const sign = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const dur = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      const fixed = match[2].includes(".") ? current.toFixed(1) : Math.round(current).toString();
      setDisplayed(`${sign}${fixed}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{displayed}</span>;
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* Cover */}
      <Cover project={project} />

      {/* Context & Goals */}
      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="section-num">— 01 / Context</p>
          </Reveal>
          <div className="md:col-span-8 md:col-start-4">
            <Reveal>
              <p className="font-display text-3xl leading-[1.2] md:text-4xl drop-cap">
                {project.context}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-16 font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Goals & Constraints
              </h3>
              <ul className="mt-6 divide-y divide-rule border-y border-rule">
                {project.goals.map((g, i) => (
                  <li key={i} className="flex items-baseline gap-6 py-5">
                    <span className="font-mono-ui text-xs text-muted-foreground">
                      G/0{i + 1}
                    </span>
                    <span className="font-display text-xl md:text-2xl">{g}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-rule bg-secondary/40">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10">
          <Reveal>
            <div className="mb-16 flex items-end justify-between border-b border-rule pb-6">
              <p className="section-num">— 02 / Approach</p>
              <span className="font-mono-ui text-xs text-muted-foreground">
                {project.approach.length} key decisions
              </span>
            </div>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-12">
            {project.approach.map((a, i) => (
              <Reveal key={i} delay={i * 0.08} className="md:col-span-4">
                <div className="border-t border-foreground pt-6">
                  <span className="font-mono-ui text-xs text-muted-foreground">
                    A/0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-10">
        <Reveal>
          <p className="section-num mb-6">— 03 / Build Highlights</p>
          <h2 className="font-display text-5xl tracking-tight md:text-7xl">
            Inside the <span className="italic text-primary">build.</span>
          </h2>
        </Reveal>
        <div className="mt-20 space-y-24">
          {project.highlights.map((h, i) => (
            <Reveal key={i} delay={0.05}>
              <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-5">
                  <span className="font-mono-ui text-xs text-muted-foreground">
                    H/0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl">{h.title}</h3>
                  <p className="mt-4 text-base text-muted-foreground">{h.body}</p>
                </div>
                <div className="md:col-span-7">
                  {h.code ? (
                    <pre className="overflow-x-auto border border-rule bg-foreground/95 p-6 text-sm leading-relaxed text-background">
                      <code className="font-mono-ui">
                        <span className="mr-3 select-none text-background/40">
                          {h.lang ?? "code"}
                        </span>
                        {"\n"}
                        {h.code}
                      </code>
                    </pre>
                  ) : (
                    <Parallax offset={30}>
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/30 via-foreground/10 to-secondary border border-rule" />
                    </Parallax>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="border-y border-rule">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-3">
              <p className="section-num">— 04 / Challenges</p>
            </Reveal>
            <div className="md:col-span-8 md:col-start-4 space-y-8">
              {project.challenges.map((c, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-6">
                    <span className="font-display text-5xl text-primary leading-none">
                      0{i + 1}
                    </span>
                    <p className="font-display text-xl leading-relaxed md:text-2xl">
                      {c}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-10">
        <Reveal>
          <p className="section-num mb-6">— 05 / Outcome</p>
          <h2 className="font-display text-5xl md:text-7xl">By the numbers.</h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-px bg-rule md:grid-cols-4">
          {project.outcomes.map((o, i) => (
            <Reveal key={i} delay={i * 0.06} className="bg-background p-8">
              <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {o.label}
              </p>
              <p className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
                <AnimatedNumber value={o.value} />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 border-l-2 border-primary pl-8">
            <p className="section-num mb-3">— 06 / What I Learned</p>
            <p className="font-display text-2xl italic leading-relaxed md:text-3xl">
              "{project.learned}"
            </p>
          </div>
        </Reveal>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-2">
          <Link
            to="/work/$slug"
            params={{ slug: prev.slug }}
            className="group border-b border-rule p-8 transition-colors hover:bg-secondary/40 md:border-b-0 md:border-r md:p-12"
          >
            <p className="font-mono-ui text-xs text-muted-foreground">← Previous</p>
            <h3 className="mt-2 font-display text-3xl md:text-5xl">{prev.title}</h3>
          </Link>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group p-8 text-right transition-colors hover:bg-secondary/40 md:p-12"
          >
            <p className="font-mono-ui text-xs text-muted-foreground">Next →</p>
            <h3 className="mt-2 font-display text-3xl md:text-5xl">{next.title}</h3>
          </Link>
        </div>
      </section>
    </article>
  );
}

function Cover({ project }: { project: Project }) {
  const palette: Record<string, string> = {
    crimson: "from-primary via-primary/70 to-foreground",
    ink: "from-foreground via-foreground to-primary",
    warm: "from-primary/50 via-secondary to-background",
  };
  return (
    <section className="relative isolate overflow-hidden">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${palette[project.cover]}`}>
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 6px)",
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10 md:pb-40 md:pt-52">
        <Link to="/work" className="font-mono-ui text-xs text-primary-foreground/70 mix-blend-difference editorial-link">
          ← All work
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-[clamp(4rem,16vw,16rem)] font-light leading-[0.82] tracking-[-0.04em] text-primary-foreground mix-blend-difference"
        >
          {project.title}
          <span className="text-primary-foreground/60">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 max-w-2xl font-display text-2xl leading-[1.25] text-primary-foreground mix-blend-difference md:text-3xl"
        >
          {project.summary}
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-primary-foreground/30 pt-8 text-primary-foreground mix-blend-difference md:grid-cols-4"
        >
          <div>
            <dt className="font-mono-ui text-[10px] uppercase tracking-[0.2em] opacity-70">Year</dt>
            <dd className="mt-1 font-display text-xl">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono-ui text-[10px] uppercase tracking-[0.2em] opacity-70">Role</dt>
            <dd className="mt-1 font-display text-xl">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono-ui text-[10px] uppercase tracking-[0.2em] opacity-70">Timeline</dt>
            <dd className="mt-1 font-display text-xl">{project.timeline}</dd>
          </div>
          <div>
            <dt className="font-mono-ui text-[10px] uppercase tracking-[0.2em] opacity-70">Stack</dt>
            <dd className="mt-1 text-sm">{project.stack.slice(0, 3).join(" · ")}</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
