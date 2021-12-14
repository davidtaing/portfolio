import styled from "styled-components";
import TabBarItem from "../TabbarItem";

const StyledNav = styled.nav`
  background-color: var(--bg-clr-dark);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 10;

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
      margin: 0px 1rem;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

/**
 * Wrapper Div for TabBar to prevent content going underneath the TabBar.
 */
const StyledDiv = styled.div`
  height: 60px;

  @media (min-width: 50rem) {
    display: none;
  }
`;

const Tabbar = () => {
  return (
    <StyledDiv>
      <StyledNav className="text-light">
        <menu className="tabbar">
          <TabBarItem href="/#" text="Home" iconName="home" />
          <TabBarItem href="/blogs" text="Blog" iconName="article" />
          <TabBarItem href="/work" text="Work" iconName="web" />
          <TabBarItem href="/contact" text="Contact" iconName="chat_bubble" />
        </menu>
      </StyledNav>
    </StyledDiv>
  );
};

export default Tabbar;
