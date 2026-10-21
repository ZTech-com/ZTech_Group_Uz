"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ProductLab from "@/components/ui/ProductLab";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden border-b border-[var(--border-subtle)] pt-28 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_38rem_30rem_at_16%_10%,rgba(212,175,55,0.07),transparent_72%)]"
      />
      <div className="container-page relative z-10 grid gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.16em] text-[var(--text-secondary)]">
            <span className="h-px w-7 bg-[var(--accent)]" />
            {t.hero.badge}
          </p>
          <h1 className="text-balance max-w-2xl text-[2.6rem] font-bold leading-[1.06] tracking-[-0.045em] text-[var(--text-primary)] sm:text-6xl md:text-[3.25rem] xl:text-[4rem]">
            <span>{t.hero.titlePrefix}</span>
            <span className="text-[var(--accent-bright)]">{t.hero.titleHighlight}</span>
            <span>{t.hero.titleSuffix}</span>
          </h1>

          <p className="mt-6 max-w-lg text-balance text-[17px] font-medium leading-[1.8] text-[var(--text-secondary)] sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contact" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#projects" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* Interactive product preview */}
        <ProductLab />
      </div>
    </section>
  );
}
