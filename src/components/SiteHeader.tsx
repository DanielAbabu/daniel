import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "@/lib/site-data";

const nav = [
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-rule bg-background/80 backdrop-blur-xl" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">
            {site.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline">
            {site.role}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item, i) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative px-3 py-2 text-sm transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <span className="font-mono-ui mr-1.5 text-[10px] text-muted-foreground/70">
                  0{i + 1}
                </span>
                {item.label}
                <span
                  className={`absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100 ${active ? "scale-x-100 bg-primary" : ""
                    }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          {site.available && (
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available
            </span>
          )}
          <a
            href="/Daniel_Ababu_Tegegen_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-rule px-4 py-1.5 font-mono-ui text-xs uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Resume
          </a>
        </div>
        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen((o) => !o)}>
          <div className="flex h-6 w-7 flex-col justify-between">
            <span
              className={`h-px w-full bg-foreground transition-transform ${open ? "translate-y-[11px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-foreground transition-transform ${open ? "-translate-y-[11px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-rule bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-baseline gap-3 border-b border-rule py-4 text-2xl font-display"
              >
                <span className="font-mono-ui text-xs text-muted-foreground">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
