import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";

export { ALL_PATHS, LANDING_PATHS, getMeta, canonicalUrl, NOT_FOUND_META } from "./lib/routes";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </StaticRouter>,
  );
}
