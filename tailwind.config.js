/** @type {import('tailwindcss').Config} */
const { resolve } = require('path');
const colorsPath = resolve(__dirname, 'src/styles/colors.ts');
const colors = require(colorsPath);

module.exports = {
  module: 'jit',
  darkMode: 'media',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  options: {
    // https://purgecss.com/safelisting.html#patterns
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
