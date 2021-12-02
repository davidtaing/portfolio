import Link from "next/link";
import styled from "styled-components";
import SectionName from "../../../enums/SectionName";
import NavItem from "../NavItem";

const StyledNav = styled.nav`
  background-color: var(--clr-dark-blue);

  .wrapper {
    display: flex;
    height: 60px;
    align-items: center;

    .nav-logo {
      color: var(--clr-primary-light);
      font-weight: bold;
      font-size: 1.5rem;
      font-style: italic;
      padding: 0 1.5rem;
    }

    menu {
      display: flex;
      margin-left: auto;
      padding: 0;
      align-items: center;
      list-style: none;

      li {
        display: none;

        .nav-link {
          padding: 0 1.5rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    position: fixed;
    width: 100%;
    z-index: 10;

    .wrapper {
      menu {
        li {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <div className="wrapper">
        <Link href="/">
          <a className="nav-logo">TEEANG</a>
        </Link>
        <menu className="nav-menu">
          <NavItem sectionName={SectionName.home} text="Home" />
          <NavItem sectionName={SectionName.projects} text="My Projects" />
          <NavItem sectionName={SectionName.contact} text="Contact Me" />
        </menu>
      </div>
    </StyledNav>
  );
};

export default Navbar;
