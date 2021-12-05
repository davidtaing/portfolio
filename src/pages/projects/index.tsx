import type { NextPage } from "next";
import ProjectsSection from "../../common/components/projects/ProjectsSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <ProjectsSection />
    </div>
  );
};

export default Home;
