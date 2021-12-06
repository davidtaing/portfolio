import type { NextPage } from "next";

// Components
import HeroSection from "../common/components/hero/HeroSection";
import ProjectsSection from "../common/components/projects/ProjectsSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
