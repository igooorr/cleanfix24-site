import type { Service } from "@/lib/services";

/** Service photo, or a branded gradient with the service icon when no photo exists yet. */
const ServiceImage = ({ service, iconSize = 64 }: { service: Service; iconSize?: number }) => {
  const Icon = service.icon;
  return (
    <div className="aspect-video overflow-hidden">
      {service.image ? (
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
          <Icon size={iconSize} strokeWidth={1.5} className="text-white" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default ServiceImage;
