import Reveal from "./Reveal";
import { GLASS, CARD_SHADOW, CARD_SHADOW_HOVER, CTA_SHADOW } from "@/lib/glass";

const TIERS = [
  {
    name: "Starter",
    price: "$2,500",
    priceNote: "starting price, per project",
    tagline: "A single site or focused feature build",
    highlighted: false,
    features: [
      { label: "Discovery call", included: true },
      { label: "One deliverable (site or feature)", included: true },
      { label: "Async support", included: true },
      { label: "30-day post-launch support", included: true },
      { label: "Dedicated team", included: false },
      { label: "Monthly iteration", included: false },
    ],
  },
  {
    name: "Growth",
    price: "$6,500",
    priceNote: "starting price, per project",
    tagline: "A larger build with an ongoing team",
    highlighted: true,
    features: [
      { label: "Everything in Starter", included: true },
      { label: "Dedicated team", included: true },
      { label: "Priority support", included: true },
      { label: "Monthly iteration cycles", included: true },
      { label: "Custom infrastructure", included: false },
      { label: "SLA-backed support", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "$15,000+",
    priceNote: "starting price, scoped to fit",
    tagline: "Custom software and multi-system builds",
    highlighted: false,
    features: [
      { label: "Everything in Growth", included: true },
      { label: "Custom infrastructure", included: true },
      { label: "Dedicated account lead", included: true },
      { label: "SLA-backed support", included: true },
      { label: "Quarterly roadmap reviews", included: true },
      { label: "24/7 monitoring", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            Popular packages
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Scoped to the size of the problem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-700">
            Every engagement is quoted after a short discovery call, based on
            scope rather than a generic seat price. Here&apos;s what most
            projects start at.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div
                className={`${GLASS} ${CARD_SHADOW} ${CARD_SHADOW_HOVER} flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 ease-out`}
              >
                <div
                  className={`relative pb-10 pt-8 text-center ${
                    tier.highlighted ? "bg-red-600" : "bg-navy-900"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                    {tier.name}
                  </p>
                  <p className="font-display mt-3 text-4xl font-bold text-white">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    {tier.priceNote}
                  </p>
                  <p className="mt-3 px-6 text-sm text-white/80">
                    {tier.tagline}
                  </p>
                  <svg
                    viewBox="0 0 400 40"
                    preserveAspectRatio="none"
                    className="absolute -bottom-px left-0 h-8 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,0 C100,40 300,40 400,0 L400,40 L0,40 Z"
                      className="fill-white"
                    />
                  </svg>
                </div>

                <div className="flex flex-1 flex-col px-7 pb-8 pt-2">
                  <ul className="flex-1 divide-y divide-navy-900/10">
                    {tier.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={`flex items-center gap-2.5 py-3 text-sm ${
                          feature.included
                            ? "text-navy-900"
                            : "text-navy-900/35 line-through"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[10px] ${
                            feature.included
                              ? "bg-red-600/10 text-red-600"
                              : "bg-navy-900/5 text-navy-900/30"
                          }`}
                          aria-hidden="true"
                        >
                          {feature.included ? "✓" : "–"}
                        </span>
                        {feature.label}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`${
                      tier.highlighted ? CTA_SHADOW : ""
                    } mt-6 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-red-600 text-white hover:bg-red-500"
                        : "bg-navy-900/5 text-navy-900 hover:bg-navy-900/10"
                    }`}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
