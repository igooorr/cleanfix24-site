import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// Pages are prerendered at build time; hydrate them, or render from scratch in dev.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
