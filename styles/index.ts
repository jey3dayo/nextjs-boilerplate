const colors = require('styles/colors');

type Palette = {
  primary: string;
  secondary: string;
  [key: string]: string;
};

export const palette: Palette = colors;
