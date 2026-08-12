"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";
import { GLASS, CARD_SHADOW, CTA_SHADOW, CTA_SHADOW_HOVER } from "@/lib/glass";

type Paragraph = string;

type FaqItem = {
  question: string;
  paragraphs: Paragraph[];
  pillars?: { label: string; text: string }[];
  link?: { label: string; href: string };
};

const FAQS: FaqItem[] = [
  {
    question: "What is StateNext Labs?",
    paragraphs: [
      "StateNext Labs is a technology and digital solutions company helping businesses and organizations **build, innovate, automate, and scale** through modern technology.",
      "We provide services including web development, custom software, web applications, business automation, digital marketing, IT consulting, and ongoing technology support.",
    ],
  },
  {
    question: "What types of businesses do you work with?",
    paragraphs: [
      "We work with startups, small businesses, growing companies, nonprofits, professional organizations, and larger organizations across different industries.",
      "Whether you need a website, custom software, automation, or a complete digital transformation, we can design a solution around your needs.",
    ],
  },
  {
    question: "What services does StateNext Labs provide?",
    paragraphs: ["Our services are organized around four pillars:"],
    pillars: [
      { label: "Build", text: "Websites and digital experiences." },
      {
        label: "Innovate",
        text: "Custom software, web applications, and digital platforms.",
      },
      {
        label: "Automate",
        text: "Business process automation, integrations, AI, and intelligent workflows.",
      },
      {
        label: "Scale",
        text: "Ongoing technology management, optimization, digital marketing, and strategic support.",
      },
    ],
  },
  {
    question: "Do you only build websites?",
    paragraphs: [
      "No. Websites are just one part of what we do.",
      "StateNext Labs is designed to be a broader technology partner. We can help businesses move from a digital presence to custom software, automation, integrations, and ongoing technology management.",
    ],
  },
  {
    question: "How much does a project cost?",
    paragraphs: [
      "Every project is different because the scope, complexity, integrations, and requirements vary.",
      "Our services have starting prices to provide an initial guide, but larger or customized projects are quoted after understanding your requirements.",
    ],
    link: { label: "View Pricing", href: "#pricing" },
  },
  {
    question: "Do you offer custom software development?",
    paragraphs: [
      "Yes. We build custom software around specific business requirements, including internal business systems, CRM platforms, customer portals, dashboards, SaaS products, marketplaces, and other web-based applications.",
    ],
  },
  {
    question: "Can you automate our existing business processes?",
    paragraphs: [
      "Yes. We can review your existing workflows, identify repetitive or inefficient processes, and determine where automation, integrations, APIs, or AI can improve the way your organization operates.",
    ],
  },
  {
    question: "Do you provide digital marketing?",
    paragraphs: [
      "Yes. Our digital marketing services can include SEO, local search optimization, content, lead generation, social media strategy, email marketing, paid advertising, analytics, and conversion optimization.",
    ],
  },
  {
    question: "Can you work with our existing technology?",
    paragraphs: [
      "Absolutely.",
      "We can work with your existing website, software, CRM, APIs, cloud platforms, and other technology where appropriate. Our goal is not always to replace what you have—it is to determine what will provide the best outcome for your organization.",
    ],
  },
  {
    question: "Do you provide ongoing support after launch?",
    paragraphs: [
      "Yes.",
      "Through our **SCALE** services, we can provide ongoing maintenance, technical support, optimization, monitoring, development, automation improvements, digital marketing, and technology strategy.",
    ],
  },
  {
    question: "How long does a project take?",
    paragraphs: [
      "Timelines depend on the scope and complexity of the project.",
      "A standard website may take several weeks, while custom software, applications, and complex automation projects may take several months.",
      "After the discovery stage, we provide a clear project scope and estimated timeline.",
    ],
  },
  {
    question: "Do you work with clients outside Texas?",
    paragraphs: [
      "Yes.",
      "StateNext Labs is designed to serve businesses across the United States and internationally. Much of our work can be delivered remotely, allowing us to work with organizations regardless of location.",
    ],
  },
  {
    question: "Do you work with startups?",
    paragraphs: [
      "Yes.",
      "We can help startups move from an idea to a functional digital product, including branding, websites, MVPs, web applications, software, automation, and growth technology.",
    ],
  },
  {
    question: "Can you help us figure out what technology we actually need?",
    paragraphs: [
      "Yes—and that's often where we start.",
      "If you're unsure whether you need a new website, custom software, automation, or another solution, we can assess your current situation and recommend a practical technology strategy based on your goals.",
    ],
  },
  {
    question: "How do we get started?",
    paragraphs: [
      "Start by telling us about your business, your goals, and the challenge you're trying to solve.",
      "We'll review your requirements, discuss the best approach, and determine the appropriate next steps.",
    ],
    link: { label: "Start a Project", href: "#contact" },
  },
  {
    question: "Do you offer a technology assessment?",
    paragraphs: [
      "Yes. For organizations that aren't sure where to begin, StateNext Labs can assess your digital environment, business processes, technology needs, and opportunities for automation or improvement.",
      "The result is a practical roadmap showing where technology can create the greatest impact.",
    ],
  },
  {
    question: "Why should we choose StateNext Labs?",
    paragraphs: [
      "Because we look beyond the technology itself.",
      "We combine **business strategy, design, software development, automation, and digital growth** to create solutions designed around your organization.",
      "Our goal isn't simply to deliver a project.",
      "**Our goal is to become a technology partner that grows with your business.**",
    ],
  },
];

function renderRichText(text: string): ReactNode {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-navy-900">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function FaqCard({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${GLASS} ${CARD_SHADOW} rounded-2xl`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-navy-900 sm:text-base">
          {faq.question}
        </span>
        <span
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy-900/8 text-navy-900 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 px-6 pb-5 text-sm leading-relaxed text-navy-700">
            {faq.paragraphs.map((p, i) => (
              <p key={i}>{renderRichText(p)}</p>
            ))}
            {faq.pillars && (
              <ul className="space-y-2">
                {faq.pillars.map((pillar) => (
                  <li key={pillar.label}>
                    <span className="font-semibold text-red-600">
                      {pillar.label}
                    </span>{" "}
                    &mdash; {pillar.text}
                  </li>
                ))}
              </ul>
            )}
            {faq.link && (
              <a
                href={faq.link.href}
                className="inline-block font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                {faq.link.label} &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumn = FAQS.map((faq, i) => ({ faq, i })).filter(
    ({ i }) => i % 2 === 0
  );
  const rightColumn = FAQS.map((faq, i) => ({ faq, i })).filter(
    ({ i }) => i % 2 === 1
  );

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            Frequently asked
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="space-y-4">
            {leftColumn.map(({ faq, i }) => (
              <Reveal key={faq.question} delay={i * 60}>
                <FaqCard
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
          <div className="space-y-4">
            {rightColumn.map(({ faq, i }) => (
              <Reveal key={faq.question} delay={i * 60}>
                <FaqCard
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={FAQS.length * 60}>
          <div
            className={`${GLASS} ${CARD_SHADOW} mt-10 rounded-2xl px-8 py-10 text-center`}
          >
            <h3 className="font-display text-2xl font-bold tracking-tight text-navy-900">
              Still Have Questions?
            </h3>
            <p className="mt-2 text-base font-semibold text-navy-900">
              Let&apos;s talk about your technology goals.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy-700">
              Whether you&apos;re starting from scratch or looking to improve
              an existing system, StateNext Labs can help you determine
              what&apos;s next.
            </p>
            <a
              href="#contact"
              className={`${CTA_SHADOW} ${CTA_SHADOW_HOVER} mt-6 inline-block rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-red-500`}
            >
              Talk to StateNext Labs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
