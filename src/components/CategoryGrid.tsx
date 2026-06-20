import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/urunler?kategori=${cat.slug}`}
          className="group block"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-cream-dark">
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              sizes="(max-width: 768px) 50vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-walnut/20 group-hover:bg-walnut/35 transition-colors" />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-walnut">
            {cat.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
