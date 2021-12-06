import type { NextPage } from "next";
import { useBlogsContext } from "../context/BlogsContext";

const Blogs: NextPage = () => {
  const { blogs } = useBlogsContext();
  return (
    <div className="blogs">
      <div className="wrapper">
        <div className="content-container">
          {blogs.map((blog) => (
            <div key={blog.node.slug}>
              <h2 className="title">{blog.node.title}</h2>
              <div
                className="excerpt"
                dangerouslySetInnerHTML={{ __html: blog.node.excerpt }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
