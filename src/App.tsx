import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./AppRoutes";

const App = () => {
  // Toaster is client-only so the prerendered HTML hydrates without mismatches.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      {mounted && <Toaster />}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
