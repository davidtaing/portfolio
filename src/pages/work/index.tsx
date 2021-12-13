import type { NextPage } from "next";
import styled from "styled-components";
import CaseStudyCard from "../../components/CaseStudyCard";
import { useProjectContext } from "../../contexts/ProjectsContext";
import ProjectCard from "../../components/ProjectCard";

const StyledDiv = styled.div`
  grid-template-rows: repeat(1fr);
  grid-gap: 1rem;
  padding-bottom: 5rem;

  .pmcloud-card {
    background-color: #bde0fe;
  }

  @media (min-width: 50em) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Work: NextPage = () => {
  const projects = useProjectContext();

  return (
    <div className="work-page">
      <div className="wrapper content-wrapper">
        <StyledDiv className="grid">
          <h1>Case Studies</h1>
          <CaseStudyCard
            className="case-study-card pmcloud-card"
            category="Property Management Software"
            title="pmcloud"
            subtitle="In Progress"
            description="What happens when a property manager and a software developer meet?
            What if they were the same person?"
            skills={[
              "TypeScript",
              "React",
              "Next.js",
              "Express",
              "Mongoose",
              "OpenAPI",
              "API First Design",
            ]}
          />
          <h1>Projects</h1>
          {projects.map((project) => (
            <ProjectCard key={`work-${project.title}`} project={project} />
          ))}
        </StyledDiv>
      </div>
    </div>
  );
};

export default Work;
