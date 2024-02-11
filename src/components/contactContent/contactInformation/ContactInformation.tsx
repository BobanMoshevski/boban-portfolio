import { motion } from 'framer-motion';
import Information from '../information/Information';
import {
  animationVariants,
  getRandomNumber,
} from '../../animationVariants/animationsVariants';

function ContactInformation() {
  const contactInforamtionVariant = animationVariants;
  const contactInformationAnimation = {
    initial: {
      x: contactInforamtionVariant.initial.x[getRandomNumber(0, 2)],
      y: contactInforamtionVariant.initial.y[getRandomNumber(0, 2)],
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: contactInforamtionVariant.animate.transition.ease[
          getRandomNumber(0, 10)
        ],
      },
    },
  };

  return (
    <motion.div
      className="shadow-lg shadow-gray-50/70 rounded-md "
      variants={contactInformationAnimation}
      initial="initial"
      whileInView="animate"
    >
      <div className="shadow-inner shadow-gray-50/70 p-4 rounded-md">
        <Information
          margin={Boolean(false)}
          info="name"
          infoText="Name: Boban Moshevski"
        />

        <Information
          info="phone"
          infoText="Phone: +389 75 785 166"
          margin={Boolean(true)}
        />

        <Information
          margin={Boolean(false)}
          info="email"
          infoText="Email: bmoshevski@gmail.com"
        />

        <Information margin={Boolean(true)} info="github" infoText="Github:" />

        <Information
          margin={Boolean(false)}
          info="linkedin"
          infoText="Linkedin:"
        />
      </div>
    </motion.div>
  );
}

export default ContactInformation;
