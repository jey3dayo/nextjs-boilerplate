/** @type {import('tailwindcss').Config} */
module.exports = {
  module: 'jit',
  darkMode: 'media',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  options: {
    // https://purgecss.com/safelisting.html#patterns
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
