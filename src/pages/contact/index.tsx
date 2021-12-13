import type { NextPage } from "next";
import ContactForm from "../../containers/ContactForm";

const Contact: NextPage = () => {
  return (
    <div className="contact">
      <div className="wrapper content-wrapper">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
