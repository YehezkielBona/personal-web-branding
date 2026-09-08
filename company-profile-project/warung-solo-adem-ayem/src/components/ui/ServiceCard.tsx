import type { Service } from "../../types";

type ServiceCardProps = {
  service: Service;
};

const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
        
        // EDGE CASE: kalau gambar gagal dimuat (404, dsb), tampilkan
        // gambar placeholder abu-abu supaya layout gak rusak/kosong.
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/400x300/85A947/EFE3C2?text=Adem+Ayem";
        }}
      />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-forest">{service.name}</h3>
        <p className="text-forest/80 text-sm mt-2 flex-1">
          {service.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-leaf font-bold text-lg">
            {formatRupiah(service.price)}
          </span>
        </div>

        {service.testimonial && (
          <blockquote className="mt-4 pt-4 border-t border-sage/30 text-sm italic text-forest/70">
            "{service.testimonial.quote}"
            <footer className="mt-1 not-italic font-semibold text-leaf">
              — {service.testimonial.name}
            </footer>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
