import "isomorphic-fetch";

const query = `query GetPosts{
  posts{
    edges{
      node{
        title
        categories{
          edges{
            node{
              name
            }
          }
        }
        excerpt
        slug
        content
      }
    }
  }
 }`;

export type Post = {
  node: {
    title: string;
    categories: {
      edges: [
        node: {
          name: string;
        }
      ];
    };
    excerpt: string;
    slug: string;
    content: string;
  };
};

export const getBlogs = async (): Promise<[Post]> => {
  try {
    const response = await fetch("https://blog.teeang.net/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query,
      }),
    });
    const posts = (await response.json()).data.posts.edges;
    return posts;
  } catch (err) {
    throw err;
  }
};
