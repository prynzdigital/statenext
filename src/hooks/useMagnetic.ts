"use client";

import { useCallback, type RefObject } from "react";

export function useMagneticHandlers<T extends HTMLElement>(
  ref: RefObject<T | null>,
  strength = 0.35
) {
  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [ref, strength]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }, [ref]);

  return { onMouseMove, onMouseLeave };
}
