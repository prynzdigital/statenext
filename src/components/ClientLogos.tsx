import Reveal from "./Reveal";

const SLOTS = Array.from({ length: 5 });

export default function ClientLogos() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/40">
            Built for teams like yours
          </p>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5"
        >
          {SLOTS.map((_, i) => (
            <div
              key={i}
              className="flex h-16 items-center justify-center rounded-xl border border-dashed border-navy-900/15 bg-white/40"
            >
              <span className="text-xs text-navy-900/30">Logo</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
