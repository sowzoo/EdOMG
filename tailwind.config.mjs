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
        copper: {
          50: "#FCF8F5",
          100: "#F9F1EB",
          200: "#F1DDCC",
          300: "#E8C9AE",
          400: "#D7A071",
          500: "#C67734",
          600: "#B26B2F",
          700: "#77471F",
          800: "#593617",
          900: "#3B2410",
        },

        aztec: {
          50: "#F4F4F4",
          100: "#E8E9E8",
          200: "#C6C7C7",
          300: "#A4A6A5",
          400: "#606361",
          500: "#1C201D",
          600: "#191D1A",
          700: "#111311",
          800: "#0D0E0D",
          900: "#080A09",
        },

        cararra: {
          50: "#FEFEFD",
          100: "#FDFDFC",
          200: "#FAF9F7",
          300: "#F7F5F2",
          400: "#F0EEE9",
          500: "#EAE6DF",
          600: "#D3CFC9",
          700: "#8C8A86",
          800: "#696864",
          900: "#464543",
        },

        "silver-chalice": {
          50: "#FBFBFB",
          100: "#F6F7F6",
          200: "#E9EAE9",
          300: "#DCDDDC",
          400: "#C2C4C2",
          500: "#A8AAA8",
          600: "#979997",
          700: "#656665",
          800: "#4C4D4C",
          900: "#323332",
        },
      },
    },
  },
  plugins: [],
};
