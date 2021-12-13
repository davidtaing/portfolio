import { FC } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  size?: "medium" | "large";
}

const StyledArticle = styled.article`
  border-radius: 10px;
  padding: 2rem;

  .text-container {
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

    .subtitle {
      color: var(--clr-text-tertiary);
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
  }
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
