import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    topic: z.string(),
    // Shown above the post when the piece is deliberately kept as a period record.
    archiveNote: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    // The outcome is the point: a project going quiet and a project closed on
    // purpose are different events, and only one of them is a result.
    state: z.enum(["shipped", "killed", "active", "parked"]),
    stack: z.string(),
    period: z.string(),
    // One or two sentences, used on the home page listing.
    summary: z.string(),
    // Longer standfirst shown under the title on the project's own page.
    lede: z.string(),
    repo: z.url().optional(),
    site: z.url().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, projects };
