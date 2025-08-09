import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/content/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <SEO title="Project not found – Lisa Hanevold" description="Project not found" />
        <h1 className="text-2xl font-semibold mb-2">Project not found</h1>
        <p className="text-muted-foreground mb-6">The project you are looking for does not exist.</p>
        <Link className="text-primary underline" to="/projects">Back to projects</Link>
      </Layout>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: window.location.href,
    image: project.coverImage,
    author: {
      "@type": "Person",
      name: "Lisa Hanevold",
    },
  };

  return (
    <Layout>
      <SEO
        title={`${project.title} – Lisa Hanevold`}
        description={project.summary}
        canonical={window.location.href}
        image={project.coverImage}
        structuredData={jsonLd}
      />
      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-muted-foreground max-w-2xl">{project.summary}</p>
        </header>
        <div className="mb-8 rounded-lg overflow-hidden border">
          <img
            src={project.coverImage}
            alt={`${project.title} hero image`}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-4 leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.detailsMarkdown}</ReactMarkdown>
          <p className="mt-6">
            <a className="underline text-primary" href={project.originalUrl} target="_blank" rel="noreferrer">
              View full case on original portfolio
            </a>
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
