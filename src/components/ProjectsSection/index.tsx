import styled from "styled-components";
import ProjectCard from "../ProjectCard";

const StyledSection = styled.section`
  .wrapper {
    .content {
      margin: 3rem 1.5rem;

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
  }
`;

const ProjectsSection = () => (
  <StyledSection id="projects" className="projects-section">
    <div className="wrapper">
      <div className="content">
        <h1>Projects</h1>
        <ul className="projects-list">
          <ProjectCard
            category="Website"
            title="portfolio"
            skills={["TypeScript", "React", "Next.js", "CSS"]}
            imageUrl="/project-mockups/portfolio.png"
            bodyText="You are here. My portfolio website to showcase my projects."
          />
          <ProjectCard
            category="Node App"
            title="photo-sorter"
            skills={["JavaScript", "Node"]}
            imageUrl="/project-mockups/photo-sorter.png"
            bodyText="Loads exif metadata from image files and sorts them into folders
            by date. Used to sort over 17,000 photos accumulated from my real
            estate work."
            previewType="Demonstration"
            url="https://youtu.be/cL8a5ofU_W4"
          />
          <ProjectCard
            category="Node App"
            title="email-sender"
            skills={["TypeScript", "Node", "SendGrid API", "CSS"]}
            imageUrl="/project-mockups/email-sender.png"
            bodyText="Loads data from a spreadsheet and batch sends emails with
            individual attachments using the SendGrid API."
            previewType="Demonstration"
            url="https://youtu.be/G0a3LBJhtfY"
          />
        </ul>
      </div>
    </div>
  </StyledSection>
);

export default ProjectsSection;
