import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Project } from "../types";
import { ProjectCardImage } from "./ProjectCardImage";

const StyledDiv = styled.div`
  grid-column: span 4;
  background-color: rgba(227, 227, 227, 1);
  aspect-ratio: 3/2;
  word-wrap: break-word;
  border: solid 1px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  .container {
    padding: 2rem;
  }

  h6 {
    margin-top: 0;
  }

  h4 {
    margin-top: 0.75rem;
    color: black;
  }

  @media (min-width: 1200px) {
    grid-column: span 6;
  }
`;

interface Props extends Project {}

export function ProjectCard({
  title,
  description,
  githubUrl,
  livePreviewUrl,
  thumbnailUrl,
  thumbnailSize,
}: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <StyledDiv className="project-card">
      <ProjectCardImage
        thumbnailUrl={thumbnailUrl}
        backgroundSize={thumbnailSize}
      />

      {focus ? (
        <div className="container">
          <h4>{title}</h4>
          <p>{description}</p>
          <p>
            {livePreviewUrl ? (
              <a href={livePreviewUrl} target="_blank" rel="noreferrer">
                Live Preview
              </a>
            ) : (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                Github Repo
              </a>
            )}
          </p>
        </div>
      ) : null}
    </StyledDiv>
  );
}
