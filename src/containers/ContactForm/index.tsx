import { useState, FormEvent } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledForm = styled.form`
  height: 100%;

  label {
    font-size: 0.875rem;
    font-weight: 700;
  }

  input {
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    height: 45px;
  }

  textarea {
    resize: none;
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    height: 10rem;
  }

  button {
    background-color: var(--clr-grey);
    color: var(--clr-light-primary);
  }
`;

const ContactForm = () => {
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
    <StyledForm className="flex-col" onSubmit={onSubmitHandler}>
      <label htmlFor="name">Your Name:</label>
      <input
        id="name"
        className="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email Address:</label>
      <input
        id="email"
        className="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        className="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">
        <span>Send Message </span>
      </button>
    </StyledForm>
  );
};

export default ContactForm;
