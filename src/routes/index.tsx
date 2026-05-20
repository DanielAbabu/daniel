import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Software Engineer & Systems Builder` },
      {
        name: "description",
        content: `${site.name} builds distributed systems, backend architecture, and high-performance applications. Selected work, writing, and ways to get in touch.`,
      },
      { property: "og:title", content: `${site.name} — Software Engineer` },
      {
        property: "og:description",
        content: site.shortBio,
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 flex items-center gap-6">
          <span className="section-num">— Portfolio · MMXXVI</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono-ui text-xs text-muted-foreground">{site.location}</span>
        </div>

        <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] font-light leading-[0.85] tracking-[-0.04em]">
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Daniel
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="block italic text-primary"
          >
            Ababu<span className="text-foreground not-italic">.</span>
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:col-span-6 md:col-start-1 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Backend Engineer specializing in distributed systems and high-concurrency architecture.
            I design robust infrastructure that powers scalable, efficient applications—and train
            the next generation of engineers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:col-span-4 md:col-start-9 md:text-right flex flex-col items-end"
          >
            <Link
              to="/work"
              className="editorial-link inline-flex items-center gap-2 text-xl font-display"
            >
              Selected Work
              <span aria-hidden>↘</span>
            </Link>
            <div className="mt-5 flex flex-col gap-1.5 items-end text-right">
              <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground bg-secondary/50 px-2 py-1 rounded-sm">
                1200+ Algorithms Solved
              </p>
              <p className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground bg-secondary/50 px-2 py-1 rounded-sm">
                150+ Engineers Mentored
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="font-mono-ui text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <div className="mx-auto mt-2 h-12 w-px bg-rule overflow-hidden">
          <div className="h-1/2 w-full animate-pulse bg-foreground" />
        </div>
      </motion.div>
    </section>
  );
}

function FeaturedWork() {
  const featured = projects.slice(0, 3);
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-10">
      <Reveal>
        <div className="mb-20 flex items-end justify-between gap-6 border-b border-rule pb-6">
          <div>
            <p className="section-num mb-4">— 01 / Selected Work</p>
            <h2 className="font-display text-5xl tracking-tight md:text-7xl">
              Things I've
              <br />
              <span className="italic">built carefully.</span>
            </h2>
          </div>
          <Link to="/work" className="editorial-link hidden text-base md:inline-block">
            All projects (03) →
          </Link>
        </div>
      </Reveal>

      <div className="space-y-32">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group grid gap-8 md:grid-cols-12 md:gap-12"
            >
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2 md:col-start-6" : ""}`}>
                <Parallax offset={40}>
                  <ProjectCover project={p} />
                </Parallax>
              </div>
              <div
                className={`md:col-span-4 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-9"} flex flex-col justify-end`}
              >
                <p className="font-mono-ui text-xs text-muted-foreground">
                  / 0{i + 1} · {p.year}
                </p>
                <h3 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">{p.title}</h3>
                <p className="mt-4 text-base text-muted-foreground">{p.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-rule px-2.5 py-1 font-mono-ui text-[10px] uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 editorial-link self-start">
                  Read case study
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCover({ project }: { project: { cover: string; title: string } }) {
  const palette: Record<string, string> = {
    crimson: "from-primary via-primary/80 to-foreground",
    ink: "from-foreground via-foreground/90 to-primary/40",
    warm: "from-primary/60 via-secondary to-background",
  };
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${palette[project.cover] ?? palette.crimson}`}
    >
      <div
        className="absolute inset-0 mix-blend-overlay opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.4), transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #000 0 1px, transparent 1px 4px)",
        }}
      />
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground mix-blend-difference">
        <span className="font-display text-3xl tracking-tight">{project.title}</span>
        <span className="font-mono-ui text-xs">↗</span>
      </div>
    </div>
  );
}

function AboutSnapshot() {
  return (
    <section className="border-y border-rule bg-secondary/40">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-32 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-3">
          <p className="section-num">— 02 / About</p>
        </Reveal>
        <div className="md:col-span-8 md:col-start-4">
          <Reveal>
            <p className="font-display text-3xl leading-[1.15] tracking-tight md:text-5xl">
              I build systems that <em className="text-primary">scale and perform</em> — from
              advertising platforms and financial trackers to AI-powered study companions and
              high-concurrency messaging APIs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-base text-muted-foreground">
              I care about the unglamorous parts: API edges, error paths, the twentieth-percentile
              user experience. The work I'm proudest of is the work nobody noticed because nothing
              broke.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/about" className="mt-8 inline-block editorial-link text-base">
              More about me →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-40 md:px-10">
      <Reveal>
        <p className="section-num mb-8">— 03 / Next</p>
        <h2 className="font-display text-[clamp(3rem,10vw,10rem)] font-light leading-[0.85] tracking-[-0.04em]">
          Let's build
          <br />
          <span className="italic text-primary">something dense</span>
          <br />
          with intent.
        </h2>
        <Link to="/contact" className="mt-12 inline-flex items-center gap-3 editorial-link text-xl">
          Start a conversation
          <span aria-hidden>↗</span>
        </Link>
      </Reveal>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedWork />
      <AboutSnapshot />
      <ClosingCTA />
    </>
  );
}
