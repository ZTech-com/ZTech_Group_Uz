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
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
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
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Everything You Need to Build Your Digital Business."
          description="From a single landing page to a full business platform — one team, one standard of quality."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id];
            return (
              <Reveal key={service.id} delay={(i % 4) * 0.06}>
                <div className="glow-border card-surface group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white/[0.03] text-[var(--text-primary)] transition-colors duration-300 group-hover:border-[var(--accent-bright)]/40 group-hover:text-[var(--accent-bright)]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                  <div className="mt-4 grid grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <p className="min-h-0 text-sm leading-relaxed text-[var(--text-tertiary)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {service.details}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
