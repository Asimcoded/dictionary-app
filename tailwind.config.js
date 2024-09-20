/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#00B2D6",
        secondary:"#003780",
        backgroundDark:"#00132E",
        backgroundLight:"#D1E4FF",
        textDark:"#DBD6FF",
        textLight:"#050029",
        trans:"#00000000"
      }
    },
  },
  plugins: [],
}