const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#eeeeee",
        "brand-gray-2": "#d7d7d7",
        "brand-gray-3": "#bcbcbc",
        "brand-gray-4": "#e1e1e1",
        "brand-black-1": "#535353",
        "brand-red-1": "#bc381e",
      },
      boxShadow: {
        gray: "inset 0px 10px 9px -3px #1313133d",
        gray2: "0 0 10px 0 #bfbebe",
      },
    },
  },
  plugins: [],
};
