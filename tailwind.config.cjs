/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class', // Manual toggle if a dark mode is added later (cf. tokens.md §10).
  theme: {
    // We do NOT extend a "container" object — Astro/Tailwind defaults are fine.
    // All design tokens are defined as CSS custom properties in src/styles/tokens.css
    // and exposed here under aliases so utility classes pick them up.
    extend: {
      colors: {
        // Surfaces
        'ai-bg': 'var(--ai-bg-primary)',
        'ai-bg-subtle': 'var(--ai-bg-subtle)',
        'ai-bg-muted': 'var(--ai-bg-muted)',
        'ai-bg-inverse': 'var(--ai-bg-inverse)',

        // Foregrounds
        'ai-fg': 'var(--ai-fg-primary)',
        'ai-fg-secondary': 'var(--ai-fg-secondary)',
        'ai-fg-muted': 'var(--ai-fg-muted)',
        'ai-fg-inverse': 'var(--ai-fg-inverse)',

        // Borders
        'ai-border-subtle': 'var(--ai-border-subtle)',
        'ai-border': 'var(--ai-border-default)',
        'ai-border-strong': 'var(--ai-border-strong)',

        // Accent
        'ai-accent': 'var(--ai-accent-primary)',
        'ai-accent-hover': 'var(--ai-accent-hover)',
        'ai-accent-active': 'var(--ai-accent-active)',
        'ai-accent-subtle': 'var(--ai-accent-subtle)',
        'ai-accent-secondary': 'var(--ai-accent-secondary)',

        // Semantic
        'ai-success': 'var(--ai-success)',
        'ai-success-subtle': 'var(--ai-success-subtle)',
        'ai-warning': 'var(--ai-warning)',
        'ai-warning-subtle': 'var(--ai-warning-subtle)',
        'ai-danger': 'var(--ai-danger)',
        'ai-danger-subtle': 'var(--ai-danger-subtle)',
        'ai-info': 'var(--ai-info)',
        'ai-info-subtle': 'var(--ai-info-subtle)',

        // Source-tag levels (see docs/design-system/tokens.md §2.4)
        'ai-source-official': 'var(--ai-source-official)',
        'ai-source-official-bg': 'var(--ai-source-official-bg)',
        'ai-source-complement': 'var(--ai-source-complement)',
        'ai-source-complement-bg': 'var(--ai-source-complement-bg)',
        'ai-source-pedagogical': 'var(--ai-source-pedagogical)',
        'ai-source-pedagogical-bg': 'var(--ai-source-pedagogical-bg)',
        'ai-source-external': 'var(--ai-source-external)',
        'ai-source-external-bg': 'var(--ai-source-external-bg)',
        'ai-source-toverify': 'var(--ai-source-toverify)',
        'ai-source-toverify-bg': 'var(--ai-source-toverify-bg)',
      },
      fontFamily: {
        sans: ['var(--ai-font-sans)'],
        mono: ['var(--ai-font-mono)'],
      },
      maxWidth: {
        'ai-prose': 'var(--ai-container-prose)',
        'ai-container': 'var(--ai-container-xl)',
      },
      boxShadow: {
        'ai-sm': 'var(--ai-shadow-sm)',
        'ai-md': 'var(--ai-shadow-md)',
        'ai-lg': 'var(--ai-shadow-lg)',
        'ai-focus': 'var(--ai-shadow-focus)',
      },
      borderRadius: {
        'ai-sm': 'var(--ai-radius-sm)',
        'ai-md': 'var(--ai-radius-md)',
        'ai-lg': 'var(--ai-radius-lg)',
      },
      transitionDuration: {
        'ai-instant': '100ms',
        'ai-fast': '200ms',
        'ai-normal': '300ms',
        'ai-slow': '500ms',
      },
      transitionTimingFunction: {
        'ai-default': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
