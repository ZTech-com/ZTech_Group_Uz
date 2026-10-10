"use client";

import {
  UtensilsCrossed,
  Store,
  BarChart3,
  Bot,
  Globe,
  ShieldCheck,
  ShoppingBag,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import { BUILD_PREVIEW_IDS, type BuildPreviewId } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<BuildPreviewId, LucideIcon> = {
  restaurant: UtensilsCrossed,
  marketplace: Store,
  "crm-dash": BarChart3,
  bot: Bot,
  "biz-site": Globe,
  admin: ShieldCheck,
  store: ShoppingBag,
  booking: CalendarCheck,
};

export default function WhatWeBuild() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading title={t.whatWeBuild.title} description={t.whatWeBuild.description} />
      </div>

      <div className="mt-12 overflow-x-auto pb-2">
        <div className="container-page flex w-max gap-4 sm:w-full sm:flex-wrap">
          {BUILD_PREVIEW_IDS.map((id) => {
            const Icon = ICONS[id];
            const copy = t.whatWeBuild.items[id];
            return (
              <div
                key={id}
                className="flex w-[220px] shrink-0 items-start gap-3 rounded-2xl border border-[var(--border-subtle)] p-4 transition-colors duration-200 hover:border-[var(--text-tertiary)] sm:w-[240px]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-elevated)] text-[var(--accent)]">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{copy.title}</p>
                  <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">{copy.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
