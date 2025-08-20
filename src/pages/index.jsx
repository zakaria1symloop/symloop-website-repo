import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ExpertiseSection from "../../src/components/home/ExpertiseSection";
import SolutionsSection from "../../src/components/home/SolutionsSection";
import TechnologySection from "../../src/components/home/TechnologySection";
import ProductsSection from "../../src/components/home/ProductsSection";
import HeroSection from "../../src/components/home/HeroSection";
import CompanyContactSection from "../../src/components/home/CompanyContactSection";
import Seo from "../../src/utils/seo";

import Divider from "../../src/components/home/Devider";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  
  const typingSpeed = 100;
  const changeDelay = 3000;

  useEffect(() => {
    const placeholders = [
      t('search.placeholder1'),
      t('search.placeholder2'),
      t('search.placeholder3'),
      t('search.placeholder4')
    ];

    let index = 0;
    let letterIndex = 0;
    let typingInterval;

    const typePlaceholder = () => {
      typingInterval = setInterval(() => {
        setPlaceholder(placeholders[index].slice(0, letterIndex + 1));
        letterIndex++;
        if (letterIndex === placeholders[index].length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            index = (index + 1) % placeholders.length;
            letterIndex = 0;
            typePlaceholder();
          }, changeDelay);
        }
      }, typingSpeed);
    };

    typePlaceholder();
    return () => clearInterval(typingInterval);
  }, [t]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.toLowerCase().includes("site") || input.toLowerCase().includes("web")) {
      router.push("/services/sites-web");
    } else if (input.toLowerCase().includes("mobile") || input.toLowerCase().includes("app")) {
      router.push("/services/developpement-mobile");
    } else if (input.toLowerCase().includes("hébergement") || input.toLowerCase().includes("serveur")) {
      router.push("/services/hebergement");
    } else if (input.toLowerCase().includes("logiciel") || input.toLowerCase().includes("application")) {
      router.push("/services/logiciel");
    } else {
      router.push("/contact");
    }
  };

  const seoContent = {
    'fr': {
      title: 'Symloop Technology MENA - Leader IT MENA | Développeur Flutter, IoT, IA | Solutions Digitales MENA',
      description: 'Entreprise IT leader MENA depuis 2012. Développeur Flutter expert, solutions IoT ESP32, intelligence artificielle ChatGPT, cybersécurité PME. Service région MENA incluant Maroc, Tunisie, EAU, Arabie Saoudite. Développement logiciel sur mesure, applications mobiles React Native, sites e-commerce, ERP CRM personnalisés. Support 24/7 région MENA.',
      keywords: 'développement logiciel MENA, entreprise informatique MENA, création site web MENA, application mobile Flutter MENA, solutions IoT MENA, intelligence artificielle entreprise MENA, cybersécurité PME MENA, développeur Flutter Dubai Riyadh, ERP sur mesure MENA, transformation digitale Moyen-Orient Afrique du Nord'
    },
    'en': {
      title: 'Symloop Technology MENA - Leading IT Company MENA | Flutter Developer, IoT, AI | MENA Digital Solutions',
      description: 'Leading MENA IT company since 2012. Expert Flutter developer, ESP32 IoT solutions, ChatGPT artificial intelligence, SME cybersecurity. Serving MENA region including Morocco, Tunisia, UAE, Saudi Arabia. Custom software development, React Native mobile apps, e-commerce websites, custom ERP CRM systems. 24/7 MENA region support.',
      keywords: 'software development MENA, IT company MENA Morocco Tunisia UAE Saudi Arabia, mobile app development MENA region, IoT solutions Middle East, artificial intelligence enterprise MENA, cybersecurity SME MENA Morocco UAE, Flutter developer MENA UAE Dubai Saudi, custom ERP systems MENA, digital transformation Middle East North Africa'
    },
    'ar': {
      title: 'شركة سيملوب للتكنولوجيا منطقة مينا - شركة تقنية رائدة في منطقة مينا | مطور فلاتر، إنترنت الأشياء، الذكاء الاصطناعي',
      description: 'شركة تكنولوجيا المعلومات الرائدة في منطقة الشرق الأوسط وشمال أفريقيا منذ 2012. مطور فلاتر خبير، حلول إنترنت الأشياء ESP32، الذكاء الاصطناعي ChatGPT، الأمن السيبراني للشركات الصغيرة والمتوسطة. نخدم منطقة مينا: المغرب، تونس، الإمارات، السعودية. تطوير البرمجيات المخصصة، تطبيقات الهاتف المحمول React Native، مواقع التجارة الإلكترونية، أنظمة ERP CRM مخصصة. دعم 24/7 في منطقة مينا.',
      keywords: 'تطوير البرمجيات منطقة الشرق الأوسط وشمال أفريقيا, شركة تكنولوجيا المعلومات مينا المغرب تونس الإمارات, تطوير تطبيقات الهاتف المحمول منطقة مينا, حلول إنترنت الأشياء الشرق الأوسط, الذكاء الاصطناعي للشركات مينا, مطور فلاتر مينا دبي الرياض, أنظمة إدارة الموارد المخصصة مينا'
    }
  };

  const currentSeo = seoContent[router.locale] || seoContent['fr'];

  return (
    <>
      <Seo 
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        type="website"
        image="/assets/symloop-mena-it-company.png"
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "127"
        }}
        breadcrumbs={[
          { name: "Accueil", path: "/" }
        ]}
      />
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
      
  <HeroSection />
<Divider />
 
<CompanyContactSection />
<Divider />
<ProductsSection />
<Divider />
      <ExpertiseSection />
      <Divider />
      <SolutionsSection />
      <Divider />
    

<TechnologySection />
      {/* Social Media Links */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            {t('contact.followUs')}
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/symloop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/symloop-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      
      </section>

      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

