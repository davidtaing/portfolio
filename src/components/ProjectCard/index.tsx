import { FC } from "react";
import Image from "next/image";
import Card from "../Card";
import Project from "../../types/project";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({
  project: { className, title, category, description, skills, imgSrc, size },
}) => {
  return (
    <Card size={size} className={className}>
      <div className="text-container">
        <h4 className="category">{category}</h4>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={`${title}-${skill}`}>{skill}</li>
          ))}
        </ul>
      </div>
      {size === "large" && imgSrc !== null ? (
        <div className="image-container">
          <Image
            src={imgSrc as string}
            width="360px"
            height="360px"
            layout="responsive"
            alt={`Image of ${title}`}
          />
        </div>
      ) : null}
    </Card>
  );
};

export default ProjectCard;
