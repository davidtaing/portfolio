import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
// Utils
import { getBlogs } from "../utils/blogs";

// Contexts
import { useBlogsContext } from "./context/BlogsContext";

// Components
import HeroSection from "../common/components/hero/HeroSection";
import ProjectsSection from "../common/components/projects/ProjectsSection";

const Home: NextPage<{ data: [] }> = ({ data }) => {
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
  data: [];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getBlogs();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
};

export default Home;
