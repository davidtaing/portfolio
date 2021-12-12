import type { NextPage } from "next";
import HeroSection from "../containers/HeroSection/HeroSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <HeroSection />
    </div>
  );
};

export default Home;
