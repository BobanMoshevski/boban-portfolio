export const animationVariants = {
  initial: {
    x: [0, 100, -100],
    y: [0, 100, -100],
  },
  animate: {
    transition: {
      ease: [
        'linear',
        'easeIn',
        'easeOut',
        'easeInOut',
        'circIn',
        'circOut',
        'circInOut',
        'backIn',
        'backOut',
        'backInOut',
        'anticipate',
      ],
    },
  },
};

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
