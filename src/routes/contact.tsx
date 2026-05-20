import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      {
        name: "description",
        content:
          "Get in touch about backend development, distributed systems, or interesting problems worth solving together.",
      },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:description", content: "Start a conversation about your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-40 md:px-10">
      <Reveal>
        <p className="section-num mb-6">— Index 05 / Contact</p>
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-[-0.04em]">
          Let's talk
          <br />
          <span className="italic text-primary">systems.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          I'm always open to discussing backend architecture, distributed systems, and new full-time
          opportunities. Reach out via email or connect on LinkedIn.
        </p>
      </Reveal>

      <div className="mt-24 grid gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <p className="section-num mb-6">— Direct</p>
          <ul className="space-y-6">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-rule pb-6 text-3xl md:text-5xl font-display transition-colors hover:text-primary"
                >
                  <span>{s.label}</span>
                  <span className="font-mono-ui text-xl text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="md:col-span-4" delay={0.1}>
          <div className="rounded-2xl bg-secondary/30 p-8 border border-rule">
            <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Based in
            </p>
            <p className="mt-2 font-display text-3xl">{site.location}</p>

            {site.available && (
              <div className="mt-12">
                <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Status
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-base">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  Actively seeking opportunities
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
