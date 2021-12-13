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

const StyledDiv = styled.div``;

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
