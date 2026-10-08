"use client";

import { Send } from "lucide-react";
import { TELEGRAM } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";

function ContactCard({
  name,
  username,
  url,
  role,
  messageLabel,
}: {
  name: string;
  username: string;
  url: string;
  role: string;
  messageLabel: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-border card-surface group flex items-center justify-between gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15"
    >
      <div className="flex items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-bright)]/25 to-[var(--accent-cyan)]/15 text-sm font-semibold text-[var(--text-primary)]">
          {name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-medium text-[var(--text-primary)]">{name}</p>
          <p className="text-xs text-[var(--text-tertiary)]">
            {role} · @{username}
          </p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors duration-300 group-hover:border-[var(--accent-bright)]/50 group-hover:bg-[var(--accent-soft)]">
        {messageLabel}
        <Send size={12} />
      </span>
    </a>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-pulse-glow absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.1] blur-[130px]" />
      </div>

      <div className="container-page">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <ContactCard
              name={TELEGRAM.primary.name}
              username={TELEGRAM.primary.username}
              url={TELEGRAM.primary.url}
              role={t.contact.cards.founderRole}
              messageLabel={t.contact.cards.message}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactCard
              name={TELEGRAM.group.name}
              username={TELEGRAM.group.username}
              url={TELEGRAM.group.url}
              role={t.contact.cards.studioRole}
              messageLabel={t.contact.cards.message}
            />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-3xl">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
