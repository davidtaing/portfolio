import { FC, useContext } from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

import SectionName from "../../../enums/SectionName";
import { useActiveSectionContext } from "../../../contexts/ActiveSectionContext";

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
  sectionName: SectionName;
}

const Section: FC<Props> = ({ id, className, sectionName, children }) => {
  const { setActiveSection } = useActiveSectionContext();

  return (
    <InView
      onChange={(inview, entry) => {
        console.log(`${SectionName[sectionName]} section inView: ${inview}`);

        if (inview) {
          setActiveSection(sectionName);
          console.log(`set ActiveSection to ${SectionName[sectionName]}`);
        }
      }}
      threshold={0.3}
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
