import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

import NavbarItem from "../NavbarItem";

interface Props {}

const StyledHeader = styled.header`
  height: 60px;

  .sticky {
    height: 60px;
    width: 100%;
    background-color: var(--bg-clr-dark);
    position: fixed;
    z-index: 10;
  }

  .wrapper {
    .flex {
      align-items: center;

      .logo {
        display: inline;
        margin-right: auto;
        color: var(--clr-light-primary);
        font-style: italic;
        font-weight: 500;
        font-size: 1.5rem;
      }

      .nav-list {
        display: none;
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          display: inline;
          margin-left: 2.5rem;
          a {
            color: var(--clr-light-secondary);
          }
        }

        @media (min-width: 50em) {
          display: inline;
        }
      }
    }
  }
`;

const Navbar: FC<Props> = () => {
  return (
    <StyledHeader>
      <div className="sticky">
        <div className="wrapper">
          <div className="flex">
            <div className="logo">
              <Link href="/">
                <a>TEEANG</a>
              </Link>
            </div>
            <ul className="nav-list">
              <NavbarItem href="/#" text="Home" />
              <NavbarItem href="/blogs" text="Blog" />
              <NavbarItem href="/work" text="Work" />
              <NavbarItem href="/contact" text="Contact" />
            </ul>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
