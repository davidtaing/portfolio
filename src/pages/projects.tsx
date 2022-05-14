import type { NextPage } from "next";
import styled from "styled-components";
import { ProjectCard } from "../features/Projects";

const StyledDiv = styled.div`
  margin-top: 2.5rem;
`;

const data = new Array(5).fill({});

const Projects: NextPage = () => {
  return (
    <div className="projects">
      <div className="wrapper">
        <div className="text-container">
          <h1 className="fluid-heading-05">Projects</h1>
          <StyledDiv className="project-list__container grid-layout">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </StyledDiv>
        </div>
      </div>
    </div>
  );
};

export default Projects;
