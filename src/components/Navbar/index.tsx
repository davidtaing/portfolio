import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {}

const StyledHeader = styled.header`
  height: 60px;
  border: solid;
  border-color: white;

  .wrapper {
    align-items: center;

    .logo {
      display: inline;
      margin-right: auto;
      color: var(--color-light-primary);
      font-style: italic;
    }

    ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        display: inline;
        margin-left: 2.5rem;
        a {
          color: var(--color-light-secondary);
        }
      }
    }
  }
`;

const Navbar: FC<Props> = () => {
  return (
    <StyledHeader>
      <div className="wrapper flex">
        <div className="logo">
          <Link href="/">
            <a>TEEANG</a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
