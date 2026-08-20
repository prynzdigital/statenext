import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PortfolioCard from "@/components/PortfolioCard";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work — StateNext Labs",
  description:
    "A selection of websites and digital products StateNext Labs has designed and built.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                Our work
              </p>
              <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                Selected projects
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-navy-700">
                A look at some of the websites and digital products
                we&apos;ve designed and built for clients.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project, i) => (
                <PortfolioCard
                  key={project.name}
                  item={project}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
