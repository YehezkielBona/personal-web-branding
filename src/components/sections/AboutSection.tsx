const principles = ["Ketepatan waktu dalam setiap penyelesaian tugas", "Perhatian pada detail, dari kode hingga tampilan", "Komunikasi yang baik dengan tim dan klien"];

const AboutSection = () => {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-ink mb-4">Tentang Saya</h2>
          <p className="text-ink/80 leading-relaxed">
            Saya adalah Developer yang senang mempelajari seluruh proses pembuatan aplikasi web, mulai dari merancang antarmuka hingga membangun server di baliknya. Saya percaya kode yang baik adalah kode yang mudah dibaca orang lain, bukan
            cuma yang berjalan.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl text-ink mb-4">Prinsip Kerja</h3>
          <ul className="space-y-3">
            {principles.map((item) => (
              <li key={item} className="flex gap-3 text-ink/80">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
