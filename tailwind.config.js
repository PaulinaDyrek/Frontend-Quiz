/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "rgb(101, 69, 74)",
        grey: "rgb(225, 221, 221)",
        lavenda: "rgb(106, 88, 106)",
      },
    },
  },
  plugins: [],
};
