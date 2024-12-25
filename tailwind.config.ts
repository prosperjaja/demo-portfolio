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
        tunes: {
          heading: "#2d2e32",
          subheading: "#555555",
          paragraph: "#767676",
          hero: "#f9f9f9",
          link: "#147efb",
          border: "rgba(45,46,50,.5)",
          project: "hsla(0,0%,46%,.2)",
        },
      },
      boxShadow: {
        sm: "0 0 10px rgba(0,0,0,.09)",
        md: "0 0 24px rgba(0,0,0,.09)",
        lg: "0 0 10px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
export default config;
