import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One file per estate community in src/content/estates. Adding a file adds the community everywhere.
const estates = defineCollection({
  loader: glob({
    pattern: process.env.SAMPLES ? ['src/content/estates/*.md', 'samples/estates/*.md'] : ['src/content/estates/*.md'],
    base: '.',
    generateId: ({ entry }) => entry.split('/').pop()!.replace(/\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      word: z.string(),
      location: z.string(),
      status: z.enum(['Coming soon', 'Now selling', 'Sold out']),
      summary: z.string(),
      order: z.number().default(0),
      photo: image().optional(),
      teaser: z.string().optional(),
      overview: z.array(z.object({ number: z.string(), label: z.string() })).default([]),
      amenities: z.array(z.object({ icon: z.string(), label: z.string() })).default([]),
      documents: z.array(z.string()).default([]),
      photos: z.array(z.object({ title: z.string(), image: image().optional() })).default([]),
      videos: z.array(z.object({ id: z.string(), title: z.string() })).default([]),
      landmarks: z.array(z.string()).default([]),
      mapsUrl: z.string().optional(),
      plots: z
        .array(z.object({ name: z.string(), plots: z.array(z.object({ n: z.string(), status: z.enum(['Available', 'Reserved', 'Sold']), size: z.string().optional(), price: z.string().optional(), note: z.string().optional() })) }))
        .default([]),
      steps: z.array(z.tuple([z.string(), z.string()])).default([]),
      faq: z.array(z.tuple([z.string(), z.string()])).default([]),
    }),
});

// One file per investment offer in src/content/offers. Adding a file adds the offer to the Invest page.
const offers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/offers' }),
  schema: z.object({
    name: z.string(),
    line: z.string(),
    minimum: z.string(),
    term: z.string(),
    expectedReturn: z.string(),
    sample: z.boolean().default(true),
    order: z.number().default(0),
    backing: z.string(),
    points: z.array(z.string()).default([]),
    terms: z.array(z.tuple([z.string(), z.string()])),
    risks: z.array(z.tuple([z.string(), z.string()])),
    documents: z.array(z.object({ name: z.string(), meta: z.string(), file: z.string().optional() })).default([]),
    video: z.object({ id: z.string(), title: z.string() }).optional(),
    faq: z.array(z.tuple([z.string(), z.string()])).default([]),
  }),
});

// One file per gallery item in src/content/gallery: a photo (image) or a YouTube video (youtube).
const gallery = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      topic: z.enum(['Estates', 'Construction', 'Supply', 'Company']),
      image: image().optional(),
      youtube: z.string().optional(),
      order: z.number().default(0),
    }),
});

export const collections = { estates, offers, gallery };
