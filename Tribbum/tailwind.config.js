/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        system: ["system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          200: "#777777",
          500: "#3a3a3a",
        },
        secondary: {
          50: "#f9f9ff",
          100: "#fafafa",
          200: "#eff2ff",
          300: "#007bff",
          500: "#4a90E2",
        },
        tertiary: {
          100: "#F6F7F8",
          200: "#AB74FF",
          400: "#2BD899",
          500: "#00CC84",
        },
        success: {
          500: "#28a745",
        },
        warning: {
          500: "#ffc107",
        },
        danger: {
          500: "#dc3545",
        },
      },
    },
  },
  plugins: [],
};
