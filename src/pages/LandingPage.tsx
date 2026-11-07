import { Link, useParams } from "react-router-dom";
import { Check, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import TrustBar from "@/components/TrustBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "@/pages/NotFound";
import logo from "@/assets/logo.webp";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getLanding, landingContent, landingPath } from "@/lib/landing";
import { servicePath } from "@/lib/services";
import { SITE, TEL_URL, WHATSAPP_URL } from "@/lib/site";

const LandingPage = () => {
  const { slug } = useParams();
  const landing = getLanding(slug);
  usePageMeta(landing ? landingPath(landing) : "/404");
  if (!landing) return <NotFound />;

  const c = landingContent(landing);
  const Icon = c.primary.icon;
  const title = `Quote request — ${landing.serviceName}`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Slim header: logo and phone only, so visitors stay focused on the quote */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" aria-label="Cleanfix24 home">
            <img src={logo} alt="Cleanfix24" width={480} height={274} className="h-10 md:h-14 w-auto" />
          </Link>
          <Button asChild size="sm" className="md:h-11 md:px-6 md:text-base">
            <a href={TEL_URL}>
              <Phone size={16} /> <span className="hidden sm:inline">Call</span> {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </header>
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero with the quote form */}
        <section className="relative text-white overflow-hidden bg-gradient-to-br from-primary to-secondary">
          {c.image && (
            <>
              <img
                src={c.image}
                alt=""
                aria-hidden="true"
                {...({ fetchpriority: "high" } as object)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
            </>
          )}
          <div className="container mx-auto px-4 py-10 md:py-16 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium mb-4">
                  <Icon size={16} aria-hidden="true" /> {landing.eyebrow}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{landing.headline}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-6">{landing.sub}</p>
                <ul className="space-y-2 mb-6">
                  {landing.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-base md:text-lg">
                      <Check size={22} className="text-green-300 shrink-0 mt-0.5" aria-hidden="true" /> {p}
                    </li>
                  ))}
                </ul>
                {c.priceFrom && (
                  <p className="text-2xl font-bold">
                    From {c.priceFrom}
                  </p>
                )}
                <p className="text-white/80 mt-2">Family-run by Ihor &amp; Ruslana · Wellington &amp; Taunton</p>
              </div>
              <div id="quote" className="text-foreground">
                <QuickQuoteForm service={landing.serviceName} title={title} idPrefix="lp" />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* What's included */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What's included</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.features.map((f) => (
                <li key={f} className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-sm">
                  <Check size={20} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How it works</h2>
            <ol className={`grid sm:grid-cols-2 gap-6 ${c.process.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
              {c.process.map((step, i) => (
                <li key={step} className="text-center">
                  <span className="mx-auto mb-3 flex w-12 h-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                    {i + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        {c.faqs.length > 0 && (
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Questions</h2>
              <div className="space-y-3">
                {c.faqs.map((f) => (
                  <details key={f.q} className="group rounded-lg border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="cursor-pointer font-semibold flex justify-between gap-4">
                      {f.q}
                      <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final call to action */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get your price today</h2>
            <p className="text-lg text-white/90 mb-8">
              Covering Wellington, Taunton and nearby villages in Somerset &amp; Devon. Send a photo on
              WhatsApp for the quickest quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg">
                <a href="#quote">Get My Free Quote</a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white text-lg">
                <a href={TEL_URL}>
                  <Phone size={20} /> {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-2 justify-center">
          <span>© {new Date().getFullYear()} Cleanfix24</span>
          <span className="hidden sm:inline">·</span>
          <Link to={servicePath(c.primary)} className="hover:text-primary underline">
            More about {c.primary.title.toLowerCase()}
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link to="/services" className="hover:text-primary underline">All services</Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
