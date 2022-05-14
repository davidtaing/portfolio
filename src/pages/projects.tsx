import type { NextPage } from "next";
import { ProjectList } from "../features/Projects";

const Projects: NextPage = () => {
  return (
    <div className="projects">
      <div className="wrapper">
        <div className="text-container">
          <h1 className="fluid-heading-05">Projects</h1>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
