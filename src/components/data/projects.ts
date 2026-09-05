import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Aplikasi Manajemen Tugas (Task Manager)",
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    situation: "Tim kecil butuh cara sederhana untuk melacak tugas harian tanpa harus berlangganan tools mahal",
    task: "Bertanggung jawab merancang dan membangun aplikasi full-stack dari nol, mulai dari database hingga tampilan",
    action: "Membangun REST API dengan Express & PostgreSQL, lalu membuat antarmuka drag-and-drop dengan React dan Typescript. Tantangan utamanya adalah menyinkronkan state antar banyak pengguna secara real-time.",
    result: "Aplikasi berhasil digunakann oleh tim 8 orang, mengurangi waktu koordinasi tugas harian sekitar 30%",
    projectUrl: "https://github.com/",
  },
  {
    id: "project-2",
    title: "Platform Blog Pribadi",
    techStack: ["React", "Vite", "TailwindCSS", "Markdown"],
    situation: "Ingin punya tempat menulis catatan belajar yang ringan dan cepat, tanpa CMS yang berat",
    task: "Merancang sistem yang bisa membaca file Markdown dan menampilkannya sebagai hal yang rapi",
    action: "Menggunakan Vite untuk build cepat, parser Markdown untuk konten, dan Tailwind untuk styling responsif.",
    result: "Website memuat dalam waktu kurang dari 1 detik dan dipakai untuk mendokumentasikan proses belajar secara konsisten",
    projectUrl: "https://github.com/",
  },
];
