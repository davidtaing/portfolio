import { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  content: string;
}

const StyledDiv = styled.div`
  div {
    figure {
      margin: 0;

      img {
        width: 100%;
        height: 100%;
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
