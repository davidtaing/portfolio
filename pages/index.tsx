import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  color: #212121;

  .container {
    margin: 1rem;
    height: auto;
    width: auto;

    h1 {
      max-width: 450px;
      font-weight: 500;
      font-size: 3.75rem;
      letter-spacing: 0.06rem;
      line-height: 4.375rem;
    }

    h2 {
      margin-top: 0px;
      font-weight: normal;
      font-size: 2.25rem;
      letter-spacing: 0.02rem;
      line-height: 2.875rem;
    }

    img {
      margin: auto;
      padding: 0px 1rem 0px 2rem;
      max-height: 800px;
      max-width: 600px;
      border-radius: 30px;
      opacity: 0.8;
      object-fit: cover;
    }

    .primary-btn {
      background-color: #212121;
      color: #fff;
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      border: 0px;
    }

    .primary-btn:active {
      opacity: 90%;
    }
  }

  .container.left {
    width: 100%;
    padding: 0.5px 2.5rem 0.5px 1.5rem;
  }

  .container.right {
    width: 100%;
    padding: 0.5px 1.5rem 0.5px 2.5rem;
  }
`;

const StyledSvg = styled.svg`
  display: inline;
  position: relative;
`;

const SvgElement = () => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    width="92.853"
    height="48.39"
    viewBox="0 0 92.853 48.39"
  >
    <path
      id="Path"
      d="M3186.127,1855.291l49.467-38.495-8.692,38.495L3258.7,1831.3l-3.414,23.994,19.352-14.108-3.875,17.236"
      transform="translate(-3184.899 -1811.786)"
      fill="none"
      stroke="rgba(33,33,33,0.85)"
      strokeWidth="4"
    />
  </StyledSvg>
);

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <StyledDiv>
          <div className="container left">
            <h1 className="heading">
              I design and build great fullstack applications
            </h1>

            <SvgElement />
            <h2 className="subheading">
              Sydney Based Developer with a focus on TypeScript, React, Next.js
              & Express.
            </h2>
            <button className="primary-btn">View Projects</button>
          </div>
          <div className="container right">
            <Image
              src="https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
              width="600px"
              height="700px"
              alt="Image of George St, Sydney, Australia"
            />
          </div>
        </StyledDiv>
      </main>
    </div>
  );
};

export default Home;
