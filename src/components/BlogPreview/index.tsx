import { FC } from "react";
import Link from "next/link";
import { Post } from "../../services/blogService";

const BlogPreview: FC<Post> = ({ node }) => {
  {
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
            <p className="read-more-linl">
              <em>Read More.</em>
            </p>
          </a>
        </Link>
      </article>
    );
  }
};

export default BlogPreview;
