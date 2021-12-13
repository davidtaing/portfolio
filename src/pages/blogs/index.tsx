import { useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

// Contexts
import { useBlogsContext } from "../../contexts/BlogsContext";

// Utils
import { getBlogs } from "../../utils/blogs";

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
        {blogs.map(({ node }) => {
          const blogUrl = `/blogs/${node.slug}`;

          return (
            <article key={node.slug} className="blogpost-card">
              <Link href={blogUrl}>
                <a>
                  <h1 className="title">{node.title}</h1>
                </a>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <Link href={blogUrl}>
                <a>
                  <p className="read-more-linl">Read More.</p>
                </a>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

type Props = {
  data: Post[];
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
