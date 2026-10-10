"use client";

import { useId, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Bot, Globe, ShoppingBag, BarChart3, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type LabTabId = "website" | "ecommerce" | "crm" | "bot";

const TAB_IDS: LabTabId[] = ["website", "ecommerce", "crm", "bot"];

const TAB_ICONS: Record<LabTabId, LucideIcon> = {
  website: Globe,
  ecommerce: ShoppingBag,
  crm: BarChart3,
  bot: Bot,
};

function Dots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function WebsiteScene() {
  const { t } = useLanguage();
  const copy = t.hero.lab.website;
  return (
    <div className="flex h-full flex-col justify-between bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-[5px] bg-[var(--accent)]" />
          <span className="text-[11px] font-semibold text-[#1d1d1f]">{copy.eyebrow}</span>
        </div>
        <div className="flex gap-3">
          <span className="h-1.5 w-6 rounded-full bg-[#e5e5e7]" />
          <span className="h-1.5 w-6 rounded-full bg-[#e5e5e7]" />
          <span className="h-1.5 w-6 rounded-full bg-[#e5e5e7]" />
        </div>
      </div>

      <div className="flex flex-1 items-center gap-4 pt-4">
        <div className="flex-1">
          <p className="text-[19px] font-semibold leading-tight tracking-tight text-[#1d1d1f]">
            {copy.headline}
          </p>
          <p className="mt-2 max-w-[20ch] text-[11px] leading-relaxed text-[#6e6e73]">
            {copy.body}
          </p>
          <span className="mt-3 inline-flex items-center rounded-full bg-[#0071e3] px-3 py-1.5 text-[10px] font-medium text-white">
            {copy.cta}
          </span>
        </div>
        <div className="hidden flex-1 flex-col gap-2 sm:flex">
          <div className="h-16 rounded-xl bg-gradient-to-br from-[#eaf3ff] to-[#f5f5f7]" />
          <div className="flex items-center gap-1.5 rounded-lg border border-[#e5e5e7] px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" />
            <span className="text-[9px] font-medium text-[#1d1d1f]">{copy.stat}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommerceScene() {
  const { t } = useLanguage();
  const copy = t.hero.lab.ecommerce;
  const products = [
    { name: copy.product1, price: copy.price1, from: "#eef4ff", to: "#dce9ff" },
    { name: copy.product2, price: copy.price2, from: "#fff2e8", to: "#ffe0cc" },
  ];
  return (
    <div className="flex h-full flex-col bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[#1d1d1f]">{copy.store}</span>
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#f5f5f7]">
          <span className="h-2.5 w-2.5 rounded-sm border border-[#86868b]" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 20 }}
            className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0071e3] text-[8px] font-semibold text-white"
          >
            2
          </motion.span>
        </span>
      </div>
      <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
        {products.map((p) => (
          <div key={p.name} className="flex flex-col rounded-xl border border-[#eceef0] p-2.5">
            <div
              className="h-14 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
            />
            <p className="mt-2 truncate text-[10px] font-medium text-[#1d1d1f]">{p.name}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#1d1d1f]">{p.price}</span>
              <span className="rounded-full bg-[#0071e3] px-2 py-0.5 text-[8px] font-medium text-white">
                {copy.add}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrmScene() {
  const { t } = useLanguage();
  const copy = t.hero.lab.crm;
  const bars = [40, 65, 50, 80, 60, 95, 70];
  return (
    <div className="flex h-full bg-white">
      <div className="flex w-10 flex-col items-center gap-3 border-r border-[#eceef0] py-4">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-5 w-5 rounded-md ${i === 0 ? "bg-[#0071e3]" : "bg-[#e5e5e7]"}`}
          />
        ))}
      </div>
      <div className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-[#f5f5f7] p-2.5">
            <p className="text-[9px] text-[#6e6e73]">{copy.customers}</p>
            <p className="mt-0.5 text-[15px] font-semibold text-[#1d1d1f]">{copy.customersValue}</p>
          </div>
          <div className="rounded-xl bg-[#f5f5f7] p-2.5">
            <p className="text-[9px] text-[#6e6e73]">{copy.growth}</p>
            <p className="mt-0.5 text-[15px] font-semibold text-[#34c759]">{copy.growthValue}</p>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-[#eceef0] p-2.5">
          <p className="text-[9px] text-[#6e6e73]">{copy.activity}</p>
          <svg viewBox="0 0 140 40" className="mt-2 h-10 w-full" aria-hidden="true">
            <polyline
              points="0,30 20,22 40,26 60,14 80,18 100,6 120,10 140,2"
              fill="none"
              stroke="#0071e3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="mt-1 flex items-end gap-1">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-[var(--accent-soft)]"
                style={{ height: `${h / 5}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BotScene() {
  const { t } = useLanguage();
  const copy = t.hero.lab.bot;
  return (
    <div className="flex h-full flex-col bg-[#e7ebf0] p-4">
      <div className="flex flex-1 flex-col justify-end gap-2">
        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3 py-2 text-[10.5px] leading-snug text-[#1d1d1f] shadow-sm">
          {copy.botMessage}
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#0071e3] px-3 py-2 text-[10.5px] leading-snug text-white shadow-sm">
          {copy.userMessage}
        </div>
        <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-sm">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#86868b]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full bg-white px-3 py-2">
        <span className="flex-1 text-[10px] text-[#86868b]">{copy.placeholder}</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0071e3]">
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
            <path d="M3 11.5L21 3l-5.5 18-4.2-7.3L3 11.5z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

const SCENES = {
  website: WebsiteScene,
  ecommerce: EcommerceScene,
  crm: CrmScene,
  bot: BotScene,
};

export default function ProductLab() {
  const { t } = useLanguage();
  const [active, setActive] = useState<LabTabId>("website");
  const reduceMotion = useReducedMotion();
  const tabListId = useId();

  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const rotateX = useTransform(sy, [-40, 40], [4, -4]);
  const rotateY = useTransform(sx, [-40, 40], [-4, 4]);

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

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const currentIndex = TAB_IDS.indexOf(active);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive(TAB_IDS[(currentIndex + 1) % TAB_IDS.length]!);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive(TAB_IDS[(currentIndex - 1 + TAB_IDS.length) % TAB_IDS.length]!);
    }
  }

  const Scene = SCENES[active];
  const chromeUrl = active === "bot" ? null : t.hero.lab.url[active];

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-md"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="card-surface overflow-hidden rounded-2xl"
        style={{ rotateX, rotateY, willChange: "transform" }}
      >
        <div className="flex h-11 items-center gap-3 border-b border-[var(--border-subtle)] bg-white px-4">
          {active === "bot" ? (
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                <Bot size={13} />
              </span>
              <div className="leading-none">
                <p className="text-[11px] font-medium text-[#1d1d1f]">{t.hero.lab.bot.name}</p>
                <p className="text-[9px] text-[#34c759]">{t.hero.lab.bot.status}</p>
              </div>
            </div>
          ) : (
            <>
              <Dots />
              <span className="ml-auto truncate text-[11px] text-[#86868b]">{chromeUrl}</span>
            </>
          )}
        </div>

        <div className="relative aspect-[4/3] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Scene />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div
        role="tablist"
        aria-label={t.hero.lab.tabsLabel}
        id={tabListId}
        onKeyDown={handleKeyDown}
        className="mt-5 flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-1.5"
      >
        {TAB_IDS.map((id) => {
          const Icon = TAB_ICONS[id];
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`${tabListId}-${id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(id)}
              className="relative flex-1 rounded-full px-2 py-2 text-[11px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] sm:px-3 sm:text-xs"
            >
              {isActive ? (
                <motion.span
                  layoutId="lab-tab-indicator"
                  className="absolute inset-0 rounded-full bg-[var(--accent)]"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              ) : null}
              <span
                className={`relative z-10 flex items-center justify-center gap-1.5 transition-colors ${
                  isActive ? "text-white" : "text-[var(--text-secondary)]"
                }`}
              >
                <Icon size={13} strokeWidth={2} />
                <span className="hidden sm:inline">{t.hero.lab.tabs[id]}</span>
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
