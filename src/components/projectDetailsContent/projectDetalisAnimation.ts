import { AnimationVariants } from '../animationVariants/AnimationsVariantsTypes';
import {
  animationVariants,
  getRandomNumber,
} from '../animationVariants/animationsVariants';
import { AnimationVariantType } from './projectDetailsTypes';

const imagesVariant: AnimationVariants = animationVariants;

export const imagesAnimationVariant: AnimationVariantType = {
  initial: {
    x: imagesVariant.initial?.x?.[getRandomNumber(0, 2)],
    y: imagesVariant.initial?.y?.[getRandomNumber(0, 2)],
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: imagesVariant.animate?.transition?.ease?.[getRandomNumber(0, 10)],
    },
  },
};

const descriptionVariant: AnimationVariants = animationVariants;

export const descriptionAnimationVariant: AnimationVariantType = {
  initial: {
    x: descriptionVariant.initial?.x?.[getRandomNumber(0, 2)],
    y: descriptionVariant?.initial?.y?.[getRandomNumber(0, 2)],
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: descriptionVariant.animate?.transition?.ease?.[
        getRandomNumber(0, 10)
      ],
    },
  },
};
