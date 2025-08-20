import Head from 'next/head';
import { useRouter } from 'next/router';

export default function FAQSchema({ faqs = [] }) {
  const router = useRouter();

  if (!faqs.length) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}

// MENA-focused FAQ data for different services
export const getServiceFAQs = (serviceType, locale = 'fr') => {
  const faqs = {
    'flutter-development': {
      'fr': [
        {
          question: "Combien coûte le développement d'une application Flutter en Algérie?",
          answer: "Le coût du développement Flutter en Algérie varie de 180,000 à 1,200,000 DA selon la complexité. Nous proposons des tarifs compétitifs adaptés au marché MENA avec des devis personnalisés gratuits."
        },
        {
          question: "Pourquoi choisir Flutter pour développer mon application mobile en MENA?",
          answer: "Flutter permet de développer simultanément pour iOS et Android avec un seul code source, réduisant les coûts de 40%. Perfect pour le marché MENA où Android domine avec 85% de parts de marché."
        },
        {
          question: "Combien de temps faut-il pour développer une application Flutter?",
          answer: "Le développement Flutter prend généralement 8-16 semaines selon la complexité. Notre équipe en Algérie livre en moyenne 30% plus rapidement que la concurrence grâce à notre expertise locale."
        },
        {
          question: "Intervenez-vous dans toutes les wilayas d'Algérie et les pays MENA?",
          answer: "Oui, nous intervenons dans les 58 wilayas d'Algérie et servons toute la région MENA: Maroc, Tunisie, EAU, Arabie Saoudite, Qatar. Support technique 24/7 en français, anglais et arabe."
        },
        {
          question: "Proposez-vous la maintenance et les mises à jour Flutter?",
          answer: "Absolument! Nous incluons 6 mois de maintenance gratuite avec publication sur les stores. Plans de maintenance étendus disponibles avec mises à jour Flutter et corrections de bugs."
        }
      ],
      'en': [
        {
          question: "How much does Flutter app development cost in Algeria?",
          answer: "Flutter development costs in Algeria range from €450 to €3,000 depending on complexity. We offer competitive MENA-focused pricing with free personalized quotes."
        },
        {
          question: "Why choose Flutter for mobile app development in MENA region?",
          answer: "Flutter enables simultaneous iOS and Android development with single codebase, reducing costs by 40%. Perfect for MENA market where Android dominates with 85% market share."
        },
        {
          question: "How long does it take to develop a Flutter application?",
          answer: "Flutter development typically takes 8-16 weeks depending on complexity. Our Algeria-based team delivers 30% faster than competitors thanks to local expertise."
        },
        {
          question: "Do you serve all Algeria provinces and MENA countries?",
          answer: "Yes, we serve all 58 Algeria provinces and entire MENA region: Morocco, Tunisia, UAE, Saudi Arabia, Qatar. 24/7 technical support in French, English, and Arabic."
        },
        {
          question: "Do you provide Flutter maintenance and updates?",
          answer: "Absolutely! We include 6 months free maintenance with store publication. Extended maintenance plans available with Flutter updates and bug fixes."
        }
      ],
      'ar': [
        {
          question: "كم تكلفة تطوير تطبيق فلاتر في الجزائر؟",
          answer: "تتراوح تكلفة تطوير فلاتر في الجزائر من 450€ إلى 3000€ حسب التعقيد. نقدم أسعار تنافسية تركز على منطقة الشرق الأوسط وشمال أفريقيا مع عروض أسعار مجانية مخصصة."
        },
        {
          question: "لماذا اختيار فلاتر لتطوير تطبيقات الهاتف المحمول في منطقة مينا؟",
          answer: "يتيح فلاتر التطوير المتزامن لأنظمة iOS و Android بقاعدة كود واحدة، مما يقلل التكاليف بنسبة 40%. مثالي لسوق مينا حيث يهيمن Android بنسبة 85% من الحصة السوقية."
        },
        {
          question: "كم من الوقت يستغرق تطوير تطبيق فلاتر؟",
          answer: "يستغرق تطوير فلاتر عادة 8-16 أسبوعًا حسب التعقيد. فريقنا في الجزائر يسلم بسرعة أكبر بنسبة 30% من المنافسين بفضل خبرتنا المحلية."
        },
        {
          question: "هل تخدمون جميع ولايات الجزائر ودول مينا؟",
          answer: "نعم، نخدم جميع الولايات الـ58 في الجزائر ومنطقة مينا بأكملها: المغرب، تونس، الإمارات، السعودية، قطر. دعم تقني 24/7 بالفرنسية والإنجليزية والعربية."
        },
        {
          question: "هل تقدمون صيانة وتحديثات فلاتر؟",
          answer: "بالتأكيد! نشمل 6 أشهر من الصيانة المجانية مع النشر في المتاجر. خطط صيانة موسعة متاحة مع تحديثات فلاتر وإصلاح الأخطاء."
        }
      ]
    },
    'iot-solutions': {
      'fr': [
        {
          question: "Qu'est-ce que l'IoT et comment peut-il bénéficier à mon entreprise en Algérie?",
          answer: "L'IoT (Internet des Objets) connecte vos équipements pour collecter des données en temps réel. En Algérie, nos solutions IoT ESP32 améliorent l'efficacité de 35% dans l'agriculture et l'industrie manufacturière."
        },
        {
          question: "Quels types de capteurs IoT utilisez-vous pour l'agriculture intelligente?",
          answer: "Nous utilisons des capteurs de température, humidité du sol, pH, luminosité avec ESP32. Parfait pour l'agriculture algérienne: monitoring 24/7, irrigation automatique, économies d'eau de 40%."
        },
        {
          question: "Combien coûte une solution IoT complète pour une entreprise?",
          answer: "Les solutions IoT varient de €500 à €5000 selon l'ampleur. Nous proposons des solutions sur mesure adaptées aux budgets des PME algériennes avec ROI moyen de 6 mois."
        },
        {
          question: "Vos solutions IoT fonctionnent-elles sans internet permanent?",
          answer: "Oui! Nos systèmes ESP32 incluent un mode hors-ligne avec stockage local et synchronisation différée. Idéal pour les zones rurales algériennes avec connectivité limitée."
        },
        {
          question: "Proposez-vous la formation pour utiliser les systèmes IoT?",
          answer: "Absolument! Formation complète incluse: installation, configuration, maintenance. Support technique en français/arabe et documentation adaptée aux équipes techniques algériennes."
        }
      ],
      'en': [
        {
          question: "What is IoT and how can it benefit my business in Algeria?",
          answer: "IoT (Internet of Things) connects your equipment to collect real-time data. In Algeria, our ESP32 IoT solutions improve efficiency by 35% in agriculture and manufacturing industries."
        },
        {
          question: "What types of IoT sensors do you use for smart agriculture?",
          answer: "We use temperature, soil humidity, pH, light sensors with ESP32. Perfect for Algerian agriculture: 24/7 monitoring, automatic irrigation, 40% water savings."
        },
        {
          question: "How much does a complete IoT solution cost for a business?",
          answer: "IoT solutions range from €500 to €5000 depending on scope. We offer custom solutions adapted to Algerian SME budgets with average 6-month ROI."
        },
        {
          question: "Do your IoT solutions work without permanent internet?",
          answer: "Yes! Our ESP32 systems include offline mode with local storage and deferred synchronization. Ideal for rural Algerian areas with limited connectivity."
        },
        {
          question: "Do you provide training to use IoT systems?",
          answer: "Absolutely! Complete training included: installation, configuration, maintenance. Technical support in French/Arabic and documentation adapted for Algerian technical teams."
        }
      ],
      'ar': [
        {
          question: "ما هو إنترنت الأشياء وكيف يمكن أن يفيد شركتي في الجزائر؟",
          answer: "إنترنت الأشياء يربط معداتك لجمع البيانات في الوقت الفعلي. في الجزائر، تحسن حلول ESP32 IoT الكفاءة بنسبة 35% في الزراعة والصناعات التحويلية."
        },
        {
          question: "ما أنواع مستشعرات إنترنت الأشياء التي تستخدمونها للزراعة الذكية؟",
          answer: "نستخدم مستشعرات الحرارة، رطوبة التربة، الأس الهيدروجيني، الإضاءة مع ESP32. مثالي للزراعة الجزائرية: مراقبة 24/7، ري تلقائي، توفير 40% من المياه."
        },
        {
          question: "كم تكلف حلول إنترنت الأشياء الكاملة للشركات؟",
          answer: "تتراوح حلول إنترنت الأشياء من 500€ إلى 5000€ حسب النطاق. نقدم حلول مخصصة تتكيف مع ميزانيات الشركات الصغيرة والمتوسطة الجزائرية مع عائد استثمار متوسط 6 أشهر."
        },
        {
          question: "هل تعمل حلول إنترنت الأشياء بدون انترنت دائم؟",
          answer: "نعم! تشمل أنظمة ESP32 وضع عدم الاتصال مع التخزين المحلي والمزامنة المؤجلة. مثالي للمناطق الريفية الجزائرية ذات الاتصال المحدود."
        },
        {
          question: "هل تقدمون تدريب لاستخدام أنظمة إنترنت الأشياء؟",
          answer: "بالتأكيد! تدريب شامل مشمول: تركيب، تكوين، صيانة. دعم تقني بالفرنسية/العربية ووثائق تتكيف مع الفرق التقنية الجزائرية."
        }
      ]
    },
    'ai-solutions': {
      'fr': [
        {
          question: "Comment l'intelligence artificielle peut-elle améliorer mon entreprise en Algérie?",
          answer: "L'IA automatise vos processus, analyse vos données et améliore la prise de décision. Nos clients algériens économisent 50% du temps administratif avec nos solutions ChatGPT et ML personnalisées."
        },
        {
          question: "Qu'est-ce que ChatGPT peut faire pour mon service client?",
          answer: "ChatGPT automatise 80% des requêtes clients courantes en français/arabe. Réponses instantanées 24/7, réduction des coûts support de 60%, satisfaction client améliorée pour les entreprises MENA."
        },
        {
          question: "Vos solutions IA fonctionnent-elles en langue arabe?",
          answer: "Oui! Nos systèmes IA sont optimisés pour l'arabe algérien et les dialectes MENA. Traitement du langage naturel, reconnaissance vocale et génération de contenu en arabe professionnel."
        },
        {
          question: "Combien coûte l'implémentation d'une solution IA?",
          answer: "Les solutions IA commencent à €750 selon les besoins. ROI moyen de 300% en 12 mois pour nos clients algériens grâce à l'automatisation des tâches répétitives."
        },
        {
          question: "Mes données restent-elles sécurisées avec vos solutions IA?",
          answer: "Sécurité maximale garantie: chiffrement end-to-end, serveurs locaux DZ possibles, conformité GDPR. Vos données d'entreprise restent confidentielles et sous votre contrôle total."
        }
      ],
      'en': [
        {
          question: "How can artificial intelligence improve my business in Algeria?",
          answer: "AI automates your processes, analyzes data and improves decision-making. Our Algerian clients save 50% of administrative time with our custom ChatGPT and ML solutions."
        },
        {
          question: "What can ChatGPT do for my customer service?",
          answer: "ChatGPT automates 80% of common customer queries in French/Arabic. Instant 24/7 responses, 60% support cost reduction, improved customer satisfaction for MENA businesses."
        },
        {
          question: "Do your AI solutions work in Arabic language?",
          answer: "Yes! Our AI systems are optimized for Algerian Arabic and MENA dialects. Natural language processing, voice recognition and content generation in professional Arabic."
        },
        {
          question: "How much does AI solution implementation cost?",
          answer: "AI solutions start at €750 depending on needs. Average 300% ROI in 12 months for our Algerian clients through repetitive task automation."
        },
        {
          question: "Do my data remain secure with your AI solutions?",
          answer: "Maximum security guaranteed: end-to-end encryption, possible local DZ servers, GDPR compliance. Your business data remains confidential and under your total control."
        }
      ],
      'ar': [
        {
          question: "كيف يمكن للذكاء الاصطناعي تحسين أعمالي في الجزائر؟",
          answer: "الذكاء الاصطناعي يؤتمت عملياتك، يحلل بياناتك ويحسن اتخاذ القرارات. عملاؤنا الجزائريون يوفرون 50% من الوقت الإداري مع حلولنا المخصصة ChatGPT وML."
        },
        {
          question: "ماذا يمكن لـ ChatGPT أن يفعل لخدمة العملاء؟",
          answer: "ChatGPT يؤتمت 80% من استفسارات العملاء الشائعة بالفرنسية/العربية. ردود فورية 24/7، تقليل تكاليف الدعم بنسبة 60%، تحسين رضا العملاء للشركات في منطقة مينا."
        },
        {
          question: "هل تعمل حلول الذكاء الاصطناعي باللغة العربية؟",
          answer: "نعم! أنظمة الذكاء الاصطناعي محسنة للعربية الجزائرية ولهجات مينا. معالجة اللغة الطبيعية، التعرف على الصوت وإنتاج المحتوى بالعربية المهنية."
        },
        {
          question: "كم تكلف تطبيق حلول الذكاء الاصطناعي؟",
          answer: "حلول الذكاء الاصطناعي تبدأ من 750€ حسب الاحتياجات. متوسط عائد استثمار 300% في 12 شهر لعملائنا الجزائريين من خلال أتمتة المهام المتكررة."
        },
        {
          question: "هل تبقى بياناتي آمنة مع حلول الذكاء الاصطناعي؟",
          answer: "أمان أقصى مضمون: تشفير شامل، خوادم محلية جزائرية ممكنة، امتثال GDPR. بيانات شركتك تبقى سرية وتحت سيطرتك التامة."
        }
      ]
    },
    'cybersecurity': {
      'fr': [
        {
          question: "Pourquoi ma PME algérienne a-t-elle besoin de cybersécurité?",
          answer: "75% des cyberattaques visent les PME. En Algérie, les coûts moyens d'une violation sont 180,000 DA. Notre protection préventive coûte 10x moins cher qu'une récupération post-attaque."
        },
        {
          question: "Que comprend votre audit de sécurité informatique?",
          answer: "Audit complet: analyse vulnérabilités, test pénétration, évaluation pare-feu, conformité réglementaire algérienne. Rapport détaillé avec plan d'action prioritaire sous 48h."
        },
        {
          question: "Vos solutions cybersécurité sont-elles conformes à la réglementation algérienne?",
          answer: "Oui, conformité totale avec la réglementation DZ sur la protection des données. Certification ISO 27001, respect des directives ARPCE, documentation légale incluse."
        },
        {
          question: "Combien coûte la mise en place d'une protection cybersécurité?",
          answer: "Protection de base à partir de €250/mois pour PME. Solutions évolutives selon la taille d'entreprise. ROI immédiat par évitement des coûts de violation de données."
        },
        {
          question: "Intervenez-vous en urgence en cas de cyberattaque?",
          answer: "Service d'urgence 24/7 en Algérie. Intervention sur site sous 2h à Alger/Oran/Constantine. Récupération données, containment menace, restauration systèmes critiques."
        }
      ],
      'en': [
        {
          question: "Why does my Algerian SME need cybersecurity?",
          answer: "75% of cyberattacks target SMEs. In Algeria, average breach costs are €450. Our preventive protection costs 10x less than post-attack recovery."
        },
        {
          question: "What does your IT security audit include?",
          answer: "Complete audit: vulnerability analysis, penetration testing, firewall assessment, Algerian regulatory compliance. Detailed report with priority action plan within 48h."
        },
        {
          question: "Are your cybersecurity solutions compliant with Algerian regulations?",
          answer: "Yes, full compliance with DZ data protection regulations. ISO 27001 certification, ARPCE directive compliance, legal documentation included."
        },
        {
          question: "How much does cybersecurity protection implementation cost?",
          answer: "Basic protection starting at €250/month for SMEs. Scalable solutions according to company size. Immediate ROI by avoiding data breach costs."
        },
        {
          question: "Do you intervene urgently in case of cyberattack?",
          answer: "24/7 emergency service in Algeria. On-site intervention within 2h in Algiers/Oran/Constantine. Data recovery, threat containment, critical systems restoration."
        }
      ],
      'ar': [
        {
          question: "لماذا تحتاج شركتي الصغيرة والمتوسطة الجزائرية للأمن السيبراني؟",
          answer: "75% من الهجمات السيبرانية تستهدف الشركات الصغيرة والمتوسطة. في الجزائر، متوسط تكاليف الانتهاك 450€. حمايتنا الوقائية تكلف أقل بـ10 مرات من التعافي بعد الهجوم."
        },
        {
          question: "ماذا يشمل تدقيق الأمان المعلوماتي؟",
          answer: "تدقيق شامل: تحليل نقاط الضعف، اختبار الاختراق، تقييم جدار الحماية، الامتثال التنظيمي الجزائري. تقرير مفصل مع خطة عمل أولوية خلال 48 ساعة."
        },
        {
          question: "هل حلول الأمن السيبراني متوافقة مع اللوائح الجزائرية؟",
          answer: "نعم، امتثال كامل للوائح الجزائرية لحماية البيانات. شهادة ISO 27001، احترام توجيهات ARPCE، وثائق قانونية مشمولة."
        },
        {
          question: "كم تكلف تطبيق حماية الأمن السيبراني؟",
          answer: "حماية أساسية تبدأ من 250€/شهر للشركات الصغيرة والمتوسطة. حلول قابلة للتوسع حسب حجم الشركة. عائد استثمار فوري بتجنب تكاليف انتهاك البيانات."
        },
        {
          question: "هل تتدخلون بشكل عاجل في حالة الهجوم السيبراني؟",
          answer: "خدمة طوارئ 24/7 في الجزائر. تدخل في الموقع خلال ساعتين في الجزائر/وهران/قسنطينة. استرداد البيانات، احتواء التهديد، استعادة الأنظمة الحرجة."
        }
      ]
    }
  };

  return faqs[serviceType]?.[locale] || [];
};