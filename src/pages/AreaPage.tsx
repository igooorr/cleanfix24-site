import { Link, useParams } from "react-router-dom";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { areaPath, getArea } from "@/lib/areas";
import { getService, type Service } from "@/lib/services";
import { canonicalUrl } from "@/lib/routes";
import { SITE, TEL_URL, WHATSAPP_URL } from "@/lib/site";
import NotFound from "./NotFound";

const AreaPage = () => {
  const { slug } = useParams();
  const area = getArea(slug);
  usePageMeta(area ? areaPath(area) : "/404");

  if (!area) return <NotFound />;

  const services = area.featured.map((s) => getService(s)).filter(Boolean) as Service[];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: canonicalUrl(areaPath(area)),
    telephone: "+44" + SITE.phoneTel.slice(1),
    areaServed: [area.name, ...area.nearby].map((name) => ({ "@type": "Place", name })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <WhatsAppButton />

      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium mb-6">
            <MapPin size={16} aria-hidden="true" /> {area.name}, {area.county}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cleaning Services in {area.name}</h1>
          <p className="text-xl text-white/90">
            Family-run, local and reliable — free, no-obligation quotes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8"
            >
              <a href={TEL_URL}>
                <Phone size={20} /> {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {area.intro.map((p) => (
            <p key={p} className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <TrustBar muted />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular services in {area.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Areas we cover around {area.name}</h2>
          <p className="text-muted-foreground mb-8">
            Not on the list? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> — we may still be able to help.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {area.nearby.map((n) => (
              <li key={n} className="rounded-full bg-background px-4 py-2 shadow-sm text-sm font-medium">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreaPage;
