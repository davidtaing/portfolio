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
          {blogs.map(({ node: { slug, title, excerpt } }) => {
            const url = `/blogs/${slug}`;

            return (
              <div key={slug}>
                <a href={url}>
                  <h2 className="title">{title}</h2>
                </a>
                <div
                  className="excerpt"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />{" "}
                <a href={url}>Read More</a>
              </div>
            );
          })}
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
