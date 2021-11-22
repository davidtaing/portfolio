import Link from "next/link";
import styled from "styled-components";

const StyledLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 1rem;
`;

const TabBarItem = ({ href, text, active, onTabClick }: any) => {
  const classNames = "tabbar-item" + (active ? " active" : "");

  return (
    <li className={classNames} onClick={onTabClick}>
      <Link href={href}>
        <a className="tabbar-link">{text}</a>
      </Link>
    </li>
  );
};

export default TabBarItem;
