"use client";

import { Check } from "lucide-react";
import { WHY_POINT_IDS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function WhyZTech() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-[var(--bg-elevated)] py-28 sm:py-36">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.75rem]">
              {t.whyZtech.titlePrefix}
              <span className="text-accent">{t.whyZtech.titleHighlight}</span>
            </h2>
            <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {t.whyZtech.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {WHY_POINT_IDS.map((id) => (
                <div key={id} className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)] sm:text-base">
                    {t.whyZtech.points[id]}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
