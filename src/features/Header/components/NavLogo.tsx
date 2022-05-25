import Link from "next/link";
import styled from "styled-components";

const StyledA = styled.a`
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
