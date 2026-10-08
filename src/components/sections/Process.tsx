import { PROCESS_STEPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title="From Idea to Launch."
          description="A clear, structured process — so you always know what's happening and what's next."
        />

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-[var(--border-strong)] via-[var(--border-subtle)] to-transparent sm:block" />

          <div className="flex flex-col gap-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.07}>
                <div className="group relative flex gap-5 rounded-2xl p-4 transition-colors duration-300 hover:bg-white/[0.02] sm:p-5">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-xs font-semibold text-[var(--text-secondary)] transition-colors duration-300 group-hover:border-[var(--accent-bright)]/50 group-hover:text-[var(--accent-bright)]">
                    {step.index}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
