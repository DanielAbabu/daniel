import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    primaryColor: "transparent",
    primaryBorderColor: "currentColor",
    primaryTextColor: "currentColor",
    lineColor: "currentColor",
    secondaryColor: "transparent",
    tertiaryColor: "transparent",
  },
});

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      })
      .catch((e) => console.error("Mermaid render error:", e));
  }, [chart]);

  return (
    <div
      ref={ref}
      className="mermaid-container w-full overflow-x-auto text-foreground mix-blend-difference"
    />
  );
}
