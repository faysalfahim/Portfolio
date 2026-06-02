# Md Fahim Faysal — Personal Portfolio

A polished, fully-static personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, and **Framer Motion**. Dark mode by default.

---

## Running locally

```bash
cd portfolio-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing your content

All personal data lives in one file:

```
data/index.ts
```

Edit that file to update:
- `siteConfig` — name, tagline, email, social links
- `publications` — add/remove papers, change status
- `experience` — job history
- `projects` — GitHub projects
- `cpStats` — competitive programming ratings
- `skillGroups` — skill categories and items
- `education` — degrees
- `awards` — awards and leadership

No components need to be touched for content changes.

---

## Adding your résumé

Drop your PDF at:

```
public/resume.pdf
```

The "Download Résumé" button in the hero will automatically serve it.

---

## Building for production (static export)

```bash
npm run build
```

The output lands in `out/`. You can serve it with any static host.

---

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. No configuration needed — Vercel auto-detects Next.js.
4. Done. Your site is live.

> The site is pre-configured as a static export (`output: "export"` in `next.config.ts`), so it also works on **GitHub Pages** or any CDN.

---

## Deploying to GitHub Pages (alternative)

```bash
npm run build
# then push the `out/` directory to your gh-pages branch
```

---

## Project structure

```
portfolio-site/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, theme provider
│   ├── page.tsx          # Assembles all sections
│   └── globals.css       # Tailwind + CSS variables (teal accent, dark mode)
├── components/
│   ├── navbar.tsx        # Sticky nav with active-section highlight
│   ├── section-wrapper.tsx  # Shared entrance animation + layout
│   ├── icons.tsx         # Custom SVG brand icons (GitHub, LinkedIn)
│   ├── theme-provider.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── research.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── competitive-programming.tsx
│       ├── skills.tsx
│       ├── education.tsx
│       ├── awards.tsx
│       └── contact.tsx
├── data/
│   └── index.ts          # ← ALL your content lives here
├── public/
│   ├── resume.pdf        # Drop your actual PDF here
│   ├── sitemap.xml
│   └── robots.txt
└── next.config.ts        # Static export config
```

---

## Accent color

The site uses a **deep teal** accent (`oklch(0.621 0.137 175.4)` in light mode, lighter in dark mode). To change it, edit the `--primary` and `--teal` variables in `app/globals.css`.
