import Link from "next/link";
import Icon from "../Icon";
import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
`;

const TabBarItem = ({ href, text, iconName, active, onTabClick }: any) => {
  const classNames = "tabbar-item" + (active ? " active" : "");

  return (
    <StyledLi className={classNames} onClick={onTabClick}>
      <Icon iconName={iconName} />
      <Link href={href}>
        <a className="tabbar-link">{text}</a>
      </Link>
    </StyledLi>
  );
};

export default TabBarItem;
