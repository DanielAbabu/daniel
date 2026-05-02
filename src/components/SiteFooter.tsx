import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="section-num mb-4">— Colophon</p>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Have a system worth
              <br />
              <span className="italic text-primary">building?</span>
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 text-lg editorial-link"
            >
              <span>Start a conversation</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <p className="section-num mb-4">— Elsewhere</p>
            <ul className="space-y-2">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-link text-base"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="section-num mb-4">— Index</p>
            <ul className="space-y-2 text-base">
              <li><Link to="/work" className="editorial-link">Work</Link></li>
              <li><Link to="/about" className="editorial-link">About</Link></li>
              <li><Link to="/experience" className="editorial-link">Experience</Link></li>
              <li><Link to="/writing" className="editorial-link">Writing</Link></li>
              <li><Link to="/contact" className="editorial-link">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-rule pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="font-mono-ui">
            © {year} {site.name} · {site.location}
          </p>
          <p className="font-mono-ui">
            Set in Fraunces & Inter · Built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
