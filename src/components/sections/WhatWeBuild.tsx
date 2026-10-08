"use client";

import { BUILD_PREVIEWS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MiniPreview from "@/components/ui/MiniPreview";

export default function WhatWeBuild() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.whatWeBuild.eyebrow}
          title={t.whatWeBuild.title}
          description={t.whatWeBuild.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BUILD_PREVIEWS.map((preview, i) => {
            const copy = t.whatWeBuild.items[preview.id];
            return (
              <Reveal key={preview.id} delay={(i % 4) * 0.05}>
                <div className="card-surface group relative flex h-[220px] flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15">
                  <div className="relative flex-1 overflow-hidden opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    <MiniPreview {...preview} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                  </div>
                  <div className="border-t border-[var(--border-subtle)] bg-white/[0.02] p-4 transition-transform duration-500 group-hover:-translate-y-0.5">
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {copy.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">
                      {copy.category}
                    </p>
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
