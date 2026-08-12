import Image from "next/image";
import Reveal from "./Reveal";
import { CARD_SHADOW } from "@/lib/glass";

const PILLARS = [
  {
    word: "Build",
    description: "Establish powerful digital foundations.",
  },
  {
    word: "Innovate",
    description: "Turn ideas and challenges into technology.",
  },
  {
    word: "Automate",
    description:
      "Simplify operations through intelligent workflows, integrations, and AI.",
  },
  {
    word: "Scale",
    description:
      "Provide the technology, support, and strategy businesses need to grow.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
              About StateNext Labs
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Technology that moves business forward
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-700">
              StateNext Labs is a technology and digital solutions company
              helping businesses and organizations{" "}
              <strong className="font-semibold text-navy-900">
                build, innovate, automate, and scale
              </strong>
              .
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-700">
              We combine technology, creativity, and business strategy to
              develop solutions that solve real problems — from modern
              websites and custom software to web applications, business
              automation, digital marketing, and technology consulting.
            </p>
            <p className="font-display mt-6 text-xl font-semibold leading-snug text-navy-900">
              Technology should do more than look good.{" "}
              <span className="text-red-600">
                It should make businesses better.
              </span>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <Image
              src="/statenext-logo-full.jpeg"
              alt="StateNext Labs — Build, Innovate, Automate, Scale"
              width={1536}
              height={1024}
              className={`${CARD_SHADOW} w-full rounded-2xl`}
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-900/50">
            Our four pillars
          </p>
        </Reveal>

        <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.word} delay={80 + i * 80}>
              <span className="block h-1 w-10 rounded-full bg-red-600" />
              <p className="font-display mt-4 text-lg font-bold uppercase tracking-wide text-navy-900">
                {pillar.word}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-700">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-16 max-w-2xl border-t border-navy-900/10 pt-10"
        >
          <p className="text-lg leading-relaxed text-navy-700">
            Our mission is to empower organizations with{" "}
            <strong className="font-semibold text-navy-900">
              intelligent, practical, and scalable technology
            </strong>{" "}
            that creates meaningful growth and lasting impact.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-navy-900/60">
            StateNext Labs — Build{" "}
            <span className="text-red-600">|</span> Innovate{" "}
            <span className="text-red-600">|</span> Automate{" "}
            <span className="text-red-600">|</span> Scale
          </p>
        </Reveal>
      </div>
    </section>
  );
}
