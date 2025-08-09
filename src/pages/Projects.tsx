import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <Layout>
      <SEO
        title="Projects – Lisa Hanevold Portfolio"
        description="Selected UX, service design and strategy projects by Lisa Hanevold."
        canonical={window.location.href}
      />
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">A curated selection of work across service design, UX, and strategic design.</p>
      </header>
      <section className="grid gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </Layout>
  );
};

export default Projects;
