import SkillBadge from "../ui/SkillBadge"
import { skillCategories } from "../data/skills"

const groups: {key: keyof typeof skillCategories; label: string}[] = [
  {key: "frontEnd", label:"Front-End"},
  {key: "backEnd", label:"Back-End"},
  {key: "tools", label:"DevOps & Tools "},
];

const SkillSection = () => {
  return (
    <section id="skills" className="bg-offwhite py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-ink mb-10">Kemampuan Teknis</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-semibold text-forest mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategories[group.key].map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection
