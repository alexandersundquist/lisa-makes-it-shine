import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const subject = encodeURIComponent("Hello Lisa – Portfolio Inquiry");
  const body = encodeURIComponent("Hi Lisa,\n\nI came across your portfolio and ...\n\nBest,\n");
  return (
    <Layout>
      <SEO title="Contact – Lisa Hanevold" description="Get in touch with Lisa Hanevold." canonical={window.location.href} />
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Contact</h1>
      </header>
      <section className="max-w-lg space-y-4">
        <p className="text-muted-foreground">I'd love to hear from you regarding opportunities or collaborations.</p>
        {/* TODO: Replace with your real email */}
        <Button variant="hero" asChild>
          <a href={`mailto:your-email@example.com?subject=${subject}&body=${body}`}>Email me</a>
        </Button>
        <p className="text-xs text-muted-foreground">Replace the email address in Contact.tsx with your preferred address.</p>
      </section>
    </Layout>
  );
};

export default Contact;
