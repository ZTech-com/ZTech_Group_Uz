"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`w-full max-w-5xl rounded-2xl border transition-all duration-500 ease-out ${
          scrolled
            ? "border-[var(--border-subtle)] bg-[#0a0b0d]/80 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 transition-all duration-500 ease-out sm:px-5 ${
            scrolled ? "h-14" : "h-16 sm:h-[72px]"
          }`}
        >
          <Link
            href="#home"
            className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[var(--text-primary)]"
            onClick={() => setOpen(false)}
          >
            <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[var(--accent-bright)] to-[var(--accent-cyan)]">
              <span className="h-2 w-2 rounded-sm bg-[#07080a]" />
            </span>
            ZTech Group
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Button href="#contact" variant="secondary" className="!px-5 !py-2 text-sm">
              {t.nav.startProject}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)]"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-3 right-3 top-[76px] z-40 rounded-2xl border border-[var(--border-subtle)] bg-[#0a0b0d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-[var(--text-secondary)] transition-colors hover:bg-white/[0.04] hover:text-[var(--text-primary)]"
                  >
                    {t.nav[link.key]}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div
              className="mt-2 border-t border-[var(--border-subtle)] p-2 pt-3"
              onClick={() => setOpen(false)}
            >
              <Button href="#contact" variant="primary" className="w-full">
                {t.nav.startProject}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
