import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Variants, motion } from 'framer-motion';

import LabelForm from '../labelForm/LabelForm';
import { formAnimation } from '../contactAnimation';

function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate: (arg: string) => void = useNavigate();

  // eslint-disable-next-line @typescript-eslint/typedef
  const reg = /\S+@\S+\.\S+/;
  const validFormBtn: boolean =
    name.length !== 0 && message.length !== 0 && reg.test(email);
  const contactFormAnimation: Variants = formAnimation;

  const handleSubmit: (e: React.FormEvent) => void = (e: React.FormEvent) => {
    e.preventDefault();

    const myForm: HTMLFormElement = e.target as HTMLFormElement;
    const formData: FormData = new FormData(myForm);

    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
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
