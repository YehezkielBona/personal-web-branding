import { companyInfo } from "../../data/companyInfo";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream/80 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-cream font-bold text-lg">{companyInfo.name}</h3>
          <p className="text-sm mt-2">{companyInfo.tagline}</p>
        </div>
        <div>
          <h4 className="text-cream font-semibold mb-2">Kontak</h4>
          <p className="text-sm">{companyInfo.address}</p>
          <p className="text-sm mt-1">{companyInfo.phone}</p>
          <p className="text-sm mt-1">{companyInfo.email}</p>
        </div>
        <div>
          <h4 className="text-cream font-semibold mb-2">Jam Operasional</h4>
          <p className="text-sm">Senin – Minggu: 09.00 – 21.00 WIB</p>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center text-xs py-4">
        © {currentYear} {companyInfo.name}. Semua hak cipta dilindungi. Made by Yehezkiel Bona
      </div>
    </footer>
  );
};

export default Footer;