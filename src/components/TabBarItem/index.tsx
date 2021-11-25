import Link from "next/link";
import Icon from "../Icon";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledLi = styled.li`
  .tabbar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
  }
`;

const TabBarItem = ({ href, text, iconName }: any) => {
  const path = useRouter().asPath;

  return (
    <StyledLi className="tabbar-item">
      <div
        className={
          "tabbar-container" +
          (href === path ? " text-primary" : " text-secondary")
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
