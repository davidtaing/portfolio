import styled from "styled-components";
import { useHeaderContext } from "../contexts/HeaderContext";

const StyledSpan = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;

export function HamburgerMenu() {
  const { visible, setVisible } = useHeaderContext();

  return (
    <StyledSpan
      className="hamburger-menu material-symbols-outlined"
      onClick={() => setVisible(!visible)}
    >
      menu
    </StyledSpan>
  );
}
