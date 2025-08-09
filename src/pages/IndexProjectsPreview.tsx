import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

const IndexProjectsPreview = () => {
  return (
    <div className="grid gap-6">
      {projects.slice(0, 3).map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
};

export default IndexProjectsPreview;
