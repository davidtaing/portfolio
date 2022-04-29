import type { NextPage } from "next";
import { Header } from "../features/Header";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="wrapper">
        <StyledDiv className="grid">
          <div>
            <h1 className="hero__headline">
              <span className="lines">Build</span> the{" "}
              <span className="text--underline-yellow">Solution</span> to Your{" "}
              <span className="scribble">Problem</span>
            </h1>
            <h4 className="hero__subheadline">
              We build software in order to solve problems. If it isn&apos;t
              solving the problems that our clients care about, then
              there&apos;s no business value.
            </h4>
          </div>
        </StyledDiv>
      </div>
    </div>
  );
};

export default Home;
