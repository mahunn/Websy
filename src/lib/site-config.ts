export const site = {
  name: "Websy",
  url: "https://websy.studio"
} as const;

export const contact = {
  whatsapp: "+8801828034555",
  whatsappMessage:
    "Hi Websy — I'd like to discuss a website project. / হ্যালো Websy — আমি একটি ওয়েবসাইট প্রজেক্ট নিয়ে কথা বলতে চাই।",
  email: "maahin.ahmaad@gmail.com",
  founder: "Mahin",
  location: "Bangladesh"
} as const;

export function getWhatsAppUrl() {
  const digits = contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(contact.whatsappMessage)}`;
}

export const mainNavHrefs = [
  { key: "services" as const, href: "/services" },
  { key: "work" as const, href: "/work" },
  { key: "process" as const, href: "/process" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" }
];

export const footerNav = {
  company: [
    { key: "about" as const, href: "/about" },
    { key: "team" as const, href: "/team" },
    { key: "process" as const, href: "/process" },
    { key: "contact" as const, href: "/contact" }
  ],
  services: [
    { key: "allServices" as const, href: "/services" },
    { key: "work" as const, href: "/work" }
  ]
} as const;

export const serviceMeta = [
  { slug: "ecommerce", icon: "cart" as const },
  { slug: "business", icon: "building" as const },
  { slug: "landing-pages", icon: "target" as const },
  { slug: "performance", icon: "bolt" as const }
] as const;

export const teamMeta = [
  { name: "Mahin Ahmad" },
  { name: "Nokib Al Hasan" },
  { name: "Kamrul Hasan" },
  { name: "Tania Akter" }
] as const;

export const processMeta = ["01", "02", "03", "04"] as const;

export const portfolio = [
  {
    slug: "henley-zone",
    title: "Henley Zone",
    href: "https://henleyzone.com",
    imageTone: "from-amber-50 to-orange-50"
  },
  {
    slug: "glamora",
    title: "Glamora",
    href: "https://glamora-beige.vercel.app",
    imageTone: "from-blue-50 to-sky-50"
  },
  {
    slug: "mahin-ahmad",
    title: "Mahin Ahmad",
    href: "https://mahinahmad.com",
    imageTone: "from-emerald-50 to-teal-50"
  }
] as const;

export function getProjectBySlug(slug: string) {
  return portfolio.find((p) => p.slug === slug);
}
