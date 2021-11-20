import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #212121;
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
    </StyledNav>
  );
};

export default Navbar;
