import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceImage from "@/components/ServiceImage";
import { servicePath, type Service } from "@/lib/services";

const ServiceCard = ({ service }: { service: Service }) => (
  <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <Link to={servicePath(service)} tabIndex={-1} aria-hidden="true">
      <ServiceImage service={service} />
    </Link>
    <CardContent className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-3 text-foreground">
        <Link to={servicePath(service)} className="hover:text-primary transition-colors">
          {service.title}
        </Link>
      </h3>
      <p className="text-muted-foreground mb-6">{service.short}</p>
      <Button asChild className="w-full mt-auto bg-primary hover:bg-primary/90">
        <Link to={servicePath(service)}>
          Learn More <ArrowRight size={16} />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

export default ServiceCard;
