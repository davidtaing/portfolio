import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    description: z.string(),
    topic: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

const changelogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  changelog: changelogCollection,
};
