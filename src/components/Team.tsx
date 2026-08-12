import Reveal from "./Reveal";
import { GLASS, CARD_SHADOW } from "@/lib/glass";

const ROLES = ["Founder & CEO", "CTO", "Lead Designer", "Project Manager"];

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            Our team
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            The people behind the work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-700">
            A small, senior team. You work directly with the people building
            your system, not an account manager relaying messages.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((role, i) => (
            <Reveal key={role} delay={i * 80}>
              <div
                className={`${GLASS} ${CARD_SHADOW} rounded-2xl p-6 text-center`}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy-900/8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-9 w-9 text-navy-900/25"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-semibold italic text-navy-900/40">
                  Add name
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-red-600">
                  {role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
