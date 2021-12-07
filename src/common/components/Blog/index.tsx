import { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  content: string;
}

const StyledDiv = styled.div`
  .wrapper {
    .content-container {
      max-width: 800px;
      margin: 0 auto;
    }
  }
`;

const Blog: FC<Props> = ({ title, content }) => {
  return (
    <StyledDiv className="blogpost">
      <div className="wrapper">
        <div className="content-container">
          <h1>{title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </StyledDiv>
  );
};

export default Blog;