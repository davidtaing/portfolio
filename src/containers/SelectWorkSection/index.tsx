import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard";
import ViewMoreCard from "../../components/ViewMoreCard";

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
  return (
    <StyledSection id="select-work" className="select-work-section">
      <div className="wrapper content-wrapper">
        <div className="content">
          <h1 className="fs-h900">Select Work</h1>
          <div className="grid">
            <ProjectCard
              className="bg-darkgrey text-light"
              size="large"
              title="portfolio"
              category="Website"
              skills={[
                "TypeScript",
                "React",
                "Next.js",
                "Headless Wordpress",
                "SendGrid API",
              ]}
              description="You are here. My portfolio website
            to showcase my projects."
            />
            <ProjectCard
              className="bg-accent text-dark"
              title="photo-sorter"
              category="Node.js App"
              skills={["JavaScript", "Node"]}
              description="Loads exif metadata from image files and sorts them into folders by date. Used to sort over 17,000 photos accumulated from my real estate work."
            />
            <ViewMoreCard />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default SelectWorkSection;
