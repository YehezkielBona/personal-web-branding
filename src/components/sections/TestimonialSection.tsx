// src/components/sections/TestimonialsSection.tsx
import { testimonials } from "../data/testimonial";
const TestimonialsSection = () => {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-ink mb-10">Testimoni</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="border border-ink/15 rounded-md p-6 bg-offwhite">
              <p className="text-ink/80 italic mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {/* Lingkaran inisial, BUKAN foto (sesuai request: cuma foto Mr. Kiel yang boleh dipakai) */}
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-ink font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;