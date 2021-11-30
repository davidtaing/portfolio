import { useState, FormEvent } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../Button";

const StyledSection = styled.section`
  background-color: var(--clr-light-bg);
  width: 100%;
  min-height: 100vh;

  form {
    margin: 2rem 0rem;
    font-size: var(--fs-400);
    height: 100%;

    > :not(:last-child) {
      width: 100%;
    }

    input {
      font-size: var(--fs-400);
      height: 50px;
      border-radius: 5px;
      margin-bottom: 1rem;
    }
    textarea {
      height: 150px;
      font-size: var(--fs-400);
      border-radius: 5px;
      resize: none;
      margin-bottom: 1rem;
    }

    button {
      margin-top: 1rem;
    }
  }

  @media (min-width: 80em) {
    form {
      max-width: 50%;
    }
  }
`;

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        message,
      });

      console.log(response);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledSection id="contact" className="contact-section">
      <div className="wrapper">
        <div className="content-container">
          <h1 className="section-title">Contact</h1>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="name">Your Name:</label>
            <br />
            <input
              id="name"
              className="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="email">Email Address:</label>
            <br />
            <input
              id="email"
              className="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              className="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <br />
            <Button type="submit">
              <span>Send Message </span>
            </Button>
          </form>
        </div>
      </div>
    </StyledSection>
  );
};

export default ContactSection;
