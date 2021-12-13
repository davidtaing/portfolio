import { FC } from "react";

interface Props {
  title: string;
  content: string;
}

const BlogPost: FC<Props> = ({ title, content }) => (
  <div className="blogpost">
    <h1 className="title">{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export default BlogPost;
