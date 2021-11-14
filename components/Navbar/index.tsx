import Link from "next/link";
import styled from "styled-components";

const StyledUl = styled.ul`
  max-width: 1440px;
  max-height: 60px;
  margin: 0 auto;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-end;

  li {
    padding: 8px 16px;
  }

  h1 {
    display: inline;
  }

  .nav-left {
    margin-right: auto;
  }
`;

const Navbar = () => {
  return (
    <div>
      <StyledUl>
        <li className="nav-logo nav-left">
          <h1 className="logo">
            <Link href="/">TEEANG</Link>
          </h1>
        </li>
        <li className="nav-right">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-right">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="nav-right">
          <Link href="/contact">{"Let's Talk"}</Link>
        </li>
      </StyledUl>
    </div>
  );
};

export default Navbar;
