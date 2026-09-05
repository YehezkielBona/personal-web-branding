import ProjectCard from "../ui/ProjectCard";
import { projects } from "../data/projects";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-cream py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-ink mb-10">Portofolio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
