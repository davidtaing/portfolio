import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: #212121;

  ul {
    max-width: 1440px;
    max-height: 60px;
    margin: auto;
    padding: 0 1rem;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: flex-end;

    li {
      margin: 0px;
      padding: 0.5rem 1rem;
      color: #fff;
    }

    h1 {
      font-weight: normal;
      font-style: italic;
      font-size: 1.5rem;
      text-align: left;
    }

    .nav-left {
      margin-right: auto;
    }

    .nav-right:active {
      background-color: #fff;
      opacity: 20%;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledDiv>
      <ul>
        <li className="nav-logo nav-left">
          <h1 className="logo">
            <Link href="/">TEEANG</Link>
          </h1>
        </li>
        <li className="nav-right">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-right">
          <Link href="/">Projects</Link>
        </li>
        <li className="nav-right">
          <Link href="/">{"Let's Talk"}</Link>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default Navbar;
