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
        purple: "#4B0082",
        black: "#161439",
        lilac: "#7630F7",
        grey: "#64748B",
        chalk: "#B2BBCC",
        creame: "#E6EAEF",
        violet: "#EFEEFE"
  
       }
    },
  },
  plugins: [],
};
export default config;
