import { FC } from "react";
import Link from "next/link";
import Icon from "../../common/Icon";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useActiveSectionContext } from "../../../contexts/ActiveSectionContext";
import SectionName from "../../../enums/SectionName";

const StyledLi = styled.li`
  .tabbar-container {
    color: var(--clr-secondary-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
  }

  .active {
    color: var(--clr-primary-light);
  }
`;

interface Props {
  sectionName: SectionName;
  text: string;
  iconName: string;
}

const TabBarItem: FC<Props> = ({ sectionName, text, iconName }) => {
  const { activeSection } = useActiveSectionContext();
  const href = `/#${SectionName[sectionName]}`;

  return (
    <StyledLi className="tabbar-item">
      <div
        className={
          "tabbar-container" + (sectionName === activeSection ? " active" : "")
        }
      >
        <Icon iconName={iconName} />
        <Link href={href}>
          <a className="tabbar-link">{text}</a>
        </Link>
      </div>
    </StyledLi>
  );
};

export default TabBarItem;
