const palette = require('tailwindcss/colors');

const colors = {
  primary: palette.teal['700'],
  secondary: palette.yellow['200'],
};

module.exports = (colors.__esModule ? colors : { default: colors }).default;
