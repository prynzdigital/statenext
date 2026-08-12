"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMagneticHandlers } from "@/hooks/useMagnetic";
import { CTA_SHADOW, CTA_SHADOW_HOVER } from "@/lib/glass";

export default function Hero() {
  const primaryCtaRef = useRef<HTMLAnchorElement>(null);
  const primaryCta = useMagneticHandlers(primaryCtaRef, 0.3);
  const ghostCtaRef = useRef<HTMLAnchorElement>(null);
  const ghostCta = useMagneticHandlers(ghostCtaRef, 0.25);

  return (
    <section
      id="top"
      className="relative -mt-[81px] overflow-hidden pt-[81px]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ai.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/35" />
        <div className="absolute inset-0 bg-navy-950/25" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            We serve global digital operations
          </p>

          <h1 className="font-display mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Engineering your organization&apos;s{" "}
            <span className="text-red-500">next state.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/75">
            StateNext Labs is a technology and digital solutions company. We
            design, build, and automate the systems that let organizations
            modernize their operations and scale with confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              ref={primaryCtaRef}
              onMouseMove={primaryCta.onMouseMove}
              onMouseLeave={primaryCta.onMouseLeave}
              href="#contact"
              className={`${CTA_SHADOW} ${CTA_SHADOW_HOVER} rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-red-500`}
            >
              Start a Project
            </a>
            <Link
              ref={ghostCtaRef}
              onMouseMove={ghostCta.onMouseMove}
              onMouseLeave={ghostCta.onMouseLeave}
              href="/work"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-white/10"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
