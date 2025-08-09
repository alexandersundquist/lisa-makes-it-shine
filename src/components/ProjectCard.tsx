import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  coverImage: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.slug}`} className="block group">
      <Card className="project-card overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[4/3] bg-muted">
            <img
              src={project.coverImage}
              alt={`${project.title} cover image`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground">{project.summary}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
