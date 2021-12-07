import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getBlogWithSlug, getSlugs } from "../../utils/blogs";

import Blog from "../../common/components/Blog";

const BlogPage: NextPage = ({ post }: any) => {
  const { content, title } = post;

  return <Blog content={content} title={title} />;
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
