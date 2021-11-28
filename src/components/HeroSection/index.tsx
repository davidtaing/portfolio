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
  }

  .hero-container--image {
    grid-area: image;
  }

  @media (min-width: 50em) {
    grid-template-columns: 3fr 1fr 2fr;
    grid-template-areas: "text . image";
    max-height: calc(1080px - 60px);
    height: calc(100vh - 60px);

    .hero-container {
      display: flex;
      align-items: center;
    }

    .hero-container--text {
      .headline {
        margin: 1rem 0;
      }

      .subheadline {
        display: block;
        margin: 1rem 0;
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledSection id="home" className="hero-section">
      <div className="hero-container--text">
        <h1 className="headline text-primary">
          Creating Web Experiences <br />
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
