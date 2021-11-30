import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  category: string;
  title: string;
  skills: Array<string>;
  imageUrl: string;
  bodyText: string;
  previewType?: string;
  url?: string;
}

const StyledLi = styled.li`
  display: grid;
  margin: 2rem 0;

  .project-card--text {
    .project-card--category {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 24px;
      color: #474747;
    }

    .project-card--title {
      font-size: 40px;
      color: #000000;
    }

    .project-card--body {
      font-size: 24px;
      color: #272727;
    }

    .project-card--skill-list {
      padding: 0;
      flex-direction: row;
      font-size: 18px;
      color: #474747;
    }

    .project-card--skill-list > * {
      margin: 1rem 0.75rem 1rem 0;
      display: inline;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text image";

    .project-card--text,
    .project-card--image {
      margin: 2rem 0;
    }

    .project-card--text {
      grid-area: text;
      max-width: 80%;
    }

    .project-card--image {
      grid-area: image;
    }
  }
`;

const ProjectCard: FC<Props> = ({
  category,
  title,
  skills,
  imageUrl,
  bodyText,
  previewType,
  url,
}) => (
  <StyledLi className="project-card">
    <div className="project-card--image">
      <Image
        src={imageUrl}
        alt={imageUrl}
        height="551"
        width="966"
        layout="responsive"
      />
    </div>
    <div className="project-card--text">
      <p className="project-card--category">{category}</p>
      <h2 className="project-card--title">{title}</h2>
      <p className="project-card--body">
        {bodyText}
        {previewType ? (
          <p>
            <strong>View {previewType}:</strong>{" "}
            <a
              className="project-card--preview-url"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          </p>
        ) : null}
      </p>
      <ul className="project-card--skill-list">
        {skills.map((item) => (
          <li key={`${title}-${item}`}>{item}</li>
        ))}
      </ul>
    </div>
  </StyledLi>
);

export default ProjectCard;
