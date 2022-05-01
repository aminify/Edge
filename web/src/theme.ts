const theme = {
  primary: '#3E92CC',
  secondary: '#0E1428',
  yellow: '#FFBC42',
  red: '#D81159',
  green: '#0CCE6B',
  gray: '#e7e8ea',
  spacing: (multiplier: number) => `${multiplier * 8}px`,
};

export type ThemeType = typeof theme;

export default theme;
