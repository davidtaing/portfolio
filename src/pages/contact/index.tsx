import { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <div className="wrapper content-wrapper">
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
      </div>
    </div>
  );
};

export default Contact;
