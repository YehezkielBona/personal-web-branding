import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { BlogPost } from "../types";

const STORAGE_KEY = "ademayem_blog_posts";

const CreateBlog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState(""); // contoh: "Kuliner, Promo"
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    setErrorMessage("");
    setSuccessMessage("");

    // ---- EDGE CASE: validasi field wajib ----
    if (!title.trim() || !summary.trim() || !content.trim()) {
      setErrorMessage("Judul, ringkasan, dan konten wajib diisi.");
      return; // hentikan proses, jangan lanjut simpan
    }

    // ---- EDGE CASE: judul kepanjangan (biar gak merusak layout kartu) ----
    if (title.length > 100) {
      setErrorMessage("Judul maksimal 100 karakter.");
      return;
    }

    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const newPost: BlogPost = {
      id: `user-${Date.now()}`,

      title: title.trim(),
      summary: summary.trim(),
      content: content.trim(),
      author: user?.name ?? "Anonim",
   
      date: new Date().toISOString().split("T")[0], // ambil "2026-09-09" saja
      tags: tags.length > 0 ? tags : ["Umum"],  
    };


    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existingPosts: BlogPost[] = existingRaw ? JSON.parse(existingRaw) : [];
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));

    setSuccessMessage("Artikel berhasil dipublikasikan!");

    // Reset form
    setTitle("");
    setSummary("");
    setContent("");
    setTagsInput("");


    setTimeout(() => {
      navigate("/blog");
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-16">
      <h1 className="text-3xl font-bold text-forest mb-2">Tulis Artikel Baru</h1>
      <p className="text-forest/60 mb-8">Masuk sebagai {user?.name}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="title" className="block font-medium text-forest mb-1">
            Judul Artikel
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-sage/40 focus:outline-none focus:ring-2 focus:ring-leaf"
            placeholder="Contoh: Resep Rahasia Sambal Adem Ayem"
          />
        </div>

        <div>
          <label htmlFor="summary" className="block font-medium text-forest mb-1">
            Ringkasan Singkat
          </label>
          <input
            id="summary"
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-sage/40 focus:outline-none focus:ring-2 focus:ring-leaf"
            placeholder="1-2 kalimat ringkasan artikel"
          />
        </div>

        <div>
          <label htmlFor="content" className="block font-medium text-forest mb-1">
            Konten Lengkap
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full px-4 py-2 rounded-lg border border-sage/40 focus:outline-none focus:ring-2 focus:ring-leaf resize-y"
            placeholder="Tulis isi artikel di sini. Boleh pakai format Markdown sederhana seperti **tebal** atau daftar."
          />
        </div>

        <div>
          <label htmlFor="tags" className="block font-medium text-forest mb-1">
            Tag / Kategori
          </label>
          <input
            id="tags"
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-sage/40 focus:outline-none focus:ring-2 focus:ring-leaf"
            placeholder="Pisahkan dengan koma, contoh: Kuliner, Promo"
          />
        </div>

        {/* Pesan error/sukses -> render bersyarat */}
        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-leaf font-medium text-sm">{successMessage}</p>}

        <button
          type="submit"
          className="bg-leaf text-cream px-6 py-3 rounded-full font-semibold hover:bg-sage transition-colors"
        >
          Publikasikan Artikel
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;