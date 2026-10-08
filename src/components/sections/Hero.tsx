"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function CodeCard() {
  return (
    <motion.div
      className="card-surface animate-float-slow w-[240px] rounded-2xl p-4 shadow-2xl sm:w-[260px]"
      style={{ willChange: "transform" }}
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-[10px] text-[var(--text-tertiary)]">bot.ts</span>
      </div>
      <pre className="font-mono text-[11px] leading-[1.7] text-[var(--text-secondary)]">
        <code>
          <span className="text-[var(--accent-bright)]">export</span> async
          {"\n"}
          <span className="text-[var(--accent-cyan)]">function</span>{" "}
          onOrder(ctx) {"{"}
          {"\n"} {"  "}await ctx.reply(
          {"\n"} {"    "}
          <span className="text-emerald-400">&quot;Order received ✅&quot;</span>
          {"\n"} {"  "});
          {"\n"}
          {"}"}
        </code>
      </pre>
    </motion.div>
  );
}

function StatCard() {
  return (
    <motion.div
      className="card-surface animate-float-slower w-[200px] rounded-2xl p-4 shadow-2xl sm:w-[220px]"
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--text-tertiary)]">Monthly Orders</span>
        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
          +18%
        </span>
      </div>
      <div className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
        2,481
      </div>
      <div className="mt-3 flex items-end gap-1.5">
        {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-[var(--accent)] to-[var(--accent-cyan)] opacity-80"
            style={{ height: `${h * 0.4}px` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function DashboardCard() {
  return (
    <motion.div
      className="card-surface animate-float-slow w-[220px] rounded-2xl p-4 shadow-2xl sm:w-[240px]"
      style={{ willChange: "transform", animationDelay: "1.2s" }}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent-bright)] to-[var(--accent-cyan)] text-[11px] font-semibold text-[#07080a]">
          Z
        </span>
        <div className="flex-1">
          <div className="h-1.5 w-20 rounded-full bg-white/10" />
          <div className="mt-1.5 h-1.5 w-12 rounded-full bg-white/[0.06]" />
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)]" />
            <div className="h-1.5 flex-1 rounded-full bg-white/[0.08]" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.6 });

  const rotateX = useTransform(sy, [-40, 40], [3, -3]);
  const rotateY = useTransform(sx, [-40, 40], [-3, 3]);
  const translateX = useTransform(sx, (v) => v * 0.4);
  const translateY = useTransform(sy, (v) => v * 0.4);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 80);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 80);
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff14 1px, transparent 1px), linear-gradient(to bottom, #ffffff14 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="animate-pulse-glow absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.16] blur-[120px]" />
        <div className="animate-drift absolute right-[8%] top-[18%] h-[260px] w-[260px] rounded-full bg-[var(--accent-cyan)] opacity-[0.1] blur-[100px]" />
      </div>

      <div className="container-page relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.hero.badge}
          </motion.span>

          <h1 className="text-balance max-w-xl text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-[3.75rem]">
            {t.hero.titlePrefix}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
            {t.hero.titleSuffix}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-lg text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#projects" variant="secondary" icon={false}>
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden h-[420px] w-full max-w-md sm:block lg:h-[480px]"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="relative h-full w-full"
            style={{ rotateX, rotateY, x: translateX, y: translateY }}
          >
            <div className="absolute left-1/2 top-6 -translate-x-1/2">
              <DashboardCard />
            </div>
            <div className="absolute bottom-16 left-0">
              <CodeCard />
            </div>
            <div className="absolute bottom-0 right-0">
              <StatCard />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
