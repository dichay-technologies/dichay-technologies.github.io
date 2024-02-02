/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          400: "#4C5276",
          500: "#3A405A",
          600: "#2E3248"
        }
      }
    },
  },
  plugins: [],
}

