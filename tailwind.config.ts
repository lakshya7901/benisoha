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
          50:  "#fefbe8",
          100: "#fdf6c0",
          200: "#fced6e",
          300: "#f5d60c",
          400: "#f5d60c",
          500: "#f5d60c",
          600: "#dcc40a",
          700: "#c4bc09",
          800: "#9a9808",
          900: "#727006",
        },
        charcoal: "#1A1A1A",
        "charcoal-soft": "#2d2d2d",
        "brown-dark": "#3D3300",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)",   "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
