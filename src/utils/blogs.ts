import "isomorphic-fetch";

export const getBlogs = async () => {
  fetch(process.env.WORDPRESS_API_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query postsQuery{
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
     }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res.data));
};
