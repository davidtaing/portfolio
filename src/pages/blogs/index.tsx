import type { NextPage } from "next";
import { useBlogsContext } from "../../common/contexts/BlogsContext";

const Blogs: NextPage = () => {
  const { blogs } = useBlogsContext();
  return (
    <div className="blogs">
      <div className="wrapper">
        <div className="content-container">
          {blogs.map((blog) => (
            <div key={blog.node.slug}>
              <h2 className="title">{blog.node.title}</h2>
              <div
                className="excerpt"
                dangerouslySetInnerHTML={{ __html: blog.node.excerpt }}
              />{" "}
              <p>
                <em>
                  <strong>
                    I am still in the process of integrating my blog as a
                    Headless CMS. For now, this link will point to the actual
                    blog where the data lives.
                  </strong>
                </em>
              </p>
              <a href="https://blog.teeang.net/building-a-property-management-application/">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
