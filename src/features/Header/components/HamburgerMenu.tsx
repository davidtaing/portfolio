import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const StyledSpan = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;

export function HamburgerMenu({ visible, setVisible }: Props) {
  return (
    <StyledSpan
      className="hamburger-menu material-symbols-outlined"
      onClick={() => setVisible(!visible)}
    >
      menu
    </StyledSpan>
  );
}
