import type { NextPage } from "next";
import { Header } from "../features/Header";
import { ProjectCard } from "../features/Projects";

const data = new Array(5).fill({});

const Projects: NextPage = () => {
  return (
    <div className="projects">
      <Header />
      <div className="wrapper">
        <div className="text-container grid-layout">
          <h1 className="fluid-heading-05">Projects</h1>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
