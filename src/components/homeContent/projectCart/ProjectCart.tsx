import { Link } from 'react-router-dom';
import { Variants, motion } from 'framer-motion';
import {
  animationVariants,
  getRandomNumber,
} from '../../animationVariants/animationsVariants';
import { ProjectsType } from '../homeContentTypes';
import { AnimationVariants } from '../../animationVariants/AnimationsVariantsTypes';

function ProjectCart({ project }: { project: ProjectsType }) {
  const cartVariant: AnimationVariants = animationVariants;
  const cartAnimation: Variants = {
    initial: {
      x: cartVariant.initial?.x?.[getRandomNumber(0, 2)],
      y: cartVariant.initial?.y?.[getRandomNumber(0, 2)],
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.7,
        ease: cartVariant.animate?.transition?.ease?.[getRandomNumber(0, 10)],
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-200 rounded-lg overflow-hidden"
      variants={cartAnimation}
      initial="initial"
      whileInView="animate"
    >
      <div className="flex flex-col h-[100%] text-center text-black">
        <img
          src={project.projectCart?.imageSrc}
          alt={project.projectCart?.imageAlt}
        />
        <div className="flex flex-col justify-between h-[100%]">
          <h5 className="text-lg font-bold px-4 mt-3">
            {project.projectTitle}
          </h5>
          <p className="py-6 px-2">{project.projectCart?.description}</p>
          <Link
            to={project.to ? project.to : '/'}
            className="bg-gray-500 text-lime-50 rounded-md w-[40%] p-1 mb-4 mx-auto hover:bg-gray-400 hover:text-gray-900"
          >
            Read more
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCart;
