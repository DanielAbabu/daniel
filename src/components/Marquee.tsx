import { techMarquee } from "@/lib/site-data";

export function Marquee() {
  const items = [...techMarquee, ...techMarquee, ...techMarquee, ...techMarquee];
  return (
    <div className="group relative overflow-hidden border-y border-rule py-4 md:py-6 bg-secondary/20 select-none">
      {/* Edge gradient masks for seamless visual transition */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-8 md:gap-12 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 md:gap-12 font-display text-2xl tracking-tight sm:text-3xl md:text-5xl transition-colors hover:text-primary"
          >
            <span className="font-medium">{t}</span>
            <span className="text-primary/70 text-lg md:text-2xl" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
