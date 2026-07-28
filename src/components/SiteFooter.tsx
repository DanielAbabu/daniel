
import { site } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      {/* <div className="mx-auto max-w-[1600px] md:px-10 md:py-24"> */}
      <div className=" flex flex-col gap-3 border-t border-rule px-6 py-16 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="font-mono-ui">
          © {year} {site.name} · {site.location}
        </p>
        <p className="font-mono-ui">Set in Fraunces & Inter · Built with intent.</p>
      </div>
      {/* </div> */}
    </footer>
  );
}
