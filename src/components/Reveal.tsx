"use client";

import type { ReactNode } from "react";
import { useInView, REVEAL_CLASS, revealState } from "@/hooks/useInView";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${REVEAL_CLASS} ${revealState(visible)} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
