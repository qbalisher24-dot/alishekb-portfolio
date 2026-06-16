export interface Project {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  link?: string;
  iconName: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  description: string;
  color: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  desc: string;
}

export interface TranslationSet {
  navHome: string;
  navAbout: string;
  navSkills: string;
  navServices: string;
  navSandbox: string;
  navContact: string;

  badgeAvailable: string;
  badgeBusy: string;
  heroHeading: string;
  heroHeadingDim: string;
  heroSubtitle: string;
  heroCtaWork: string;
  heroCtaContact: string;
  heroAgeLabel: string;
  heroProjectsLabel: string;

  aboutTitle: string;
  aboutSubtitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutNajotTitle: string;
  aboutNajotDesc: string;

  statsProjectsCount: string;
  statsRevenueCount: string;
  statsPentestCount: string;
  statsProjectsLabel: string;
  statsRevenueLabel: string;
  statsPentestLabel: string;

  skillsTitle: string;
  skillsSubtitle: string;
  skillsStackTitle: string;

  servicesTitle: string;
  servicesSubtitle: string;

  terminalTitle: string;
  terminalSubtitle: string;
  terminalWelcome: string;
  terminalPlaceholder: string;

  contactTitle: string;
  contactSubtitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormMsg: string;
  contactFormSend: string;
  contactFormSuccess: string;
  contactFormSending: string;

  footerText: string;
  footerRights: string;
}

export const uzbekContent: TranslationSet = {
  navHome: "Bosh Sahifa",
  navAbout: "Men Haqimda",
  navSkills: "Ko'nikmalar",
  navServices: "Xizmatlar",
  navSandbox: "Xavfsizlik Sinovi",
  navContact: "Aloqa",

  badgeAvailable: "Loyihalarga Tayyor",
  badgeBusy: "Band",
  heroHeading: "Men xavfsiz va zirhli",
  heroHeadingDim: "raqamli tizimlar quraman.",
  heroSubtitle: "18 yoshli fullstack dasturchi va pentester. 1.5 yillik faol tajribam davomida xavfsiz Telegram botlar, mustahkam backend arxitekturalari va professional veb-ilovalar ishlab chiqaman.",
  heroCtaWork: "Xizmatlarni Ko'rish",
  heroCtaContact: "Aloqaga Chiqish",
  heroAgeLabel: "Yosh",
  heroProjectsLabel: "Loyihalar",

  aboutTitle: "Men Haqimda",
  aboutSubtitle: "Kiber havfsizlikka intiluvchi professional dasturchi",
  aboutP1: "Salom! Men Alisherbek Qurambayev. Toshkent shahrida yashovchi 18 yoshli fullstack va Telegram bot dasturchisiman. 'Najot Ta'lim' markazining bitiruvchisiman. Bugungi kunga qadar 50 dan ortiq tijoriy va shaxsiy loyihalarni muvaffaqiyatli yakunlaganman.",
  aboutP2: "So'nggi bir necha oydan buyon kiber xavfsizlik va pentesting (web zaifliklarni topish) yo'nalishlarida chuqur tadqiqotlar va amaliy tekshiruvlar olib boryapman. Kali Linux muhitida ishlashni sevadigan, har bir yozgan kodining xavfsizligiga 100% kafolat berishni maqsad qilgan mutaxassisman.",
  aboutNajotTitle: "Professional Ta'lim — Najot Ta'lim",
  aboutNajotDesc: "Fullstack arxitektura, yuqori yuklamali bazalar bilan ishlash, dasturlash asoslari va mukammal algoritmik tahlillar yo'nalishida o'qib bitirganman.",

  statsProjectsCount: "50+",
  statsRevenueCount: "15m+",
  statsPentestCount: "3+",
  statsProjectsLabel: "Tugallangan Loyihalar",
  statsRevenueLabel: "UZS Daromad o'sishi",
  statsPentestLabel: "Oylik Pentest Tajribasi",

  skillsTitle: "Texnik Ko'nikmalar",
  skillsSubtitle: "Dasturlash hamda xavfsizlik testlarida qo'llanadigan asosiy qurollarim va tajriba darajalarim.",
  skillsStackTitle: "Tez-tez ishlatiladigan vositalar",

  servicesTitle: "Men Taqqdim Etadigan Xizmatlar",
  servicesSubtitle: "Loyihangizni mukammal darajaga olib chiqadigan premium IT xizmatlari.",

  terminalTitle: "Kiber-Xavfsizlik Simulyatori",
  terminalSubtitle: "Zirhli tizimni tekshirish uchun quyidagi terminal buyruqlaridan foydalanib ko'ring.",
  terminalWelcome: "ALISHER-SECURITY terminaliga xush kelibsiz. Tizim holatini ko'rish uchun 'help' deb yozing.",
  terminalPlaceholder: "Buyruq kiriting (masalan: help, scan, info)...",

  contactTitle: "Bog'lanish",
  contactSubtitle: "Yangi loyiha yoki g'oyalaringiz bormi? Menga yozing va biz ularni birga haqiqatga aylantiramiz.",
  contactFormName: "Ismingiz",
  contactFormEmail: "Elektron pochta",
  contactFormMsg: "Xabaringiz",
  contactFormSend: "Xabarni jo'natish",
  contactFormSuccess: "Xabaringiz muvaffaqiyatli jo'natildi! Tez orada javob beraman.",
  contactFormSending: "Jo'natilmoqda...",

  footerText: "Professional Dastulash va Xavfsizlik bo'yicha mustaqil mutaxassis.",
  footerRights: "Barcha huquqlar himoyalangan."
};

export const englishContent: TranslationSet = {
  navHome: "Home",
  navAbout: "About Me",
  navSkills: "Skills",
  navServices: "Services",
  navSandbox: "Sandbox",
  navContact: "Contact",

  badgeAvailable: "Available for Projects",
  badgeBusy: "Currently Busy",
  heroHeading: "I build bulletproof",
  heroHeadingDim: "digital solutions.",
  heroSubtitle: "An 18-year-old fullstack developer & ethical hacker. I architect highly secure Telegram automations, robust backends, and responsive web systems with modern, responsive clean code.",
  heroCtaWork: "Explore Services",
  heroCtaContact: "Get in Touch",
  heroAgeLabel: "Age",
  heroProjectsLabel: "Projects",

  aboutTitle: "About Me",
  aboutSubtitle: "Dedicated fullstack engineer & cyber security enthusiast",
  aboutP1: "Hi! I'm Alisherbek Qurambayev, an 18-year-old developer based in Tashkent, Uzbekistan. Graduated from the prestigious 'Najot Talim' tech academy. To date, I have single-handedly launched and optimized over 50 projects spanning chatbots, robust backends, and database architectures.",
  aboutP2: "For the last few months, I have channeled my focus into cyber security and pentesting (OWASP Top 10 web scanning). Mastering tools in Kali Linux, I audit web vulnerabilities and harden backends, ensuring security is baked directly into the development lifecycle.",
  aboutNajotTitle: "Professional Training — Najot Talim",
  aboutNajotDesc: "Successfully completed fullstack engineering courses focusing on backend architecture, high-performance DB design, algorithms, and security integration.",

  statsProjectsCount: "50+",
  statsRevenueCount: "15M+",
  statsPentestCount: "3+",
  statsProjectsLabel: "Completed Projects",
  statsRevenueLabel: "UZS Career Earnings",
  statsPentestLabel: "Months in Audio & Security",

  skillsTitle: "Technical Competence",
  skillsSubtitle: "A snapshot of my professional tech stacks, security specializations, and actual experience ratios.",
  skillsStackTitle: "Core Tech Arsenal",

  servicesTitle: "Professional Services",
  servicesSubtitle: "Premium software design and cyber auditing engineered to elevate and protect your digital presence.",

  terminalTitle: "Security Sandbox Terminal",
  terminalSubtitle: "Type mock commands in this simulated console to test safety layers and query secure schemas.",
  terminalWelcome: "Welcome to ALISHER-SECURITY v1.0. Enter 'help' to fetch active operations.",
  terminalPlaceholder: "Enter terminal command (try: help, scan, exploit)...",

  contactTitle: "Initiate Project",
  contactSubtitle: "Have an ambitious concept? Let's bridge code with bulletproof engineering to make it live.",
  contactFormName: "Full Name",
  contactFormEmail: "Email Address",
  contactFormMsg: "Your Message",
  contactFormSend: "Transmit Message",
  contactFormSuccess: "Message transmitted successfully! I will respond shortly.",
  contactFormSending: "Transmitting...",

  footerText: "Expert Software Engineering & Security Audits for Modern Enterprises.",
  footerRights: "All Rights Reserved."
};
