import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark charcoal used for nav, dark sections, and footer
        charcoal: "#262524",
        // Navy used for headings, links, and primary buttons on light sections
        navy: "#1e2a47",
        // Near-black ink used for the largest page headings
        ink: "#16161c",
        // Warm light gray used for the Careers Overview hero band
        mist: "#e7e5e1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
