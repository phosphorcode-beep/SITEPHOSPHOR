import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
        },
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        foreground: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          inverse: "rgb(var(--color-text-inverse) / <alpha-value>)",
        },
        border: "rgb(var(--color-border) / <alpha-value>)",
        status: {
          error: "rgb(var(--color-error) / <alpha-value>)",
          success: "rgb(var(--color-success) / <alpha-value>)",
          warning: "rgb(var(--color-warning) / <alpha-value>)",
        },
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      fontSize: {
        display: ["var(--font-size-display)", { lineHeight: "var(--line-height-display)", letterSpacing: "0" }],
        h1: ["var(--font-size-h1)", { lineHeight: "var(--line-height-heading)", letterSpacing: "0" }],
        h2: ["var(--font-size-h2)", { lineHeight: "var(--line-height-heading)", letterSpacing: "0" }],
        h3: ["var(--font-size-h3)", { lineHeight: "var(--line-height-heading)", letterSpacing: "0" }],
        body: ["var(--font-size-body)", { lineHeight: "var(--line-height-body)", letterSpacing: "0" }],
        small: ["var(--font-size-small)", { lineHeight: "var(--line-height-body)", letterSpacing: "0" }],
        caption: ["var(--font-size-caption)", { lineHeight: "var(--line-height-body)", letterSpacing: "0" }],
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },
      borderRadius: {
        brand: "var(--radius-md)",
        "brand-sm": "var(--radius-sm)",
        "brand-lg": "var(--radius-lg)",
      },
      boxShadow: {
        brand: "var(--shadow-md)",
        "brand-sm": "var(--shadow-sm)",
        "brand-lg": "var(--shadow-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
