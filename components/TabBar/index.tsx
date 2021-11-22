import Link from "next/link";
import styled from "styled-components";
import Hamburger from "../Hamburger";

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
      height: 100%;
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
        <li className="tabbar-item active">
          <Link href="/">
            <a className="tabbar-link">Home</a>
          </Link>
        </li>
        <li className="tabbar-item">
          <Link href="/projects">
            <a className="tabbar-link">Projects</a>
          </Link>
        </li>
        <li className="tabbar-item">
          <Link href="/contact">
            <a className="tabbar-link">Contact</a>
          </Link>
        </li>
      </menu>
    </StyledNav>
  );
};

export default TabBar;
