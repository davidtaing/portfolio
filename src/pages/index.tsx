import type { NextPage } from "next";
import ContactSection from "../components/contact/ContactSection";
import HeroSection from "../components/hero/HeroSection";
import ProjectsSection from "../components/projects/ProjectsSection";

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
