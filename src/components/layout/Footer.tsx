"use client";

import Link from "next/link";
import { NAV_LINKS, SITE, TELEGRAM } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[#080808] py-12 sm:py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Link
              href="#home"
              className="flex items-center gap-2 text-base font-bold tracking-tight"
            >
              <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-strong)]">
                <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-[var(--accent-deep)] via-[var(--accent)] to-[var(--accent-bright)]" />
              </span>
              <span className="brand-wordmark">{SITE.name}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
              {t.footer.navigate}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-bright)]"
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
              {t.footer.telegramLabel}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={TELEGRAM.primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-bright)]"
                >
                  @{TELEGRAM.primary.username}
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM.group.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-bright)]"
                >
                  @{TELEGRAM.group.username}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--text-tertiary)]">{t.footer.rights}</p>
          <p className="text-xs text-[var(--text-tertiary)]">{t.footer.precision}</p>
        </div>
      </div>
    </footer>
  );
}
