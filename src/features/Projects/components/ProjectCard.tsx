import styled from "styled-components";

const StyledDiv = styled.div`
  grid-column: span 4;
  background-color: rgba(227, 227, 227, 1);
  border-radius: 10px;
  aspect-ratio: 3/2;

  @media (min-width: 1200px) {
    grid-column: span 6;
  }
`;

export function ProjectCard() {
  return <StyledDiv className="project-card"></StyledDiv>;
}
