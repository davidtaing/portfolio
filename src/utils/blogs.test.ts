import { getBlogs } from "./blogs";

// TODO Move into Integration Test Folder
describe("Retrieves Data from https://blogs.teeang.net/graphql", () => {
  test("Returns an GraphQL Response", async () => {
    const result = await getBlogs();

    expect(result).toBe(null);
  });
});
