import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import LabelForm from '../labelForm/LabelForm';
import {
  animationVariants,
  getRandomNumber,
} from '../../animationVariants/animationsVariants';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const reg = /\S+@\S+\.\S+/;
  const validFormBtn =
    name.length !== 0 && message.length !== 0 && reg.test(email);
  const contactFormVariant = animationVariants;
  const contactFormAnimation = {
    initial: {
      x: contactFormVariant.initial.x[getRandomNumber(0, 2)],
      y: contactFormVariant.initial.y[getRandomNumber(0, 2)],
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: contactFormVariant.animate.transition.ease[
          getRandomNumber(0, 10)
        ],
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const myForm = e.target as HTMLFormElement;
    const formData: FormData = new FormData(myForm);

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formObject),
    })
      .then(() => navigate('/success'))
      .catch(() => navigate('/error'));
  };

  return (
    <motion.div
      className="shadow-lg shadow-gray-50/70 rounded-md w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%]"
      variants={contactFormAnimation}
      initial="initial"
      whileInView="animate"
    >
      <form
        onSubmit={handleSubmit}
        className="shadow-inner shadow-gray-50/70 p-4 rounded-md"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <LabelForm labelFor="name" onChange={setName} />

        <LabelForm labelFor="email" onChange={setEmail} />

        <LabelForm labelFor="message" onChange={setMessage} />

        <button
          className="btn btn-square btn-outline mt-5"
          disabled={!validFormBtn}
          type="submit"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;
