import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  title: string;
  skills: Array<string>;
  imageUrl: string;
  bodyText: string;
  previewType?: string;
  url?: string;
}

const StyledLi = styled.li`
  display: grid;
  border: solid;
  margin: 2rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text image";

    .project-card-text,
    .project-card-image {
      margin: 2rem 0;
    }

    .project-card-text {
      grid-area: text;
      max-width: 80%;
    }

    .project-card-image {
      grid-area: image;
    }
  }
`;

const ProjectCard: FC<Props> = ({
  title,
  skills,
  imageUrl,
  bodyText,
  previewType,
  url,
}) => (
  <StyledLi className="project-card">
    <div className="project-card-image">
      <Image
        src={imageUrl}
        alt={imageUrl}
        height="551"
        width="966"
        layout="responsive"
      />
    </div>
    <div className="project-card-text">
      <h2>{title}</h2>
      <ul className="skill-list">
        {skills.map((item) => (
          <li key={`${title}-${item}`}>{item}</li>
        ))}
      </ul>
      <p>{bodyText}</p>
      {previewType ? (
        <p>
          {previewType}:{" "}
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
      ) : null}
    </div>
  </StyledLi>
);

export default ProjectCard;
