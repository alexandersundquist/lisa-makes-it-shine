// Update this page (the content is just a fallback if you fail to update the page)
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import IndexProjectsPreview from "./IndexProjectsPreview";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Lisa Hanevold – Portfolio"
        description="Industrial Design student focusing on service design, UX and strategic design."
        canonical={window.location.href}
      />
      {/* Hero */}
      <section className="rounded-2xl bg-hero text-primary-foreground p-10 md:p-16 shadow-xl" aria-label="Intro">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest/relaxed text-xs/relaxed opacity-90">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">Lisa Hanevold</h1>
          <p className="mt-4 text-base md:text-lg opacity-95 max-w-2xl">
            Industrial Design student focusing on service design, UX and strategic design. I enjoy solving meaningful
            problems and crafting clear, user-centered experiences.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="inline-block">
              <span className="sr-only">View projects</span>
              <button className="btn-hero h-11 px-5 rounded-md">View projects</button>
            </a>
            <a href="/about" className="underline underline-offset-4">About me</a>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured projects</h2>
        <div className="grid gap-6">
          <IndexProjectsPreview />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
