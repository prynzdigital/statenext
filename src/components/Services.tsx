"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { useTiltHandlers } from "@/hooks/useTilt";
import { GLASS, CARD_SHADOW, CARD_SHADOW_HOVER } from "@/lib/glass";

const SERVICES = [
  {
    title: "Custom Software Development",
    description:
      "Web and internal applications built around how your teams actually work, from first prototype to production.",
    image: "/development.png",
  },
  {
    title: "Digital Modernization",
    description:
      "We replace legacy tools and manual processes with modern, maintainable systems without disrupting the business.",
    image: "/digital.png",
  },
  {
    title: "Process Automation",
    description:
      "We identify repetitive, error-prone work and automate it so your people can focus on higher-value decisions.",
    image: "/automation.png",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable infrastructure and DevOps practices that grow with usage instead of breaking under it.",
    image: "/cloud.png",
  },
  {
    title: "Data & Analytics",
    description:
      "Clean data pipelines and dashboards that turn scattered operational data into decisions you can act on.",
    image: "/analytics.png",
  },
  {
    title: "Ongoing Support",
    description:
      "Monitoring, maintenance, and iteration after launch, so the systems we build keep pace with your organization.",
    image: "/support.png",
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
        className={`${GLASS} ${CARD_SHADOW} ${CARD_SHADOW_HOVER} group h-full overflow-hidden rounded-2xl transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-white/80`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/0 to-navy-950/0" />
          <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-sm font-bold text-white shadow-lg shadow-navy-950/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="p-7">
          <h3 className="text-lg font-semibold text-navy-900">
            {service.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-navy-700">
            {service.description}
          </p>
        </div>
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
