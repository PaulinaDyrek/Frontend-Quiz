/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "rgb(25, 55, 75)",
        grey: "rgb(225, 221, 221)",
        ocean: "rgb(91, 115, 127)",
      },
    },
  },
  plugins: [],
};
