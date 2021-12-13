import { FC } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  size?: "medium" | "large";
}

const StyledArticle = styled.article`
  border-radius: 10px;
  padding: 2rem;
`;

const Card: FC<Props> = ({ className, size = "medium", children }) => {
  return (
    <StyledArticle
      className={`card ${className} ${
        size === "large" ? " card-large" : " card-medium"
      }`}
    >
      {children}
    </StyledArticle>
  );
};

export default Card;
