import type { Messages } from "./types";

export const en: Messages = {
  locale: "en",
  site: {
    name: "Websy",
    tagline: "Websites that sell.",
    description:
      "High-performance digital products for businesses focused on revenue."
  },
  nav: {
    services: "Services",
    work: "Work",
    process: "Process",
    about: "About",
    contact: "Contact",
    email: "Email",
    cta: "Get a Quote"
  },
  lang: {
    switchToEn: "EN",
    switchToBn: "বাংলা",
    label: "Language"
  },
  hero: {
    badge: "Conversion-focused web studio",
    title: "Websites engineered to sell.",
    titleHighlight: "sell",
    subtext:
      "High-performance digital products for businesses that care about revenue.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Our Work",
    previewServices: "What we build",
    previewWork: "Our work",
    previewContact: "Talk to us",
    cardServices: "Ecommerce · Business · Landing pages",
    cardWork: "Real projects. Real results.",
    cardContact: "Let's start yours."
  },
  trust: {
    line: "Built for businesses ready to grow online",
    logos: ["Retail", "SaaS", "Local Business", "Ecommerce", "Startup", "Agency Partner"],
    pillars: [
      {
        headline: "Under 1s loads",
        blurb: "Fast pages that score green on Core Web Vitals — better UX, better rankings."
      },
      {
        headline: "Custom, not templates",
        blurb: "Every site is designed around your brand, audience, and conversion goals."
      },
      {
        headline: "Built to convert",
        blurb: "Layouts, copy structure, and CTAs engineered for leads and sales."
      },
      {
        headline: "SEO from day one",
        blurb: "Technical foundation and content structure so Google can find you."
      }
    ]
  },
  valueProps: [
    {
      title: "Built to sell",
      description: "Not just pretty — built to convert visitors into paying customers."
    },
    {
      title: "On-time delivery",
      description: "Clear milestones. No guesswork. You know exactly where your project is."
    },
    {
      title: "Fast & mobile-first",
      description: "Your site loads fast and works perfectly on every device."
    }
  ],
  home: {
    whyTitle: "Why",
    whyTitleHighlight: "Websy",
    whySubtitle: "Six reasons businesses choose us",
    whyChips: [
      "48h first draft",
      "Custom design",
      "Mobile-first",
      "SEO built-in",
      "WhatsApp support",
      "Fixed pricing"
    ],
    servicesTitlePrefix: "Sites crafted for",
    servicesTitleHighlight: "real outcomes",
    processTitlePrefix: "From idea to live site in",
    processTitleHighlight: "days, not months",
    heroDraftStat: "48h",
    heroDraftLabel: "First draft",
    heroLaunchStat: "7d",
    heroLaunchLabel: "Avg launch",
    heroMockUrl: "yourbusiness.com",
    heroMockHeadline: "Grow online with confidence",
    heroMockCta: "Get started",
    heroMockMetric: "+34% more leads after launch",
    serviceChips: ["Ecommerce", "Landing Pages", "Business Sites", "Performance"]
  },
  services: {
    eyebrow: "What we build",
    title: "Websites engineered for growth.",
    description: "No templates. Every project is custom-built for your business goals.",
    expansion: "Marketing, security, and content — coming soon as",
    expansionLink: "Websy grows",
    learnMore: "Learn more →",
    viewAll: "All services",
    items: {
      ecommerce: {
        title: "Ecommerce Stores",
        shortDescription: "Online stores built to sell — products, cart, checkout, payments.",
        description:
          "Product pages, cart, checkout, and payment flows designed to turn browsers into buyers.",
        idealFor: "Brands ready to start or scale online sales.",
        deliverables: [
          "Product catalog & categories",
          "Mobile-friendly shopping",
          "Checkout & payment",
          "Easy content management",
          "SEO-ready structure"
        ]
      },
      business: {
        title: "Business Websites",
        shortDescription: "Professional sites that build trust and generate leads.",
        description:
          "A credible web presence that explains what you do, why it matters, and how to get in touch.",
        idealFor: "Service businesses and local companies.",
        deliverables: [
          "Brand-matched design",
          "Service & about pages",
          "Contact forms & lead capture",
          "Works on all devices",
          "Analytics-ready"
        ]
      },
      "landing-pages": {
        title: "Landing Pages",
        shortDescription: "Single-focus pages that turn ad traffic into customers.",
        description:
          "Stop wasting ad budget on weak pages. We build focused layouts that convert.",
        idealFor: "Businesses running Facebook or Google ads.",
        deliverables: [
          "Single-focus layout",
          "A/B-ready structure",
          "Lightning fast",
          "CTA & form integration",
          "Tracking & pixel setup"
        ]
      },
      performance: {
        title: "Speed Optimization",
        shortDescription: "Faster pages, better rankings, happier users.",
        description: "We audit what's slowing you down and fix it — images, code, hosting, vitals.",
        idealFor: "Sites that feel slow or rank poorly on Google.",
        deliverables: [
          "Full performance audit",
          "Image & asset optimization",
          "Core Web Vitals fixes",
          "Mobile speed improvements",
          "Before/after report"
        ]
      }
    }
  },
  portfolio: {
    eyebrow: "Our work",
    title: "Projects that drive results.",
    description: "Real businesses. Real websites. Measurable outcomes.",
    viewAll: "See all work",
    viewCase: "View project →",
    liveSite: "Live site ↗",
    items: {
      "henley-zone": {
        title: "Henley Zone",
        category: "Ecommerce Store",
        description: "Full online store — browse, add to cart, checkout.",
        challenge: "Client needed a store that feels premium and converts.",
        solution: "Clean layout, mobile-first, trust signals at every step.",
        results: ["Product discovery", "Mobile checkout", "Brand trust"]
      },
      glamora: {
        title: "Glamora",
        category: "Landing Page",
        description: "Product page built to convert ad traffic into sales.",
        challenge: "Turn paid clicks into actual purchases.",
        solution: "Bold hero, product showcase, repeated CTAs, fast load.",
        results: ["Ad-to-sale flow", "Strong visuals", "Fast page"]
      },
      "mahin-ahmad": {
        title: "Mahin Ahmad",
        category: "Portfolio Website",
        description: "Developer portfolio — projects, skills, direct contact.",
        challenge: "Build an online brand that gets clients.",
        solution: "Minimal, clean, project-focused with clear contact paths.",
        results: ["Clear positioning", "Project showcase", "Lead generation"]
      }
    }
  },
  process: {
    eyebrow: "How it works",
    title: "4 steps. Clear timeline. No surprises.",
    description: "Simple process from first message to live site.",
    viewAll: "Full process",
    items: [
      {
        title: "Tell us your goals",
        description: "Quick form or WhatsApp — we reply within 2 hours.",
        detail: "Goals, audience, features — we figure it out together."
      },
      {
        title: "We design your strategy",
        description: "Research your market and map what converts.",
        detail: "Wireframes and direction — approved by you first."
      },
      {
        title: "First draft in 48 hours",
        description: "A real, clickable design you can react to fast.",
        detail: "We iterate quickly on your feedback."
      },
      {
        title: "Launch & support",
        description: "Go live, hand over files, stay reachable.",
        detail: "Tested, deployed, ready to grow your business."
      }
    ]
  },
  about: {
    heroTitle: "We're Websy. We build websites that grow businesses.",
    heroDesc: "A focused web studio — no fluff, just results-driven work.",
    ctaPrimary: "Work with us",
    ctaSecondary: "Meet the team",
    paragraphs: [
      "Websy is a web studio founded by Mahin. We help businesses grow online with sites that convert.",
      "Ecommerce stores, business sites, landing pages — custom-built for your goals.",
      "We work like a product team: clear roles, defined process, real accountability."
    ],
    founderTitle: "Founder",
    founderRole: "Founder & Full Stack Developer",
    founderBio: "Mahin builds the websites, leads the tech, and makes sure everything works.",
    viewTeam: "Meet the team →",
    expansionTitle: "Growing with you",
    expansionDesc: "Marketing, security, and content — expanding our services as Websy scales."
  },
  team: {
    heroTitle: "A real team. Not a freelance gig.",
    heroDesc: "Defined roles. Clear process. Everyone accountable.",
    cta: "Start a project",
    learningPhase: "Learning phase",
    footerNote: "Web engineering, marketing, security, and content — under one roof.",
    members: {
      "Mahin Ahmad": {
        role: "Founder & Lead Developer",
        description: "Full-stack · Ecommerce · Technical lead"
      },
      "Nokib Al Hasan": {
        role: "Marketing & SEO",
        description: "Ads · SEO · Growth strategy"
      },
      "Kamrul Hasan": {
        role: "Cybersecurity",
        description: "Pen testing · Code audits · Server security"
      },
      "Tania Akter": {
        role: "Content & Communications",
        description: "Copywriting · Brand voice · Client relations"
      }
    },
    homepageTitle: "The team behind your project",
    homepageDesc: "Specialists in dev, marketing, security, and content — working as one unit.",
    viewFullTeam: "Meet the team →"
  },
  contact: {
    heroTitle: "Let's build yours.",
    heroDesc: "Tell us what you need. We'll reply with a clear plan and quote.",
    whatsappTitle: "WhatsApp",
    whatsappDesc: "Fastest way to reach us.",
    whatsappCta: "Open WhatsApp →",
    emailTitle: "Email",
    emailDesc: "Send us your project details.",
    locationLabel: "Location",
    foundedBy: "Founded by",
    whatsappButton: "Message us on WhatsApp",
    faqTitle: "Quick answers",
    faqDesc: "Before you reach out.",
    faq: [
      {
        question: "How long does it take?",
        answer: "Landing page: 1–2 weeks · Business site: 2–4 weeks · Ecommerce: 4–8 weeks."
      },
      {
        question: "What do I need to give you?",
        answer: "Your logo, brand colors, and goals. We handle the rest."
      },
      {
        question: "Support after launch?",
        answer: "Yes — maintenance, updates, and monitoring available."
      },
      {
        question: "Can I use my own domain?",
        answer: "Absolutely. We set it all up for you."
      },
      {
        question: "Why not just hire a freelancer?",
        answer: "We're a team with defined roles, clear process, and real accountability."
      }
    ],
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "e.g., John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "e.g., name@example.com",
      projectTypeLabel: "Project Type",
      projectTypePlaceholder: "Pick one",
      projectTypes: {
        ecommerce: "Ecommerce Store",
        business: "Business Website",
        landing: "Landing Page",
        performance: "Speed Optimization",
        other: "Something else"
      },
      messageLabel: "What do you need?",
      messagePlaceholder: "Your goals, features, timeline...",
      submitBtn: "Send Message",
      submittingBtn: "Sending...",
      successTitle: "Message sent!",
      successDesc: "We'll get back to you within a few hours.",
      successBtn: "Send another",
      validationError: "Please fill in all fields.",
      serverError: "Something went wrong. Try WhatsApp instead."
    }
  },
  cta: {
    eyebrow: "Start your project",
    title: "Get a clear plan and quote",
    titleHighlight: "today",
    description:
      "Tell us what you need. We'll evaluate your goals and reply within 2 hours with a straightforward timeline and pricing.",
    nudges: ["First draft in 48 hours", "Reply within 2 hours", "No commitment required"],
    whatsapp: "WhatsApp",
    whatsappBtn: "WhatsApp Us",
    emailBtn: "Send an Email",
    startProject: "Start a Project",
    orEmail: "Or email us at"
  },
  footer: {
    tagline: "We build websites that grow businesses.",
    foundedBy: "Founded by",
    company: "Company",
    servicesCol: "Services",
    contactCol: "Contact",
    team: "Team",
    allServices: "All Services",
    ourWork: "Our Work",
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms"
  },
  pages: {
    services: {
      title: "What we build",
      description: "Custom websites built for one thing — your growth.",
      ctaPrimary: "Start a project",
      ctaSecondary: "WhatsApp us",
      whatYouGet: "What you get",
      idealFor: "Best for:",
      discuss: "Let's discuss →"
    },
    work: {
      title: "Our work",
      description: "Real projects. Real businesses.",
      cta: "Start yours"
    },
    process: {
      title: "How it works",
      description: "4 steps from idea to live site.",
      cta: "Get started"
    },
    workDetail: {
      back: "← All work",
      challenge: "The challenge",
      solution: "What we did",
      outcomes: "Results",
      category: "Type",
      viewLive: "See it live",
      startSimilar: "Build something similar"
    },
    privacy: {
      title: "Privacy Policy",
      back: "← Back",
      p1: "We only collect what you give us when you contact us.",
      p2: "We use it to reply. That's it.",
      p3: "Questions? Contact page."
    },
    terms: {
      title: "Terms of Service",
      back: "← Back",
      p1: "We agree on scope and timeline before starting.",
      p2: "Payment and revisions are covered in your project agreement.",
      p3: "Questions? Contact page."
    }
  }
};
