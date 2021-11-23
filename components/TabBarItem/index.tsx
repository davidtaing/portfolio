import Link from "next/link";
import Icon from "../Icon";
import styled from "styled-components";

const StyledLi = styled.li`
  .tabbar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;

    color: #b4b4b4;
  }

  .active {
    color: #ffffff;
  }
`;

const TabBarItem = ({ href, text, iconName, active, onTabClick }: any) => {
  return (
    <StyledLi className="tabbar-item" onClick={onTabClick}>
      <div className={"tabbar-container" + (active ? " active" : "")}>
        <Icon iconName={iconName} />
        <Link href={href}>
          <a className="tabbar-link">{text}</a>
        </Link>
      </div>
    </StyledLi>
  );
};

export default TabBarItem;
