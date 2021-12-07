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
    content?: string;
  };
};

const executeQuery = async (query: string, variables?: any) => {
  try {
    const response = await fetch("https://blog.teeang.net/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
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

  const response = await executeQuery(query);
  return response.data.posts.edges;
};

export const getBlogWithSlug = async (slug: string) => {
  const query = `query GetBlogWithSlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      author {
        node {
          name
        }
      }
      content
      featuredImage {
        node {
          uri
        }
      }
      title
    }
  }
  `;

  const posts = (await response.json()).data.posts.edges;
  try {
    const response = await fetch("https://blog.teeang.net/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query,
        variables: {
          slug: slug,
        },
      }),
    });

    return (await response.json()).data.post;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getSlugs = async (): Promise<Array<string>> => {
  const query = `query GetSlugs {
    posts {
      nodes {
        slug
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

    return (await response.json()).data.posts.nodes.map(
      ({ slug }: any) => slug
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};
