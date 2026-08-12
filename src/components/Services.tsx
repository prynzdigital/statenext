"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { useTiltHandlers } from "@/hooks/useTilt";
import { GLASS, CARD_SHADOW, CARD_SHADOW_HOVER } from "@/lib/glass";

const SERVICES = [
  {
    title: "Custom Software Development",
    description:
      "Web and internal applications built around how your teams actually work, from first prototype to production.",
  },
  {
    title: "Digital Modernization",
    description:
      "We replace legacy tools and manual processes with modern, maintainable systems without disrupting the business.",
  },
  {
    title: "Process Automation",
    description:
      "We identify repetitive, error-prone work and automate it so your people can focus on higher-value decisions.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable infrastructure and DevOps practices that grow with usage instead of breaking under it.",
  },
  {
    title: "Data & Analytics",
    description:
      "Clean data pipelines and dashboards that turn scattered operational data into decisions you can act on.",
  },
  {
    title: "Ongoing Support",
    description:
      "Monitoring, maintenance, and iteration after launch, so the systems we build keep pace with your organization.",
  },
];

function ServiceCard({
  service,
  index,
  delay,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const tilt = useTiltHandlers(cardRef, 6);

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className={`${GLASS} ${CARD_SHADOW} ${CARD_SHADOW_HOVER} group h-full rounded-2xl p-7 transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-white/80`}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-sm font-bold text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-5 text-lg font-semibold text-navy-900">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-navy-700">
          {service.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            What we do
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Digital solutions for every stage of growth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-700">
            Whether you&apos;re replacing a legacy system or building something
            new, our team plugs in as an extension of yours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
