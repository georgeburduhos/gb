# georgeburduhos.com

Personal portfolio site for [George Burduhos](https://georgeburduhos.com) — Cross-Platform Engineer specialising in React Native, Expo, and AI integration.

## Stack

- **Next.js 16** (App Router, fully static)
- **Tailwind CSS v4** with CSS custom properties design tokens
- **Geist Sans + Geist Mono** (self-hosted)
- **TypeScript**
- **Vercel** (push to `main` = deploy)

## Structure

```
app/
  (sections)/       # Hero, AI, Experience, Projects, Skills, Footer
  globals.css       # Design tokens (colors, radius, motion)
  layout.tsx        # Fonts, metadata, analytics
  page.tsx          # Section composition
components/
  nav.tsx           # Fixed header with scroll-tracking active indicator
content/
  experience.json   # Work history
  labs.json         # Projects
  stack.json        # Skills
```

## Design tokens

All colors are derived from the logo palette — navy `#2E4380` for backgrounds, red `#C6252E` as accent. Tokens live in `app/globals.css` as CSS custom properties (`--bg`, `--text`, `--accent`, etc.).

## Local development

```bash
pnpm install
pnpm dev
```

## Content

All content is data-driven from JSON files in `content/`. To update experience, projects, or skills — edit the relevant JSON file and push.
