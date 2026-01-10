import { ProjectCard } from "@/components/ProjectsCard";
import { SectionTitle } from "@/components/SectionTitle";
import { PROJECTS } from "@/constats/projects";

const ProjectsSection = () => {
  return (
    <section>
      <SectionTitle title=" Projects" />

      <div className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} title={project.title} description={project.description} tech={project.tech} github={project.github} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection;
