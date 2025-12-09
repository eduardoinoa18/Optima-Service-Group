import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        optima: {
          // High-Contrast App-Card Design System
          // Primary - Deep Navy (Background)
          navy: "#0F213A",
          
          // Accent - Bright Gold (CTAs & Highlights)
          gold: "#F5C440",
          
          // Extended Color System (existing vibrant palette preserved)
          blue: {
            50: "#e6f0f9",
            100: "#cce0f3",
            200: "#99c1e7",
            300: "#66a2db",
            400: "#3383cf",
            500: "#2563ab",
            600: "#1e4f8a",
            700: "#1a3a5f",
            800: "#132b47",
            900: "#0F213A", // Matches primary navy
          },
          // Accent Colors
          orange: {
            50: "#fff5eb",
            100: "#ffe8d1",
            200: "#ffd1a3",
            300: "#ffba75",
            400: "#ffa347",
            500: "#ff8c19", // Vibrant orange
            600: "#cc7014",
            700: "#99540f",
            800: "#66380a",
            900: "#331c05",
          },
          // Success Green
          green: {
            500: "#10b981",
            600: "#059669",
          },
          // Warm neutrals
          warm: {
            50: "#fafaf9",
            100: "#f5f5f4",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#78716c",
            600: "#57534e",
            700: "#44403c",
            800: "#292524",
            900: "#1c1917",
          },
        },
        // Keep existing system colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "soft": "0 4px 16px rgba(0, 0, 0, 0.1)",
        "soft-lg": "0 8px 24px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
