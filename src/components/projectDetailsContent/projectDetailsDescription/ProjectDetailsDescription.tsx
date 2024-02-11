import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ProjectDetailsDescriptionType } from '../projectDetailsTypes/projectDetailsTypes';
import {
  animationVariants,
  getRandomNumber,
} from '../../animationVariants/animationsVariants';

function ProjectDetailsDescription({
  title,
  description,
  languagesAndUtilitiesList = [],
  projectFunctionalities = [],
  gitPath = '',
  deploy = '',
}: ProjectDetailsDescriptionType) {
  const descriptionVariant = animationVariants;
  const descriptionAnimation = {
    initial: {
      x: descriptionVariant.initial.x[getRandomNumber(0, 2)],
      y: descriptionVariant.initial.y[getRandomNumber(0, 2)],
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: descriptionVariant.animate.transition.ease[
          getRandomNumber(0, 10)
        ],
      },
    },
  };

  return (
    <motion.div
      className="w-[100%] min-h-[100%] flex-none p-7 shadow-lg shadow-gray-100/50 text-white lg:w-[30%]"
      variants={descriptionAnimation}
      initial="initial"
      animate="animate"
    >
      <h5 className="text-lg font-semibold mt-12">Project:</h5>
      <p>{title}</p>
      <h5 className="text-lg font-semibold mt-10">Description:</h5>
      <p>{description}</p>
      <h5 className="text-lg font-semibold mt-10">
        Languages and utilities used:
      </h5>
      <ul className="list-disc pl-5">
        {languagesAndUtilitiesList?.map((languagesAndUtilities) => (
          <li key={languagesAndUtilities}>{languagesAndUtilities}</li>
        ))}
      </ul>
      {projectFunctionalities?.length !== 0 && (
        <>
          <h5 className="text-lg font-semibold mt-10">
            Project functionalities:
          </h5>
          <ul className="list-disc pl-5">
            {projectFunctionalities?.map((functionalities) => (
              <li key={functionalities}>{functionalities}</li>
            ))}
          </ul>
        </>
      )}
      <div className="flex justify-around mt-5">
        <Link
          className="btn btn-outline text-gray-100"
          to={gitPath}
          target="_blank"
        >
          View code
        </Link>
        {deploy !== '' && (
          <Link
            className="btn btn-outline text-gray-100"
            to={deploy}
            target="_blank"
          >
            View project
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectDetailsDescription;
