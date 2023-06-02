/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#d3cc6c'
      }
    },
    fontFamily: {
      serif: ['Source Serif Pro', 'serif']
    }
  },
  plugins: []
}
