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
          50:  "#fff8e1",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffb900",
          600: "#e6a700",
          700: "#cc9400",
          800: "#a37700",
          900: "#7a5900",
        },
        charcoal: "#1A1A1A",
        "charcoal-soft": "#2d2d2d",
        "brown-dark": "#3D2800",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)",   "sans-serif"],
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-rev":  "spin 15s linear infinite reverse",
        float:       "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
