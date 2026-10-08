"use client";

import { PROJECTS } from "@/lib/constants";
import { openTelegramWithMessage } from "@/lib/telegram";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MiniPreview from "@/components/ui/MiniPreview";

export default function Projects() {
  function handleViewProject(name: string) {
    openTelegramWithMessage(
      `Hi ZTech Group, I'd like to learn more about the "${name}" project.`,
    );
  }

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Built for Real Businesses."
          description="A selection of products ZTech Group has designed and delivered. Concept projects are clearly labeled."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <div className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15">
                <div className="relative h-44 overflow-hidden border-b border-[var(--border-subtle)]">
                  <div className="absolute inset-0 scale-[1.02] opacity-80 transition-transform duration-700 group-hover:scale-[1.08]">
                    <MiniPreview {...project} />
                  </div>
                  <span
                    className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                      project.status === "Live"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-white/10 text-[var(--text-secondary)]"
                    }`}
                  >
                    {project.status === "Live" ? "Live" : "Concept / Demo"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[11px] text-[var(--text-tertiary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleViewProject(project.name)}
                    className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-bright)]"
                  >
                    View Project
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
