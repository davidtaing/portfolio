import Image from "next/image";
import styled from "styled-components";
import profilePic from "../../../public/portrait-1024.png";

const StyledSection = styled.section`
  display: grid;
  grid-template-areas:
    "text"
    "image";

  .hero-container--image,
  .hero-container--text {
    margin: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-container--text {
    grid-area: text;

    .headline {
      color: var(--clr-primary-light);
      margin: 0;
      font-weight: 500;
      font-size: var(--fs-xl);
      line-height: 1.2;
    }

    .subheadline {
      display: none;
      color: var(--clr-secondary-light);
      font-weight: 300;
      font-size: var(--fs-600);
      line-height: 1.5;
    }

    button {
      display: none;
      font-size: var(--fs-400);
      border-radius: 5px;
      margin-top: 1rem;
    }
  }

  .hero-container--image {
    grid-area: image;
    width: 75%;
    margin: 1rem auto;
  }

  @media (min-width: 50em) {
    grid-template-columns: 3fr 1fr 2fr;
    grid-template-areas: "text . image";
    max-height: min(60vw, calc(1080px - 60px));
    height: calc(100vh - 60px);

    .hero-container {
      display: flex;
      align-items: center;
    }

    .hero-container--text {
      .headline {
        margin: 2rem 0;
      }

      .subheadline {
        display: block;
        margin: 2rem 0;
      }

      button {
        display: block;
      }
    }

    .hero-container--image {
      margin: 1rem 1.5rem 1rem auto;
      width: calc(100% - 1.5rem);
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledSection id="home" className="hero-section">
      <div className="hero-container--text">
        <div className="hero-container--block">
          <h1 className="headline">
            Creating Web Experiences <br />
            That Move You.
          </h1>
          <h2 className="subheadline">
            Sydney Based Fullstack Developer
            <br />
            with a focus on TypeScript & React.
          </h2>
          <button>View Projects</button>
        </div>
      </div>
      <div className="hero-container--image">
        <Image
          src={profilePic}
          alt="A picture of me! Hello."
          width="768"
          height="768"
          layout="responsive"
        />
      </div>
    </StyledSection>
  );
};

export default HeroSection;
