import { useEffect } from "react";
import { GetStaticProps, NextPage } from "next";

// Contexts
import { useBlogsContext } from "../../common/contexts/BlogsContext";

// Utils
import { getBlogs } from "../../utils/blogs";

// Components
import BlogPreviewCard from "../../common/components/BlogPreviewCard";

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
          {blogs.map(({ node: { slug, title, excerpt } }) => (
            <BlogPreviewCard
              key={slug}
              slug={slug}
              title={title}
              excerpt={excerpt}
            />
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
