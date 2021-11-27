import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledLi = styled.li`
  color: var(--clr-secondary-light);

  .active {
    color: var(--clr-primary-light);
  }
`;

const NavBarItem = ({ href, text }: any) => {
  const path = useRouter().asPath;

  return (
    <StyledLi className="nav-item">
      <Link href={href}>
        <a className={"nav-link" + (href === path ? " active" : "")}>{text}</a>
      </Link>
    </StyledLi>
  );
};

export default NavBarItem;
