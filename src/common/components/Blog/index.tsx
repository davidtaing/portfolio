import { FC } from "react";

interface Props {
  title: string;
  content: string;
}

const Blog: FC<Props> = ({ title, content }) => {
  return (
    <div className="blogpost">
      <div className="wrapper">
        <div className="content-container">
          <h1>{title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
