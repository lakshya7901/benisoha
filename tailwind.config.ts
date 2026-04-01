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
          50:  "#fdf9ed",
          100: "#f9edcc",
          200: "#f2d98a",
          300: "#e8c252",
          400: "#d4a82a",
          500: "#C9A84C",
          600: "#b8860b",
          700: "#966e0a",
          800: "#7a5908",
          900: "#5c4206",
        },
        cream: "#FAFAF5",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8C252 50%, #C9A84C 100%)",
        "hero-pattern": "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "line-grow": "lineGrow 1.2s ease forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
