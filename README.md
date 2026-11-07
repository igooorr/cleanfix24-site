# Cleanfix24

Website for Cleanfix24, a family-run cleaning service in Somerset & Devon.
Live site: https://cleanfix24.co.uk

## Stack

Vite, React 18, TypeScript, Tailwind CSS, React Router.

## Development

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/ (incl. prerendered pages + sitemap)
npm run preview  # preview the production build
npm run lint
```

## Editing content

- Phone, WhatsApp number and email: `src/lib/site.ts`
- Services (text, features, FAQs, SEO titles): `src/lib/services.ts` —
  adding a service there automatically creates its page `/services/<slug>`,
  adds it to the services list, footer, contact form and sitemap
- Page titles/descriptions for main pages: `src/lib/routes.ts`
- Pages: `src/pages/`
- Images: `src/assets/` (WebP)
- Site-wide SEO tags and business structured data: `index.html`; `public/robots.txt`

## Deployment

`npm run build` creates a fully static site in `dist/`. Every page is prerendered
to its own HTML file (`dist/about/index.html`, `dist/services/<slug>/index.html`, …)
so search engines see the full content, plus `404.html` and `sitemap.xml`.

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Build command: `npm run build`, output directory: `dist`. No SPA rewrite rule is needed.
