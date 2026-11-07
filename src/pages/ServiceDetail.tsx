import { Link, useParams } from "react-router-dom";
import { CheckCircle2, ChevronRight, MessageCircle, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CATEGORIES, getService, servicePath, servicesIn } from "@/lib/services";
import { SITE, TEL_URL, WHATSAPP_URL } from "@/lib/site";
import { canonicalUrl } from "@/lib/routes";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);
  usePageMeta(service ? servicePath(service) : "/404");

  if (!service) return <NotFound />;

  const Icon = service.icon;
  const category = CATEGORIES.find((c) => c.id === service.category)!;
  const related = servicesIn(service.category).filter((s) => s.slug !== service.slug).slice(0, 3);
  const whatsappQuote = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Hi Cleanfix24, I'd like a quote for ${service.title}.`,
  )}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      serviceType: service.title,
      url: canonicalUrl(servicePath(service)),
      areaServed: ["Wellington", "Taunton", "Somerset", "Devon"],
      ...(service.priceFrom
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              price: service.priceFrom.replace(/[^0-9.]/g, ""),
              unitText: "hour",
            },
          }
        : {}),
      provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url, telephone: "+44" + SITE.phoneTel.slice(1) },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
        { "@type": "ListItem", position: 2, name: "Services", item: canonicalUrl("/services") },
        { "@type": "ListItem", position: 3, name: service.title, item: canonicalUrl(servicePath(service)) },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <WhatsAppButton />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li className="text-white" aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <div className="flex items-start gap-4">
            <Icon size={48} strokeWidth={1.5} className="hidden sm:block flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <p className="text-white/80 font-medium mb-2">{category.title}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{service.short}</p>
              {service.priceFrom && (
                <p className="mt-4 inline-block rounded-full bg-white/15 px-4 py-1 font-semibold">
                  From {service.priceFrom}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <a href={whatsappQuote} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> Get a Free Quote
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8"
            >
              <a href={TEL_URL}>
                <Phone size={20} /> Call {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro + included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div>
              {service.intro.map((p) => (
                <p key={p} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  {p}
                </p>
              ))}
              <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6">What's included</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto"
                  width={800}
                  height={450}
                />
              ) : (
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                  <Icon size={120} strokeWidth={1.25} className="text-white" aria-hidden="true" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="py-16 bg-muted/30" aria-labelledby="gallery-heading">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-center mb-3">
              Before &amp; after
            </h2>
            <p className="text-center text-muted-foreground mb-10">Photos taken before and after cleaning.</p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.gallery.map((g) => (
                <figure key={g.caption} className="bg-background rounded-xl shadow-sm overflow-hidden">
                  <div className="grid grid-cols-2">
                    {([["Before", g.before], ["After", g.after]] as const).map(([label, src]) => (
                      <div key={label} className="relative aspect-square">
                        <img
                          src={src}
                          alt={`${g.caption} — ${label.toLowerCase()}`}
                          loading="lazy"
                          decoding="async"
                          width={720}
                          height={720}
                          className="w-full h-full object-cover"
                        />
                        <span
                          className={`absolute top-2 left-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${
                            label === "After" ? "bg-green-600" : "bg-slate-900/75"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <figcaption className="p-4 text-center font-medium">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <TrustBar muted={!service.gallery?.length} />

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it works</h2>
          <ol className={`grid gap-6 sm:grid-cols-2 ${service.process.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {service.process.map((step, i) => (
              <li key={step} className="bg-background rounded-xl p-6 shadow-sm">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">
                  {i + 1}
                </span>
                <p className="font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {service.faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-border p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-lg">
                  {f.q}
                  <ChevronRight size={20} className="flex-shrink-0 transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Related services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-secondary text-white p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need {service.title.toLowerCase()}?</h2>
            <p className="text-xl mb-8 text-white/90">
              Serving Wellington, Taunton and the wider Somerset & Devon area. Free, no-obligation quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href={whatsappQuote} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link to={`/contact?service=${service.slug}`}>Contact Form</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
