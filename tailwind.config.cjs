/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5B4C8A',
        secondary: '#F2F2F2',
      },
    },
  },
  plugins: [],
}
