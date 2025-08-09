import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About – Lisa Hanevold"
        description="Fifth-year Industrial Design student focused on service design and UX."
        canonical={window.location.href}
      />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">About me</h1>
      </header>
      <section className="grid gap-4 max-w-3xl">
        <p>
          Hi, I'm Lisa, a fifth-year Industrial Design student at NTNU. Throughout my studies, I have worked on
          projects in different fields of design with a focus on solving problems and creating the best possible user
          experience.
        </p>
        <p>
          I enjoy working across discovery and delivery: research, insights, service blueprints, flows, prototyping and
          communication. Below you'll find a selection of projects that reflect my interests in service design, UX and
          strategy.
        </p>
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Service Design (research, user journeys, blueprints)</li>
            <li>UX Design (flows, wireframes, prototyping)</li>
            <li>Strategic Design & problem framing</li>
            <li>Figma and design systems</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default About;
