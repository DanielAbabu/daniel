import { techMarquee } from "@/lib/site-data";

export function Marquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="relative overflow-hidden border-y border-rule py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-3xl tracking-tight md:text-5xl"
          >
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
