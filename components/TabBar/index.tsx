import Link from "next/link";
import styled from "styled-components";
import TabBarItem from "../TabBarItem";

const StyledNav = styled.nav`
  background-color: #555252;
  color: #ffffff;
  height: 60px;
  position: fixed;
  width: 100%;
  bottom: 0;

  menu {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.625rem;

    li {
      display: flex;
      align-items: center;
      padding: 0px 1rem;
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
