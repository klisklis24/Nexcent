/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28CB8B",
        secondary: "#263238",
        darkGrey: "#4D4D4D",
        lightGrey: "#89939E",
        blueGrey: "#ABBED1",
        sliverWhite: "#F5F7FA",
      },
      fontFamily: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      ms: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("group-open", ":merge(.group).open &");
    }),
  ],
};
