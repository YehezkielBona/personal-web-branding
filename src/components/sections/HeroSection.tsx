import Button from "../ui/Button";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-offwhite">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold font-medium mb-3">Full-Stack Web Developer</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink leading-tight mb-6">Yehezkiel Bona Purba</h1>
          <p className="text-ink/80 text-lg leading-relaxed mb-8 max-w-md">Membangun aplikasi web dari Front-end hingga back-end. Fokus pada kode yang rapi, performa yang baik, dan pengalaman pengguna yang jelas.</p>
          <div className="flex gap-4">
            <Button href="#portfolio" variant="primary">
              Lihat Portofolio
            </Button>
            <Button href="#contact" variant="secondary">
              Hubungi Saya
            </Button>
          </div>
        </div>
        <div className="relative justify-self-center w-72 h-72 md:w-80 md:h-80">
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-sage rounded-md" />
          <img src="/profieKiel.png" alt="Foto Yehezkiel" className="relative w-full h-full object-cover rounded-md border-2 border-ink" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
