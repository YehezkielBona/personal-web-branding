import { useEffect, useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import TeamCard from "../components/ui/TeamCard";
import type { TeamMember } from "../types";

const roles = [
  { role: "Kepala Dapur", bio: "Meracik resep turun-temurun dengan cita rasa konsisten sejak 2012." },
  { role: "Sous Chef", bio: "Bertanggung jawab menjaga kualitas rasa di setiap sesi masak." },
  { role: "Manajer Operasional", bio: "Memastikan pelayanan pelanggan berjalan ramah dan cepat." },
  { role: "Barista & Minuman", bio: "Meracik minuman tradisional pendamping menu utama." },
  { role: "Bagian Catering", bio: "Mengelola pesanan catering untuk acara keluarga dan kantor." },
  { role: "Kasir & Admin", bio: "Mengelola transaksi harian dan menyambut pelanggan dengan senyum." },
];

const Teams = () => {
  // 3 state penting untuk pola fetch data: data, loading, error
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true); // mulai true karena fetch langsung jalan
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Bikin fungsi async terpisah di dalam useEffect, karena useEffect
    // sendiri TIDAK BOLEH langsung jadi fungsi async.
    const fetchTeamMembers = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null); // reset error tiap kali coba fetch ulang

        // results=6 -> minta 6 orang, nat=id -> data bernuansa Indonesia
        const response = await fetch("https://randomuser.me/api/?results=6&nat=id");

        // ---- EDGE CASE: response gagal (misal server error / offline) ----
        if (!response.ok) {
          throw new Error("Gagal mengambil data tim, coba lagi nanti.");
        }

        const data = await response.json();

        // "Olah" data mentah dari API jadi bentuk TeamMember yang kita mau,
        // sambil "menempelkan" role & bio buatan kita berdasarkan urutan index.
        const mappedMembers: TeamMember[] = data.results.map(
          (person: any, index: number) => ({
            id: person.login.uuid,
            name: `${person.name.first} ${person.name.last}`,
            role: roles[index % roles.length].role,
            // "% roles.length" (modulo) supaya kalau suatu saat kita minta
            // lebih dari 6 orang, index-nya "muter lagi" dari awal roles,
            // gak error "undefined" walau roles cuma ada 6 item.
            bio: roles[index % roles.length].bio,
            photo: person.picture.large,
          })
        );

        setMembers(mappedMembers);
      } catch (error) {
        // ---- EDGE CASE: gagal fetch total (misal internet mati) ----
        setErrorMessage(
          error instanceof Error ? error.message : "Terjadi kesalahan tak terduga."
        );
      } finally {

        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []); // [] = fetch cuma jalan sekali pas halaman pertama dibuka

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <SectionTitle
        title="Tim Kami"
        subtitle="Orang-orang hebat di balik kelezatan setiap hidangan Adem Ayem."
      />

      {/* ---- STATE 1: LOADING ---- */}
      {isLoading && (
        <div className="text-center py-16">
          <div className="inline-block w-10 h-10 border-4 border-sage border-t-transparent rounded-full animate-spin" />
          <p className="text-forest/60 mt-4">Memuat data tim...</p>
        </div>
      )}

      {/* ---- STATE 2: ERROR ---- */}
      {!isLoading && errorMessage && (
        <div className="text-center py-16">
          <p className="text-red-600 font-medium">{errorMessage}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-leaf underline font-medium"
          >
            Coba muat ulang halaman
          </button>
        </div>
      )}

      {/* ---- STATE 3: SUKSES, TAPI DATA KOSONG ---- */}
      {!isLoading && !errorMessage && members.length === 0 && (
        <p className="text-center text-forest/60 py-16">Belum ada data tim untuk ditampilkan.</p>
      )}

      {/* ---- STATE 4: SUKSES DAN ADA DATA ---- */}
      {!isLoading && !errorMessage && members.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;