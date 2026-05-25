import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#FFFFFF",
          soft: "#E4E2EB",
          muted: "#C1BEC6",
          subtle: "#938F9B",
          faint: "#5E5966"
        },
        paper: {
          DEFAULT: "#000000",
          surface: "#0A090D",
          alt: "#121118",
          tint: "#1B1A24"
        },
        line: {
          DEFAULT: "rgba(144, 70, 255, 0.12)",
          strong: "rgba(144, 70, 255, 0.24)"
        },
        brand: {
          DEFAULT: "#9046FF",
          hover: "#7C35EB",
          soft: "rgba(144, 70, 255, 0.08)",
          ring: "rgba(144, 70, 255, 0.30)"
        },
        accent: {
          DEFAULT: "#FF9E2C",
          light: "#FFAE4F",
          soft: "rgba(255, 158, 44, 0.10)"
        },
        "accent-blue": {
          DEFAULT: "#9046FF",
          light: "#A870FF",
          soft: "rgba(144, 70, 255, 0.06)"
        },
        pop: {
          pink: "#EC4899",
          cyan: "#06B6D4",
          lime: "#84CC16"
        },
        ostad: {
          brand: "#9046FF",
          darkBg: "#09090B",
          lightBg: "#15131A",
          altBg: "#211D25",
          textMain: "#FFFFFF",
          textMuted: "#C1BEC6"
        }
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(144, 70, 255, 0.10), 0 2px 8px -1px rgba(144, 70, 255, 0.06)",
        lift: "0 20px 40px -15px rgba(144, 70, 255, 0.18), 0 4px 16px -4px rgba(144, 70, 255, 0.08)",
        ring: "0 0 0 4px rgba(144, 70, 255, 0.25)",
        glow: "0 0 40px rgba(144, 70, 255, 0.15)",
        "glow-orange": "0 0 40px rgba(255, 158, 44, 0.12)",
        ostad: "0 4px 20px -2px rgba(144, 70, 255, 0.10), 0 2px 8px -1px rgba(144, 70, 255, 0.06)",
        "ostad-md": "0 20px 40px -15px rgba(144, 70, 255, 0.18), 0 4px 16px -4px rgba(144, 70, 255, 0.08)"
      },
      fontFamily: {
        bengali: ["var(--font-bengali)", "var(--font-inter)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(rgba(144, 70, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(144, 70, 255, 0.03) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
