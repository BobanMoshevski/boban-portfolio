export const representationTextVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

export const aboutVariant = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.5,
      delay: 1.5,
    },
  },
};

export const aboutImageVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1.5,
    },
  },
};

export const aboutTextVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1.5,
    },
  },
};
