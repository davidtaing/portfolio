import { FC } from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

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
}

const handleIntersection = () => {};

const Section: FC<Props> = ({ id, className, children }) => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <StyledSection ref={ref} id={id} className={className}>
          {children}
        </StyledSection>
      )}
    </InView>
  );
};

export default Section;
