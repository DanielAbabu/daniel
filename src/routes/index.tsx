import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Send, Linkedin } from "lucide-react";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { projects } from "@/lib/projects";
import { site, experience, type ExperienceItem, skillGroups } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex-col justify-end overflow-hidden pb-16 pt-24 md:pb-32 md:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <motion.div style={{ opacity }} className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <div className="mb-8 md:mb-12 flex items-center gap-4 sm:gap-6">
          <span className="section-num">— Portfolio · MMXXVI</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="font-mono-ui text-xs text-muted-foreground">{site.location}</span>
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-[clamp(2.75rem,8.5vw,9rem)] font-light leading-[0.88] tracking-[-0.04em]">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Daniel
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-primary"
              >
                Ababu<span className="text-foreground not-italic">.</span>
              </motion.span>
            </h1>

            <div className="mt-8 md:mt-12 mb-8 md:mb-16">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
              >
                Backend Software Engineer specializing in distributed systems, REST APIs, and high-concurrency architecture.
                I design robust infrastructure with Go, Docker, PostgreSQL, Redis, and MongoDB, and I am
                open to remote backend roles with teams in Europe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {[
                  "Go",
                  "Distributed Systems",
                  "REST APIs",
                  "Microservices",
                  "Docker",
                  "PostgreSQL",
                  "Redis",
                  "MongoDB",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-rule bg-secondary/50 px-3 py-1 font-mono-ui text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:border-primary hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="w-full h-full justify-self-stretch lg:justify-self-end"
          >
            <div className="relative h-[320px] sm:h-[420px] lg:h-full lg:min-h-[520px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-rule/50 shadow-xl">
              <img
                src="/profile.png"
                alt="Daniel Ababu"
                className="absolute inset-0 h-full w-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="font-mono-ui text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <div className="mx-auto mt-2 h-10 w-px bg-rule overflow-hidden">
          <div className="h-1/2 w-full animate-pulse bg-foreground" />
        </div>
      </motion.div>
    </section>
  );
}

function FeaturedWork() {
  const featured = projects;
  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-16 md:py-32 md:px-10">
      <Reveal>
        <div className="mb-16 md:mb-20 flex items-end justify-between gap-6 border-b border-rule pb-6">
          <div>
            <p className="section-num mb-4">— 02 / Selected Work</p>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">
              Things I've
              <br />
              <span className="italic">built carefully.</span>
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="space-y-20 md:space-y-32">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <div className="group grid gap-8 md:grid-cols-12 md:gap-12 items-center">
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2 md:col-start-6" : ""}`}>
                <Parallax offset={30}>
                  <ProjectCover project={p} />
                </Parallax>
              </div>
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-8"} flex flex-col justify-center`}
              >
                <p className="font-mono-ui text-xs text-muted-foreground">
                  / 0{i + 1} · {p.year}
                </p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">{p.title}</h3>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{p.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-rule px-2.5 py-1 font-mono-ui text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCover({ project }: { project: { cover: string; title: string } }) {
  const palette: Record<string, string> = {
    crimson: "from-primary via-primary/80 to-foreground",
    aurora: "from-primary/90 via-red-500 to-rose-700",
    midnight: "from-red-950 via-primary/80 to-red-700",
    ember: "from-orange-600 via-red-500 to-primary/90",
    sage: "from-rose-700 via-primary/70 to-red-900",
  };
  return (
    <div
      className={`relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br ${palette[project.cover] ?? palette.crimson}`}
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
        <span className="font-display text-2xl sm:text-3xl tracking-tight">{project.title}</span>
        <span className="font-mono-ui text-sm">↗</span>
      </div>
    </div>
  );
}

function AboutSnapshot() {
  return (
    <section id="about" className="border-y border-rule bg-secondary/40">
      <div className="mx-auto grid max-w-[1600px] gap-8 md:gap-12 px-6 py-16 md:py-32 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-3">
          <p className="section-num">— 03 / About</p>
        </Reveal>
        <div className="md:col-span-9 md:col-start-4">
          <Reveal>
            <p className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.18] tracking-tight">
              I build systems that <em className="text-primary font-normal">scale and perform</em> — backend
              software, distributed systems, REST APIs, and microservices for products that need
              to stay reliable under pressure.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 md:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I care about the unglamorous parts: API edges, error paths, database design, Docker,
              observability, and the twentieth-percentile user experience. The work I'm proudest of
              is the work nobody noticed because nothing broke.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block editorial-link text-base">
              Get in touch →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section id="contact" className="mx-auto max-w-[1600px] px-6 py-20 md:py-40 md:px-10">
      <Reveal>
        <p className="section-num mb-6 md:mb-8">— 06 / Next</p>
        <h2 className="font-display text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.88] tracking-[-0.04em]">
          Let's build
          <br />
          <span className="italic text-primary">something dense</span>
          <br />
          with intent.
        </h2>
        <div className="mt-10 md:mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 editorial-link text-lg sm:text-xl">
            Start a conversation
            <span aria-hidden>↗</span>
          </a>
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href={`mailto:${site.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-1" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/DanielAbabu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-1" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://t.me/daniel_ababu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-1" aria-label="Telegram">
              <Send className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/DanielAbabu" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-1" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

type Filter = "all" | "work" | "education";

function ExperienceSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = experience.filter((e) => filter === "all" || e.type === filter);

  return (
    <section id="experience" className="mx-auto max-w-[1600px] px-6 py-16 md:py-32 md:px-10 overflow-hidden">
      <Reveal>
        <p className="section-num mb-6">— 01 / Experience</p>
        <h2 className="font-display text-[clamp(2.25rem,7vw,6.5rem)] font-light leading-[0.88] tracking-[-0.04em]">
          A working
          <br />
          <span className="italic text-primary">timeline.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 md:mt-12 flex gap-2 border-b border-rule pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {(["all", "work", "education"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`border px-4 py-2 font-mono-ui text-xs uppercase tracking-wider transition-colors shrink-0 ${filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-rule hover:border-foreground"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="relative mt-12 md:mt-20">
        <div className="absolute left-4 top-0 h-full w-px bg-rule md:left-1/2" />
        <ul className="space-y-12 md:space-y-16">
          {items.map((item, i) => (
            <TimelineEntry key={`${item.org}-${item.dates}`} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TimelineEntry({ item, index }: { item: ExperienceItem; index: number }) {
  const left = index % 2 === 0;
  return (
    <Reveal as="li" delay={index * 0.04}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div
          className={`relative pl-10 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"
            }`}
        >
          <span
            className={`absolute top-2 h-3 w-3 rounded-full border-2 border-background bg-primary left-[10px] ${left ? "md:left-auto md:-right-[6px]" : "md:-left-[6px]"
              }`}
          />
          <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {item.dates} · {item.type === "education" ? "Education" : "Work"}
          </p>
          <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight">
            {item.title}
          </h3>
          <p className="mt-1 text-sm sm:text-base">
            <span className="text-primary font-medium">{item.org}</span>
            {item.location ? (
              <span className="text-muted-foreground"> · {item.location}</span>
            ) : null}
          </p>
          <ul
            className={`mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground ${left ? "md:ml-auto" : ""
              }`}
          >
            {item.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed flex gap-2.5">
                <span className="shrink-0 text-primary">—</span>
                <span>{b}</span>
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

function SkillsSection() {
  return (
    <section id="skills" className="border-b border-rule py-16 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid gap-8 md:gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="section-num">— 04 / Skills</p>
          <h2 className="mt-3 md:mt-4 font-display text-3xl md:text-4xl">What I reach for.</h2>
        </Reveal>
        <div className="md:col-span-9 grid gap-x-12 gap-y-8 md:gap-y-12 grid-cols-1 sm:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <h3 className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-rule pb-3">
                / {g.group}
              </h3>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s.name}
                    className="border border-rule px-3 sm:px-4 py-1.5 sm:py-2 font-mono-ui text-xs sm:text-sm text-foreground hover:border-foreground hover:bg-secondary/30 transition-colors"
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
  );
}

function CurrentlySection() {
  return (
    <section id="currently" className="mx-auto max-w-[1600px] px-6 py-16 md:py-32 md:px-10 grid gap-8 md:gap-12 md:grid-cols-12">
      <Reveal className="md:col-span-3">
        <p className="section-num">— 05 / Currently</p>
      </Reveal>
      <div className="md:col-span-9 md:col-start-4 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-3">
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
              <p className="mt-2 sm:mt-3 font-display text-lg sm:text-xl">{c.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ExperienceSection />
      <FeaturedWork />
      <AboutSnapshot />
      <SkillsSection />
      <CurrentlySection />
      <ClosingCTA />
    </>
  );
}


