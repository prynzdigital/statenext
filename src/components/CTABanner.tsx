"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { useMagneticHandlers } from "@/hooks/useMagnetic";
import { CTA_SHADOW, CTA_SHADOW_HOVER } from "@/lib/glass";

export default function CTABanner({
  eyebrow,
  heading,
  description,
  image,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const cta = useMagneticHandlers(ctaRef, 0.3);
  const isInternalLink = secondaryHref.startsWith("/");

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy-950/80" />
      </div>

      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-red-500" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
              {eyebrow}
            </p>
          </div>

          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              ref={ctaRef}
              onMouseMove={cta.onMouseMove}
              onMouseLeave={cta.onMouseLeave}
              href="#contact"
              className={`${CTA_SHADOW} ${CTA_SHADOW_HOVER} rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-red-500`}
            >
              Start a Project
            </a>
            {isInternalLink ? (
              <Link
                href={secondaryHref}
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            ) : (
              <a
                href={secondaryHref}
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
