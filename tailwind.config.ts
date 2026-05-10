import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#1b1c1c",
          slate: "#4c616c",
          canvas: "#fbf9f9",
          smoke: "#747878",
          outline: "#e5e5e5",
        },
        // Dark mode overrides specified in a structured way
        dark: {
          surface: "#1b1c1c",
          onSurface: "#fbf9f9",
          canvas: "#121212",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        'section-gap': '8rem',
        'stack-gap': '1.5rem',
      },
      borderRadius: {
        none: "0px", // Enforce sharp corners
      },
    },
  },
  plugins: [],
};
export default config;
