/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'intercom-blue': '#0057FF',
        'intercom-green': '#00D084',
      },
    },
  },
  plugins: [],
};