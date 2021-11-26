import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const StyledDiv = styled.div`
  .homepage-content {
    height: calc(100vh - 120px);
    margin: 0;

    .homepage-container {
      margin: 1rem 1.5rem;
      width: auto;

      .text-container {
        display: flex;
        flex-direction: column;

        .headline {
          padding: 0;
          margin: 0;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 2.75rem;
          text-align: left;
        }

        .sub-headline {
          font-weight: normal;
          font-size: 1.375rem;
          line-height: 1.75rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .homepage-content {
      max-height: 1000px;
      height: calc(100vh - 60px);
    }
  }
`;

const Home: NextPage = () => {
  return (
    <StyledDiv className="homepage">
      <div className="wrapper">
        <div className="homepage-content">
          <div className="homepage-container">
            <div className="text-container">
              <h1 className="headline text-primary">
                I design and build great fullstack applications.
              </h1>
              <h2 className="sub-headline text-secondary">
                Sydney based developer with a focus on TypeScript, React & Next.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Home;
