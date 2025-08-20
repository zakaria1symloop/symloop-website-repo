import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import solutionsData from "../../utils/solutionsData";
import { motion } from "framer-motion";

export default function SolutionPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Still on server? show loading
  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Chargement…
      </div>
    );
  }

  // slug can be string | string[]
  const key = Array.isArray(slug) ? slug[0] : slug;
  const solution = solutionsData[key];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold">404 — Solution introuvable</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{solution.title} | Symloop</title>
        <meta name="description" content={solution.shortDesc} />
      </Head>

      <div className="min-h-screen bg-white text-black py-20 px-4 space-y-16">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold"
          >
            {solution.title}
          </motion.h1>
          <p className="text-gray-600 text-lg">{solution.shortDesc}</p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={solution.image}
            width={960}
            height={540}
            alt={solution.title}
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Long Description */}
        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-8">
          <p>{solution.longDesc}</p>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-bold">Ce que nous offrons :</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.features.map((f, i) => (
              <div
                key={i}
                className="p-4 bg-gray-100 rounded-xl shadow-md text-gray-800"
              >
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-white hover:text-black border border-black transition font-semibold">
            Demander un devis
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = Object.keys(solutionsData);
  const paths = slugs.map(slug => ({ params: { slug } }));

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
