"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const getProducts = (t) => [
  {
    name: t('products.asa.name'),
    slug: "asa",
    desc: t('products.asa.description'),
    image: "/products/asa.png",
    externalUrl: null, // internal page
  },
  {
    name: t('products.symtv.name'),
    slug: "symtv-light",
    desc: t('products.symtv.description'),
    image: "/products/SYM.png",
    externalUrl: null, // internal page
  },
  {
    name: t('products.ibtissama.name'),
    slug: "el-ibtissama-soft",
    desc: t('products.ibtissama.description'),
    image: "/products/ibtissama.png", // change to a dedicated image if available
    externalUrl: "https://ibtissama-soft.com/", // <-- external destination
  },
];

export default function ProductsSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const products = getProducts(t);
  
  // RTL support
  const isRTL = router.locale === 'ar';

  // Update document direction dynamically without reload
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);
  
  return (
    <section className={`py-24 bg-black text-white ${isRTL ? 'rtl-products' : ''}`} key={`products-${router.locale}`}>
      <div className={`max-w-7xl mx-auto px-6 ${isRTL ? 'text-center' : 'text-center'}`}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          {t('products.title')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-20"
        >
          {t('products.subtitle')}
        </motion.p>

        {/* Product Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 ${isRTL ? 'rtl-grid' : ''}`}>
          {products.map((product, index) => {
            const linkProps = product.externalUrl
              ? {
                  href: product.externalUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { href: `/products/${product.slug}` };

            return (
              <motion.div
                key={`${product.slug}-${router.locale}`}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: isRTL ? -20 : 20
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  x: 0
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 60px rgba(255, 255, 255, 0.15)"
                }}
                className={`flex flex-col items-center space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ${isRTL ? 'rtl-product-card' : ''}`}
              >
                {/* product image */}
                <div className="w-24 h-24 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-20 h-20"
                  />
                </div>

                {/* name + desc */}
                <div className={`space-y-2 ${isRTL ? 'text-center' : 'text-center'}`}>
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <p className={`text-sm text-gray-400 leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                    {product.desc}
                  </p>
                </div>

                {/* CTA link */}
                <Link
                  {...linkProps}
                  className={`text-sm mt-4 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium ${isRTL ? 'rtl-cta-btn' : ''}`}
                >
                  {t('cta.viewPortfolio')}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
