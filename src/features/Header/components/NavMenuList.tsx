import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavMenuItem } from "./NavMenuItem";
import { useHeaderContext } from "../contexts/HeaderContext";

const StyledUl = styled.ul`
  flex-direction: column;
  margin: 1rem 1rem 1rem;
  list-style: none;
  padding: 0;
  align-items: flex-end;
  gap: 1rem;

  .active {
    text-decoration: underline;
  }

  .visible {
    display: inline;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.5rem;
  }
`;

export function NavMenuList() {
  return (
    <StyledUl className="nav-menu__list flex">
      <HamburgerMenu />
      <NavMenuItem href="/" text="Home" />
      <NavMenuItem href="/projects" text="Projects" />
      <NavMenuItem href="https://blog.teeang.net/" text="Blogs" />
      <NavMenuItem href="/contact-me" text="Contact Me" />
    </StyledUl>
  );
}
