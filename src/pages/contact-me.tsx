import type { NextPage } from "next";
import { Header } from "../features/Header";
import { ContactForm } from "../features/Header/components/ContactForm";

const Contact: NextPage = () => {
  return (
    <div className="contact">
      <Header />
      <div className="wrapper">
        <div className="text-container">
          <h1 className="fluid-heading-05">Contact Me</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
