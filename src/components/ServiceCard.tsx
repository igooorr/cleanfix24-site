import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_URL } from "@/lib/site";
import type { Service } from "@/lib/services";

const ServiceCard = ({ title, description, image, icon: Icon, features }: Service) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
            <Icon size={72} strokeWidth={1.5} className="text-white" aria-hidden="true" />
          </div>
        )}
      </div>
      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
