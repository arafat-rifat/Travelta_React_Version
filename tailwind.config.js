/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      Messiri: ["El Messiri", "sans-serif"],
    },
  },
  plugins: [],
};
