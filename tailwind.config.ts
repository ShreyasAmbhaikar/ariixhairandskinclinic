import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#FEFCFF",
        "primary-container": "#A55308",
        "primary-dark": "#7F3E04",
        "cyan-soft": "#F9A137",
        cyan: "#E57F1B",
        "text-dark": "#5A2F0B",
        "text-muted": "#6A472A",
        "section-light": "#FFF6EA",
        "surface-container-lowest": "#FEFCFF",
        "surface-container-low": "#FFF0DA",
        "blue-soft": "rgba(108, 60, 17, 0.12)",
        "border-overlay": "rgba(255, 255, 255, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        "plus-jakarta": ["var(--font-plus-jakarta-sans)", "Plus Jakarta Sans", "sans-serif"],
        "hero-heading": ["var(--font-playfair-display)", "Playfair Display", "serif"],
        "section-heading": ["var(--font-playfair-display)", "Playfair Display", "serif"],
        "card-title": ["var(--font-playfair-display)", "Playfair Display", "serif"],
        "body-main": ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        "label-sm": ["var(--font-dm-sans)", "DM Sans", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 50px rgba(108, 60, 17, 0.10)",
        soft: "0 10px 30px rgba(108, 60, 17, 0.08)"
      },
      borderRadius: {
        card: "16px",
        "card-lg": "24px"
      },
      screens: {
        xs: "420px"
      }
    }
  },
  plugins: []
};

export default config;
