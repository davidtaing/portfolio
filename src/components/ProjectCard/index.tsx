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

  .text-container {
    .category {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      color: #474747;
    }

    .title {
      font-size: 40px;
      color: #000000;
    }

    .body {
      color: #272727;
    }

    .skill-list {
      padding: 0;
      flex-direction: row;
      color: #474747;
    }

    .skill-list > * {
      margin: 1rem 0.75rem 1rem 0;
      display: inline;
    }
  }

  @media (min-width: 80em) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text image";

    .text-container,
    .image-container {
      margin: 2rem 0;
    }

    .text-container {
      grid-area: text;
      max-width: 80%;

      .category {
        margin-top: 0;
        font-size: 24px;
      }

      .body {
        font-size: 24px;
      }

      .skill-list {
        font-size: 18px;
      }
    }

    .image-container {
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
    <div className="image-container">
      <Image
        src={imageUrl}
        alt={imageUrl}
        height="551"
        width="966"
        layout="responsive"
      />
    </div>
    <div className="text-container">
      <p className="category">{category}</p>
      <h2 className="title">{title}</h2>
      <p className="body">
        {bodyText}
        {previewType ? (
          <p>
            <strong>View {previewType}:</strong>{" "}
            <a
              className="preview-url"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          </p>
        ) : null}
      </p>
      <ul className="skill-list">
        {skills.map((item) => (
          <li key={`${title}-${item}`}>{item}</li>
        ))}
      </ul>
    </div>
  </StyledLi>
);

export default ProjectCard;
