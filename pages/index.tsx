import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: block;
  .homepage-content {
    margin: 1rem 1.5rem;

    .homepage-image {
      border-radius: 16px;
      overflow: hidden;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <StyledDiv className="homepage">
      <div className="wrapper">
        <div className="homepage-content">
          <div className="homepage-image">
            <Image
              src="https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
              width="640px"
              height="940px"
              layout="responsive"
              alt="Image of George St, Sydney, Australia"
            />
          </div>
          <div>
            <h1 className="headline">
              I design and build great fullstack applications
            </h1>
            <h2 className="sub-headline">
              Sydney based developer with a focus on TypeScript, React & Next
            </h2>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Home;
