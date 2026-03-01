import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand Guide v6 — RiverHouse Dairy ──
      colors: {
        // Primary palette
        forest: {
          DEFAULT: "#2D4A2D",
          50: "#F0F4F0",
          100: "#D9E5D9",
          200: "#B3CBB3",
          300: "#8DB18D",
          400: "#5D7E5D",
          500: "#2D4A2D",
          600: "#243C24",
          700: "#1B2E1B",
          800: "#122012",
          900: "#091209",
        },
        plum: {
          DEFAULT: "#6B2D5B",
          50: "#F5EDF3",
          100: "#E6D0E0",
          200: "#CDA1C1",
          300: "#B472A2",
          400: "#904380",
          500: "#6B2D5B",
          600: "#562449",
          700: "#411B37",
          800: "#2C1225",
          900: "#170913",
        },
        burgundy: {
          DEFAULT: "#722F37",
          50: "#F5EEEF",
          100: "#E6D2D5",
          200: "#CDA5AB",
          300: "#B47881",
          400: "#934B55",
          500: "#722F37",
          600: "#5C262C",
          700: "#461D21",
          800: "#301416",
          900: "#1A0B0B",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FEFDFB",
          100: "#FAF7F2",
          200: "#F2EBE0",
          300: "#E8DCCC",
          400: "#DECDBA",
          500: "#D4BEA8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-merriweather)", "Georgia", "serif"],
      },
      fontSize: {
        // Type scale
        "hero": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "h1": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "h2": ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }],
        "h3": ["1.375rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
        "xs": ["0.75rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        brand: "0.5rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
      },
      spacing: {
        section: "5rem",
        "section-sm": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
