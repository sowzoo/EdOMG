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
        olive: {
          50: "#f6f8f5",
          100: "#eaf0e8",
          200: "#cde3cb",
          300: "#9cc59d",
          400: "#5ba16c",
          500: "#418345",
          600: "#356a30",
          700: "#2c5027",
          800: "#1f361e",
          900: "#142116",
        },
        asphalt: {
          50: "#F4F3F3",
          100: "#E8E7E7",
          200: "#C6C3C3",
          300: "#A39F9E",
          400: "#5E5856",
          500: "#19100D",
          600: "#170E0C",
          700: "#0F0A08",
          800: "#0B0706",
          900: "#080504",
        },

        rust: {
          50: "#FCF6F3",
          100: "#F9ECE7",
          200: "#EFD0C4",
          300: "#E5B3A1",
          400: "#D27B5A",
          500: "#BE4213",
          600: "#AB3B11",
          700: "#72280B",
          800: "#561E09",
          900: "#391406",
        },

        fuel: {
          50: "#FEFBF5",
          100: "#FDF7EB",
          200: "#FBEACE",
          300: "#F8DEB0",
          400: "#F3C574",
          500: "#EEAC39",
          600: "#D69B33",
          700: "#8F6722",
          800: "#6B4D1A",
          900: "#473411",
        },
      },
    },
  },
  plugins: [],
};
