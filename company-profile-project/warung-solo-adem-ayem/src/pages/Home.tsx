import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import { companyInfo } from "../data/companyInfo";
import { services } from "../data/services";
import { testimonials } from "../data/testimonals";

const Home = () => {
  const featuredServices = services.slice(0, 3);
  return (
    <div>
      <section className="relative bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-6  py-20 md:py-28 flex flex-col items-center text-center gap-6">
          <img
            src="/logo-ademayem.png"
            alt={`Logo ${companyInfo.name}`}
            className="h-40 w-40 object-contain rounded-full"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-cream">
            {companyInfo.tagline}
          </h1>
          <p className="text-cream/80 max-w-2xl text-lg">
            {companyInfo.missionStatement}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* "Link" dari react-router-dom = versi <a> yang gak reload halaman */}
            <Link to="/services">
              <Button variant="primary">Lihat Menu Kami</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="!border-cream !text-cream hover:!bg-cream hover:!text-forest">

                Kenali Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- GAMBARAN UMUM PERUSAHAAN ---------- */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="foto-warung.jpg"
          alt="Suasana Warung Solo Adem Ayem"
          className="rounded-2xl w-full h-80 object-cover"
        />
        <div>
          <SectionTitle title="Tentang Kami Sekilas" />
          <p className="text-forest/80 leading-relaxed">
            {companyInfo.history}
          </p>
          <Link to="/about" className="inline-block mt-6 text-leaf font-semibold hover:underline">
            Baca sejarah lengkap kami &rarr;
          </Link>
        </div>
      </section>

      {/* ---------- LAYANAN/MENU UTAMA ---------- */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <SectionTitle
            title="Menu Andalan Kami"
            subtitle="Cita rasa autentik Solo yang selalu dirindukan pelanggan setia kami."
          />
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (

              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="primary">Lihat Semua Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONI ---------- */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <SectionTitle
          title="Apa Kata Pelanggan Kami"
          subtitle="Kepuasan pelanggan adalah prioritas utama kami sejak 2012."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
