import type { Testimonial } from "../../types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({testimonial}: TestimonialCardProps) => {
  return (
    <div className="bg-forest text-cream rounded-2xl p-6 h-full flex flex-col">
      <div className="flex gap-1 mb-3" aria-label={`Rating ${testimonial.rating} dari 5`}>
        {Array.from({length: 5}).map((_, index) => (
            <span 
            key={index}
            className={index < testimonial.rating ? "text-cream" : "text-cream/30"}
            >
                ★
            </span>
        ))}
      </div>
      <p className="italic flex-1">{testimonial.quote}</p>
      <div className="mt-4">
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-sm text-cream/70">{testimonial.role}</p>
      </div>
    </div>
  )
}

export default TestimonialCard

