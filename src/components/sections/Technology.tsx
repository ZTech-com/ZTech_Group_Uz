"use client";

import { useState } from "react";
import { TECHNOLOGIES } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const RING_INNER = TECHNOLOGIES.slice(0, 6);
const RING_OUTER = TECHNOLOGIES.slice(6);

function OrbitRing({
  items,
  radius,
  duration,
  reverse = false,
  active,
  onHover,
}: {
  items: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
  active: string | null;
  onHover: (v: string | null) => void;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        animation: `spin ${duration}s linear infinite ${reverse ? "reverse" : ""}`,
        animationPlayState: active ? "paused" : "running",
      }}
    >
      {items.map((tech, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div
            key={tech}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
            }}
          >
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `spin ${duration}s linear infinite ${reverse ? "" : "reverse"}`,
                animationPlayState: active ? "paused" : "running",
              }}
            >
              <button
                type="button"
                onMouseEnter={() => onHover(tech)}
                onMouseLeave={() => onHover(null)}
                onFocus={() => onHover(tech)}
                onBlur={() => onHover(null)}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                  active === tech
                    ? "scale-110 border-[var(--accent-bright)]/60 bg-[var(--accent-soft)] text-[var(--text-primary)]"
                    : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tech}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Technology() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section-dark relative overflow-hidden py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          title={t.technology.title}
          description={t.technology.description}
          align="center"
        />

        {/* Desktop orbit visualization */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 hidden h-[420px] w-full max-w-xl md:block">
            <div className="absolute inset-0 rounded-full border border-[var(--border-subtle)]" />
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border-subtle)]" />

            <OrbitRing
              items={RING_OUTER}
              radius={200}
              duration={46}
              active={active}
              onHover={setActive}
            />
            <OrbitRing
              items={RING_INNER}
              radius={128}
              duration={34}
              reverse
              active={active}
              onHover={setActive}
            />

            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] text-xs font-semibold text-[var(--text-primary)] shadow-[0_0_40px_-5px_rgba(41,151,255,0.45)]">
              ZTech
            </div>
          </div>
        </Reveal>

        {/* Mobile marquee fallback */}
        <div className="mt-12 overflow-hidden md:hidden">
          <div className="animate-marquee flex w-max gap-3">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
