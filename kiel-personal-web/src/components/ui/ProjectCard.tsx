import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const starItems = [
    { label: "Situtation", value: project.situation },
    { label: "Task", value: project.task },
    { label: "Action", value: project.action },
    { label: "Result", value: project.result },
  ];

  return (
    <div className="border border-ink/15 rounded-md p-6 bg-offwhite">
      <h3 className="font-serif text-2xl text-ink mb-2">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded bg-cream text-ink/70">
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        {starItems.map((item) => (
          <div key={item.label}>
            <p className="text-sm font-semibold text-forest">{item.label}</p>
            <p className="text-sm text-ink/80">{item.value}</p>
          </div>
        ))}
      </div>

      {project.projectUrl && (
        <a href={project.projectUrl} className="inline-block mt-4 text-sm font-medium text-gold underline">
          Lihat Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
