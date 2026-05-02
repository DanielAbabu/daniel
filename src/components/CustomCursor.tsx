import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);
    document.documentElement.classList.add("lv-cursor-active");

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let rx = 0, ry = 0, x = 0, y = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
      );
      setHover(interactive);
    };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("lv-cursor-active");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dotRef}
        className="lv-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-primary mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="lv-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-foreground mix-blend-difference transition-[width,height,opacity] duration-300"
        style={{
          willChange: "transform",
          opacity: hover ? 1 : 0.5,
          transform: `scale(${hover ? 1.6 : 1})`,
        }}
      />
    </>
  );
}
