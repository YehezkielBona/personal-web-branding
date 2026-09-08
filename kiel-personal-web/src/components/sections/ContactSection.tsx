import React, { useState } from "react";
import Button from "../ui/Button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data terkirim: ", formData);
    alert(`Terima kasih, ${formData.name}! Pesan kamu sudah tercatat!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-offwhite py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-ink mb-4">Hubungi Saya</h2>
          <p className="text-ink/80 mb-6">Terbuka untuk kolaborasi project, peluang pekerjaan atau sekadar ngobrol soal teknologi atau framework terbaru</p>
          <p className="text-ink/80 mb-2">Email: yehezkiel.purba@binus.ac.id</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/yehezkiel-bona-purba/" className="text-gold underline text-sm">
              Linkedin
            </a>
            <a href="https://github.com/YehezkielBona" className="text-gold underline text-sm">
              GitHub
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-ink/70 mb-1">Nama</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-ink/20 rounded-md px-4 py-2 focus:outline-none focus:border-gold"
              placeholder="Nama lengkap"
              />
          </div>
            <div>
            <label className="block text-sm text-ink/70 mb-1">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-ink/20 rounded-md px-4 py-2 focus:outline-none focus:border-gold"
              placeholder="bonap@gmail.com"
              />
          </div>
          <div>
            <label className="block text-sm text-ink/70 mb-1">Pesan</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-ink/20 rounded-md px-4 py-2 focus:outline-none focus:border-gold"
              placeholder="Tulis pesanmu disini!"
              />
          </div>
          <Button type="submit" variant="primary">Kirim Pesan</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
