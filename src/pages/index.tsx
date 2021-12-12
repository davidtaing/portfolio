import type { NextPage } from "next";
import HeroSection from "../containers/HeroSection";
import SelectWorkSection from "../containers/SelectWorksSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <SelectWorkSection />
    </div>
  );
};

export default Home;
