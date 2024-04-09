import { AnimationVariants } from '../animationVariants/AnimationsVariantsTypes';
import {
  animationVariants,
  getRandomNumber,
} from '../animationVariants/animationsVariants';
import { AnimationType } from './contactContentTypes';

const contactFormVariant: AnimationVariants = animationVariants;

export const formAnimation: AnimationType = {
  initial: {
    x: contactFormVariant.initial?.x?.[getRandomNumber(0, 2)],
    y: contactFormVariant.initial?.y?.[getRandomNumber(0, 2)],
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: contactFormVariant.animate?.transition?.ease?.[
        getRandomNumber(0, 10)
      ],
    },
  },
};

const contactInforamtionVariant: AnimationVariants = animationVariants;

export const contactInforamtionAnimation: AnimationType = {
  initial: {
    x: contactInforamtionVariant.initial?.x?.[getRandomNumber(0, 2)],
    y: contactInforamtionVariant.initial?.y?.[getRandomNumber(0, 2)],
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: contactInforamtionVariant.animate?.transition?.ease?.[
        getRandomNumber(0, 10)
      ],
    },
  },
};
