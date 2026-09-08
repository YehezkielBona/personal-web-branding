import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "nasi-liwet",
    name: "Nasi Liwet Solo",
    description: "Nasi gurih khas Solo dimasak santan, disajikan dengan ayam suwir, telur pindang, labu siam, dan sambal goreng jipang.",
    price: 25000,
    image: "/menu/nasi-liwet.jpg",
    testimonial: {
      name: "Budi Rahardjo",
      quote: "Nasi liwet ini mengingatkan saya sama masakan ibu saya di Solo!",
    },
  },
  {
    id: "sate-buntel",
    name: "Sate Buntel",
    description: "Sate daging cincang khas Solo dibalut lemak kambing, dibakar sempurna, disajikan dengan sambal kecap dan acar.",
    price: 35000,
    image: "/menu/sate-buntel.jpg",
    testimonial: {
      name: "Mbak Rina",
      quote: "Empuk banget, gak amis, favorit keluarga tiap weekend!",
    },
  },
  {
    id: "timlo-solo",
    name: "Timlo Solo",
    description: "Sup bening berisi sosis Solo, ayam suwir, telur pindang, dan jamur, cocok dinikmati hangat-hangat.",
    price: 22000,
    image: "/menu/timlo.jpg",
  },
  {
    id: "selat-solo",
    name: "Selat Solo",
    description: "Perpaduan unik steak Jawa dengan kuah encer manis-asam, telur, kentang goreng, dan sayuran segar.",
    image: "/menu/selat-solo.jpg",
    price: 28000,
  },
  {
    id: "paket-catering",
    name: "Paket Catering Acara",
    description: "Layanan catering untuk acara keluarga, kantor, dan hajatan dengan menu bisa disesuaikan (minimal 20 porsi).",
    image: "/menu/paket-catering.jpg",
    price: 30000, // harga per porsi
    testimonial: {
      name: "Ibu Wati (Panitia Arisan RT 05)",
      quote: "Untuk acara arisan RT, semua tamu puas, rasanya konsisten enak!",
    },
  },
];
