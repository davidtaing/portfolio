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
    font-size: 20px;
    line-height: 1.3;
  }

  .title {
    color: var(--clr-text-primary);
    font-size: 32px;
    line-height: 1.3;
  }

  .description {
    color: var(--clr-text-secondary);
    font-size: 24px;
  }

  .skills {
    color: var(--clr-text-tertiary);
    font-size: 16px;
    list-style-type: none;
    display: flex;

    li {
      margin: 1rem 1.5rem 1rem 0;
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
      <StyledDiv>
        <h4 className="category">{category}</h4>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={`${title}-${skill}`}>{skill}</li>
          ))}
        </ul>
      </StyledDiv>
    </Card>
  );
};

export default SelectWorkCard;
