import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: "#f5e24a",
          500: "#f5d60c",
          600: "#dcc40a",
          700: "#c4bc09",
          800: "#9a9808",
        },
        charcoal:       "#1A1A1A",
        "charcoal-soft":"#2d2d2d",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)",   "sans-serif"],
      },
      screens: { xs: "375px" },
    },
  },
  plugins: [],
};
export default config;
