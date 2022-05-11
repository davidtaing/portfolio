import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "../features/Header";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="circle-graphic">
        <Image
          src="/circle-graphic.png"
          alt=""
          width="750"
          height="750"
          style={{ overflow: "visible" }}
        />
      </div>
      <div className="wrapper">
        <div className="hero grid">
          <div className="image-container">
            <Image
              src="/leigh-Wp3xWCVXMCI-unsplash.jpg"
              alt="Picture of Sydney Courtesy of @Leigh."
              width="343"
              height="250"
              layout="responsive"
              priority
            />
          </div>
          <div className="text-container">
            <h1 className="hero__headline fluid-heading-05">
              Build the Solution To Your Problem.
            </h1>
            <h4 className="hero__subheadline fluid-heading-03">
              Let&apos;s Build Products That Your Customers Love.
            </h4>
            <button className="button--primary cta__button">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
