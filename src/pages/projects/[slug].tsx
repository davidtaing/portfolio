import { GetStaticPathsContext, GetStaticPropsContext, NextPage } from "next";
import { MarkdocContent } from "../../features/MarkdocContent/components/MarkdocContent";
import { readMarkdown } from "../../features/MarkdocContent/utils";
import { projects } from "../../features/Projects";

interface Props {
  rawContent: string;
}

const ProjectItemPage: NextPage<Props> = ({ rawContent }: Props) => {
  return <MarkdocContent rawContent={rawContent} />;
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params)
    throw Error("Invalid Params from getStaticPaths for ProjectItemPage");

  const data = await readMarkdown(`./src/content/projects/${params.slug}.md`);

  return {
    props: { rawContent: data.toString() },
  };
}

export default ProjectItemPage;
