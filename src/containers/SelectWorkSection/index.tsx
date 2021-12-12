import styled from "styled-components";

const StyledSection = styled.section`
  .content {
    border: solid;
  }
`;

const SelectWorkSection = () => {
  return (
    <StyledSection>
      <div className="wrapper grid-col-12">
        <div className="content">
          <article className="card-large">
            <div className="title">{}</div>
            <div className="category">{}</div>
            <div className="description">{}</div>
            <div className="skills">{}</div>
          </article>
          <article className="card-medium"></article>
          <article className="card-medium">See More</article>
        </div>
      </div>
    </StyledSection>
  );
};

export default SelectWorkSection;
