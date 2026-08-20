import Image from "next/image";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/projects";

const TRACK = [...PROJECTS, ...PROJECTS];

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
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="animate-marquee flex w-max gap-4">
              {TRACK.map((project, i) => {
                const href = project.noLink
                  ? undefined
                  : (project.href ?? `https://${project.url}`);

                const tile = (
                  <div className="group relative aspect-video w-52 flex-shrink-0 overflow-hidden rounded-xl border border-navy-900/10 bg-navy-100 shadow-[0_8px_20px_-10px_rgba(10,21,48,0.35)] transition-shadow duration-300 hover:shadow-[0_14px_30px_-10px_rgba(10,21,48,0.45)]">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="208px"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/85 via-navy-950/0 to-navy-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="px-3 py-2.5 text-xs font-semibold leading-tight text-white">
                        {project.name}
                      </p>
                    </div>
                  </div>
                );

                return href ? (
                  <a
                    key={`${project.name}-${i}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                  >
                    {tile}
                  </a>
                ) : (
                  <div key={`${project.name}-${i}`}>{tile}</div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
