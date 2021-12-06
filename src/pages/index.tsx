import { useEffect } from "react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";

// Utils
import { getBlogs } from "../utils/blogs";

// Contexts
import { useBlogsContext } from "../common/contexts/BlogsContext";

// Components
import HeroSection from "../common/components/hero/HeroSection";
import ProjectsSection from "../common/components/projects/ProjectsSection";

// Types
import { Post } from "../utils/blogs";

const Home: NextPage<{ data: [Post] }> = ({ data }) => {
  const { setBlogs } = useBlogsContext();

  useEffect(() => {
    setBlogs(data);
  }, [data, setBlogs]);

  return (
    <div className="homepage">
      <HeroSection />
      <ProjectsSection />
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

export default Home;
