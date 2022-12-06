/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inconsolata: "'Inconsolata', monospace",
        Poppins: "'Poppins', sans-serif",
        Sacramento: "'Sacramento', cursive",
      },
    },
  },
  plugins: [],
};
