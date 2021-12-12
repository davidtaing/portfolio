import styled from "styled-components";

const StyledSection = styled.section`
  height: calc(100vh - 60px);

  .content {
    margin: auto 0;
    justify-content: center;

    .cta-button-container {
      > * {
        margin-top: 3rem;
      }

      .contact-btn {
        display: none;
        margin-left: 2rem;

        @media (min-width: 50em) {
          display: inline;
        }
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledSection className="hero-section">
      <div className="wrapper grid-col-12">
        <div className="content">
          <h1 className="fs-xl clr-light-primary">
            Turn your ideas
            <br className="desktop-only" /> into websites & apps.
          </h1>
          <h2 className="fs-l clr-light-secondary">
            Sydney Based Fullstack Developer
            <br className="desktop-only" /> with a focus on TypeScript, React &
            Express.
          </h2>
          <div className="cta-button-container">
            <button className="select-work-btn btn-primary fs-h600">
              View Select Work
            </button>
            <button className="contact-btn btn-secondary fs-h600">
              Or Contact Me
            </button>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default HeroSection;
