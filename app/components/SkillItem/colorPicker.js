
// track the last color used
const colors = [
  'is-info',
  'is-warning',
  'is-link',
  'is-primary',
  'is-success',
  'is-danger'
];

// Returns a random int between min-max inclusive
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

/**
 * Returns  a random color that is guaranteed to be
 * different than the last time it was called
 */
let lastColor = '';
const colorPicker = () => {
  const color = colors[getRandomIntInclusive(0, colors.length - 1)];
  if (color === lastColor) {
    return colorPicker();
  }
  lastColor = color;
  return color;
};

export default colorPicker;
