import Link from "next/link";
import styled from "styled-components";
import TabBarItem from "../TabBarItem";

const StyledNav = styled.nav`
  background-color: #555252;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;

  menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
    list-style: none;
    font-size: 0.625rem;

    li {
      padding: 0px 1rem;
      display: flex;
      align-items: center;
    }
  }
`;

const TabBar = () => {
  return (
    <StyledNav>
      <menu className="tabbar">
        <TabBarItem href={"/"} text={"Home"} />
        <TabBarItem href={"/projects"} text={"Projects"} />
        <TabBarItem href={"/contact"} text={"Contact"} />
      </menu>
    </StyledNav>
  );
};

export default TabBar;
