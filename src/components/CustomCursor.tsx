import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;

    setEnabled(true);
    document.documentElement.classList.add("lv-cursor-active");

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let dx = 0;
    let dy = 0;
    let rx = 0;
    let ry = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      x = e.clientX;
      y = e.clientY;

      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']",
      );
      setHover(interactive);
    };

    const tick = () => {
      dx += (x - dx) * 0.3;
      dy += (y - dy) * 0.3;
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      dot.style.transform = `translate3d(${dx - 7}px, ${dy - 7}px, 0)`;
      ring.style.transform = `translate3d(${rx - 24}px, ${ry - 24}px, 0) scale(${hover ? 1.35 : 1})`;
      raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", () => setHover(true));
    window.addEventListener("mouseup", () => setHover(false));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("lv-cursor-active");
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="lv-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] h-3.5 w-3.5 rounded-full bg-red-600 shadow-[0_0_18px_rgba(220,38,38,0.45)] transition-opacity duration-200"
        style={{
          willChange: "transform",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="lv-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-12 w-12 rounded-full border border-red-500/60 bg-red-500/10 transition-[opacity,transform] duration-200"
        style={{
          willChange: "transform",
          opacity: visible ? (hover ? 1 : 0.6) : 0,
        }}
      />
    </>
  );
}
