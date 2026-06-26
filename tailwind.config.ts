import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          50: "#f1faf5",
          100: "#ddf1e7",
          200: "#bfe3d1",
          300: "#91caae",
          400: "#61aa87",
          500: "#3f956d",
          600: "#2f7656",
          700: "#285f49",
          800: "#234c3d",
          900: "#1e4034",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(34, 76, 61, 0.10)",
        card: "0 14px 34px rgba(40, 95, 73, 0.12)",
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-noto-serif-jp)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
