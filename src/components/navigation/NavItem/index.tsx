import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useActiveSectionContext } from "../../../contexts/ActiveSectionContext";
import SectionName from "../../../enums/SectionName";

const StyledLi = styled.li`
  color: var(--clr-secondary-light);

  .active {
    color: var(--clr-primary-light);
  }
`;

interface Props {
  sectionName: SectionName;
  text: string;
}

const NavBarItem: FC<Props> = ({ sectionName, text }) => {
  const { activeSection } = useActiveSectionContext();
  const href = `/#${SectionName[sectionName]}`;

  return (
    <StyledLi className="nav-item">
      <Link href={href}>
        <a
          className={
            "nav-link" + (sectionName === activeSection ? " active" : "")
          }
        >
          {text}
        </a>
      </Link>
    </StyledLi>
  );
};

export default NavBarItem;
