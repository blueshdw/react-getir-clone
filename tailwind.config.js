/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#4c3398",
        "purple-light": "#5d3ebc",
        "purple-text": "#5D3EBC",
        "black-text": "#3e3e3e",
        "gray-text": "#697488",
        "orange-text": "#FFD111",
        "orange-button": "#ffd300"
      },
      backgroundImage: {
        "download": "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')"
      }
      
    },
  },
  plugins: [],
}