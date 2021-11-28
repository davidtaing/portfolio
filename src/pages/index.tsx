import type { NextPage } from "next";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const StyledDiv = styled.div`
  .projects-section {
    background-color: white;
    width: 100%;
    min-height: calc(100vh - 60px);

    @media (min-width: 768px) {
      min-height: 100vh;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <StyledDiv className="homepage">
      <HeroSection />
      <section id="projects" className="projects-section">
        <div className="wrapper">
          <h1>Projects</h1>
          <ul>
            <li>
              <h2>portfolio</h2>
              <span>TypeScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>CSS</span>
              <p>
                My portfolio website. Built with Next.js and TypeScript. Styled
                with CSS.
              </p>
            </li>
            <li>
              <h2>photo-sorter</h2>
              <span>JavaScript</span>
              <span>Node</span>
              <p>
                Loads exif metadata from image files and sorts them into folders
                by date. Used to sort over 17,000 photos accumulated from my
                real estate work.
              </p>
            </li>
            <li>
              <h2>email-sender</h2>
              <span>TypeScript</span>
              <span>Node</span>
              <span>SendGrid API</span>
              <p>
                Loads data from a spreadsheet and batch sends emails with
                individual attachments using the SendGrid API.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </StyledDiv>
  );
};

export default Home;
