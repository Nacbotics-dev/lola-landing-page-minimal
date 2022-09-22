/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
],
  theme: {
    extend: {
      fontFamily:{
        'gilroy':['Gilroy'],
        'avenir':['Avenir LT Std'],
        'inter':['Inter']
      }
    },
  },
  plugins: [
  ],
}
