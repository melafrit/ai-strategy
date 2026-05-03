// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

/**
 * Astro configuration for AI Strategy.
 *
 * Conventions defined in:
 * - docs/architecture/sitemap.md          (URL conventions, hreflang)
 * - docs/cadrage/decisions-log.md         (ADR-006: i18n by symmetric subdirectories)
 * - docs/design-system/tokens.md          (Tailwind import in src/styles/global.css)
 *
 * The site URL is intentionally left as a placeholder until the OVH host
 * decision is finalized (cf. Phase 3 deferred decision).
 */
export default defineConfig({
  site: 'https://ai-strategy.example.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },

  // i18n — three symmetric subdirectories, French as the canonical default.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar'],
    routing: {
      // Force the language prefix for *all* locales, including the default.
      // The root `/` page is a redirect handled by src/pages/index.astro.
      prefixDefaultLocale: true,
    },
    // No fallback — explicit pages exist for each locale (Phase 4 will keep
    // them in sync). Adding a fallback creates duplicate routes that break
    // the sitemap integration.
  },

  integrations: [
    mdx(),
    sitemap({
      // The sitemap plugin auto-detects Astro's i18n config (defined above)
      // and generates one alternate hreflang per locale. Passing an explicit
      // i18n object here causes a conflict with Astro 4 i18n routing.
    }),
    tailwind({
      // We provide our own base/component layers via src/styles/global.css.
      applyBaseStyles: false,
    }),
  ],

  // Vite — keep build output predictable for OVH deployment.
  vite: {
    build: {
      // Asset chunking to keep individual JS bundles small.
      cssCodeSplit: true,
    },
  },
});
