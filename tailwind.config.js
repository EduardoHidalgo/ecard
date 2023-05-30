/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E0E0FF",
          100: "#B2B2FF",
          200: "#8080FF",
          300: "#4040FF",
          400: "#0000FF",
          500: "#0000D4",
          600: "#0000B2",
          700: "#000080",
          800: "#000040",
          900: "#000000",
        },
      },
      fontFamily: {
        title: ["var(--font-raleway)"],
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
