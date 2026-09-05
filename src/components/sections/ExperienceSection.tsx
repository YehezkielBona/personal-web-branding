import { experiences } from "../data/experience";


const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-offwhite py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-ink mb-10">Pengalaman</h2>

        {/* border-l = garis vertikal di kiri, ini beneran timeline jadi wajar */}
        <div className="border-l-2 border-gold pl-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Titik penanda di garis timeline */}
              <span className="absolute -left-10.25 top-1 w-3 h-3 rounded-full bg-gold" />
              <p className="text-sm text-ink/60">{exp.duration}</p>
              <h3 className="font-serif text-xl text-ink mt-1">
                {exp.jobTitle}
              </h3>
              <p className="text-forest text-sm mb-3">{exp.company}</p>
              <ul className="space-y-1">
                {exp.responsibilities.map((item) => (
                  <li key={item} className="text-ink/80 text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
