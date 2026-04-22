# Dr Piet Malepa Website (Astro)

Multi-page Astro site derived from `dr-piet-malepa.pen`.

## Pages

- `/` (Home) — `src/pages/index.astro`
- `/research` — `src/pages/research.astro`
- `/about` — `src/pages/about.astro`
- `/contact` — `src/pages/contact.astro`

## Shared Components

- `src/layouts/Layout.astro` — HTML shell, fonts, global styles, mounts Header/Footer
- `src/components/Header.astro` — top nav, accepts `brandRole`, `navLinks`, `cta` props
- `src/components/Footer.astro` — site footer, accepts `metaLine`, `copyLine` props

Global styles live at `src/styles/global.css` and are imported by the Layout.

## Run

```bash
npm install
npm run dev
```

Then visit `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Contact Form

The contact form posts to the placeholder endpoint:

- `POST /api/contact-placeholder`

Update `src/pages/contact.astro` for a production endpoint.

## Local Image Mapping

Website-ready optimized assets are served from `public/assets/images/optimized/`.

Source originals: `public/assets/images/source/`. Legacy archive: `public/assets/images/archive/`.

Current production mappings:

- Home hero: `/assets/images/optimized/dr-piet-malepa-office-right.jpg`
- Home highlight image: `/assets/images/optimized/amphibian-frog-study.jpg`
- Research hero: `/assets/images/optimized/dr-piet-malepa-office-right.jpg`
- About portrait: `/assets/images/optimized/dr-piet-malepa-office-right.jpg`
- Contact details image: `/assets/images/optimized/dr-piet-malepa-office-right.jpg`
