import { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  skills: Array<string>;
  imageUrl: string;
  bodyText: string;
  previewType?: string;
  url?: string;
}

const ProjectCard: FC<Props> = ({
  title,
  skills,
  imageUrl,
  bodyText,
  previewType,
  url,
}) => (
  <li>
    <div className="project-card-image">
      <Image
        src={imageUrl}
        alt={imageUrl}
        height="600"
        width="600"
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
          {previewType}: {url}
        </p>
      ) : null}
    </div>
  </li>
);

export default ProjectCard;
