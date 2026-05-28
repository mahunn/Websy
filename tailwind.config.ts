import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#262626",
          muted: "#525252",
          subtle: "#737373",
          faint: "#A3A3A3"
        },
        paper: {
          DEFAULT: "#F9F8F6",
          surface: "#FFFFFF",
          alt: "#F0EFEA",
          tint: "#E5E4DE"
        },
        line: {
          DEFAULT: "#1A1A1A",
          strong: "#1A1A1A"
        },
        brand: {
          DEFAULT: "#C2410C",
          hover: "#9A3412",
          soft: "rgba(194, 65, 12, 0.1)",
          ring: "rgba(194, 65, 12, 0.3)"
        },
        accent: {
          DEFAULT: "#B45309",
          hover: "#92400E",
          soft: "rgba(180, 83, 9, 0.1)",
          ring: "rgba(180, 83, 9, 0.3)"
        },
        ostad: {
          brand: "#C2410C",
          darkBg: "#1A1A1A",
          lightBg: "#F9F8F6",
          altBg: "#F0EFEA",
          textMain: "#1A1A1A",
          textMuted: "#525252"
        }
      },
      boxShadow: {
        soft: "4px 4px 0px 0px #1A1A1A",
        lift: "6px 6px 0px 0px #1A1A1A",
        ring: "0 0 0 2px #1A1A1A",
        glow: "none",
        premium: "8px 8px 0px 0px #1A1A1A",
        ostad: "4px 4px 0px 0px #1A1A1A",
        "ostad-md": "8px 8px 0px 0px #1A1A1A"
      },
      fontFamily: {
        bengali: ["var(--font-bengali)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
