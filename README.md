# Sahil Sagar — Portfolio

Personal portfolio site. React + Vite + Tailwind CSS v4 + Framer Motion. Playful, colorful, dark/light aware.

Showcases five products: **Generous** (full-stack AI voice platform), **Sonaze / PulseVeil**, **Tilzo**, **ChessMate**, and **Mergio**.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # type-checks then builds to dist/
npm run preview    # preview the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Vite.
3. Add your custom domain (e.g. `sahilsagar.dev`) under **Settings → Domains**.

No env vars needed. `vercel.json` is preconfigured.

## Edit your content

- **Profile, bio, skills, experience** — `src/data/profile.ts`
- **Projects** — `src/data/projects.ts`
- **Colors / fonts** — `@theme` block in `src/index.css`
- **Phone mockups** — `src/components/Mockup.tsx`
