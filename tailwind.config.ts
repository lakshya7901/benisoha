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
          50:  "#fffee8",
          100: "#fffde0",
          200: "#fffb80",
          300: "#FFFC00",
          400: "#FFFC00",
          500: "#FFFC00",
          600: "#e6e300",
          700: "#ccca00",
          800: "#a3a100",
          900: "#7a7800",
        },
        charcoal: "#1A1A1A",
        "charcoal-soft": "#2d2d2d",
        "brown-dark": "#3D3300",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)",   "sans-serif"],
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFFC00 0%, #fffb80 50%, #FFFC00 100%)",
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
