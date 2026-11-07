import { BadgeCheck, CalendarClock, Heart, MapPin, PoundSterling, ShieldCheck } from "lucide-react";
import { TRUST } from "@/lib/site";

const ITEMS = [
  { icon: Heart, title: "Family-run", text: "Run by Ihor and Ruslana — you deal with the owners" },
  { icon: MapPin, title: "Local", text: "Based in Wellington & Taunton, Somerset" },
  { icon: PoundSterling, title: "Clear prices", text: "Free quotes — you know the cost before we start" },
  { icon: CalendarClock, title: "Flexible", text: "Days, times and frequency to suit you" },
  ...(TRUST.dbsChecked
    ? [{ icon: BadgeCheck, title: "DBS checked", text: "Background-checked, trusted in your home" }]
    : []),
  ...(TRUST.insured
    ? [{ icon: ShieldCheck, title: "Fully insured", text: "Public liability insurance for your peace of mind" }]
    : []),
];

const TrustBar = ({ muted = false }: { muted?: boolean }) => (
  <section className={`py-12 ${muted ? "bg-muted/30" : ""}`} aria-label="Why choose Cleanfix24">
    <div className="container mx-auto px-4">
      <ul className={`grid grid-cols-2 gap-6 max-w-6xl mx-auto ${ITEMS.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex flex-col items-center text-center gap-2">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Icon size={24} className="text-primary" aria-hidden="true" />
            </span>
            <span className="font-semibold">{title}</span>
            <span className="text-sm text-muted-foreground">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBar;
