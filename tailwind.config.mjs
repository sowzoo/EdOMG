import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pumpkin: "#f17017ff",
        red: "#f90f25ff",
        emerald: "#29d777ff",
        green: "#25ab96ff",
        coffee: "#553E13ff",
        emerald2: "#58BC82ff",
        yellow: "#F0CF65ff",
      },
    },
  },
  plugins: [],
};
