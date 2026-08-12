"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const img = imgRef.current;
    if (!img) return;

    let raf = 0;

    const apply = () => {
      raf = 0;
      const offset = Math.min(window.scrollY * 0.06, 70);
      img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <img
        ref={imgRef}
        src="/bg-frost.svg"
        alt=""
        className="h-full w-full scale-105 object-cover will-change-transform"
      />
    </div>
  );
}
