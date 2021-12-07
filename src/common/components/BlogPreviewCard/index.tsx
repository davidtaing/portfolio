import { FC } from "react";
import styled from "styled-components";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
}

const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem auto;
`;

const BlogPreviewCard: FC<Props> = ({ slug, title, excerpt }) => {
  const url = `/blogs/${slug}`;

  return (
    <StyledDiv key={slug}>
      <a href={url}>
        <h2 className="title">{title}</h2>
      </a>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <a href={url}>Read More</a>
    </StyledDiv>
  );
};

export default BlogPreviewCard;
