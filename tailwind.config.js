/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      night: '#111827',
      asphalt: '#2c3e50',
      air: '#d9e6eb',
      cream: '#f8f8f8',
    },
  },
  plugins: []
};
