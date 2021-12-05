import type { NextPage } from "next";
import HeroSection from "../components/hero/HeroSection";
import ProjectsSection from "../components/projects/ProjectsSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
