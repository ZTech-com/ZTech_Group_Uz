export const SITE = {
  name: "ZTech Group",
  tagline: "Digital Products & Software",
  description:
    "ZTech Group builds modern websites, Telegram bots, CRM systems, business platforms and custom software for modern businesses.",
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
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
};

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern responsive websites and web applications.",
    details:
      "Fast, accessible interfaces built with modern frameworks — engineered to scale with your business.",
  },
  {
    id: "telegram",
    title: "Telegram Bots",
    description:
      "Custom Telegram bots for automation, sales, support and business operations.",
    details:
      "From order flows to support desks — bots that handle real business logic, not just replies.",
  },
  {
    id: "crm",
    title: "CRM Systems",
    description:
      "Custom CRM solutions for managing customers, sales and internal operations.",
    details:
      "Pipelines, customer records and team workflows tailored to how your business actually runs.",
  },
  {
    id: "platforms",
    title: "Business Platforms",
    description: "Complete platforms designed around specific business needs.",
    details:
      "End-to-end platforms connecting your operations, customers and data in one system.",
  },
  {
    id: "dashboards",
    title: "Admin Dashboards",
    description:
      "Powerful and intuitive dashboards for managing products, orders, users and data.",
    details:
      "Clear visibility and control — built for the people who run your business day to day.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Modern online stores and product platforms.",
    details:
      "Storefronts that convert, with clean checkout flows and effortless catalog management.",
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Automate repetitive business processes and save time.",
    details:
      "We find the manual, repetitive work and replace it with reliable automated systems.",
  },
  {
    id: "ai",
    title: "AI Solutions",
    description: "AI-powered features and intelligent digital experiences.",
    details:
      "Practical AI features — search, assistants and automation — integrated where they add real value.",
  },
];

export type BuildPreviewKind = "menu" | "grid" | "list" | "chat" | "cards" | "chart" | "calendar";

export type BuildPreview = {
  id: string;
  title: string;
  category: string;
  kind: BuildPreviewKind;
  from: string;
  to: string;
};

export const BUILD_PREVIEWS: BuildPreview[] = [
  { id: "restaurant", title: "Restaurant Ordering", category: "Food & Service", kind: "menu", from: "#ff9d6c", to: "#ff5e62" },
  { id: "marketplace", title: "Laptop Marketplace", category: "E-Commerce", kind: "grid", from: "#5b7cff", to: "#35d0e0" },
  { id: "crm-dash", title: "CRM Dashboard", category: "Business Platform", kind: "chart", from: "#7c9bff", to: "#9f7cff" },
  { id: "bot", title: "Telegram Bot", category: "Automation", kind: "chat", from: "#35d0e0", to: "#5b7cff" },
  { id: "biz-site", title: "Business Website", category: "Web Development", kind: "cards", from: "#9aa1ad", to: "#5b7cff" },
  { id: "admin", title: "Admin Panel", category: "Dashboard", kind: "list", from: "#a98cff", to: "#5b7cff" },
  { id: "store", title: "E-Commerce Platform", category: "Online Store", kind: "grid", from: "#4ade80", to: "#35d0e0" },
  { id: "booking", title: "Booking System", category: "Scheduling", kind: "calendar", from: "#ffb86c", to: "#ff9d6c" },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  status: "Live" | "Concept";
  kind: BuildPreviewKind;
  from: string;
  to: string;
};

export const PROJECTS: Project[] = [
  {
    id: "noutbuk-olami",
    name: "Noutbuk Olami",
    category: "E-Commerce",
    description: "Modern laptop sales platform with catalog browsing and product comparison.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    kind: "grid",
    from: "#5b7cff",
    to: "#35d0e0",
  },
  {
    id: "freebuff",
    name: "Freebuff",
    category: "Restaurant Platform",
    description: "Restaurant pre-ordering and management platform for faster service.",
    tech: ["React", "Node.js", "Telegram Bot API"],
    status: "Live",
    kind: "menu",
    from: "#ff9d6c",
    to: "#ff5e62",
  },
  {
    id: "ztech-business",
    name: "ZTech Business Website",
    category: "Web Development",
    description: "Premium business website built to establish trust and generate leads.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Concept",
    kind: "cards",
    from: "#9aa1ad",
    to: "#5b7cff",
  },
];

export const PROCESS_STEPS = [
  { index: "01", title: "Discover", description: "Understand the business and requirements." },
  { index: "02", title: "Plan", description: "Design the structure, user experience and technology." },
  { index: "03", title: "Design", description: "Create the visual system and interface." },
  { index: "04", title: "Build", description: "Develop the complete digital product." },
  { index: "05", title: "Test", description: "Test responsiveness, interactions and usability." },
  { index: "06", title: "Launch", description: "Deploy and deliver the final product." },
];

export const WHY_POINTS = [
  "Modern technology",
  "Clean design",
  "Mobile-first development",
  "Responsive interfaces",
  "Fast performance",
  "Business-focused solutions",
  "Custom development",
  "Professional communication",
];

export const TECHNOLOGIES = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Telegram Bot API", "Vercel", "GitHub",
];

export const SERVICE_OPTIONS = [
  "Web Development",
  "Telegram Bot",
  "CRM System",
  "Business Platform",
  "Admin Dashboard",
  "E-Commerce",
  "Automation",
  "AI Solution",
  "Other",
];
