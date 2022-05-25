import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";

const StyledDiv = styled.div`
  margin: 2.5rem 0;
`;

export function ProjectList() {
  return (
    <StyledDiv className="project-list__container grid-layout">
      {projects.map((item) => (
        <ProjectCard key={item.title} {...item} />
      ))}
    </StyledDiv>
  );
}
