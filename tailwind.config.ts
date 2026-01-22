// tailwind.config.ts
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
        // Add your custom colors here
        // primary: {
        //   50: '#e6f1ff',
        //   100: '#cce3ff',
        //   200: '#99c7ff',
        //   300: '#66aaff',
        //   400: '#338eff',
        //   500: '#0072ff', // Main primary color
        //   600: '#005bcc',
        //   700: '#004499',
        //   800: '#002e66',
        //   900: '#001733',
        // },
        // secondary: '#ff6b6b',
        // accent: '#ffd93d',
        // success: '#51cf66',
        danger: '#ff6b6b',
        warning: '#ffd43b',
        // info: '#339af0',
        
        // Or simple single color
        // brand: '#8b5cf6',
        // 'brand-dark': '#7c3aed',
        // 'brand-light': '#a78bfa',
      },
    },
  },
  plugins: [],
};

export default config;