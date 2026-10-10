import type { ProjectId } from "@/lib/constants";

export type ProjectCopy = {
  category: string;
  description: string;
  explainerTitle?: string;
  galleryAlt?: string[];
};

const PROJECT_ITEMS: Record<ProjectId, ProjectCopy> = {
  "noutbuk-olami": {
    category: "E-commerce Platform",
    description: "A laptop marketplace with catalog browsing, filtering and product comparison.",
  },
  "emirhan-restaurant": {
    category: "Restaurant Landing Page",
    description:
      "A premium restaurant website presenting the menu, atmosphere and location to new guests.",
  },
  "bunyod-portfolio": {
    category: "Portfolio Website",
    description:
      "A personal portfolio site presenting case studies and client work with considered motion.",
  },
  "restaurant-crm": {
    category: "Restaurant Management System",
    description:
      "An internal system for running restaurant operations — orders, staff and the day-to-day workflow in one place.",
    explainerTitle: "How the Restaurant CRM works",
  },
  "record-nazorat": {
    category: "Telegram Bot & Learning Platform",
    description:
      "A Telegram-based management platform helping an education center run more than 2,000 students — approaching 3,000 — tracking groups, attendance and progress, with a gamified leaderboard that keeps learners motivated.",
    galleryAlt: [
      "Record Nazorat bot profile screen inside Telegram",
      "Admin dashboard with student, teacher and group totals",
      "Attendance calendar showing daily check-ins per teacher",
      "Group management screen listing active classes",
      "Student leaderboard ranked by points earned",
    ],
  },
};

const en = {
  nav: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    process: "Process",
    about: "About",
    contact: "Contact",
    startProject: "Start a Project",
  },
  hero: {
    badge: "ZTech Group · Digital Products & Software",
    titlePrefix: "We Build ",
    titleHighlight: "Digital Products",
    titleSuffix: " That Move Businesses Forward.",
    subtitle:
      "Websites, platforms, Telegram bots, CRM systems and custom software — designed, developed and delivered by ZTech Group.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "Explore Our Work",
    lab: {
      tabsLabel: "Switch product preview",
      tabs: {
        website: "Website",
        ecommerce: "E-commerce",
        crm: "CRM",
        bot: "Telegram Bot",
      },
      url: {
        website: "ztech-business.vercel.app",
        ecommerce: "shop.noutbuk-olami.uz",
        crm: "crm.ztech.uz",
      },
      website: {
        eyebrow: "ZTech Group",
        headline: "Grow with confidence.",
        body: "A premium business website built to earn trust.",
        cta: "Get Started",
        stat: "+128% inquiries",
      },
      ecommerce: {
        store: "Noutbuk Olami",
        product1: "MacBook Air 13″",
        product2: "ASUS ROG Strix",
        price1: "$999",
        price2: "$1,450",
        add: "Add",
      },
      crm: {
        customers: "Customers",
        customersValue: "2,447",
        growth: "Growth",
        growthValue: "+26%",
        activity: "Weekly activity",
      },
      bot: {
        name: "ZTech Assistant",
        status: "online",
        botMessage: "Hi! Tell me about your project and I'll get the team looped in.",
        userMessage: "I need a Telegram bot for my restaurant.",
        placeholder: "Write a message",
      },
    },
  },
  services: {
    eyebrow: "Services",
    title: "Everything You Need to Build Your Digital Business.",
    description:
      "From a single landing page to a full business platform — one team, one standard of quality.",
    items: {
      web: {
        title: "Web Development",
        description: "Modern responsive websites and web applications.",
        details:
          "Fast, accessible interfaces built with modern frameworks — engineered to scale with your business.",
      },
      telegram: {
        title: "Telegram Bots",
        description:
          "Custom Telegram bots for automation, sales, support and business operations.",
        details:
          "From order flows to support desks — bots that handle real business logic, not just replies.",
      },
      crm: {
        title: "CRM Systems",
        description:
          "Custom CRM solutions for managing customers, sales and internal operations.",
        details:
          "Pipelines, customer records and team workflows tailored to how your business actually runs.",
      },
      platforms: {
        title: "Business Platforms",
        description: "Complete platforms designed around specific business needs.",
        details:
          "End-to-end platforms connecting your operations, customers and data in one system.",
      },
      dashboards: {
        title: "Admin Dashboards",
        description:
          "Powerful and intuitive dashboards for managing products, orders, users and data.",
        details:
          "Clear visibility and control — built for the people who run your business day to day.",
      },
      ecommerce: {
        title: "E-Commerce",
        description: "Modern online stores and product platforms.",
        details:
          "Storefronts that convert, with clean checkout flows and effortless catalog management.",
      },
      automation: {
        title: "Automation",
        description: "Automate repetitive business processes and save time.",
        details:
          "We find the manual, repetitive work and replace it with reliable automated systems.",
      },
      ai: {
        title: "AI Solutions",
        description: "AI-powered features and intelligent digital experiences.",
        details:
          "Practical AI features — search, assistants and automation — integrated where they add real value.",
      },
    },
  },
  whatWeBuild: {
    eyebrow: "What We Build",
    title: "Products Shaped Around Real Businesses.",
    description:
      "A glimpse of the kinds of systems ZTech Group designs and builds — each one tailored to how the business actually operates.",
    items: {
      restaurant: { title: "Restaurant Ordering", category: "Food & Service" },
      marketplace: { title: "Laptop Marketplace", category: "E-Commerce" },
      "crm-dash": { title: "CRM Dashboard", category: "Business Platform" },
      bot: { title: "Telegram Bot", category: "Automation" },
      "biz-site": { title: "Business Website", category: "Web Development" },
      admin: { title: "Admin Panel", category: "Dashboard" },
      store: { title: "E-Commerce Platform", category: "Online Store" },
      booking: { title: "Booking System", category: "Scheduling" },
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Built for Real Businesses.",
    description:
      "A selection of products ZTech Group has designed, built and delivered for real clients.",
    viewProject: "View Project",
    statusLive: "Live",
    statusConcept: "Concept / Demo",
    watchExplainer: "Watch How It Works",
    enquiryMessage: (name: string) =>
      `Hi ZTech Group, I'd like to learn more about the "${name}" project.`,
    items: PROJECT_ITEMS,
  },
  process: {
    eyebrow: "Process",
    title: "From Idea to Launch.",
    description:
      "A clear, structured process — so you always know what's happening and what's next.",
    steps: {
      discover: { title: "Discover", description: "Understand the business and requirements." },
      plan: { title: "Plan", description: "Design the structure, user experience and technology." },
      design: { title: "Design", description: "Create the visual system and interface." },
      build: { title: "Build", description: "Develop the complete digital product." },
      test: { title: "Test", description: "Test responsiveness, interactions and usability." },
      launch: { title: "Launch", description: "Deploy and deliver the final product." },
    },
  },
  whyZtech: {
    titlePrefix: "Technology Should ",
    titleHighlight: "Feel Simple.",
    subtitle:
      "We handle the complexity so your product feels effortless — for your team and for your customers.",
    points: {
      "modern-tech": "Modern technology",
      "clean-design": "Clean design",
      "mobile-first": "Mobile-first development",
      responsive: "Responsive interfaces",
      "fast-performance": "Fast performance",
      "business-focused": "Business-focused solutions",
      "custom-dev": "Custom development",
      "professional-comm": "Professional communication",
    },
  },
  technology: {
    eyebrow: "Technology",
    title: "A Modern, Reliable Technology Ecosystem.",
    description:
      "We choose proven, modern tools — so what we build stays fast, secure and easy to maintain.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Have an Idea? Let's Build It.",
    description:
      "Tell us what you need. We'll help turn your idea into a real digital product.",
    cards: {
      founderRole: "Founder",
      studioRole: "Studio",
      message: "Message",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your full name",
      telegram: "Telegram username",
      telegramPlaceholder: "@yourusername",
      phone: "Phone number",
      phonePlaceholder: "+998 90 123 45 67",
      service: "Service",
      selectService: "Select a service",
      serviceOptions: [
        "Web Development",
        "Telegram Bot",
        "CRM System",
        "Business Platform",
        "Admin Dashboard",
        "E-Commerce",
        "Automation",
        "AI Solution",
        "Other",
      ],
      project: "Project description",
      projectPlaceholder: "Tell us what you want to build...",
      submit: "Send Project Request",
      errors: {
        name: "Please enter your name.",
        telegram: "Enter a valid Telegram username (e.g. @yourname).",
        phone: "Enter a valid phone number.",
        service: "Please select a service.",
        project: "Please describe your project (10+ characters).",
      },
      success: {
        title: "Your request is ready.",
        subtitle:
          "We've prepared your project request. Continue in Telegram to send it directly to ZTech Group.",
        continueTelegram: "Continue in Telegram",
        sendAnother: "Send another request",
      },
      messageLabels: {
        header: "ZTech Group Project Request",
        name: "Name",
        telegram: "Telegram",
        phone: "Phone",
        service: "Service",
        project: "Project",
      },
    },
  },
  footer: {
    tagline: "Digital products. Software. Automation.",
    navigate: "Navigate",
    telegramLabel: "Telegram",
    rights: "© 2026 ZTech Group. All rights reserved.",
    precision: "Built with precision.",
  },
};

export default en;
export type Dictionary = typeof en;
