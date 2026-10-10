"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading title={t.process.title} description={t.process.description} />

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-[var(--border-strong)] sm:block" />

          <div className="flex flex-col gap-3">
            {PROCESS_STEPS.map((step, i) => {
              const copy = t.process.steps[step.id];
              return (
                <Reveal key={step.id} delay={i * 0.06}>
                  <div className="group relative flex gap-5 rounded-2xl p-4 transition-colors duration-300 hover:bg-[var(--bg-elevated)] sm:p-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-xs font-semibold text-[var(--text-secondary)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                      {step.index}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                        {copy.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                        {copy.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
