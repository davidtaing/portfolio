import styled from "styled-components";
import ProjectPreviewCard from "../ProjectPreviewCard";
import Section from "../../Section";
import { useProjectsContext } from "../../../contexts/ProjectsContext";

const StyledSection = styled(Section)`
  background-color: white;

  .wrapper {
    h1 {
      font-size: var(--fs-xl);
      line-height: 1.2;
    }

    .projects-list {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      padding: 0;

      h2 {
        font-size: var(--fs-600);
      }
    }
  }
`;

const ProjectsPreviewSection = () => {
  const projects = useProjectsContext();

  return (
    <StyledSection id="projects" className="projects-preview-section">
      <div className="wrapper">
        <div className="content-container">
          <h1>Projects</h1>
          <ul className="projects-list">
            {projects.map(({ title, ...props }: any) => (
              <ProjectPreviewCard key={title} title={title} {...props} />
            ))}
          </ul>
        </div>
      </div>
    </StyledSection>
  );
};

export default ProjectsPreviewSection;
