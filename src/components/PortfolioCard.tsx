"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { useTiltHandlers } from "@/hooks/useTilt";
import { GLASS, CARD_SHADOW, CARD_SHADOW_HOVER } from "@/lib/glass";

export type PortfolioItem = {
  name: string;
  url?: string;
  href?: string;
  noLink?: boolean;
  category: string;
  description: string;
  image?: string;
};

export default function PortfolioCard({
  item,
  delay,
}: {
  item: PortfolioItem;
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const tilt = useTiltHandlers(cardRef, 5);

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className={`${GLASS} ${CARD_SHADOW} ${CARD_SHADOW_HOVER} group overflow-hidden rounded-2xl transition-transform duration-300 ease-out`}
      >
        <div className="border-b border-navy-900/10 bg-navy-900/[0.03] p-3">
          <div className="flex items-center gap-1.5 px-1">
            <span className="h-2.5 w-2.5 rounded-full bg-navy-900/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-navy-900/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-navy-900/15" />
            <span className="ml-2 truncate rounded-full bg-white/70 px-3 py-1 text-xs text-navy-900/50">
              {item.url ?? "example.com"}
            </span>
          </div>
          <div className="relative mt-3 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-navy-100 to-white">
            {item.image ? (
              <Image
                src={item.image}
                alt={`Screenshot of ${item.name}`}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-5xl font-bold text-navy-900/10">
                  {item.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
            {item.category}
          </p>
          <h3 className="font-display mt-2 text-lg font-bold text-navy-900">
            {item.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-700">
            {item.description}
          </p>
          {!item.noLink && (item.href || item.url) && (
            <a
              href={item.href ?? `https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              Visit site
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
