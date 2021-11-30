import Image from "next/image";
import styled from "styled-components";
import profilePic from "../../../public/portrait-1024.png";
import CTAButton from "../CTAButton";

const StyledSection = styled.section`
  background-color: var(--clr-dark-blue);

  .wrapper {
    display: grid;
    grid-template-areas:
      "text"
      "image";
    max-height: calc(1080px - 120px);
    height: calc(100vh - 120px);

    .image-container,
    .text-container {
      margin: 1rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .text-container {
      grid-area: text;

      .headline {
        color: var(--clr-primary-light);
        margin: 0;
      }

      .subheadline {
        display: none;
        color: var(--clr-secondary-light);
      }

      .cta-button {
        display: none;
        margin-top: 1rem;
      }
    }

    .image-container {
      grid-area: image;
      width: 75%;
      margin: 1rem auto;
    }

    @media (min-width: 50em) {
      grid-template-columns: 3fr 1fr 2fr;
      grid-template-areas: "text . image";
      max-height: min(60vw, calc(1200px - 60px));
      height: calc(100vh - 60px);

      .hero-container {
        display: flex;
        align-items: center;
      }

      .text-container {
        .headline {
          margin: 2rem 0;
        }

        .subheadline {
          display: block;
          margin: 2rem 0;
        }

        .cta-button {
          display: block;
        }
      }

      .image-container {
        margin: 1rem 1.5rem 1rem auto;
        width: calc(100% - 1.5rem);
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledSection id="home" className="hero-section">
      <div className="wrapper">
        <div className="text-container">
          <div>
            <h1 className="headline">
              Creating Web Experiences <br />
              That Move You.
            </h1>
            <h3 className="subheadline">
              Sydney Based Fullstack Developer
              <br />
              with a focus on TypeScript & React.
            </h3>
          </div>
          <CTAButton href="/#projects">View Projects</CTAButton>
        </div>
        <div className="image-container">
          <Image
            src={profilePic}
            alt="A picture of me! Hello."
            width="768"
            height="768"
            layout="responsive"
          />
        </div>
      </div>
    </StyledSection>
  );
};

export default HeroSection;
