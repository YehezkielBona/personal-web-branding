import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import { companyInfo } from "../data/companyInfo";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <SectionTitle
        title="Tentang Warung Solo Adem Ayem"
        subtitle={`Berdiri sejak tahun ${companyInfo.foundedYear}, membawa cita rasa Solo ke Pondok Gede.`}
      />

      {/* ---- SEJARAH ---- */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-forest mb-4">Sejarah Kami</h2>
          <p className="text-forest/80 leading-relaxed">{companyInfo.history}</p>
        </div>
        <img
          src="foto-warung.jpg"
          alt="Sejarah Warung Adem Ayem"
          className="rounded-2xl w-full h-72 object-cover"
        />
      </section>

      {/* ---- BUDAYA KERJA ---- */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-forest mb-6 text-center">
          Budaya Kerja Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyInfo.workCulture.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-leaf text-lg">{item.title}</h3>
              <p className="text-forest/70 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- LINK KE HALAMAN TIM ---- */}
      <section className="bg-forest text-cream rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-2 text-cream">Kenali Tim Kami</h2>
        <p className="text-cream/80 mb-6">
          Di balik setiap hidangan, ada tim yang bekerja dengan sepenuh hati <br /> untuk menghidangkan makanan lezat dan bergizi bagi kalian semua
        </p>
        <Link
          to="/teams"
          className="inline-block bg-sage text-forest px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors"
        >
          Lihat Halaman Tim
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;