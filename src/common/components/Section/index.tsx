import { FC } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: calc(100vh - 60px);

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

interface Props {
  id: string;
  className: string;
  threshold?: number;
}

const Section: FC<Props> = ({ id, className, children }) => {
  return (
    <StyledSection id={id} className={className}>
      {children}
    </StyledSection>
  );
};

export default Section;
