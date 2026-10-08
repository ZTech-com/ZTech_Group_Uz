export const SITE = {
  name: "ZTech Group",
  url: "https://ztechgroup.vercel.app",
};

export const TELEGRAM = {
  primary: {
    name: "Bunyod Pulatov",
    username: "Bunyod_Pulatov",
    url: "https://t.me/Bunyod_Pulatov",
  },
  group: {
    name: "ZTech Group",
    username: "ztechuz001",
    url: "https://t.me/ztechuz001",
  },
};

export const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "process", href: "#process" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

export type ServiceId =
  | "web"
  | "telegram"
  | "crm"
  | "platforms"
  | "dashboards"
  | "ecommerce"
  | "automation"
  | "ai";

export const SERVICE_IDS: ServiceId[] = [
  "web",
  "telegram",
  "crm",
  "platforms",
  "dashboards",
  "ecommerce",
  "automation",
  "ai",
];

export type BuildPreviewKind = "menu" | "grid" | "list" | "chat" | "cards" | "chart" | "calendar";

export type BuildPreviewId =
  | "restaurant"
  | "marketplace"
  | "crm-dash"
  | "bot"
  | "biz-site"
  | "admin"
  | "store"
  | "booking";

export type BuildPreview = {
  id: BuildPreviewId;
  kind: BuildPreviewKind;
  from: string;
  to: string;
};

export const BUILD_PREVIEWS: BuildPreview[] = [
  { id: "restaurant", kind: "menu", from: "#ff9d6c", to: "#ff5e62" },
  { id: "marketplace", kind: "grid", from: "#5b7cff", to: "#35d0e0" },
  { id: "crm-dash", kind: "chart", from: "#7c9bff", to: "#9f7cff" },
  { id: "bot", kind: "chat", from: "#35d0e0", to: "#5b7cff" },
  { id: "biz-site", kind: "cards", from: "#9aa1ad", to: "#5b7cff" },
  { id: "admin", kind: "list", from: "#a98cff", to: "#5b7cff" },
  { id: "store", kind: "grid", from: "#4ade80", to: "#35d0e0" },
  { id: "booking", kind: "calendar", from: "#ffb86c", to: "#ff9d6c" },
];

export type ProjectId = "noutbuk-olami" | "freebuff" | "ztech-business";

export type Project = {
  id: ProjectId;
  name: string;
  tech: string[];
  status: "live" | "concept";
  kind: BuildPreviewKind;
  from: string;
  to: string;
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "noutbuk-olami",
    name: "Noutbuk Olami",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    kind: "grid",
    from: "#5b7cff",
    to: "#35d0e0",
    url: "https://noutbuk-olami-tawny.vercel.app/",
  },
  {
    id: "freebuff",
    name: "Freebuff",
    tech: ["React", "Node.js", "Telegram Bot API"],
    status: "live",
    kind: "menu",
    from: "#ff9d6c",
    to: "#ff5e62",
    url: "https://emirhan-restaurant-phi.vercel.app/uz/",
  },
  {
    id: "ztech-business",
    name: "ZTech Business Website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "concept",
    kind: "cards",
    from: "#9aa1ad",
    to: "#5b7cff",
  },
];

export type ProcessId = "discover" | "plan" | "design" | "build" | "test" | "launch";

export const PROCESS_STEPS: { id: ProcessId; index: string }[] = [
  { id: "discover", index: "01" },
  { id: "plan", index: "02" },
  { id: "design", index: "03" },
  { id: "build", index: "04" },
  { id: "test", index: "05" },
  { id: "launch", index: "06" },
];

export type WhyPointId =
  | "modern-tech"
  | "clean-design"
  | "mobile-first"
  | "responsive"
  | "fast-performance"
  | "business-focused"
  | "custom-dev"
  | "professional-comm";

export const WHY_POINT_IDS: WhyPointId[] = [
  "modern-tech",
  "clean-design",
  "mobile-first",
  "responsive",
  "fast-performance",
  "business-focused",
  "custom-dev",
  "professional-comm",
];

export const TECHNOLOGIES = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Telegram Bot API", "Vercel", "GitHub",
];
