/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        condensed: ["Saira Semi Condensed", "sans-serif"],
        qahiri: ["Qahiri", "sans-serif"],
      }
    },
  },
  plugins: [],
}
