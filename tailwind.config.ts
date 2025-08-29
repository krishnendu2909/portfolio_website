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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Theme-aware colors
        themePrimary: "var(--theme-primary)",
        themeSecondary: "var(--theme-secondary)",
        themeAccent: "var(--theme-accent)",
        themeBackground: "var(--theme-background)",
        themeText: "var(--theme-text)",
        themeBorder: "var(--theme-border)",
        // Legacy lava colors for compatibility
        lavaOrange: "var(--theme-primary)",
        lavaGlow: "var(--theme-secondary)",
        asteroidBlack: "var(--theme-background)",
      },
    },
  },
  plugins: [],
};
export default config;