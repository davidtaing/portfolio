import { FC } from "react";
import Link from "next/link";
import Icon from "../../common/Icon";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  href: string;
  text: string;
  iconName: string;
}

const TabBarItem: FC<Props> = ({ href, text, iconName }) => {
  const path = useRouter().asPath;

  return (
    <StyledLi className="tabbar-item">
      <div className={"tabbar-container" + (href === path ? " active" : "")}>
        <Icon iconName={iconName} />
        <Link href={href}>
          <a className="tabbar-link">{text}</a>
        </Link>
      </div>
    </StyledLi>
  );
};

export default TabBarItem;
