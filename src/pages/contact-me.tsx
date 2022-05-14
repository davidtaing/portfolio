import type { NextPage } from "next";
import { ContactForm } from "../features/Header/components/ContactForm";

const Contact: NextPage = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="text-container">
          <h1 className="fluid-heading-05">Contact Me</h1>
          <p>Send me a message via. the SendGrid API</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
