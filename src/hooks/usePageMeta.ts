import { useEffect } from "react";

// Sets per-page <title>, description and canonical URL (client-side SPA).
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://cleanfix24.co.uk${path}`);
  }, [title, description, path]);
}
