"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BrandWordmark from "./BrandWordmark";

type FooterLink =
  | { type: "section"; href: string; label: string }
  | { type: "page"; href: string; label: string };

const SERVICES = [
  "Custom Software Development",
  "Digital Modernization",
  "Process Automation",
  "Cloud & Infrastructure",
  "Data & Analytics",
];

const USEFUL_LINKS: FooterLink[] = [
  { type: "section", href: "#about", label: "About Us" },
  { type: "page", href: "/work", label: "Our Work" },
  { type: "section", href: "#pricing", label: "Pricing" },
  { type: "section", href: "#faq", label: "FAQ" },
  { type: "section", href: "#contact", label: "Contact Us" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C10.9 20.3 3.7 13.1 3.7 4.4c0-.6.4-1 1-1H8.1c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 6.5l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.4l.6-3H13v-1.2c0-.5.4-.8.9-.8z",
  },
  {
    label: "X",
    href: "#",
    path: "M6 4h3.2l3 4 3.4-4H18l-5 5.8L18.4 20H15l-3.3-4.4L8 20H5l5.4-6.3L6 4z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M20.5 8.4a2.5 2.5 0 0 0-1.8-1.8C17 6 12 6 12 6s-5 0-6.7.6A2.5 2.5 0 0 0 3.5 8.4 26 26 0 0 0 3 12a26 26 0 0 0 .5 3.6 2.5 2.5 0 0 0 1.8 1.8C7 18 12 18 12 18s5 0 6.7-.6a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 21 12a26 26 0 0 0-.5-3.6zM10 14.7V9.3L14.7 12 10 14.7z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.9 8.6H4V19h2.9V8.6zM5.5 4.5A1.7 1.7 0 1 0 5.5 8a1.7 1.7 0 0 0 0-3.5zM20 19h-2.9v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V19H10V8.6h2.8v1.4h.04c.4-.7 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.6V19z",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="relative isolate overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/map.jpg"
          alt=""
          fill
          className="object-cover opacity-20 invert mix-blend-screen"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-white.png"
                alt="StateNext Labs"
                width={56}
                height={56}
                className="h-9 w-9"
              />
              <BrandWordmark tone="light" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              A technology and digital solutions company helping
              organizations build, innovate, automate, and scale.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-red-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-white">
              Our Services
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href={isHome ? "#services" : "/#services"}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-white">
              Useful Links
            </p>
            <ul className="mt-5 space-y-3">
              {USEFUL_LINKS.map((link) => (
                <li key={link.href}>
                  {link.type === "page" ? (
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={isHome ? link.href : `/${link.href}`}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-white">
              Contact Info
            </p>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-red-400">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <a
                    href="tel:+13122878155"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    312-287-8155
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-red-400">
                  <MailIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a
                    href="mailto:info@gostatenext.com"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    info@gostatenext.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-red-400">
                  <PinIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Address</p>
                  <p className="text-sm leading-relaxed text-white/60">
                    332 S Michigan Ave, Floor 9
                    <br />
                    Chicago, IL 60604
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} StateNext Labs. All rights
            reserved.
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
            Build &middot; Innovate &middot; Automate &middot; Scale
          </p>
        </div>
      </div>
    </footer>
  );
}
