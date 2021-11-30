import styled from "styled-components";
import ProjectCard from "../ProjectCard";

const StyledSection = styled.section`
  .wrapper {
    .content {
      margin: 2rem 1.5rem;

      h1 {
        font-size: var(--fs-xl);
        line-height: 1.2;
        margin: 1rem 0;
      }

      ul {
        display: grid;
        list-style: none;
        margin: 0;
        padding: 0;

        h2 {
          font-size: var(--fs-600);
        }

        .skill-list {
        }
      }
    }
  }
`;

const ProjectsSection = () => (
  <StyledSection id="projects" className="projects-section">
    <div className="wrapper">
      <div className="content">
        <h1>Projects</h1>
        <ul className="projects-list">
          <ProjectCard
            title="portfolio"
            skills={["TypeScript", "React", "Next.js", "CSS"]}
            bodyText="You are here. My portfolio website to showcase my projects."
          />
          <ProjectCard
            title="photo-sorter"
            skills={["JavaScript", "Node"]}
            bodyText="Loads exif metadata from image files and sorts them into folders
            by date. Used to sort over 17,000 photos accumulated from my real
            estate work."
          />
          <ProjectCard
            title="email-sender"
            skills={["TypeScript", "Node", "SendGrid API", "CSS"]}
            bodyText="Loads data from a spreadsheet and batch sends emails with
            individual attachments using the SendGrid API."
          />
        </ul>
      </div>
    </div>
  </StyledSection>
);

export default ProjectsSection;
