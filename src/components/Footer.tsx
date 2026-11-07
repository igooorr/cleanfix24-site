import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, TEL_URL, MAILTO_URL } from "@/lib/site";
import { SERVICES, servicePath } from "@/lib/services";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cleanfix24</h3>
            <p className="text-accent-foreground/80">
              Professional, family-run cleaning services across Somerset and Devon. 
              Making every space shine since day one.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={servicePath(s)}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="font-semibold hover:underline">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href={TEL_URL} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href={MAILTO_URL} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-accent-foreground/80">
                  Serving Somerset & Devon<br />
                  (Wellington, Taunton & surrounding areas)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/80">
          <p>&copy; {new Date().getFullYear()} Cleanfix24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
