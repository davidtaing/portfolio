import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { title } from "process";
import { getBlogWithSlug } from "../../utils/blogs";
import { Post } from "../../utils/blogs";

const BlogPage: NextPage = ({ post }: any) => {
  const { content, title } = post;

  return <Blog content={content} title={title} />;
};

export const Blog = ({ title, content }: any) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  // get all slugs via. fetch

  return {
    paths: [{ params: { slug: "user-story-property-dashboard" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slug = params.slug;
  const data = await getBlogWithSlug(slug);

  return {
    props: {
      post: data,
    },
  };
};

export default BlogPage;
