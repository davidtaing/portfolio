import Link from "next/link";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: calc(100vh - 60px);
  height: calc(100vh - 60px);
  background-color: var(--bg-clr-dark);

  .content {
    margin: auto 0;
    justify-content: center;

    .cta-button-container {
      margin-top: 3rem;

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
      <div className="wrapper content-wrapper">
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
            <Link href="/#select-work">
              <a>
                <button className="select-work-btn btn-primary">
                  View Select Work
                </button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <button className="contact-btn btn-secondary">
                  Or Contact Me
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default HeroSection;
