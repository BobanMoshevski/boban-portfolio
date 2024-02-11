import ContactForm from '../contactForm/ContactForm';
import ContactInformation from '../contactInformation/ContactInformation';

function Contact() {
  return (
    <>
      <h1 className="text-center text-white text-4xl xl:text-5xl pt-20">
        Contact
      </h1>
      <div className="flex justify-center items-center w-[100%] min-h-[85vh]">
        <div className="flex flex-col gap-10 justify-around items-center w-[90%] sm:w-[100%] xl:flex-row xl:gap-0">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
