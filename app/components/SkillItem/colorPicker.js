
// track the last color used
const colors = [
  'is-green',
  'is-yellow',
  'is-red',
  'is-blue'
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
const randomColor = () => {
  const color = colors[getRandomIntInclusive(0, colors.length - 1)];
  if (color === lastColor) {
    return randomColor();
  }
  lastColor = color;
  return color;
};

const colorByLevel = (lvl) => {
  switch (parseInt(lvl, 10)) {
    case 5:
    case 4:
      return 'is-green';
    case 3:
      return 'is-blue';
    case 2:
      return 'is-yellow';
    case 1:
      return 'is-red';
    default:
      return 'is-red';
  }
};

export { colorByLevel, randomColor };
