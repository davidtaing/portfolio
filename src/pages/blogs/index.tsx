import { useEffect } from "react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";

// Contexts
import { useBlogsContext } from "../../common/contexts/BlogsContext";

// Components
import { getBlogs } from "../../utils/blogs";

// Types
import { Post } from "../../utils/blogs";

const Blogs: NextPage<{ data: [Post] }> = ({ data }) => {
  const { blogs, setBlogs } = useBlogsContext();

  useEffect(() => {
    setBlogs(data);
  }, [data, setBlogs]);

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
              />{" "}
              <a href="https://blog.teeang.net/building-a-property-management-application/">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type Props = {
  data: [Post];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getBlogs();
  return {
    props: {
      data: data,
    },
  };
};

export default Blogs;
