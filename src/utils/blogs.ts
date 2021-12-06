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

export const getBlogs = async () => {
  const response = await fetch("https://blog.teeang.net/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
    }),
  });

  return await response.json();
};
