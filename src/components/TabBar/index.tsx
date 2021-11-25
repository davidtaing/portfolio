import styled from "styled-components";
import TabBarItem from "../TabBarItem";

const StyledNav = styled.nav`
  background-color: #212121;
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
      margin: 0px 2rem;
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

  @media (min-width: 768px) {
    display: none;
  }
`;

const TabBar = () => {
  return (
    <StyledDiv>
      <StyledNav>
        <menu className="tabbar">
          <TabBarItem href="/" text="Home" iconName="home" />
          <TabBarItem href="/projects" text="Projects" iconName="web" />
          <TabBarItem href="/contact" text="Contact" iconName="chat_bubble" />
        </menu>
      </StyledNav>
    </StyledDiv>
  );
};

export default TabBar;
