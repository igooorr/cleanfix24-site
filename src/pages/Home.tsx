import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero.webp";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar";
import HomeCareBanner from "@/components/HomeCareBanner";
import { getService, type Service } from "@/lib/services";
import { SITE, WHATSAPP_URL, TEL_URL } from "@/lib/site";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { ClipboardList, MessageCircle, Phone, PoundSterling, Sparkles } from "lucide-react";

const STEPS = [
  { icon: ClipboardList, title: "Tell us what you need", text: "Fill in the short form, call, or send a photo on WhatsApp." },
  { icon: PoundSterling, title: "Get a clear price", text: "A free, no-obligation quote, so you know the cost before we start." },
  { icon: Sparkles, title: "We clean, you relax", text: "We arrive with all products and equipment, at a time that suits you." },
];

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

      {/* Hero Section: photo background on every screen size */}
      <section className="relative text-white overflow-hidden bg-primary">
        <img
          src={heroImage}
          alt="Cleanfix24 cleaner in a bright, freshly cleaned living room"
          {...({ fetchpriority: "high" } as object)}
          width={1100}
          height={619}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/20" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium mb-5">
              Family-run · Wellington &amp; Taunton, Somerset
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A spotless home, cleaned by a local family
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Regular and end of tenancy cleaning, sofas, mattresses and patios. You deal directly
              with the owners, Ihor and Ruslana.
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
                asChild
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </Button>
            </div>
            <p className="mt-6 text-white/85">Regular house cleaning from £20/hour · Free, no-obligation quotes</p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Welcome Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Local cleaners who treat your home like their own</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cleanfix24 is a small family business based in Wellington and Taunton. We clean homes,
              rentals and holiday lets across Somerset and Devon — from weekly cleans and end of tenancy
              cleans to sofas, mattresses, patios, laundry and garden jobs. No call centres and no
              surprises: you speak to the people who do the work, and you know the price before we start.
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

      {/* How it works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it works</h2>
          <ol className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="text-center">
                <span className="relative mx-auto mb-4 flex w-16 h-16 items-center justify-center rounded-full bg-primary text-white">
                  <Icon size={28} aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </span>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HomeCareBanner />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-primary to-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a cleaner home?</h2>
              <p className="text-lg text-white/90 mb-8">
                Tell us what needs doing and we'll come back with a clear price. Prefer to talk? Call or
                send a photo on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} /> WhatsApp Us
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <a href={TEL_URL}>
                    <Phone size={20} /> Call {SITE.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
            <QuickQuoteForm title="Quote request — website" idPrefix="home" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
