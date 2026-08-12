import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PortfolioCard, { type PortfolioItem } from "@/components/PortfolioCard";

export const metadata: Metadata = {
  title: "Our Work — StateNext Labs",
  description:
    "A selection of websites and digital products StateNext Labs has designed and built.",
};

const PROJECTS: PortfolioItem[] = [
  {
    name: "SecureNext Networks",
    url: "securenextnetworks.com",
    category: "Cybersecurity",
    description:
      "A cybersecurity consulting site for a Chicago-based network security and compliance firm, built to convert visitors into free-assessment requests.",
    image: "/securenext.png",
  },
  {
    name: "Primax Group LLC",
    url: "primaxgroupllc.com",
    category: "Home & Commercial Services",
    description:
      "A booking-focused site for a Chicago cleaning company, covering everything from office cleaning to post-construction and Airbnb turnover.",
    image: "/primax.png",
  },
  {
    name: "Dr. Mark Campbell, PhD",
    url: "markcampbellphd.com",
    category: "Personal Brand",
    description:
      "A personal site for a technology executive and keynote speaker, built around his speaking engagements, books, and executive leadership work.",
    image: "/dr-mark.png",
  },
  {
    name: "Komla's Kitchen",
    url: "komlaskitchen.com",
    category: "Restaurant & Delivery",
    description:
      "An ordering-first site for a Ghanaian restaurant in Chicago, built to drive same-day delivery orders and showcase the daily menu.",
    image: "/komla.png",
  },
  {
    name: "EY Plumbing Solution",
    url: "eyplumbing-lilac.vercel.app",
    href: "https://eyplumbing-lilac.vercel.app/#hero",
    category: "Home Services",
    description:
      "A local service site for a plumbing company in Accra, Ghana, designed around direct phone bookings for repairs and emergency call-outs.",
    image: "/plumbing.png",
  },
  {
    name: "ProNova Contracting",
    url: "pronovac.com",
    category: "Construction",
    description:
      "A corporate site for a construction contractor in Mauritius, built to showcase their services and drive free-consultation requests.",
    image: "/pronovac.png",
  },
];

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
