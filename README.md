# georgeburduhos.com

Personal portfolio site for [George Burduhos](https://georgeburduhos.com) — Software Engineer — React Native, web development, AI & automation.

## Stack

- **Next.js 16** (App Router, fully static)
- **Tailwind CSS v4** with CSS custom properties design tokens
- **Geist Sans + Geist Mono** (self-hosted)
- **TypeScript**
- **Vercel** (push to `main` = deploy)

## Structure

```
app/
  (sections)/       # Hero, Work, MYLO, AI, Siteworks, Automations, Skills, Footer
  brand-tokens.css  # Brand identity tokens (verbatim from the brand package)
  globals.css       # Site roles mapped onto brand tokens, shared component classes
  layout.tsx        # Fonts, metadata, theme bootstrap, analytics
  manifest.ts       # PWA manifest
  page.tsx          # Section composition
components/
  nav.tsx           # Fixed header, scroll-tracking indicator, mobile menu
  theme-toggle.tsx  # Light/dark override (persisted)
  flow-steps.tsx    # Step-flow used by Siteworks and the automation modal
content/
  work.json         # Selected work (product categories, no employers/dates)
  mylo.json         # MYLO (featured personal project)
  stack.json        # Skills
```

## Design tokens

Brand identity v1.1 (1C.2 Precision mark; Electric Blue `#007BFF`, Violet `#7C3AED`, Soft Pink `#FF5A8A`; ink `#070B12`; Geist Sans + Geist Mono). `app/brand-tokens.css` holds the `--gb-*` tokens with light/dark themes (`data-theme` override, `prefers-color-scheme` default). `app/globals.css` maps site roles (`--bg`, `--text`, `--accent`, `--accent-text`, …) onto them. Logos live in `public/brand/` and must not be edited — replace them from the brand package.

## Local development

```bash
pnpm install
pnpm dev
```

## Content

All content is data-driven from JSON files in `content/`. To update work, MYLO, or skills — edit the relevant JSON file and push.
