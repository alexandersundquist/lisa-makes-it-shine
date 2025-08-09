import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  structuredData?: Record<string, any>;
}

export const SEO = ({ title, description, canonical, image, structuredData }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    ensureMeta('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }).setAttribute('content', description);

    ensureMeta('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    }).setAttribute('content', title);

    ensureMeta('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      return m;
    }).setAttribute('content', description);

    if (image) {
      ensureMeta('meta[property="og:image"]', () => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:image');
        return m;
      }).setAttribute('content', image);
    }

    if (canonical) {
      let link: HTMLLinkElement | null = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    if (structuredData) {
      let script = document.getElementById('ld-json') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        (script as HTMLScriptElement).id = 'ld-json';
        (script as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(script);
      }
      (script as HTMLScriptElement).textContent = JSON.stringify(structuredData);
    }
  }, [title, description, canonical, image, structuredData]);

  return null;
};

export default SEO;
