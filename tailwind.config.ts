import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          muted: "#475569",
          subtle: "#64748B",
          faint: "#94A3B8"
        },
        paper: {
          DEFAULT: "#FAFAF7",
          surface: "#FFFFFF",
          alt: "#F4F2EC",
          tint: "#F8F6F1"
        },
        line: {
          DEFAULT: "rgba(15, 23, 42, 0.08)",
          strong: "rgba(15, 23, 42, 0.14)"
        },
        brand: {
          DEFAULT: "#E11D1D",
          hover: "#B91C1C",
          soft: "#FFF1F1",
          ring: "rgba(225, 29, 29, 0.18)"
        },
        ostad: {
          brand: "#E11D1D",
          darkBg: "#FAFAF7",
          lightBg: "#FFFFFF",
          altBg: "#F4F2EC",
          textMain: "#0F172A",
          textMuted: "#475569"
        }
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12)",
        lift: "0 1px 3px rgba(15, 23, 42, 0.06), 0 18px 40px -20px rgba(15, 23, 42, 0.18)",
        ring: "0 0 0 4px rgba(225, 29, 29, 0.12)",
        ostad: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12)",
        "ostad-md": "0 1px 3px rgba(15, 23, 42, 0.06), 0 18px 40px -20px rgba(15, 23, 42, 0.18)"
      },
      fontFamily: {
        bengali: ["var(--font-bengali)", "var(--font-inter)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
