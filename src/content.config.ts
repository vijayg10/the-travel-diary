import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/contents/posts",
  }),
  schema: z.object({
    title: z.string(),
    published: z.date(),
    traveled: z.date().optional(),
    draft: z.boolean().optional(),
    wip: z.boolean().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    thumbnail: z.string().optional(),
    banners: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    sourceLink: z.string().optional(),
    licenseName: z.string().optional(),
    licenseUrl: z.string().optional(),
  }),
});

const specs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/contents/specs",
  }),
});

export const collections = { posts, specs };
