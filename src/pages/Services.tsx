import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { CATEGORIES, NOT_OFFERED, servicesIn, type Category } from "@/lib/services";
import { WHATSAPP_URL } from "@/lib/site";

const Services = () => {
  usePageMeta("/services");

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
            Home and commercial cleaning, sofas and mattresses, patios and more — inside and out
          </p>
        </div>
      </section>

      {CATEGORIES.map((category, i) => (
        <ServiceSection key={category.id} category={category} muted={i % 2 === 1} />
      ))}

      <section className="pb-4 pt-8">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
            Please note: {NOT_OFFERED} are not currently part of our services.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
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
              Not sure if we cover your area? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> to find out!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
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
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ServiceSection = ({ category, muted = false }: { category: Category; muted?: boolean }) => (
  <section id={category.id} className={`py-16 scroll-mt-20 ${muted ? "bg-muted/30" : ""}`}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{category.title}</h2>
        <p className="text-lg text-muted-foreground">{category.subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesIn(category.id).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
