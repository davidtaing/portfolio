import { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  content: string;
}

const StyledDiv = styled.div`
  div {
    p {
      margin-top: 1rem;
    }

    figure {
      margin: 1rem 0;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }

      figcaption {
        padding-bottom: 1rem;
      }
    }
  }
`;

const BlogPost: FC<Props> = ({ title, content }) => (
  <StyledDiv className="blogpost">
    <h1 className="title">{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </StyledDiv>
);

export default BlogPost;
