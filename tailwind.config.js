
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Syncopate', 'sans-serif'],
        jakarta: ['Poppins', 'sans-serif'],
      },
      animation: {
        "pulse-slow": "pulse 8s ease-in-out infinite",
        "pulse-slower": "pulse 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}