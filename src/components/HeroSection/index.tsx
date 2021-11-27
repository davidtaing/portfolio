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
      margin: 0;
    }

    .subheadline {
      display: none;
    }
  }

  .hero-container--image {
    grid-area: image;
  }

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr 2fr;
    grid-template-areas: "text . image";
    height: calc(100vh - 60px);

    .hero-container {
      display: flex;
      align-items: center;
    }

    .hero-container--text {
      .headline {
        margin: 2rem 0;
        font-weight: 500;
        font-size: 5rem;
        line-height: 5.25rem;
      }

      .subheadline {
        display: block;
        margin: 2rem 0;
        font-weight: 300;
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledSection id="home" className="hero-section">
      <div className="hero-container--text">
        <h1 className="headline text-primary">
          Creating Web
          <br />
          Experiences
          <br />
          That Move You.
        </h1>
        <h2 className="subheadline text-secondary">
          Sydney Based Fullstack Developer
          <br />
          with a focus on TypeScript & React.
        </h2>
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
