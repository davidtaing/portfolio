import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard";
import ViewMoreCard from "../../components/ViewMoreCard";
import { useProjectContext } from "../../contexts/ProjectsContext";

const StyledSection = styled.section`
  padding-bottom: 3rem;
  padding-top: 3.75rem;

  .content {
    .grid {
      margin-top: 1.5rem;
      grid-template-rows: repeat(1fr);
      grid-gap: 1rem;

      @media (min-width: 50em) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;

const SelectWorkSection = () => {
  const projects = useProjectContext();

  return (
    <StyledSection id="select-work" className="select-work-section">
      <div className="wrapper content-wrapper">
        <div className="content">
          <h1 className="fs-h900">Select Work</h1>
          <div className="grid">
            {projects
              .filter((project) => project.feature)
              .map((project) => (
                <ProjectCard
                  key={`select-work-${project.title}`}
                  project={project}
                />
              ))}
            <ViewMoreCard />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default SelectWorkSection;
