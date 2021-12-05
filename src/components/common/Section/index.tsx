import { FC, useContext } from "react";
import styled from "styled-components";

import SectionName from "../../../enums/SectionName";

const StyledSection = styled.section`
  min-height: calc(100vh - 60px);

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

interface Props {
  id: string;
  className: string;
  sectionName: SectionName;
  threshold?: number;
}

const Section: FC<Props> = ({ id, className, sectionName, children }) => {
  return (
    <StyledSection id={id} className={className}>
      {children}
    </StyledSection>
  );
};

export default Section;
