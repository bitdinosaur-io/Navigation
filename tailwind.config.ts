import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsmall: "500px",
        small: "640px",
        mid: "768px",
        large: "1024px",
        xlarge: "1280px",
        "2xl": "1440px",
        "3xl": "1780px",
        "4xl": "2160px", // only need to control product grid mode in ultra 4k device
      },
      fontFamily: {
        body: ["Ubuntu", "PingFang SC", "微软雅黑"],
        menu: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        tit: ["Pacifico"],
        chillax: ["var(--font-chillax)"],
        pally: ["var(--font-pally)"],
        titnew: ["Righteous", "cursive"],
        titbackup: ["MuseoModerno", "cursive"],
        titre: ["Croissant One", "cursive"],
        titrew: ["Silkscreen", "cursive"],
        titrenew: ["Lily Script One", "cursive"],
        coming: ["Space Mono", "monospace"],
      },
      colors: {
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        body: "#fcfcfc",
        dark: "#0D1321",
        "color-primary-100": "#4f46e5",
        "color-primary-200": "#6a59e9",
        "color-primary-300": "#816dec",
        "color-primary-400": "#9681f0",
        "color-primary-500": "#a995f3",
        "color-primary-600": "#bba9f6",
        "color-surface-100": "#121212",
        "color-surface-200": "#181818",
        "color-surface-300": "#282828",
        "color-surface-400": "#404040",
        "color-surface-500": "#b3b3b3",
        "color-surface-600": "#8b8b8b",
        "color-surface-table": "#1a1b1e",
        "color-surface-tabBg": "#262629",
        "color-surface-tabBtn": "#3f3f46",
        "color-surface-mixed-100": "#1a1625",
        "color-surface-mixed-200": "#2f2b3a",
        "color-surface-mixed-300": "#46424f",
        "color-surface-mixed-400": "#5e5a66",
        "color-surface-mixed-500": "#76737e",
        "color-surface-mixed-600": "#908d96",
        "light-dark": "#171e2e",
        "sidebar-body": "#F8FAFC",
      },
      gridTemplateRows: {
        // Simple 16 row grid
        "16": "repeat(auto-fill, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
