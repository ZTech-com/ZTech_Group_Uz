"use client";

import { Check } from "lucide-react";
import { WHY_POINT_IDS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <span className="mb-6 block h-px w-10 bg-[var(--accent)]" />
            <h2 className="text-balance text-3xl font-medium leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.75rem]">
              {t.whyITop.titlePrefix}
              <span className="text-[var(--accent-bright)]">{t.whyITop.titleHighlight}</span>
            </h2>
            <p className="mt-5 max-w-md text-balance text-base leading-[1.8] text-[var(--text-secondary)] sm:text-lg">
              {t.whyITop.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {WHY_POINT_IDS.map((id) => (
                <li
                  key={id}
                  className="flex items-center gap-3 border-b border-[var(--border-subtle)] py-4"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--accent-bright)]">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)] sm:text-base">
                    {t.whyITop.points[id]}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
