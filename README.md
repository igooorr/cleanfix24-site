# Cleanfix24

Website for Cleanfix24, a family-run cleaning service in Somerset & Devon.
Live site: https://cleanfix24.co.uk

## Stack

Vite, React 18, TypeScript, Tailwind CSS, React Router.

## Development

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
npm run preview  # preview the production build
npm run lint
```

## Editing content

- Phone, WhatsApp number and email: `src/lib/site.ts`
- Pages: `src/pages/`
- Images: `src/assets/` (WebP)
- SEO tags and structured data: `index.html`; `public/robots.txt` and `public/sitemap.xml`

## Deployment

The site is a static single-page app. Deploy the `dist/` folder to any static host
and rewrite all unknown paths to `/index.html` (needed for `/about`, `/services`, `/contact`).
