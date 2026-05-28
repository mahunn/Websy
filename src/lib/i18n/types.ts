export type Locale = "bn" | "en";

export type ServiceMessages = {
  title: string;
  shortDescription: string;
  description: string;
  idealFor: string;
  deliverables: string[];
};

export type PortfolioMessages = {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
};

export type Messages = {
  locale: Locale;
  site: { name: string; tagline: string; description: string };
  nav: {
    services: string;
    work: string;
    process: string;
    about: string;
    contact: string;
    email: string;
    cta: string;
  };
  lang: { switchToEn: string; switchToBn: string; label: string };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    previewServices: string;
    previewWork: string;
    previewContact: string;
    cardServices: string;
    cardWork: string;
    cardContact: string;
  };
  trust: {
    line: string;
    logos: string[];
    pillars: { headline: string; blurb: string }[];
  };
  valueProps: { title: string; description: string }[];
  home: {
    whyTitle: string;
    whyTitleHighlight: string;
    whySubtitle: string;
    whyChips: string[];
    servicesTitlePrefix: string;
    servicesTitleHighlight: string;
    processTitlePrefix: string;
    processTitleHighlight: string;
    heroDraftStat: string;
    heroDraftLabel: string;
    heroLaunchStat: string;
    heroLaunchLabel: string;
    heroMockUrl: string;
    heroMockHeadline: string;
    heroMockCta: string;
    heroMockMetric: string;
    serviceChips: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    expansion: string;
    expansionLink: string;
    learnMore: string;
    viewAll: string;
    items: Record<string, ServiceMessages>;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    viewCase: string;
    liveSite: string;
    items: Record<string, PortfolioMessages>;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    items: { title: string; description: string; detail: string }[];
  };
  about: {
    heroTitle: string;
    heroDesc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    paragraphs: string[];
    founderTitle: string;
    founderRole: string;
    founderBio: string;
    viewTeam: string;
    expansionTitle: string;
    expansionDesc: string;
  };
  team: {
    heroTitle: string;
    heroDesc: string;
    cta: string;
    learningPhase: string;
    footerNote: string;
    members: Record<string, { role: string; description: string }>;
    homepageTitle: string;
    homepageDesc: string;
    viewFullTeam: string;
  };
  contact: {
    heroTitle: string;
    heroDesc: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappCta: string;
    emailTitle: string;
    emailDesc: string;
    locationLabel: string;
    foundedBy: string;
    whatsappButton: string;
    faqTitle: string;
    faqDesc: string;
    faq: { question: string; answer: string }[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      projectTypeLabel: string;
      projectTypePlaceholder: string;
      projectTypes: {
        ecommerce: string;
        business: string;
        landing: string;
        performance: string;
        other: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successDesc: string;
      successBtn: string;
      validationError: string;
      serverError: string;
    };
  };
  cta: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    nudges: string[];
    whatsapp: string;
    whatsappBtn: string;
    emailBtn: string;
    startProject: string;
    orEmail: string;
  };
  footer: {
    tagline: string;
    foundedBy: string;
    company: string;
    servicesCol: string;
    contactCol: string;
    team: string;
    allServices: string;
    ourWork: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  pages: {
    services: { title: string; description: string; ctaPrimary: string; ctaSecondary: string; whatYouGet: string; idealFor: string; discuss: string };
    work: { title: string; description: string; cta: string };
    process: { title: string; description: string; cta: string };
    workDetail: { back: string; challenge: string; solution: string; outcomes: string; category: string; viewLive: string; startSimilar: string };
    privacy: { title: string; back: string; p1: string; p2: string; p3: string };
    terms: { title: string; back: string; p1: string; p2: string; p3: string };
  };
};
