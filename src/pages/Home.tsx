import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero.png";
import upholsteryImage from "@/assets/upholstery.png";
import carpetImage from "@/assets/carpet.png";
import carImage from "@/assets/car.png";
import { Sparkles, Home as HomeIcon, Car } from "lucide-react";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <HomeIcon size={40} className="text-primary" />,
      title: "House & Apartment Cleaning",
      description: "Regular cleaning, after-party, post-rental, and after builders deep cleaning services.",
      image: upholsteryImage,
    },
    {
      icon: <Sparkles size={40} className="text-primary" />,
      title: "Upholstery & Carpet Cleaning",
      description: "Professional stain removal including food, drink, pet stains, and odour elimination.",
      image: carpetImage,
    },
    {
      icon: <Car size={40} className="text-primary" />,
      title: "Car Interior Detailing",
      description: "Deep interior cleaning for cars, vans, and caravans. Make your vehicle pristine again.",
      image: carImage,
    },
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
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  <a href="/services">View Services</a>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in hidden md:block">
              <img 
                src={heroImage} 
                alt="Professional cleaner" 
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
              From homes to cars — we make every space shine. Based in Wellington and Taunton, 
              we're passionate about delivering spotless results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
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
                <a href="https://wa.me/447840475060" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:07840475060">
                  Call 07840 475060
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
