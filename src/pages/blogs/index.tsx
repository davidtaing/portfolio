import { useEffect } from "react";
import { GetStaticProps, NextPage } from "next";

// Contexts
import { useBlogsContext } from "../../contexts/BlogsContext";

// Utils
import { getBlogs } from "../../utils/blogs";

// Components

// Types
import { Post } from "../../utils/blogs";

const Blogs: NextPage<{ data: Post[] }> = ({ data }) => {
  const { blogs, setBlogs } = useBlogsContext();

  useEffect(() => {
    console.log(data);
    setBlogs(data);
  }, [data, setBlogs]);

  return (
    <section className="blogs">
      <div className="wrapper content-wrapper">
        {blogs.map(({ node }) => (
          <article key={node.slug} className="blogpost-card">
            <h1 className="title">{node.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </article>
        ))}
      </div>
    </section>
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
