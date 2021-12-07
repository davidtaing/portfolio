import type { NextPage } from "next";

// Components
import HeroSection from "../common/components/hero/HeroSection";
import ProjectsPreviewSection from "../common/components/projects/ProjectsPreviewSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <ProjectsPreviewSection />
    </div>
  );
};

export default Home;
