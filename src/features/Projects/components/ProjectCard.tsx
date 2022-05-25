import styled from "styled-components";
import { Project } from "../types";
import { ProjectCardImage } from "./ProjectCardImage";

const StyledDiv = styled.div`
  position: relative;
  grid-column: span 4;
  aspect-ratio: 3/2;
  word-wrap: break-word;
  border: solid 1px rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  .container {
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    margin-bottom: 
    z-index: 1;

    @media (min-width: 768px) {
      .description {
        height: 4.5rem;
      }
    }
  }

  h4 {
    margin-top: 0;
    color: black;
  }

  @media (min-width: 1200px) {
    grid-column: span 6;
  }
`;

interface Props extends Project {}

export function ProjectCard({
  title,
  slug,
  description,
  imageUrl,
  imageSize,
  backgroundColor,
}: Props) {
  return (
    <StyledDiv className="project-card">
      <ProjectCardImage
        imageUrl={imageUrl}
        backgroundColor={backgroundColor}
        backgroundSize={imageSize}
      />

      <div className="container">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
        <p>
          <a href={`/projects/${slug}`}>Read More</a>
        </p>
      </div>
    </StyledDiv>
  );
}
