import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import BlogCard from "../components/ui/BlogCard";
import Button from "../components/ui/Button";
import { initialBlogPosts } from "../data/blogPosts";
import { useAuth } from "../hooks/useAuth";
import type { BlogPost } from "../types";

const STORAGE_KEY = "ademayem_blog_posts";

const BlogList = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null); // null = "Semua"

  // Ambil gabungan data dummy + data buatan user dari localStorage,
  // jalan sekali pas halaman ini pertama dibuka.
  useEffect(() => {
    const savedPostsRaw = localStorage.getItem(STORAGE_KEY);
    const savedPosts: BlogPost[] = savedPostsRaw ? JSON.parse(savedPostsRaw) : [];

    // Artikel terbaru (buatan user) ditaruh PALING ATAS, makanya
    // kita gabung "savedPosts" duluan baru "initialBlogPosts".
    setPosts([...savedPosts, ...initialBlogPosts]);
  }, []);

  // Ambil semua tag unik dari seluruh post, buat jadi tombol filter.
  // useMemo = "hitung ulang HANYA kalau posts berubah", biar gak
  // dihitung ulang tiap kali komponen re-render tanpa alasan.
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    // Set = kumpulan nilai yang otomatis MENGHILANGKAN duplikat
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [posts]);

  // Filter posts berdasarkan search term DAN tag aktif sekaligus
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchTag = activeTag ? post.tags.includes(activeTag) : true;
      return matchSearch && matchTag;
    });
  }, [posts, searchTerm, activeTag]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <SectionTitle title="Blog Adem Ayem" subtitle="Cerita, promo, dan tips seputar Warung Solo Adem Ayem." />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        {/* input cari artikel -> "controlled input", nilainya diambil dari state */}
        <input
          type="text"
          placeholder="Cari judul artikel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-72 px-4 py-2 rounded-full border border-sage/40 focus:outline-none focus:ring-2 focus:ring-leaf"
        />

        {user && (
          <Link to="/create-blog">
            <Button variant="primary">+ Tulis Artikel Baru</Button>
          </Link>
        )}
      </div>

      {/* tombol filter tag */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${
            activeTag === null ? "bg-leaf text-cream" : "bg-white text-forest border border-sage/30"
          }`}
        >
          Semua
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              activeTag === tag ? "bg-leaf text-cream" : "bg-white text-forest border border-sage/30"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ---- EDGE CASE: hasil filter/cari kosong ---- */}
      {filteredPosts.length === 0 ? (
        <p className="text-center text-forest/60 py-16">
          Tidak ada artikel yang cocok dengan pencarian/filter kamu.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;