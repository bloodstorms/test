// Must be in sync with colors.scss

export const COLORS = {
  black: '#221e1e',
  blue: '#052bf9',
  'blue-light': '#07a8f2',
  'blue-extralight': '#e1eff6',
  green: '#05f9c2',
  'grey-extralight': '#f6f9fb',
};

export function getColor(color) {
  return COLORS[color] ?? color;
}
