import { FC } from "react";
import styled from "styled-components";

interface Props {
  size?: "medium" | "large";
}

const StyledArticle = styled.article`
  border: solid;
  border-radius: 10px;
`;

const Card: FC<Props> = ({ size, children }) => {
  return (
    <StyledArticle
      className={`card ${size === "large" ? " card-large" : " card-medium"}`}
    >
      {children}
    </StyledArticle>
  );
};

export default Card;
