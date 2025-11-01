import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import upholsteryImage from "@/assets/upholstery.png";
import carpetImage from "@/assets/carpet.png";
import mouldImage from "@/assets/mould.png";
import carImage from "@/assets/car.png";

const Services = () => {
  const services = [
    {
      title: "House & Apartment Cleaning",
      description: "Comprehensive cleaning services for your home. We handle everything from regular maintenance to deep cleans after events or construction work.",
      image: upholsteryImage,
      features: [
        "Regular weekly/fortnightly cleaning",
        "After-party deep cleaning",
        "Post-rental turnover cleaning",
        "After builders cleaning",
        "One-off deep cleans"
      ]
    },
    {
      title: "Upholstery & Carpet Cleaning",
      description: "Professional stain removal and deep cleaning for all types of upholstery and carpets. Safe, effective, and thorough.",
      image: carpetImage,
      features: [
        "Food & drink stain removal",
        "Pet stain & odour elimination",
        "Blood stain removal",
        "Deep carpet cleaning",
        "Furniture upholstery cleaning",
        "Mattress cleaning"
      ]
    },
    {
      title: "Mould Removal",
      description: "Expert mould remediation for bathrooms and damp areas. We remove mould safely and help prevent future growth.",
      image: mouldImage,
      features: [
        "Bathroom mould treatment",
        "Damp area remediation",
        "Prevention advice",
        "Safe removal techniques",
        "Surface sanitization"
      ]
    },
    {
      title: "Car Interior Detailing",
      description: "Complete interior cleaning and detailing for cars, vans, and caravans. Make your vehicle look and feel brand new.",
      image: carImage,
      features: [
        "Deep vacuum & extraction",
        "Upholstery & seat cleaning",
        "Dashboard & console detailing",
        "Odour removal",
        "Stain treatment",
        "All vehicle types"
      ]
    },
    {
      title: "Handyman & Garden Work",
      description: "General property maintenance and garden services to keep your home in top condition.",
      image: upholsteryImage,
      features: [
        "Furniture assembly",
        "Minor repairs",
        "Garden tidying",
        "Window restoration",
        "Pressure washing",
        "General maintenance"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-center mt-4 text-white/90 max-w-3xl mx-auto animate-fade-in">
            From homes to cars, we offer comprehensive cleaning solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Areas</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We proudly serve Somerset and Devon, including:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-lg">
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <p className="font-semibold text-primary">Wellington</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <p className="font-semibold text-primary">Taunton</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <p className="font-semibold text-primary">Surrounding Areas</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              Not sure if we cover your area? <a href="/contact" className="text-primary font-semibold hover:underline">Contact us</a> to find out!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-secondary text-white p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book a Service?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get in touch today for a free, no-obligation quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/447840475060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
