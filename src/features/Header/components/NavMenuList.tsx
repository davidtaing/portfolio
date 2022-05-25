import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavMenuItem } from "./NavMenuItem";

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

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export function NavMenuList({ visible, setVisible }: Props) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <StyledUl className="nav-menu__list flex">
      <HamburgerMenu visible={visible} setVisible={setVisible} />
      <NavMenuItem
        visible={visible}
        href="/"
        text="Home"
        currentRoute={currentRoute}
      />
      <NavMenuItem
        visible={visible}
        href="/projects"
        text="Projects"
        currentRoute={currentRoute}
      />
      <NavMenuItem
        visible={visible}
        href="/blogs"
        text="Blogs"
        currentRoute={currentRoute}
      />
      <NavMenuItem
        visible={visible}
        href="/contact-me"
        text="Contact Me"
        currentRoute={currentRoute}
      />
    </StyledUl>
  );
}
