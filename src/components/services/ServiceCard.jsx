// layout/services/ServiceCard.jsx


import Link from "next/link";

export default function ServiceCard({ title, slug, description }) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md hover:border-black transition cursor-pointer text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}
