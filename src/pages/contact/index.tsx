import type { NextPage } from "next";
import styled from "styled-components";
import ContactForm from "../../containers/ContactForm";

const StyledDiv = styled.div`
  h1 {
    margin-bottom: 1.25rem;
  }
`;

const Contact: NextPage = () => {
  return (
    <div className="contact">
      <StyledDiv className="wrapper content-wrapper">
        <h1>Contact Me</h1>
        <ContactForm />
      </StyledDiv>
    </div>
  );
};

export default Contact;
