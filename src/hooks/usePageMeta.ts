import { useEffect } from "react";
import { getMeta, canonicalUrl, type PageMeta } from "@/lib/routes";

const setMeta = (selector: string, attr: string, value: string) =>
  document.querySelector(selector)?.setAttribute(attr, value);

// Updates <title>, description, canonical and OG tags on client-side navigation.
// The same values are baked into each page's HTML at build time (scripts/prerender.mjs).
export function usePageMeta(path: string, override?: PageMeta) {
  useEffect(() => {
    const { title, description } = override ?? getMeta(path);
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonicalUrl(path));
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl(path));
  }, [path, override]);
}
