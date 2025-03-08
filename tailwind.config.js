import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        // Replacing blue and gray with your new palette, but keeping the structure
        default: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#d2d2d2",
          700: "#a6a6a6",
          800: "#797979",
          900: "#4d4d4d",
          foreground: "#000",
          DEFAULT: "#ffffff"
        },
        primary: {
          50: "#dfedfd",
          100: "#b3d4fa",
          200: "#86bbf7",
          300: "#59a1f4",
          400: "#2d88f1",
          500: "#006fee",
          600: "#005cc4",
          700: "#00489b",
          800: "#003571",
          900: "#002147",
          foreground: "#fff",
          DEFAULT: "#006fee"
        },
        secondary: {
          50: "#eee4f8",
          100: "#d7bfef",
          200: "#bf99e5",
          300: "#a773db",
          400: "#904ed2",
          500: "#7828c8",
          600: "#6321a5",
          700: "#4e1a82",
          800: "#39135f",
          900: "#240c3c",
          foreground: "#fff",
          DEFAULT: "#7828c8"
        },
        success: {
          50: "#e2f8ec",
          100: "#b9efd1",
          200: "#91e5b5",
          300: "#68dc9a",
          400: "#40d27f",
          500: "#17c964",
          600: "#13a653",
          700: "#0f8341",
          800: "#0b5f30",
          900: "#073c1e",
          foreground: "#000",
          DEFAULT: "#17c964"
        },
        warning: {
          50: "#fef4e4",
          100: "#fce4bd",
          200: "#fad497",
          300: "#f9c571",
          400: "#f7b54a",
          500: "#f5a524",
          600: "#ca881e",
          700: "#9f6b17",
          800: "#744e11",
          900: "#4a320b",
          foreground: "#000",
          DEFAULT: "#f5a524"
        },
        danger: {
          50: "#fee1eb",
          100: "#fbb8cf",
          200: "#f98eb3",
          300: "#f76598",
          400: "#f53b7c",
          500: "#f31260",
          600: "#c80f4f",
          700: "#9e0c3e",
          800: "#73092e",
          900: "#49051d",
          foreground: "#000",
          DEFAULT: "#f31260"
        },
        background: "#000000",
        foreground: "#ffffff",
        content1: {
          DEFAULT: "#18181b",
          foreground: "#fff"
        },
        content2: {
          DEFAULT: "#27272a",
          foreground: "#fff"
        },
        content3: {
          DEFAULT: "#b8b8be",
          foreground: "#000"
        },
        content4: {
          DEFAULT: "#ffffff",
          foreground: "#000"
        },
        focus: "#006FEE",
        overlay: "#ffffff",
        // Preserving HSL-based variables from your original config
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  darkMode: ["class", 'class'], // Enable dark mode based on a class
  plugins: [heroui(), require("tailwindcss-animate")],
};