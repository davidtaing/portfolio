import styled from "styled-components";
import ProjectPreviewCard from "../ProjectPreviewCard";
import Section from "../../Section";

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

const data = [
  {
    category: "Website",
    title: "portfolio",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Styled Components",
      "Headless Wordpress",
      "SendGrid API",
    ],
    imageUrl: "/project-mockups/portfolio.png",
    bodyText: "You are here. My portfolio website to showcase my projects.",
  },
  {
    category: "Node App",
    title: "photo-sorter",
    skills: ["JavaScript", "Node"],
    imageUrl: "/project-mockups/photo-sorter.png",
    bodyText:
      "Loads exif metadata from image files and sorts them into folders by date. Used to sort over 17,000 photos accumulated from my real estate work.",
    previewType: "Demonstration",
    url: "https://youtu.be/cL8a5ofU_W4",
  },
  {
    category: "Node App",
    title: "email-sender",
    skills: ["TypeScript", "Node", "SendGrid API", "CSS"],
    imageUrl: "/project-mockups/email-sender.png",
    bodyText:
      "Loads data from a spreadsheet and batch sends emails with individual attachments using the SendGrid API.",
    previewType: "Demonstration",
    url: "https://youtu.be/G0a3LBJhtfY",
  },
];

const ProjectsPreviewSection = ({ projects = data }: any) => (
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

export default ProjectsPreviewSection;
