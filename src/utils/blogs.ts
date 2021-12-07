import "isomorphic-fetch";

export type Post = {
  node: {
    id: string;
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
  };
};

export const getBlogs = async (): Promise<[Post]> => {
  const query = `query GetPosts {
    posts {
      edges {
        node {
          id
          title
          categories {
            edges {
              node {
                name
              }
            }
          }
          excerpt
          slug
        }
      }
    }
  }
  `;

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
