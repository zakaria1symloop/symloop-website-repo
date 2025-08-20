// src/services/[slug.jsx]

import { useRouter } from "next/router";
import ServiceDetail from "../../components/services/ServiceDetail";

const getServicesSlugs = () => ({
  "sites-web": "web",
  "developpement-mobile": "mobile", 
  "hebergement": "hosting",
  "logiciel": "software",
  "iot": "iot",
  "intelligence-artificielle": "ai",
  "ecommerce": "ecommerce",
  "cybersecurite": "cybersecurity",
});

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  const servicesSlugs = getServicesSlugs();
  const serviceKey = servicesSlugs[slug];

  if (!serviceKey) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Service non trouvé</h1>
        <p className="text-gray-600">Le service demandé n'existe pas.</p>
      </div>
    );
  }

  // Static service data since we're not using i18n
  const services = {
    web: {
      title: "Sites Web",
      subtitle: "Solutions web modernes",
      description: "Développement de sites web professionnels",
      price: "À partir de 2000€",
      duration: "4-8 semaines",
      features: ["Design responsive", "SEO optimisé", "Performance"],
      technologies: ["React", "Next.js", "Tailwind"],
      applications: ["E-commerce", "Corporate", "Portfolio"]
    }
  };
  
  const service = services[serviceKey] || services.web;

  return (
    <ServiceDetail 
      title={service.title}
      subtitle={service.subtitle} 
      description={service.description}
      price={service.price}
      duration={service.duration}
      features={service.features}
      technologies={service.technologies}
      applications={service.applications}
    />
  );
}

export async function getStaticPaths() {
  const slugs = Object.keys(getServicesSlugs());
  
  const paths = slugs.map(slug => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
