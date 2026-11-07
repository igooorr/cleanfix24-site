import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero.webp";
import { INTERIOR_SERVICES, EXTERIOR_SERVICES } from "@/lib/services";
import { SITE, WHATSAPP_URL, TEL_URL } from "@/lib/site";

const Home = () => {
  usePageMeta("Cleanfix24 - Professional Cleaning Services | Somerset & Devon", "Family-run cleaning service in Wellington, Taunton, Somerset & Devon. Sofa & upholstery cleaning, mattress cleaning, stain removal and patio cleaning. Free quotes.", "/");
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Highlighted on the home page; full list lives on /services.
  const services = [
    INTERIOR_SERVICES[0], // Upholstery
    INTERIOR_SERVICES[1], // Mattress
    INTERIOR_SERVICES[2], // Stain removal
    EXTERIOR_SERVICES[0], // Patio
  ];

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
                  <a href="/services">View Services</a>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in hidden md:block">
              <img 
                src={heroImage} 
                alt="Professional Cleanfix24 cleaner at work" fetchPriority="high" width={1100} height={619} 
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
              From sofas and mattresses to patios — we make every space shine. Based in Wellington and Taunton, 
              we're passionate about delivering spotless results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                      <service.icon size={64} strokeWidth={1.5} className="text-white" aria-hidden="true" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  {service.image && <service.icon size={40} className="text-primary mb-4" aria-hidden="true" />}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90">
                    <a href="/services">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                <a href="/contact">
                  Contact Form
                </a>
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
