/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
     
      'banner':'#3A416F',
      'white': '#ffffff',
      'gray' : '#808080',
      'red' : '#FF0000'

    }
  },
  plugins: [],
}
