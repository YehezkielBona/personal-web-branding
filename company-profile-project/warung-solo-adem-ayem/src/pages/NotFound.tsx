import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-24 text-center">
      <h1 className="text-6xl font-extrabold text-forest">404</h1>
      <p className="text-forest/70 mt-4">
        Halaman yang kamu cari tidak ditemukan, mungkin sudah dipindahkan atau URL salah ketik.
      </p>
      <Link
        to="/"
        className="inline-block mt-8 bg-leaf text-cream px-6 py-3 rounded-full font-semibold hover:bg-sage transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;