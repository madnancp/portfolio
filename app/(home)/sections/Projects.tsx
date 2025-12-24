import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/constats/projects";

const ProjectsSection = () => {
  return (
    <section>
      <SectionTitle title=" Projects" />

      {PROJECTS.map((project, idx) => (
        <div key={idx} className="border border-gray-300 dark:border-gray-700 rounded-md p-4 mb-6">
          <h4 className="font-bold text-lg mb-1">{project.title}</h4>
          <p className="text-muted-foreground">{project.description}</p>
          {project.tags.map((tag, tagIdx) => (
            <p id={tagIdx}>{tag}</p>
          ))}
        </div>
      ))}
    </section>
  )
}

export default ProjectsSection;
