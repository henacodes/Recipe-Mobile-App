/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent_color: "#34bd6a",
        accent_dark: "111111",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  fontFamily: {
    display: ["poppins", "Oswald"],
    body: ["poppins", '"Open Sans"'],
  },
};
