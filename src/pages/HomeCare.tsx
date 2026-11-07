import { useState } from "react";
import {
  BellRing,
  Camera,
  CheckCircle2,
  ChevronRight,
  Eye,
  KeyRound,
  Mail,
  MapPin,
  MessageCircle,
  Plane,
  PlaneLanding,
  Search,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePageMeta } from "@/hooks/usePageMeta";
import { sendViaEmail, sendViaWhatsApp } from "@/lib/enquiry";
import { canonicalUrl } from "@/lib/routes";
import { SITE, TRUST } from "@/lib/site";
import homeCareImage from "@/assets/home-care-ihor.webp";

const PATH = "/home-care";

const STEPS = [
  {
    icon: Plane,
    title: "You leave",
    text: "We meet, agree a care plan and visit schedule, and you hand us the keys and alarm details.",
  },
  {
    icon: Search,
    title: "We inspect & maintain",
    text: "Regular visits inside and out, with a photo report after every visit so you always know your home is fine.",
  },
  {
    icon: PlaneLanding,
    title: "We prepare for your return",
    text: "A deep clean, fresh air and heating on — you come back to a spotless, welcoming home.",
  },
];

const ROUTINE = [
  {
    icon: Eye,
    title: "Regular Property Checks",
    text: "Weekly or fortnightly visits to inspect the interior and exterior.",
    points: [
      "Leaks, damp and condensation",
      "Storm and weather damage",
      "Doors, windows and locks secure",
      "Signs of pests or break-ins",
    ],
  },
  {
    icon: Mail,
    title: "Mail Collection",
    text: "Post cleared from the hallway so your home never looks empty.",
    points: [
      "Post and leaflets collected each visit",
      "Photos of important letters sent to you",
      "Forwarding abroad on request, after your approval",
    ],
  },
  {
    icon: Wind,
    title: "Ventilation & Basic Maintenance",
    text: "The small routines that stop small problems becoming big ones.",
    points: [
      "Rooms aired to prevent damp and odours",
      "Taps run and toilets flushed",
      "Heating, boiler pressure and alarms checked",
      "Lights and curtains varied for a lived-in look",
    ],
  },
  {
    icon: Users,
    title: "Local Point of Contact",
    text: "Your trusted person on the ground, here when something needs doing.",
    points: [
      "Let in tradespeople for emergency repairs",
      "Coordinate gardeners and handymen",
      "Accept deliveries on your behalf",
      "Meter readings on request",
    ],
  },
];

const PRE_ARRIVAL = [
  "Thorough dusting and deep clean of every room",
  "Kitchen and bathrooms cleaned and sanitised",
  "Beds made with fresh linen",
  "House aired and heating switched on",
  "Fridge cleaned — basic groceries on request",
  "Garden tidied and post sorted for you",
];

const TRUST_POINTS = [
  {
    icon: MapPin,
    title: "Reliable local presence",
    text: `A family business based in Wellington & Taunton — ${SITE.owners} look after your home personally.`,
  },
  {
    icon: Camera,
    title: "Photo & video reports",
    text: "After every visit you receive photos (and video on request) by WhatsApp or email.",
  },
  {
    icon: KeyRound,
    title: "Secure key handling",
    text: "Keys are stored securely and are never labelled with your name or address.",
  },
  {
    icon: BellRing,
    title: "Quick response",
    text: "If something is wrong we contact you straight away and agree the next step together.",
  },
  ...(TRUST.insured
    ? [{ icon: CheckCircle2, title: "Insured", text: "Covered by public liability insurance, including key holding." }]
    : []),
  ...(TRUST.dbsChecked
    ? [{ icon: CheckCircle2, title: "DBS checked", text: "Background-checked people looking after your home." }]
    : []),
];

const FAQS = [
  {
    q: "How often will you visit?",
    a: "Most owners choose weekly or fortnightly visits. In winter, or for older properties, weekly checks are recommended. We'll agree a schedule that suits your home and your insurer's requirements.",
  },
  {
    q: "How will I know my home has been checked?",
    a: "After every visit we send a short report with photos by WhatsApp or email, so you can see your home is safe wherever you are.",
  },
  {
    q: "What happens if you find a problem?",
    a: "We contact you immediately with photos, take any urgent steps to limit damage (such as turning off the water), and arrange a tradesperson with your approval.",
  },
  {
    q: "Do you forward post abroad?",
    a: "We collect your post on every visit and send you photos of anything important. If you need an item forwarded, we post it to you after your confirmation.",
  },
  {
    q: "Many home insurers require regular checks on empty homes — can you help?",
    a: "Yes. Insurers often require an unoccupied home to be inspected at set intervals. We visit on the schedule you need and keep a dated record with photos of each visit. Please check the exact requirements with your insurer.",
  },
];

const SERVICE_OPTIONS = [
  "Regular property checks",
  "Mail collection",
  "Ventilation & basic maintenance",
  "Local point of contact / coordinating trades",
  "Pre-arrival deep clean & preparation",
  "Garden maintenance",
];

const DURATIONS = [
  "Less than 1 month",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "More than a year / ongoing",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  address: "",
  duration: "",
  startDate: "",
  message: "",
};

const HomeCare = () => {
  usePageMeta(PATH);
  const [form, setForm] = useState(EMPTY_FORM);
  const [services, setServices] = useState<string[]>([]);
  const [sending, setSending] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const fields = () => ({
    Name: form.name,
    Email: form.email,
    Phone: form.phone,
    "Property address": form.address,
    "Duration of absence": form.duration,
    "Required services": services.join(", "),
    "Preferred start date": form.startDate,
    Message: form.message,
  });

  const valid = () => {
    if (!form.name || !form.address || (!form.email && !form.phone)) {
      toast.error("Please add your name, the property address and an email or phone number.");
      return false;
    }
    return true;
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setServices([]);
  };

  const onEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid()) return;
    setSending(true);
    try {
      const result = await sendViaEmail("Home Care enquiry", fields(), form.email || undefined);
      if (result === "sent") {
        toast.success("Thank you! We've received your enquiry and will be in touch shortly.");
        reset();
      } else {
        toast.success("Your email app is opening with the enquiry ready — just press send.");
      }
    } catch {
      toast.error("Sorry, the message couldn't be sent. Please try WhatsApp or call us.");
    } finally {
      setSending(false);
    }
  };

  const onWhatsApp = () => {
    if (!valid()) return;
    sendViaWhatsApp("Home Care enquiry", fields());
    toast.success("Opening WhatsApp — your enquiry is ready to send.");
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Home Care for Absent Owners",
      serviceType: "Vacant property management and home watching",
      description:
        "Regular inspections, mail collection, ventilation and maintenance checks, coordination of local trades and pre-arrival cleaning for homeowners living abroad or away.",
      url: canonicalUrl(PATH),
      areaServed: ["Wellington", "Taunton", "Somerset", "Devon"],
      provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const inputClass =
    "mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent via-primary to-secondary text-white overflow-hidden">
        <img
          src={homeCareImage}
          alt="Ihor from Cleanfix24 holding the keys outside a Somerset home"
          {...({ fetchpriority: "high" } as object)}
          width={1200}
          height={675}
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-slate-900/80 md:bg-transparent md:bg-gradient-to-r md:from-slate-900/90 md:via-slate-900/70 md:to-slate-900/10" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium mb-6">
              <Plane size={16} aria-hidden="true" /> Home Care for owners abroad or away
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Home in Safe Hands While You're Away
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Regular inspections, security checks and maintenance for your Somerset home — and a
              spotless, fresh house waiting for you when you return.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <a href="#enquiry">Request Home Care</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Three simple steps to complete peace of mind
          </p>
          <ol className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative bg-muted/30 rounded-2xl p-8 text-center">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-bold">
                  {i + 1}
                </span>
                <Icon size={44} strokeWidth={1.5} className="text-primary mx-auto mb-4 mt-2" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Routine services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">While You're Away</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Routine care on a schedule that suits you — weekly, fortnightly or as needed
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {ROUTINE.map(({ icon: Icon, title, text, points }) => (
              <article key={title} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon size={24} className="text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{text}</p>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-arrival */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 md:p-12">
            <div>
              <Sparkles size={44} strokeWidth={1.5} className="mb-4" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Before You Return</h2>
              <p className="text-lg text-white/90">
                Coming home after months away? Let us know your arrival date and we'll prepare the
                house so it's fresh, clean and welcoming — no dust, no musty smell, just your home ready
                to enjoy.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {PRE_ARRIVAL.map((p) => (
                <li key={p} className="flex items-start gap-2 bg-white/10 rounded-lg p-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Peace of Mind, Wherever You Are</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_POINTS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-background rounded-xl p-6 shadow-sm">
                <Icon size={32} className="text-primary mb-3" aria-hidden="true" />
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
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

      {/* Enquiry form */}
      <section id="enquiry" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Request Home Care</h2>
          <p className="text-lg text-muted-foreground text-center mb-10">
            Tell us about your property and how long you'll be away. We'll reply with a care plan and
            a free quote.
          </p>
          <form onSubmit={onEmail} className="bg-background rounded-2xl shadow-sm p-6 md:p-10 space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <Label htmlFor="hc-name">Name *</Label>
                <Input id="hc-name" name="name" value={form.name} onChange={onChange} autoComplete="name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="hc-email">Email</Label>
                <Input id="hc-email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="hc-phone">Phone / WhatsApp</Label>
                <Input id="hc-phone" name="phone" type="tel" value={form.phone} onChange={onChange} autoComplete="tel" placeholder="Include country code, e.g. +44" className="mt-1" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="hc-address">Property address *</Label>
                <Input id="hc-address" name="address" value={form.address} onChange={onChange} autoComplete="street-address" placeholder="Street, town and postcode" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="hc-duration">Duration of absence</Label>
                <select id="hc-duration" name="duration" value={form.duration} onChange={onChange} className={inputClass}>
                  <option value="">Select…</option>
                  {DURATIONS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="hc-start">Preferred start date</Label>
                <Input id="hc-start" name="startDate" type="date" value={form.startDate} onChange={onChange} className="mt-1" />
              </div>
            </div>

            <fieldset>
              <legend className="text-sm font-medium mb-3">Required services</legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((s) => (
                  <label key={s} className="flex items-start gap-3 rounded-lg border border-border p-3 cursor-pointer hover:bg-muted/40 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input
                      type="checkbox"
                      checked={services.includes(s)}
                      onChange={() => toggleService(s)}
                      className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
                    />
                    <span className="text-sm">{s}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <Label htmlFor="hc-message">Anything else we should know?</Label>
              <Textarea id="hc-message" name="message" value={form.message} onChange={onChange} placeholder="Alarm, heating, pets, garden, return date…" className="mt-1 min-h-[110px]" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" size="lg" disabled={sending} className="flex-1 bg-primary hover:bg-primary/90">
                <Mail size={20} /> {sending ? "Sending…" : "Send by Email"}
              </Button>
              <Button type="button" size="lg" onClick={onWhatsApp} className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white">
                <MessageCircle size={20} /> Send via WhatsApp
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              We only use your details to reply to your enquiry.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeCare;
