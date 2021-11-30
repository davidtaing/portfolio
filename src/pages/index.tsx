import type { NextPage } from "next";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

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
      <ProjectsSection />
    </StyledDiv>
  );
};

export default Home;
