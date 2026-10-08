import { WHY_POINTS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function WhyZTech() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.75rem]">
              Technology Should{" "}
              <span className="gradient-text">Feel Simple.</span>
            </h2>
            <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              We handle the complexity so your product feels effortless —
              for your team and for your customers.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {WHY_POINTS.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                  <span className="text-sm font-medium text-[var(--text-primary)] sm:text-base">
                    {point}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
