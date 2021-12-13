import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
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
      <button type="submit">
        <span>Send Message </span>
      </button>
    </StyledForm>
  );
};

export default ContactForm;
