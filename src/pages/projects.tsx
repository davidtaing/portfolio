import type { NextPage } from "next";
import { Header } from "../features/Header";

const data = new Array(5).fill({});

function ProjectsCard() {
  return <div className="projects-card">ProjectsCard</div>;
}

const Projects: NextPage = () => {
  return (
    <div className="projects">
      <Header />
      <div className="wrapper">
        <div className="text-container grid-layout">
          <h1 className="fluid-heading-05">Projects</h1>
          {data.map((project, index) => (
            <ProjectsCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
