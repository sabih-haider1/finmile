import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090514", // Deep Midnight Violet
        "finmile-purple": "#7C3AED", // Vibrant Violet
        "finmile-indigo": "#2A1B54", // Muted indigo for glow
        "finmile-lilac": "#A78BFA",
        "gray-soft": "#9CA3AF"
      },
      fontFamily: {
        sans: ['inherit', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(42, 27, 84, 0.4) 0%, rgba(9, 5, 20, 0) 50%)',
      }
    },
  },
  plugins: [],
};
export default config;
