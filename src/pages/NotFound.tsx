import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound = () => {
  usePageMeta("/404");
  return (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1 flex items-center justify-center bg-muted/30 py-20">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <Button asChild size="lg">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default NotFound;
