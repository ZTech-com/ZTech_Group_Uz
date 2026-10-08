import Link from "next/link";
import { NAV_LINKS, TELEGRAM } from "@/lib/constants";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-subtle)] py-14">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Link
              href="#home"
              className="flex items-center gap-2 text-base font-semibold tracking-tight text-[var(--text-primary)]"
            >
              <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[var(--accent-bright)] to-[var(--accent-cyan)]">
                <span className="h-2 w-2 rounded-sm bg-[#07080a]" />
              </span>
              ZTech Group
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Digital products. Software. Automation.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
              Telegram
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={TELEGRAM.primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  @{TELEGRAM.primary.username}
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM.group.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  @{TELEGRAM.group.username}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--text-tertiary)]">
            © {YEAR} ZTech Group. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-tertiary)]">Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
