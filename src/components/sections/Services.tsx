"use client";

import {
  Globe,
  Bot,
  Users,
  Building2,
  LayoutDashboard,
  ShoppingCart,
  Workflow,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_IDS, type ServiceId } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const ICONS: Record<ServiceId, LucideIcon> = {
  web: Globe,
  telegram: Bot,
  crm: Users,
  platforms: Building2,
  dashboards: LayoutDashboard,
  ecommerce: ShoppingCart,
  automation: Workflow,
  ai: Sparkles,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading title={t.services.title} description={t.services.description} />

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_IDS.map((id) => {
              const Icon = ICONS[id];
              const service = t.services.items[id];
              return (
                <div
                  key={id}
                  className="card-surface group flex h-full flex-col rounded-xl p-5 transition-colors duration-300 hover:border-[var(--border-strong)] sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--accent-bright)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-tertiary)]">
                    {service.details}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
