import { motion } from 'framer-motion';

import { ProjectDetailsResponsiveImagesType } from '../projectDetailsTypes/projectDetailsTypes';
import {
  getRandomNumber,
  animationVariants,
} from '../../animationVariants/animationsVariants';

function ProjectDetailsResponsiveImages({
  desktopVersionSrc,
  desktopVersionAlt,
  tabletVersionSrc,
  tabletVersionAlt,
  mobileVersionSrc,
  mobileVersionAlt,
}: ProjectDetailsResponsiveImagesType) {
  const imagesVariant = animationVariants;
  const imagesAnimation = {
    initial: {
      x: imagesVariant.initial.x[getRandomNumber(0, 2)],
      y: imagesVariant.initial.y[getRandomNumber(0, 2)],
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: imagesVariant.animate.transition.ease[getRandomNumber(0, 10)],
      },
    },
  };

  return (
    <motion.div
      className="width-imp"
      variants={imagesAnimation}
      initial="initial"
      animate="animate"
    >
      <div className="w-[100%] mx-auto flex flex-col justify-center items-center">
        <img
          className="mt-14 md:w-[70%] lg:w-[80%] xl:w-[70%] 2xl:w-[45%]"
          src={desktopVersionSrc}
          alt={desktopVersionAlt}
        />
        <div className="flex flex-col md:flex-row">
          <img
            className="ml-[-8px] sm:w-[80%] sm:mx-auto md:w-[40%] md:mt-0 lg:w-[50%] xl:w-[40%] 2xl:w-[90%]"
            src={tabletVersionSrc}
            alt={tabletVersionAlt}
          />
          <img
            className="sm:w-[70%] sm:mx-auto sm:mt-0 md:w-[30%] lg:w-[40%] xl:w-[30%] 2xl:w-[90%]"
            src={mobileVersionSrc}
            alt={mobileVersionAlt}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetailsResponsiveImages;
