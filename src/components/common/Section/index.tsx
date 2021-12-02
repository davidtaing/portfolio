import { FC, useContext } from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

import { ActiveSectionContext } from "../../../contexts/ActiveSectionContext";
import SectionName from "../../../enums/SectionName";

const StyledSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

interface Props {
  id: string;
  className: string;
  name: SectionName;
}

const Section: FC<Props> = ({ id, className, name, children }) => {
  const activeSection = useContext(ActiveSectionContext);

  return (
    <InView
      onChange={(inview, entry) =>
        console.log(`${className} inView: ${inview}`)
      }
      threshold={0.2}
    >
      {({ inView, ref, entry }) => (
        <StyledSection ref={ref} id={id} className={className}>
          {children}
        </StyledSection>
      )}
    </InView>
  );
};

export default Section;
