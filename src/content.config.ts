import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    keyword: z.string().optional(),
    pr: z.boolean().default(true),
    // 体験や金額を書き終えたら false にすると公開される
    draft: z.boolean().default(true),
  }),
});

export const collections = { posts };
