import { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  content: string;
}

const StyledDiv = styled.div`
  .wrapper {
    max-width: 800px;

    .content-container {
      .content {
        figure {
          img {
            max-width: 100%;
            height: auto;
            width: auto;
          }
        }
      }
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
