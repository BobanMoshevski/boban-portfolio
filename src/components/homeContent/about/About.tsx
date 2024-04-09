import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { aboutInformation as about } from '../../../../data/projectsData';
import {
  aboutImageVariant,
  aboutTextVariant,
  aboutVariant,
  representationTextVariant,
} from '../homeContentAnimations/homeContentAnimations';
import url from './resume/Resume-Boban-Moshevski.pdf';
import { AboutInformationType } from '../../../util/projectsDataTypes/projectsDataTypes';
import './AboutStyle.css';

function About() {
  const aboutInformation: AboutInformationType = about;
  const pathResume: string = url;

  return (
    <div id="home" className="home-wrapper">
      <motion.div
        className="mt-20"
        variants={representationTextVariant}
        initial="initial"
        animate="animate"
      >
        <motion.div className="text-center" variants={aboutVariant}>
          <h1 className="text-3xl md:text-4xl">Hello, I am Boban</h1>
          <h4 className="text-1xl md:text-2xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Front-End Developer')
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          <h6 className="text-base md:text-lg">Welcome to my portfolio!</h6>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 p-10 gap-4 lg:grid-cols-4 ">
        <motion.div
          className="col-span-1 "
          variants={aboutImageVariant}
          initial="initial"
          animate="animate"
        >
          <img
            className="boban-image mx-auto"
            src={aboutInformation.imagePath}
            alt={aboutInformation.imageName}
          />
        </motion.div>

        <motion.div
          className="col-span-1 text-center border-solid border-2 #fff rounded-3xl p-3 pb-7 lg:col-span-3"
          variants={aboutTextVariant}
          initial="initial"
          animate="animate"
        >
          <p className="mb-10">{aboutInformation.aboutText}</p>
          <a
            className="border-solid border-2 #fff rounded-3xl hover:border-slate-700 hover:text-slate-700 p-4"
            href={pathResume}
            download="Resume-Boban-Moshevski.pdf"
          >
            Download resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
