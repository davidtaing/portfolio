import styled from "styled-components";
import { useHeaderContext } from "../contexts/HeaderContext";
import { NavMenuList } from "./NavMenuList";

const StyledDiv = styled.div`
  justify-content: end;

  @media (max-width: 767px) {
    &.active {
      height: 100vh;
      width: 100vw;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: var(--primary-light);
    }
  }
`;

export function NavMenu() {
  const { visible } = useHeaderContext();

  return (
    <StyledDiv className={`nav-menu ${visible ? "active" : ""}`}>
      <NavMenuList />
    </StyledDiv>
  );
}
