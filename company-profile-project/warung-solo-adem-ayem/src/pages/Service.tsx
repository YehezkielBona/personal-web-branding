import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";
import { services } from "../data/services";

const Services = () => {

  if (services.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 text-center">
        <p className="text-forest/70">Belum ada layanan yang tersedia saat ini.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <SectionTitle
        title="Produk & Layanan Kami"
        subtitle="Setiap menu dimasak segar setiap hari dengan resep turun-temurun khas Solo."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;