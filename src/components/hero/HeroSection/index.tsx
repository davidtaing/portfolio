import Image from "next/image";
import styled from "styled-components";
import profilePic from "../../../../public/portrait-1024.png";
import CTAButton from "../CTAButton";
import Section from "../../common/Section";
import SectionName from "../../../enums/SectionName";

const StyledSection = styled(Section)`
  background-color: var(--clr-dark-blue);
  height: -webkit-fill-available;

  .wrapper {
    .content-container {
      .text-container {
        margin: 1rem auto;

        .headline {
          color: var(--clr-primary-light);
          margin: 0;
          margin-bottom: 2rem;
        }

        .subheadline {
          display: none;
          color: var(--clr-secondary-light);
          margin-bottom: 2rem;
        }

        .cta-button {
          display: none;
          margin-top: auto;
        }
      }

      .image-container {
        grid-area: image;
        width: 75%;
        margin: 1rem auto;
      }
    }
  }

  @media (min-width: 50em) {
    .wrapper {
      .content-container {
        display: grid;
        grid-template-columns: 3fr 1fr 2fr;
        grid-template-areas: "text . image";

        .text-container {
          grid-area: text;
          display: flex;
          flex-direction: column;
          width: 100%;

          .subheadline,
          .cta-button {
            display: block;
          }
        }

        .image-container {
          grid-area: image;
          width: 100%;
        }
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledSection id="home" className="hero-section" name={SectionName.home}>
      <div className="wrapper">
        <div className="content-container">
          <div className="text-container">
            <h1 className="headline">
              Creating Web Experiences <br />
              That Move You.
            </h1>
            <h3 className="subheadline">
              Sydney Based Fullstack Developer
              <br />
              with a focus on TypeScript & React.
            </h3>
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
      </div>
    </StyledSection>
  );
};

export default HeroSection;
