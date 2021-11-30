import type { NextPage } from "next";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
