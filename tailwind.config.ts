import type { Config } from "tailwindcss";

// Palette inspired by Bosnia's landscape: Neretva-river teal, limestone/karst
// neutrals, forested-mountain green, and a warm terracotta accent (Počitelj
// stone, sunset over Mostar). Kept as CSS vars so dark mode is a token swap.
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-fg))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-fg))",
        },
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
