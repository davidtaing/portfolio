import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #212121;
  color: #ffffff;
  display: flex;
  height: 60px;
  align-items: center;

  .nav-logo {
    font-weight: bold;
    font-size: 1.5rem;
    font-style: italic;
    padding: 0 1rem;
  }

  ul {
    height: 100%;
    display: flex;
    margin: 0 0 0 auto;
    padding: 0;
    align-items: center;
    list-style: none;

    li {
      height: 100%;
      display: none;

      .nav-link {
        padding: 0 1rem;
      }
    }
  }

  .hamburger {
    display: flex;
    padding: 0 1rem;
  }

  @media (min-width: 480px) {
    ul {
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
    <StyledNav>
      <Link href="/">
        <a className="nav-logo">TEEANG</a>
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            <a className="nav-link">My Projects</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">Contact Me</a>
          </Link>
        </li>
      </ul>
      <div className="hamburger">MENU</div>
    </StyledNav>
  );
};

export default Navbar;
