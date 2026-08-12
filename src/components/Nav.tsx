"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BrandWordmark from "./BrandWordmark";
import { useMagneticHandlers } from "@/hooks/useMagnetic";
import { GLASS, CTA_SHADOW, CTA_SHADOW_HOVER } from "@/lib/glass";

type NavLink =
  | { type: "section"; href: string; label: string }
  | { type: "page"; href: string; label: string };

const LINKS: NavLink[] = [
  { type: "section", href: "#services", label: "Services" },
  { type: "section", href: "#about", label: "About" },
  { type: "page", href: "/work", label: "Work" },
  { type: "section", href: "#pricing", label: "Pricing" },
  { type: "section", href: "#faq", label: "FAQ" },
  { type: "section", href: "#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const cta = useMagneticHandlers(ctaRef, 0.25);

  const overDarkHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = LINKS.filter((link) => link.type === "section")
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const sectionHref = (href: string) => (isHome ? href : `/${href}`);

  const linkClassName = (isActive: boolean, light: boolean) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? light
          ? "text-red-400 font-semibold"
          : "text-red-600 font-semibold"
        : light
        ? "text-white/80 hover:text-white"
        : "text-navy-700 hover:text-navy-900"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled
          ? `${GLASS} shadow-lg shadow-navy-900/10`
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/statenext-logo.png"
            alt="StateNext Labs"
            width={64}
            height={64}
            className={`h-9 w-9 transition-[filter] ${
              overDarkHero
                ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                : ""
            }`}
            priority
          />
          <BrandWordmark tone={overDarkHero ? "light" : "dark"} />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) =>
            link.type === "page" ? (
              <Link
                key={link.href}
                href={link.href}
                className={linkClassName(pathname === link.href, overDarkHero)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={sectionHref(link.href)}
                className={linkClassName(
                  isHome && activeId === link.href.slice(1),
                  overDarkHero
                )}
              >
                {link.label}
              </a>
            )
          )}
          <a
            ref={ctaRef}
            onMouseMove={cta.onMouseMove}
            onMouseLeave={cta.onMouseLeave}
            href={sectionHref("#contact")}
            className={`${CTA_SHADOW} ${CTA_SHADOW_HOVER} rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-red-500`}
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
            overDarkHero && !open ? "text-white" : "text-navy-900"
          }`}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className={`${GLASS} border-t-0 px-6 py-4 md:hidden`}>
          <div className="flex flex-col gap-4">
            {LINKS.map((link) =>
              link.type === "page" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={linkClassName(pathname === link.href, false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={sectionHref(link.href)}
                  onClick={() => setOpen(false)}
                  className={linkClassName(
                    isHome && activeId === link.href.slice(1),
                    false
                  )}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={sectionHref("#contact")}
              onClick={() => setOpen(false)}
              className={`${CTA_SHADOW} rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-semibold text-white`}
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
