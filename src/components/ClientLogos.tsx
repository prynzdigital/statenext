import Reveal from "./Reveal";

const SLOTS = Array.from({ length: 6 });
const TRACK = [...SLOTS, ...SLOTS];

export default function ClientLogos() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/40">
            Built for teams like yours
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max gap-4">
              {TRACK.map((_, i) => (
                <div
                  key={i}
                  className="flex h-16 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-dashed border-navy-900/15 bg-white/40 transition-colors hover:border-red-500/40 hover:bg-white/70"
                >
                  <span className="text-xs text-navy-900/30">Logo</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
