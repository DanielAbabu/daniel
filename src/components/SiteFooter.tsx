import { site } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="flex flex-col gap-3 border-t border-rule px-6 py-16 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="font-mono-ui">
          © {year} {site.name} · {site.location}
        </p>
        <p className="font-mono-ui">Set in Fraunces &amp; Inter · Built with intent.</p>
      </div>
    </footer>
  );
}
