import Link from "next/link";
import styled from "styled-components";
import { useHeaderContext } from "../contexts/HeaderContext";

interface Props {
  href: string;
  text: string;
}

const StyledLi = styled.li`
  display: none;
  text-decoration: none;

  .nav-menu__link {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    display: inline;
  }
`;

export function NavMenuItem({ href, text }: Props) {
  const { visible, currentRoute } = useHeaderContext();

  const activeClass = currentRoute === href ? "active" : "";
  const visibleClass = visible ? "visible" : "";
  const className = `nav-menu__item ${visibleClass} ${activeClass}`;

  return (
    <StyledLi className={className}>
      <Link href={href}>
        <a className="nav-menu__link">{text}</a>
      </Link>
    </StyledLi>
  );
}
