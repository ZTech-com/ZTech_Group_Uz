import type { Dictionary } from "./en";

const uz: Dictionary = {
  nav: {
    home: "Bosh sahifa",
    services: "Xizmatlar",
    projects: "Loyihalar",
    process: "Jarayon",
    about: "Biz haqimizda",
    contact: "Aloqa",
    startProject: "Loyihani boshlash",
  },
  hero: {
    badge: "ITop · Raqamli mahsulotlar va dasturiy ta'minot",
    titlePrefix: "Biznesni oldinga olib boruvchi ",
    titleHighlight: "raqamli mahsulotlar",
    titleSuffix: " yaratamiz.",
    subtitle:
      "Veb-saytlar, platformalar, Telegram botlar, CRM tizimlari va maxsus dasturiy ta'minot — barchasini ITop ishlab chiqadi va yetkazib beradi.",
    ctaPrimary: "Loyihani boshlash",
    ctaSecondary: "Ishlarimizni ko'rish",
    lab: {
      tabsLabel: "Mahsulot ko'rinishini almashtirish",
      tabs: {
        website: "Veb-sayt",
        ecommerce: "E-commerce",
        crm: "CRM",
        bot: "Telegram Bot",
      },
      url: {
        website: "ITop-business.vercel.app",
        ecommerce: "shop.noutbuk-olami.uz",
        crm: "crm.ITop.uz",
      },
      website: {
        eyebrow: "ITop",
        headline: "Ishonch bilan o'sing.",
        body: "Ishonch uyg'otish uchun yaratilgan premium biznes veb-sayti.",
        cta: "Boshlash",
        stat: "+128% so'rovlar",
      },
      ecommerce: {
        store: "Noutbuk Olami",
        product1: "MacBook Air 13″",
        product2: "ASUS ROG Strix",
        price1: "$999",
        price2: "$1,450",
        add: "Savatga",
      },
      crm: {
        customers: "Mijozlar",
        customersValue: "2 447",
        growth: "O'sish",
        growthValue: "+26%",
        activity: "Haftalik faollik",
      },
      bot: {
        name: "ITop Yordamchi",
        status: "onlayn",
        botMessage: "Salom! Loyihangiz haqida gapiring — jamoani ulaymiz.",
        userMessage: "Restoranim uchun Telegram bot kerak.",
        placeholder: "Xabar yozing",
      },
    },
  },
  services: {
    eyebrow: "Xizmatlar",
    title: "Raqamli biznesingiz uchun kerak bo'lgan hamma narsa.",
    description:
      "Oddiy landing sahifadan to to'liq biznes platformasigacha — bitta jamoa, bitta sifat standarti.",
    items: {
      web: {
        title: "Veb-dasturlash",
        description: "Zamonaviy, moslashuvchan veb-saytlar va veb-ilovalar.",
        details:
          "Zamonaviy freymvorklar asosida qurilgan tez va qulay interfeyslar — biznesingiz bilan birga o'sadi.",
      },
      telegram: {
        title: "Telegram Botlar",
        description:
          "Avtomatlashtirish, savdo, qo'llab-quvvatlash va biznes jarayonlari uchun maxsus Telegram botlar.",
        details:
          "Buyurtma qabul qilishdan tortib mijozlarga xizmat ko'rsatishgacha — oddiy javob beruvchi emas, real biznes mantig'ini bajaradigan botlar.",
      },
      crm: {
        title: "CRM Tizimlari",
        description:
          "Mijozlar, savdo va ichki jarayonlarni boshqarish uchun maxsus CRM yechimlari.",
        details:
          "Biznesingiz haqiqatda qanday ishlashiga moslashtirilgan savdo voronkalari, mijozlar bazasi va jamoaviy ish oqimi.",
      },
      platforms: {
        title: "Biznes Platformalari",
        description: "Muayyan biznes ehtiyojlariga mos to'liq platformalar.",
        details:
          "Operatsiyalaringiz, mijozlaringiz va ma'lumotlaringizni bitta tizimda birlashtiruvchi to'liq yechimlar.",
      },
      dashboards: {
        title: "Admin Panellar",
        description:
          "Mahsulotlar, buyurtmalar, foydalanuvchilar va ma'lumotlarni boshqarish uchun qulay panellar.",
        details:
          "Biznesingizni kundalik boshqaradigan jamoangiz uchun aniq nazorat va ko'rinuvchanlik.",
      },
      ecommerce: {
        title: "Elektron Tijorat",
        description: "Zamonaviy onlayn-do'konlar va mahsulot platformalari.",
        details:
          "Sotuvni oshiradigan vitrinalar, qulay to'lov jarayoni va oson katalog boshqaruvi.",
      },
      automation: {
        title: "Avtomatlashtirish",
        description: "Takrorlanuvchi biznes jarayonlarini avtomatlashtirib, vaqtingizni tejaymiz.",
        details:
          "Qo'lda bajariladigan takrorlanuvchi ishlarni topib, ishonchli avtomatik tizimlarga almashtiramiz.",
      },
      ai: {
        title: "AI Yechimlari",
        description: "Sun'iy intellektga asoslangan funksiyalar va aqlli raqamli tajribalar.",
        details:
          "Qidiruv, yordamchilar va avtomatlashtirish kabi amaliy AI funksiyalari — haqiqiy qiymat qo'shadigan joylarda qo'llanadi.",
      },
    },
  },
  whatWeBuild: {
    eyebrow: "Biz Nima Yaratamiz",
    title: "Haqiqiy Bizneslar Uchun Yaratilgan Mahsulotlar.",
    description:
      "ITop qanday tizimlar yaratishi va qurishi haqida qisqacha tasavvur — har biri biznesning haqiqiy ishlash tartibiga moslashtirilgan.",
    items: {
      restaurant: { title: "Restoran Buyurtma Tizimi", category: "Ovqatlanish xizmati" },
      marketplace: { title: "Noutbuk Marketpleysi", category: "Elektron tijorat" },
      "crm-dash": { title: "CRM Boshqaruv Paneli", category: "Biznes platformasi" },
      bot: { title: "Telegram Bot", category: "Avtomatlashtirish" },
      "biz-site": { title: "Biznes Veb-sayti", category: "Veb-dasturlash" },
      admin: { title: "Admin Panel", category: "Boshqaruv paneli" },
      store: { title: "Elektron Tijorat Platformasi", category: "Onlayn do'kon" },
      booking: { title: "Bron Qilish Tizimi", category: "Jadval rejalashtirish" },
    },
  },
  projects: {
    eyebrow: "Loyihalar",
    title: "Haqiqiy Bizneslar Uchun Yaratilgan.",
    description:
      "ITop haqiqiy mijozlar uchun loyihalashtirgan, qurgan va yetkazib bergan mahsulotlar tanlovi.",
    viewProject: "Loyihani ko'rish",
    statusLive: "Faol",
    statusConcept: "Konsept / Demo",
    watchExplainer: "Qanday ishlashini ko'rish",
    enquiryMessage: (name: string) =>
      `Salom ITop, "${name}" loyihasi haqida ko'proq ma'lumot olmoqchiman.`,
    items: {
      "noutbuk-olami": {
        category: "Elektron Tijorat Platformasi",
        description:
          "Katalogni ko'rib chiqish, filtrlash va mahsulotlarni solishtirish imkoniyatiga ega noutbuk marketpleysi.",
      },
      "emirhan-restaurant": {
        category: "Restoran Landing Sahifasi",
        description:
          "Yangi mehmonlarga menyu, muhit va manzilni taqdim etuvchi premium restoran veb-sayti.",
      },
      "bunyod-portfolio": {
        category: "Portfolio Sayti",
        description:
          "Case-study va mijozlar ishlarini puxta animatsiya bilan taqdim etuvchi shaxsiy portfolio sayti.",
      },
      "restaurant-crm": {
        category: "Restoran Boshqaruv Tizimi",
        description:
          "Restoran faoliyatini boshqarish uchun ichki tizim — buyurtmalar, xodimlar va kundalik ish jarayoni bitta joyda.",
        explainerTitle: "Restaurant CRM qanday ishlaydi",
      },
      "record-nazorat": {
        category: "Telegram Bot va Ta'lim Platformasi",
        description:
          "Ta'lim markazi uchun yaratilgan Telegram platformasi — 2 mingdan oshiq, 3 mingga yaqin o'quvchini boshqarishga yordam beradi: guruhlar, davomat va natijalarni kuzatadi, o'quvchilarni rag'batlantiruvchi geymifikatsiyalangan reyting bilan.",
        galleryAlt: [
          "Telegram ichidagi Record Nazorat bot profili ekrani",
          "O'quvchi, o'qituvchi va guruhlar sonini ko'rsatuvchi admin paneli",
          "Har bir o'qituvchi bo'yicha kunlik davomat kalendari",
          "Faol guruhlar ro'yxati bilan guruhlarni boshqarish ekrani",
          "To'plangan ballar bo'yicha o'quvchilar reytingi",
        ],
      },
    },
  },
  process: {
    eyebrow: "Jarayon",
    title: "G'oyadan Ishga Tushirishgacha.",
    description:
      "Aniq va tizimli jarayon — har doim nima bo'layotganini va keyin nima bo'lishini bilib turasiz.",
    steps: {
      discover: { title: "O'rganish", description: "Biznes va talablarni chuqur o'rganamiz." },
      plan: { title: "Rejalashtirish", description: "Tuzilma, foydalanuvchi tajribasi va texnologiyani loyihalaymiz." },
      design: { title: "Dizayn", description: "Vizual tizim va interfeysni yaratamiz." },
      build: { title: "Qurish", description: "To'liq raqamli mahsulotni ishlab chiqamiz." },
      test: { title: "Sinov", description: "Moslashuvchanlik, interaktivlik va qulaylikni sinovdan o'tkazamiz." },
      launch: { title: "Ishga tushirish", description: "Yakuniy mahsulotni joylashtiramiz va yetkazib beramiz." },
    },
  },
  whyITop: {
    titlePrefix: "Texnologiya ",
    titleHighlight: "Oddiy Bo'lishi Kerak.",
    subtitle:
      "Murakkablikni biz o'z zimmamizga olamiz — shunda mahsulotingiz jamoangiz va mijozlaringiz uchun oson bo'ladi.",
    points: {
      "modern-tech": "Zamonaviy texnologiya",
      "clean-design": "Toza dizayn",
      "mobile-first": "Mobile-first yondashuv",
      responsive: "Moslashuvchan interfeyslar",
      "fast-performance": "Yuqori tezlik",
      "business-focused": "Biznesga yo'naltirilgan yechimlar",
      "custom-dev": "Individual dasturlash",
      "professional-comm": "Professional muloqot",
    },
  },
  technology: {
    eyebrow: "Texnologiyalar",
    title: "Zamonaviy va Ishonchli Texnologik Ekotizim.",
    description:
      "Biz sinalgan, zamonaviy vositalarni tanlaymiz — shunda yaratgan mahsulotimiz tez, xavfsiz va qo'llab-quvvatlash uchun oson bo'lib qoladi.",
  },
  contact: {
    eyebrow: "Aloqa",
    title: "G'oyangiz Bormi? Keling, Uni Yarataylik.",
    description:
      "Bizga nima kerakligini ayting. G'oyangizni haqiqiy raqamli mahsulotga aylantirishga yordam beramiz.",
    cards: {
      founderRole: "Asoschi",
      studioRole: "Studiya",
      message: "Xabar",
    },
    form: {
      name: "Ism",
      namePlaceholder: "To'liq ismingiz",
      telegram: "Telegram foydalanuvchi nomi",
      telegramPlaceholder: "@foydalanuvchinomi",
      phone: "Telefon raqami",
      phonePlaceholder: "+998 90 123 45 67",
      service: "Xizmat turi",
      selectService: "Xizmatni tanlang",
      serviceOptions: [
        "Veb-dasturlash",
        "Telegram Bot",
        "CRM Tizimi",
        "Biznes Platformasi",
        "Admin Panel",
        "Elektron Tijorat",
        "Avtomatlashtirish",
        "AI Yechimi",
        "Boshqa",
      ],
      project: "Loyiha tavsifi",
      projectPlaceholder: "Nima yaratmoqchi ekaningizni yozing...",
      submit: "Loyiha So'rovini Yuborish",
      errors: {
        name: "Iltimos, ismingizni kiriting.",
        telegram: "Haqiqiy Telegram foydalanuvchi nomini kiriting (masalan, @ismingiz).",
        phone: "Haqiqiy telefon raqamini kiriting.",
        service: "Iltimos, xizmat turini tanlang.",
        project: "Loyihangizni tavsiflang (kamida 10 ta belgi).",
      },
      success: {
        title: "So'rovingiz tayyor.",
        subtitle:
          "Loyiha so'rovingizni tayyorladik. ITop'ga to'g'ridan-to'g'ri yuborish uchun Telegram'da davom eting.",
        continueTelegram: "Telegram'da davom etish",
        sendAnother: "Yana bir so'rov yuborish",
      },
      messageLabels: {
        header: "ITop Loyiha So'rovi",
        name: "Ism",
        telegram: "Telegram",
        phone: "Telefon",
        service: "Xizmat",
        project: "Loyiha",
      },
    },
  },
  footer: {
    tagline: "Raqamli mahsulotlar. Dasturiy ta'minot. Avtomatlashtirish.",
    navigate: "Navigatsiya",
    telegramLabel: "Telegram",
    rights: "© 2026 ITop. Barcha huquqlar himoyalangan.",
    precision: "Aniqlik bilan qurilgan.",
  },
};

export default uz;
