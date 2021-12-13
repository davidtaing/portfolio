import type { NextPage } from "next";
import styled from "styled-components";
import CaseStudyCard from "../../components/CaseStudyCard";
import SelectWorkCard from "../../components/SelectWorkCard";

const StyledDiv = styled.div`
  margin-top: 1.5rem;
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
          <SelectWorkCard
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
          <SelectWorkCard
            className="bg-accent text-dark"
            title="photo-sorter"
            category="Node.js App"
            skills={["JavaScript", "Node"]}
            description="Loads exif metadata from image files and sorts them into folders by date. Used to sort over 17,000 photos."
          />
          <SelectWorkCard
            className="bg-lightgrey text-dark"
            title="email-sender"
            category="Node.js App"
            skills={["TypeScript", "Node", "SendGrid API"]}
            description="Loads data from a spreadsheet and batch sends emails with individual attachments using the SendGrid API."
          />
        </StyledDiv>
      </div>
    </div>
  );
};

export default Work;
