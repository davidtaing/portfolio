// Wraps the header element

import styled from "styled-components";
import Navbar from "../Navbar";

const StyledHeader = styled.header`
  background-color: #212121;
`;

const Header = () => (
  <StyledHeader>
    <Navbar />
  </StyledHeader>
);

export default Header;
