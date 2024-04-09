import { Variants, motion } from 'framer-motion';
import Information from '../information/Information';
import { contactInforamtionAnimation } from '../contactAnimation';

function ContactInformation() {
  const contactInformationAnimation: Variants = contactInforamtionAnimation;

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
