// src/utils/solutionsData.js
const solutionsData = {
  logiciel: {
    title: "Développement de Logiciels",
    shortDesc: "Automatisation & Performance",
    longDesc:
      "Libérez votre productivité grâce à des outils adaptés à vos processus métiers, intégrés et sécurisés.",
    image: "/images/logiciel.jpg",
    features: [
      { title: "Analyse Métier", desc: "Workflow détaillé avant dev." },
      { title: "Tech Moderne", desc: "Node, Python, Go, selon le besoin." },
      { title: "Scalabilité", desc: "Pensé pour grandir avec vous." },
    ],
  },

  "developpement-mobile": {
    title: "Développement Mobile",
    shortDesc: "Apps Innovantes",
    longDesc:
      "Touchez vos clients où qu’ils soient grâce à des applications intuitives et performantes (iOS & Android).",
    image: "/images/mobile.jpg",
    features: [
      { title: "UX / UI Premium", desc: "Design centré utilisateur." },
      { title: "Cross-platform", desc: "React Native / Flutter optimisé." },
      { title: "Publication Stores", desc: "Accompagnement complet." },
    ],
  },

  "sites-web": {
    title: "Création de Sites Web",
    shortDesc: "Visibilité & Conversion",
    longDesc:
      "Offrez à votre marque une vitrine moderne, rapide et optimisée SEO. Du one-page au e-commerce complet.",
    image: "/images/website.jpg",
    features: [
      { title: "SEO First", desc: "Structure optimisée Google." },
      { title: "Design Responsive", desc: "Parfait sur mobile." },
      { title: "Admin Facile", desc: "Gérez contenu sans coder." },
    ],
  },

  ecommerce: {
    title: "Solutions E-commerce",
    shortDesc: "Vente en ligne",
    longDesc:
      "Boutiques performantes, paniers optimisés et modules de paiement sécurisés pour vendre plus.",
    image: "/images/ecommerce.jpg",
    features: [
      { title: "Paiement sécurisé", desc: "Stripe / PayPal / local." },
      { title: "Interface CMS", desc: "Produits & stock faciles." },
      { title: "Pages Rapides", desc: "Core Web Vitals 90+." },
    ],
  },

  hebergement: {
    title: "Solutions d’Hébergement",
    shortDesc: "Sécurité & Fiabilité",
    longDesc:
      "Serveurs gérés, backup, surveillance 24/7 : vos données restent disponibles et protégées.",
    image: "/images/hebergement.jpg",
    features: [
      { title: "Uptime 99.9 %", desc: "Infra redondée." },
      { title: "SSL Auto", desc: "HTTPS gratuit & automatique." },
      { title: "Sauvegardes", desc: "Snapshots quotidiens." },
    ],
  },

  iot: {
    title: "Solutions IoT",
    shortDesc: "Connectivité Intelligente",
    longDesc:
      "De l’objet à la plateforme cloud : capteurs, passerelles, dashboards en temps réel.",
    image: "/images/iot.jpg",
    features: [
      { title: "Prototypage", desc: "PCB, micro-controleurs." },
      { title: "Cloud MQTT", desc: "Scalabilité millions events." },
      { title: "Applis Contrôle", desc: "Web & mobile." },
    ],
  },

  "network-solutions": {
    title: "Solutions Réseau",
    shortDesc: "Architecture & Sécurité",
    longDesc:
      "Conception, installation et supervision de réseaux rapides et sécurisés pour PME & industriels.",
    image: "/images/network.jpg",
    features: [
      { title: "Wi-Fi 6 / Fibre", desc: "Débits garantis." },
      { title: "Firewall", desc: "Protection périmétrique." },
      { title: "Monitoring", desc: "Tableaux de bord en temps réel." },
    ],
  },

  infrastructure: {
    title: "Solutions Infrastructure",
    shortDesc: "Serveurs & Datacenters",
    longDesc:
      "Déployez des environnements IT robustes pour soutenir votre croissance digitale.",
    image: "/images/infrastructure.jpg",
    features: [
      { title: "Virtualisation", desc: "VMware / Proxmox / K8s." },
      { title: "Haute Dispo", desc: "Cluster + Load balancer." },
      { title: "Maintenance", desc: "Contrats 24/7." },
    ],
  },

  cloud: {
    title: "Solutions Cloud",
    shortDesc: "Agilité & Scalabilité",
    longDesc:
      "Migration, déploiement hybride, cloud privé : adaptez votre IT aux défis modernes.",
    image: "/images/cloud.jpg",
    features: [
      { title: "AWS / GCP / Azure", desc: "Multi-cloud maîtrisé." },
      { title: "CI/CD", desc: "Livraisons sans downtime." },
      { title: "Optimisation Coût", desc: "Payez uniquement l’usage." },
    ],
  },

  "custom-solutions": {
    title: "Solutions sur Mesure",
    shortDesc: "Développements Spéciaux",
    longDesc:
      "Nous réalisons ce que les autres ne peuvent pas — projets complexes, intégrations uniques.",
    image: "/images/custom.jpg",
    features: [
      { title: "Audit & Conseil", desc: "Étude de faisabilité." },
      { title: "Dév Spécifique", desc: "Technos adaptées." },
      { title: "Suivi Long Terme", desc: "TMA & évolution." },
    ],
  },

  marketing: {
    title: "Marketing & Publicité",
    shortDesc: "Acquisition Client",
    longDesc:
      "Campagnes Google, Facebook, Instagram, reporting ROI clair pour booster votre visibilité.",
    image: "/images/marketing.jpg",
    features: [
      { title: "SEA + SMM", desc: "Google Ads & Meta Ads." },
      { title: "Branding", desc: "Identité cohérente." },
      { title: "Reporting", desc: "KPIs clairs, actionnables." },
    ],
  },

  consulting: {
    title: "Consulting & Stratégie",
    shortDesc: "Expertise Digitale",
    longDesc:
      "Conseils stratégiques, audits technologiques et accompagnement à la transformation digitale.",
    image: "/images/consulting.jpg",
    features: [
      { title: "Audit Complet", desc: "Process, infra, marketing." },
      { title: "Roadmap", desc: "Plan d’action priorisé." },
      { title: "Coaching", desc: "Formation des équipes." },
    ],
  },

  cybersecurite: {
    title: "Solutions Cybersécurité",
    shortDesc: "Protection & Conformité",
    longDesc:
      "Détection, prévention, réponse : protégez vos données et votre réputation.",
    image: "/images/cyber.jpg",
    features: [
      { title: "Pentest", desc: "Tests d’intrusion réguliers." },
      { title: "SOC 24/7", desc: "Surveillance temps réel." },
      { title: "Conformité RGPD", desc: "Process & documentation." },
    ],
  },
};

export default solutionsData;
