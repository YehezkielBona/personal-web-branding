import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const success = login(email, password);

    if (success) {
      // Login berhasil -> pindah ke halaman Create Blog
      navigate("/create-blog");
    } else {
      // ---- EDGE CASE: login gagal (field kosong/format salah/password pendek) ----
      setErrorMessage(
        "Login gagal. Pastikan email valid dan password minimal 6 karakter."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 md:px-6 py-20">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-forest mb-1 text-center">Masuk</h1>
        <p className="text-forest/60 text-sm text-center mb-6">
          Login untuk mulai menulis artikel blog Adem Ayem
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block font-medium text-forest mb-1 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-sage/40 focus:outline-none focus:ring-2 focus:ring-leaf"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-forest mb-1 text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-sage/40 focus:outline-none focus:ring-2 focus:ring-leaf"
              placeholder="Minimal 6 karakter"
            />
          </div>

          {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

          <button
            type="submit"
            className="bg-leaf text-cream px-6 py-3 rounded-full font-semibold hover:bg-sage transition-colors mt-2"
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-xs text-forest/50 mt-6">
          Demo: masukkan email &amp; password bebas (email harus format valid,
          password &ge; 6 karakter). Gunakan <b>admin@ademayem.id</b> untuk role admin.
        </p>

        <Link to="/" className="block text-center text-leaf text-sm mt-4 hover:underline">
          &larr; Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default Login