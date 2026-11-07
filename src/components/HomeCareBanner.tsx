import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Promo strip linking to the Home Care page for owners living abroad. */
const HomeCareBanner = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-gradient-to-br from-accent to-primary text-white p-8 md:p-12">
        <Plane size={64} strokeWidth={1.25} className="flex-shrink-0" aria-hidden="true" />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Living abroad or away for months?</h2>
          <p className="text-lg text-white/90">
            We check your home regularly, collect your post, keep it aired and secure — and have it
            spotless for your return.
          </p>
        </div>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 flex-shrink-0">
          <Link to="/home-care">Home Care Service</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HomeCareBanner;
