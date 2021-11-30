import { FC } from "react";

interface Props {
  title: string;
  skills: Array<string>;
  bodyText: string;
  previewType?: "string";
  url?: "string";
}

const ProjectCard: FC<Props> = ({
  title,
  skills,
  bodyText,
  previewType,
  url,
}) => (
  <li>
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
  </li>
);

export default ProjectCard;
