"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { useTiltHandlers } from "@/hooks/useTilt";
import { GLASS, CARD_SHADOW } from "@/lib/glass";

const TESTIMONIALS = [
  {
    quote:
      "They didn't just build what we asked for — they questioned the workflow itself and shipped something our team actually adopted in week one.",
    name: "R. Alvarez",
    role: "VP of Operations, Mid-Market Logistics",
  },
  {
    quote:
      "The automation work paid for itself within a quarter. What used to take our ops team a full day now runs itself overnight.",
    name: "S. Okafor",
    role: "Director of IT, Regional Healthcare Network",
  },
  {
    quote:
      "Most vendors hand off a system and disappear. StateNext stayed embedded through launch and kept iterating with us after.",
    name: "J. Whitfield",
    role: "COO, B2B SaaS Platform",
  },
];

function TestimonialCard({
  t,
  delay,
}: {
  t: (typeof TESTIMONIALS)[number];
  delay: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const tilt = useTiltHandlers(cardRef, 6);

  return (
    <Reveal delay={delay}>
      <figure
        ref={cardRef}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className={`${GLASS} ${CARD_SHADOW} flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 ease-out`}
      >
        <span className="text-4xl font-serif leading-none text-red-600/60">
          &ldquo;
        </span>
        <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-navy-700">
          {t.quote}
        </blockquote>
        <figcaption className="mt-6 border-t border-navy-900/10 pt-4">
          <p className="text-sm font-semibold text-navy-900">{t.name}</p>
          <p className="mt-0.5 text-xs text-navy-900/50">{t.role}</p>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            What clients say
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Trusted by teams who needed more than a vendor
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 100} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-navy-900/35">
          Illustrative feedback based on typical engagement outcomes.
        </p>
      </div>
    </section>
  );
}
