import { FC } from "react";
import styled from "styled-components";
import Card from "../Card";

interface Props {
  className?: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  size?: "medium" | "large";
}

const StyledDiv = styled.div`
  margin: auto 0;

  > * {
    margin: 0;
    padding: 0;
  }

  .category {
    color: var(--clr-text-secondary);
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 500;
  }

  .title {
    margin-top: 0.5rem;
    color: var(--clr-text-primary);
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 600;
  }

  .description {
    margin-top: 1rem;
    color: var(--clr-text-primary);
    font-size: 1.25rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    list-style-type: none;
    color: var(--clr-text-secondary);
    font-size: 0.875rem;

    li {
      margin: 0.25rem 1.5rem 0rem 0;
    }
  }
`;

const SelectWorkCard: FC<Props> = ({
  className,
  title,
  category,
  description,
  skills,
  size = "medium",
}) => {
  return (
    <Card size={size} className={className}>
      <StyledDiv className="text-container">
        <h4 className="category">{category}</h4>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={`${title}-${skill}`}>{skill}</li>
          ))}
        </ul>
      </StyledDiv>
      {size === "large" ? <div className="image-container"></div> : null}
    </Card>
  );
};

export default SelectWorkCard;
