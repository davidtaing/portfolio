import { FC } from "react";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
}

const BlogPreviewCard: FC<Props> = ({ slug, title, excerpt }) => {
  const url = `/blogs/${slug}`;

  return (
    <div key={slug}>
      <a href={url}>
        <h2 className="title">{title}</h2>
      </a>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <a href={url}>Read More</a>
    </div>
  );
};

export default BlogPreviewCard;
