import { useState, FormEvent } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledForm = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export function ContactForm() {
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
    <StyledForm onSubmit={onSubmitHandler}>
      <div className="labelled-input">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          className="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="labelled-input">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          className="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="labelled-input">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="button-container">
        <button className="button--primary" type="submit">
          Send Message
        </button>
      </div>
    </StyledForm>
  );
}
