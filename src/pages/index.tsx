import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const StyledDiv = styled.div``;

const Home: NextPage = () => {
  return (
    <StyledDiv className="homepage">
      <HeroSection />
    </StyledDiv>
  );
};

export default Home;
