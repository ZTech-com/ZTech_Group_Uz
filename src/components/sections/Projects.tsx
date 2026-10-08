"use client";

import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { openTelegramWithMessage } from "@/lib/telegram";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MiniPreview from "@/components/ui/MiniPreview";

export default function Projects() {
  const { t } = useLanguage();

  function handleEnquiry(name: string) {
    openTelegramWithMessage(t.projects.enquiryMessage(name));
  }

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const copy = t.projects.items[project.id];
            return (
              <Reveal key={project.id} delay={i * 0.08}>
                <div className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15">
                  <div className="relative h-44 overflow-hidden border-b border-[var(--border-subtle)]">
                    <div className="absolute inset-0 scale-[1.02] opacity-80 transition-transform duration-700 group-hover:scale-[1.08]">
                      <MiniPreview {...project} />
                    </div>
                    <span
                      className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                        project.status === "live"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-white/10 text-[var(--text-secondary)]"
                      }`}
                    >
                      {project.status === "live" ? t.projects.statusLive : t.projects.statusConcept}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
                      {copy.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {copy.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[11px] text-[var(--text-tertiary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-bright)]"
                      >
                        {t.projects.viewProject}
                        <ExternalLink
                          size={14}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleEnquiry(project.name)}
                        className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-bright)]"
                      >
                        {t.projects.viewProject}
                        <span
                          aria-hidden
                          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
