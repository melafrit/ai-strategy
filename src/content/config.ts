/**
 * Astro content collections — stubbed for Phase 4.
 *
 * Defines the schema of MDX collections that will be populated in Phase 4
 * (FR rédaction first, then EN/AR in Phase 7). Empty for now.
 *
 * Conventions:
 *  - Frontmatter shape mirrors `docs/architecture/gabarits/*.md` data sections.
 *  - Taxonomy keys come from `docs/architecture/taxonomy.md` (technical EN keys).
 */

import { defineCollection, z } from 'astro:content';

const sourceLevelSchema = z.enum([
  'official-mit',
  'recommended-complement',
  'pedagogical-reconstruction',
  'external-verifiable',
  'to-verify',
]);

const taxonomySchema = z.object({
  modules: z.array(
    z.enum(['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'module-6', 'transversal']),
  ),
  tech: z
    .array(
      z.enum(['tech-ml', 'tech-genai', 'tech-robotics', 'tech-classical', 'tech-combined', 'tech-none']),
    )
    .optional(),
  sectors: z
    .array(
      z.enum([
        'sector-finance',
        'sector-health',
        'sector-retail',
        'sector-logistics',
        'sector-tech',
        'sector-industry',
        'sector-public',
        'sector-services',
        'sector-education',
        'sector-multi',
      ]),
    )
    .optional(),
  level: z.enum(['level-discovery', 'level-applicable', 'level-advanced']),
});

const sourceSchema = z.object({
  level: sourceLevelSchema,
  title: z.string(),
  url: z.string().url().optional(),
  accessedAt: z.string().optional(),
});

const modules = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    moduleNumber: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
    ]),
    lead: z.string(),
    estimatedHours: z.object({ min: z.number(), max: z.number() }),
    publishedAt: z.string(),
    updatedAt: z.string(),
    taxonomy: taxonomySchema,
    podcastEpisode: z.string().optional(),
  }),
});

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    lead: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    taxonomy: taxonomySchema,
    sources: z.array(sourceSchema).min(1),
  }),
});

export const collections = {
  modules,
  cases,
};
