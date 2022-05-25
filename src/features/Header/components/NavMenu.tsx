import { useState } from "react";
import styled from "styled-components";
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
  const [visible, setVisible] = useState(false);

  return (
    <StyledDiv className={`nav-menu ${visible ? "active" : ""}`}>
      <NavMenuList visible={visible} setVisible={setVisible} />
    </StyledDiv>
  );
}
