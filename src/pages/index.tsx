import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const StyledDiv = styled.div``;

const Home: NextPage = () => {
  return (
    <StyledDiv className="homepage">
      <div className="wrapper">
        <HeroSection />
      </div>
    </StyledDiv>
  );
};

export default Home;
