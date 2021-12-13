import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getBlogWithSlug, getSlugs } from "../../utils/blogs";

const BlogPage: NextPage = ({ post }: any) => {
  const { content, title } = post;

  return (
    <div className="wrapper content-wrapper">
      <h1 className="title">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: Array<string> = await getSlugs();
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug: slug,
      },
    };
  });

  return {
    paths,
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
