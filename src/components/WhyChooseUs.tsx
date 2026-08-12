"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { useTiltHandlers } from "@/hooks/useTilt";
import { GLASS, CARD_SHADOW } from "@/lib/glass";

const FEATURES = [
  "Senior Engineers Only",
  "Fixed-Price Delivery",
  "Direct Communication",
  "Security-First Builds",
  "Built to Scale",
  "Ongoing Support",
];

export default function WhyChooseUs() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageTilt = useTiltHandlers(imageRef, 4);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div
              ref={imageRef}
              onMouseMove={imageTilt.onMouseMove}
              onMouseLeave={imageTilt.onMouseLeave}
              className={`${GLASS} ${CARD_SHADOW} relative aspect-[4/3] overflow-hidden rounded-3xl transition-transform duration-300 ease-out`}
            >
              <Image
                src="/agents.png"
                alt="Our team at work"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 bg-red-600" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                Why choose us?
              </p>
            </div>

            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              The difference is in how we work, not just what we build
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-navy-700">
              Plenty of vendors can write code. Fewer treat your systems like
              their own, communicate clearly, and stick around after launch.
              Here&apos;s what that looks like in practice.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="rounded-lg border border-navy-900/10 border-l-4 border-l-red-600 bg-white/50 px-4 py-3.5 text-sm font-medium text-navy-900 backdrop-blur-sm"
                >
                  {feature}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
