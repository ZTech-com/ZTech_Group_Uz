export const SITE = {
  name: "ITop",
  url: "https://ztechgroup.vercel.app",
};

export const TELEGRAM = {
  primary: {
    name: "Bunyod Pulatov",
    username: "Bunyod_Pulatov",
    url: "https://t.me/Bunyod_Pulatov",
  },
  group: {
    name: "ITop",
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

export type BuildPreviewId =
  | "restaurant"
  | "marketplace"
  | "crm-dash"
  | "bot"
  | "biz-site"
  | "admin"
  | "store"
  | "booking";

export const BUILD_PREVIEW_IDS: BuildPreviewId[] = [
  "restaurant",
  "marketplace",
  "crm-dash",
  "bot",
  "biz-site",
  "admin",
  "store",
  "booking",
];

export type ProjectId =
  | "noutbuk-olami"
  | "emirhan-restaurant"
  | "bunyod-portfolio"
  | "restaurant-crm"
  | "record-nazorat";

export type Project = {
  id: ProjectId;
  name: string;
  tech: string[];
  status: "live" | "concept";
  /** Looping preview clip — used by the alternating video showcase. */
  video?: string;
  /** Longer, user-triggered walkthrough shown in a modal (Restaurant CRM). */
  explainerVideo?: string;
  /** Screenshot set — used by the horizontal gallery showcase instead of video. */
  gallery?: string[];
  mascot?: string;
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "noutbuk-olami",
    name: "Noutbuk Olami",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    video: "/videos/e-commerce.mp4",
    url: "https://noutbuk-olami-tawny.vercel.app/",
  },
  {
    id: "emirhan-restaurant",
    name: "Emirhan Restaurant",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    video: "/videos/landing-page.mp4",
    url: "https://emirhan-restaurant-phi.vercel.app/uz/",
  },
  {
    id: "bunyod-portfolio",
    name: "Bunyod Portfolio",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    status: "live",
    video: "/videos/portfolio.mp4",
    url: "https://bunyod-portfolio-jet.vercel.app/",
  },
  {
    id: "restaurant-crm",
    name: "Restaurant CRM",
    tech: ["React", "Node.js", "Telegram Bot API"],
    status: "live",
    video: "/videos/restaurant-crm.mp4",
    explainerVideo: "/videos/restaurant-crm-explainer.mp4",
  },
  {
    id: "record-nazorat",
    name: "Record Nazorat",
    tech: ["Telegram Bot API", "Node.js"],
    status: "live",
    gallery: [
      "/images/record-nazorat/bot-profile.png",
      "/images/record-nazorat/admin-dashboard.png",
      "/images/record-nazorat/attendance-calendar.png",
      "/images/record-nazorat/group-management.png",
      "/images/record-nazorat/student-leaderboard.png",
    ],
    mascot: "/images/record-nazorat/mascot.png",
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
