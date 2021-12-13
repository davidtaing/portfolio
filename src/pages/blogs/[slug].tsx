import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import BlogPost from "../../components/BlogPost";
import { getBlogWithSlug, getSlugs } from "../../utils/blogs";

const BlogPage: NextPage = ({ post }: any) => {
  const { title, content } = post;

  return (
    <div className="wrapper content-wrapper">
      <BlogPost title={title} content={content} />
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
