import { FC } from "react";
import Card from "../../components/Card";

interface Props {
  className: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

const CaseStudyCard: FC<Props> = ({
  className,
  category,
  title,
  subtitle,
  description,
  skills,
}) => {
  return (
    <Card className={`card-large ${className}`}>
      <div className="text-container">
        <h4 className="category">{category}</h4>
        <h2 className="title">{title}</h2>
        <p className="subtitle">
          <em>{subtitle}</em>
        </p>
        <p className="description">{description}</p>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={`${title}-${skill}`}>{skill}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
