import type { NextPage } from "next";
import { Header } from "../features/Header";

const Projects: NextPage = () => {
  return (
    <div className="projects">
      <Header />
      <div className="wrapper">
        <div className="text-container">
          <h1 className="fluid-heading-05">Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
