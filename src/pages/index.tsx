import type { NextPage } from "next";
import { Header } from "../features/Header";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="wrapper">
        <div className="grid">
          <div>
            <h1 className="hero__headline">
              Build the Solution To Your Problem.
            </h1>
            <h4 className="hero__subheadline">
              Let&apos;s Build Products That Your Customers Love.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
