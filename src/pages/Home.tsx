import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero.webp";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import { getService, type Service } from "@/lib/services";
import { SITE, WHATSAPP_URL, TEL_URL } from "@/lib/site";

const Home = () => {
  usePageMeta("/");
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Highlighted on the home page; the full list lives on /services.
  const services = [
    "upholstery-cleaning",
    "mattress-cleaning",
    "end-of-tenancy-cleaning",
    "deep-cleaning",
    "laundry-ironing-service",
    "patio-cleaning",
  ].map((slug) => getService(slug) as Service);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Cleaning Services You Can Trust
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Family-run business serving Somerset & Devon with care and excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                >
                  Get a Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in hidden md:block">
              <img 
                src={heroImage} 
                alt="Professional Cleanfix24 cleaner at work" {...({ fetchpriority: "high" } as object)} width={1100} height={619} 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Cleanfix24</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Cleanfix24, we provide professional, family-run cleaning services across Somerset and Devon. 
              From regular and end of tenancy cleans to sofas, mattresses, patios, laundry and garden jobs — we make every space shine. Based in Wellington and Taunton, 
              we're passionate about delivering spotless results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free quote. We're here to make your space sparkle!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={TEL_URL}>
                  Call {SITE.phoneDisplay}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Contact Form
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
