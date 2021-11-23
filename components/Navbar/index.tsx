import Link from "next/link";
import styled from "styled-components";
import NavItem from "../NavItem";

const StyledNav = styled.nav`
  color: #ffffff;
  display: flex;
  height: 60px;
  align-items: center;

  .nav-logo {
    font-weight: bold;
    font-size: 1.5rem;
    font-style: italic;
    padding: 0 1.5rem;
  }

  menu {
    height: 100%;
    display: flex;
    margin-left: auto;
    padding: 0;
    align-items: center;
    list-style: none;

    li {
      height: 100%;
      display: none;

      .nav-link {
        padding: 0 1.5rem;
      }
    }

    .nav-item.active {
      background-color: rgba(255, 255, 255, 15%);
    }
  }

  .hamburger {
    display: flex;
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    menu {
      li {
        display: flex;
        align-items: center;
      }
    }

    .hamburger {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <div className="wrapper">
      <StyledNav>
        <Link href="/">
          <a className="nav-logo">TEEANG</a>
        </Link>
        <menu className="nav-menu">
          <NavItem href="/" text="Home" />
          <NavItem href="/projects" text="My Projects" />
          <NavItem href="/contact" text="Contact Me" />
        </menu>
      </StyledNav>
    </div>
  );
};

export default Navbar;
