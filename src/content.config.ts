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
    // What the work was. It picks the section the project is listed under, and
    // it says how to read the state: on client work the brief and the
    // definition of done came from someone else, so the state does not mean
    // what it means everywhere else. The two personal kinds differ in whether
    // the point was the code or the business around it. No default, because a
    // project landing in the wrong section by omission is exactly the kind of
    // silent drift this site is about.
    kind: z.enum(["client", "open-source", "product"]),
    // Whether the source is public. Deliberately separate from kind: a product
    // can be open source too, so folding the two together would force a lie.
    openSource: z.boolean().default(false),
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
