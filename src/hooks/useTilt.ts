"use client";

import { useCallback, type RefObject } from "react";

export function useTiltHandlers<T extends HTMLElement>(
  ref: RefObject<T | null>,
  max = 7
) {
  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * max * 2;
      const rotateX = (0.5 - py) * max * 2;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    },
    [ref, max]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }, [ref]);

  return { onMouseMove, onMouseLeave };
}
