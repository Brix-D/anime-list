/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'md-all': '0 0 8px 4px var(--tw-shadow-color)',
        'md-all-light': '0 0 8px 2px var(--tw-shadow-color)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        night: '#111827',
        asphalt: '#2c3e50',
        air: '#d9e6eb',
        cream: '#f8f8f8',
      },
    },
  },
  plugins: [],
};
