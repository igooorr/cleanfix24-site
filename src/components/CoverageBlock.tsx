import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { COVERAGE } from "@/lib/coverage";
import { AREAS, areaPath } from "@/lib/areas";

const pageFor = (town: string) => AREAS.find((a) => a.name === town);

/** Towns we cover around Wellington & Taunton, linking to area pages where they exist. */
const CoverageBlock = ({ muted = false }: { muted?: boolean }) => (
  <section className={`py-16 ${muted ? "bg-muted/30" : ""}`} aria-labelledby="coverage-heading">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 id="coverage-heading" className="text-3xl md:text-4xl font-bold mb-4">
        Areas we cover
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Based in Wellington, we cover homes and businesses within about 20 miles — across Taunton
        Deane, Sedgemoor and the edge of Exmoor in Somerset, and Mid Devon over the border.
      </p>
      {(
        [
          ["Somerset", COVERAGE.somerset],
          ["Devon", COVERAGE.devon],
        ] as const
      ).map(([county, towns]) => (
        <div key={county} className="mb-6">
          <h3 className="font-semibold mb-3">{county}</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {towns.map((t) => {
              const area = pageFor(t);
              const cls = "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium shadow-sm";
              return (
                <li key={t}>
                  {area ? (
                    <Link to={areaPath(area)} className={`${cls} bg-primary text-white hover:bg-primary/90`}>
                      <MapPin size={14} aria-hidden="true" /> {t}
                    </Link>
                  ) : (
                    <span className={`${cls} bg-background`}>{t}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <p className="text-sm text-muted-foreground">
        Not on the list?{" "}
        <Link to="/contact" className="text-primary font-semibold hover:underline">
          Ask us
        </Link>{" "}
        — we can often still help.
      </p>
    </div>
  </section>
);

export default CoverageBlock;
