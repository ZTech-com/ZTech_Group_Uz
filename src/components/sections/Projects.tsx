"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/constants";
import { openTelegramWithMessage } from "@/lib/telegram";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import VideoModal from "@/components/ui/VideoModal";
import ScreenshotGallery from "@/components/ui/ScreenshotGallery";

const VIDEO_PROJECTS = PROJECTS.filter((p) => p.video);
const GALLERY_PROJECT = PROJECTS.find((p) => p.gallery);

function StatusBadge({ status, label }: { status: Project["status"]; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
        status === "live"
          ? "bg-[var(--accent-soft)] text-[var(--accent-bright)]"
          : "bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "live" ? "bg-[var(--accent)]" : "bg-[var(--text-tertiary)]"
        }`}
      />
      {label}
    </span>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [explainerOpen, setExplainerOpen] = useState(false);

  function handleEnquiry(name: string) {
    openTelegramWithMessage(t.projects.enquiryMessage(name));
  }

  return (
    <section id="projects" className="section-dark relative border-y border-[var(--border-subtle)] py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading title={t.projects.title} description={t.projects.description} />

        <div className="mt-14 flex flex-col gap-16 sm:gap-24">
          {VIDEO_PROJECTS.map((project, i) => {
            const copy = t.projects.items[project.id];
            const reversed = i % 2 === 1;

            return (
              <Reveal key={project.id} delay={0.05}>
                <div
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative w-full lg:w-7/12">
                    <div className="card-surface relative aspect-[16/10] overflow-hidden rounded-xl">
                      <AutoplayVideo src={project.video!} className="h-full w-full" />
                    </div>
                  </div>

                  <div className="w-full lg:w-5/12">
                    <StatusBadge
                      status={project.status}
                      label={project.status === "live" ? t.projects.statusLive : t.projects.statusConcept}
                    />

                    <p className="mt-4 text-sm font-medium text-[var(--accent-bright)]">
                      {copy.category}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-semibold text-[var(--text-primary)] sm:text-[1.75rem]">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-md text-balance text-base leading-relaxed text-[var(--text-secondary)]">
                      {copy.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[11px] text-[var(--text-tertiary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-bright)]"
                        >
                          {t.projects.viewProject}
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleEnquiry(project.name)}
                          className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-bright)]"
                        >
                          {t.projects.viewProject}
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </button>
                      )}

                      {project.explainerVideo ? (
                        <button
                          type="button"
                          onClick={() => setExplainerOpen(true)}
                          className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--accent-bright)] transition-colors hover:text-[var(--text-primary)]"
                        >
                          <PlayCircle size={16} />
                          {t.projects.watchExplainer}
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {GALLERY_PROJECT ? (
          <Reveal delay={0.05} className="mt-20 sm:mt-28">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-4">
                {GALLERY_PROJECT.mascot ? (
                  <Image
                    src={GALLERY_PROJECT.mascot}
                    alt=""
                    width={64}
                    height={64}
                    className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
                  />
                ) : null}
                <div>
                  <StatusBadge
                    status={GALLERY_PROJECT.status}
                    label={
                      GALLERY_PROJECT.status === "live" ? t.projects.statusLive : t.projects.statusConcept
                    }
                  />
                  <p className="mt-3 text-sm font-medium text-[var(--accent-bright)]">
                    {t.projects.items[GALLERY_PROJECT.id].category}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-[var(--text-primary)] sm:text-[1.75rem]">
                    {GALLERY_PROJECT.name}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleEnquiry(GALLERY_PROJECT.name)}
                className="group inline-flex w-fit shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent-bright)]"
              >
                {t.projects.viewProject}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-[var(--text-secondary)]">
              {t.projects.items[GALLERY_PROJECT.id].description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {GALLERY_PROJECT.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[11px] text-[var(--text-tertiary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <ScreenshotGallery
                images={GALLERY_PROJECT.gallery!}
                alts={t.projects.items[GALLERY_PROJECT.id].galleryAlt ?? []}
              />
            </div>
          </Reveal>
        ) : null}
      </div>

      {explainerOpen ? (
        <VideoModal
          src={
            VIDEO_PROJECTS.find((p) => p.explainerVideo)?.explainerVideo ?? ""
          }
          title={t.projects.items["restaurant-crm"].explainerTitle ?? ""}
          onClose={() => setExplainerOpen(false)}
        />
      ) : null}
    </section>
  );
}
