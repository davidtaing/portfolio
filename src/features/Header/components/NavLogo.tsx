import Link from "next/link";
import styled from "styled-components";

const StyledA = styled.a`
  margin: 1rem 1rem 1rem;
  display: inline;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;

  .underline {
    text-decoration: underline;
  }
`;

export function NavLogo() {
  return (
    <Link href="/" passHref={true}>
      <StyledA className="nav-menu__logo">
        <span className="underline">Tee</span>ang
      </StyledA>
    </Link>
  );
}
