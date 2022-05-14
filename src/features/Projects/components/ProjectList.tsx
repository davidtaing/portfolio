import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";

const StyledDiv = styled.div`
  margin-top: 2.5rem;
`;

const data = new Array(5).fill({});

export function ProjectList() {
  return (
    <StyledDiv className="project-list__container grid-layout">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </StyledDiv>
  );
}
