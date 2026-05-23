import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#F9FAFB",
          soft: "#F3F4F6",
          muted: "#9CA3AF",
          subtle: "#6B7280",
          faint: "#374151"
        },
        paper: {
          DEFAULT: "#080700",
          surface: "#100E02",
          alt: "#1A1703",
          tint: "#232005"
        },
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(255, 255, 255, 0.16)"
        },
        brand: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          soft: "rgba(245, 158, 11, 0.08)",
          ring: "rgba(245, 158, 11, 0.2)"
        },
        ostad: {
          brand: "#F59E0B",
          darkBg: "#080700",
          lightBg: "#100E02",
          altBg: "#1A1703",
          textMain: "#F9FAFB",
          textMuted: "#9CA3AF"
        }
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 8px -1px rgba(0, 0, 0, 0.2)",
        lift: "0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 4px 16px -4px rgba(0, 0, 0, 0.3)",
        ring: "0 0 0 4px rgba(245, 158, 11, 0.2)",
        ostad: "0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 8px -1px rgba(0, 0, 0, 0.2)",
        "ostad-md": "0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 4px 16px -4px rgba(0, 0, 0, 0.3)"
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
