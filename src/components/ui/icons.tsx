import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ── Service icons ── */

export const CartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2.5 3h1.7a1 1 0 0 1 .98.8L7 14.2a1.2 1.2 0 0 0 1.18.95h7.84a1.2 1.2 0 0 0 1.17-.9l1.56-5.85a1 1 0 0 0-.96-1.27H5.8" />
    <circle cx="9" cy="20" r="1.6" />
    <circle cx="17.5" cy="20" r="1.6" />
  </svg>
);

export const TargetIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5.5" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3.5 21h17M5 21V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15M16 11h2.5a1.5 1.5 0 0 1 1.5 1.5V21" />
    <path d="M8.5 8.5h3M8.5 12h3M8.5 15.5h3" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
  </svg>
);

/* ── Differentiator icons ── */

export const SparkleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
    <path d="M12 8.5a3.5 3.5 0 0 0 3.5 3.5A3.5 3.5 0 0 0 12 15.5 3.5 3.5 0 0 0 8.5 12 3.5 3.5 0 0 0 12 8.5Z" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const ChatBubbleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 12c0 4.4-4 8-9 8a9.6 9.6 0 0 1-3.3-.6L4 21l1.2-3.7A7.5 7.5 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8Z" />
  </svg>
);

export const TagIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3.5 9.5V4a.5.5 0 0 1 .5-.5h5.5L20.5 14a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0L3.5 9.5Z" />
    <circle cx="8" cy="8" r="1.2" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z" />
    <path d="m9.5 12 2 2 3.5-4" />
  </svg>
);

/* ── Process icons ── */

export const SendIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20.5 3.5 3.5 10.5l6 2.5 2.5 6 8.5-15.5Z" />
    <path d="m12 13 4-4" />
  </svg>
);

export const LightbulbIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 17.5h6M10 21h4M7 11.5a5 5 0 1 1 10 0c0 2-1 3.5-2.5 4.5v1.5h-5V16C8 15 7 13.5 7 11.5Z" />
  </svg>
);

export const RocketIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 11a2 2 0 1 0-3 0 2 2 0 0 0 3 0Z" />
    <path d="M14.5 3.5c-.7 2-2.5 4-4.5 5.5L7 8l-3.5 3 3 1L8 16l1-3.5 1 4 3-3.5-1-3c1.5-2 3.5-3.8 5.5-4.5Z" />
    <path d="m6 18-2 2M9 19l-1 1M5 15l-1 1" />
  </svg>
);

/* ── UI icons ── */

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5 9-11" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14m-5-5 5 5-5 5" />
  </svg>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const WhatsappIcon = (p: IconProps) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...p}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.793 1.453 5.485.002 9.948-4.461 9.95-9.95.002-2.66-1.033-5.159-2.908-7.037C16.608 1.74 14.113.706 11.457.706c-5.49 0-9.953 4.463-9.955 9.953-.002 1.91.501 3.775 1.458 5.378L1.922 22.1l6.125-1.606zM15.21 11.43c-.29-.145-1.72-.848-1.986-.946-.266-.097-.46-.145-.653.145-.193.29-.748.946-.917 1.138-.17.193-.338.217-.628.072-.29-.145-1.22-.45-2.325-1.434-.86-.767-1.44-1.716-1.608-2.006-.17-.29-.018-.447.127-.59.13-.13.29-.338.435-.508.145-.17.193-.29.29-.483.097-.193.048-.362-.024-.508-.073-.145-.653-1.573-.895-2.153-.235-.568-.475-.49-.653-.5-.17-.008-.362-.01-.555-.01-.193 0-.508.072-.773.362-.266.29-1.014.99-1.014 2.415 0 1.425 1.038 2.802 1.183 2.995.145.193 2.043 3.12 4.949 4.373.69.298 1.23.476 1.65.61.694.22 1.326.19 1.825.115.556-.08 1.72-.7 1.962-1.375.242-.676.242-1.256.17-1.376-.073-.12-.266-.19-.556-.34z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

/* ── Trust / outcome icons ── */

export const GaugeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 13a9 9 0 1 0-17.4 3M12 13l4-4" />
    <circle cx="12" cy="13" r="1" />
  </svg>
);

export const TrendingUpIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m3 17 6-6 4 4 8-8M14 7h7v7" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 3 2.6 5.6L20.5 9.5l-4.3 4 1 6L12 16.8 6.8 19.5l1-6-4.3-4 5.9-.9L12 3Z" />
  </svg>
);

export const PaletteIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3a9 9 0 0 0 0 18c1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2-.5-.6-.8-1.3-.8-2 0-1.7 1.3-3 3-3h2A4 4 0 0 0 21 6.5 9 9 0 0 0 12 3Z" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="6.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="14" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const DeviceIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4" width="14" height="11" rx="1.5" />
    <path d="M5 18h9M9.5 15v3" />
    <rect x="17" y="9" width="5" height="11" rx="1" />
  </svg>
);

export const CodeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />
  </svg>
);

export const InfinityIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0 3.5 3.5 0 1 1-7 0Z" />
  </svg>
);

/* Convenience map for keyed lookups */
export const icons = {
  cart: CartIcon,
  target: TargetIcon,
  building: BuildingIcon,
  bolt: BoltIcon,
  sparkle: SparkleIcon,
  phone: PhoneIcon,
  search: SearchIcon,
  chat: ChatBubbleIcon,
  tag: TagIcon,
  shield: ShieldIcon,
  send: SendIcon,
  lightbulb: LightbulbIcon,
  rocket: RocketIcon,
  check: CheckIcon,
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  whatsapp: WhatsappIcon,
  mail: MailIcon,
  gauge: GaugeIcon,
  trendingUp: TrendingUpIcon,
  heart: HeartIcon,
  star: StarIcon,
  palette: PaletteIcon,
  device: DeviceIcon,
  code: CodeIcon,
  infinity: InfinityIcon,
} as const;

export type IconKey = keyof typeof icons;
