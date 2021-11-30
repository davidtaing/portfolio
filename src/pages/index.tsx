import type { NextPage } from "next";
import ContactSection from "../components/contact/ContactSection";
import HeroSection from "../components/hero/HeroSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ActiveSectionProvider from "../contexts/ActiveSectionContext";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <ActiveSectionProvider>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </ActiveSectionProvider>
    </div>
  );
};

export default Home;
