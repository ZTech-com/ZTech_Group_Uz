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
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-pulse-glow absolute left-1/2 top-[-12%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.1] blur-[130px]" />
      </div>

      <div className="container-page relative z-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-balance max-w-xl text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-[3.75rem]">
            {t.hero.titlePrefix}
            {t.hero.titleHighlight}
            {t.hero.titleSuffix}
          </h1>

          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#projects" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* Interactive Product Lab: switchable, real-time UI previews */}
        <ProductLab />
      </div>
    </section>
  );
}
