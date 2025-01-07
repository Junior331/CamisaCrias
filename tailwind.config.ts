/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // text: "var(--text)",
        // accent: "var(--accent)",
        // primary: "var(--primary)",
        // secondary: "var(--secondary)",
        // background: "var(--background)",

        primary: "#9b87f5",
        secondary: "#7E69AB",
        accent: "#D6BCFA",
        background: "#F8F9FC",
        text: "#1A1F2C",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
} satisfies Config;
