import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/data";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice
    ? Math.round(100 - (product.price / product.oldPrice) * 100)
    : null;

  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="bg-olive text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
              Yeni
            </span>
          )}
          {discount && (
            <span className="bg-terracotta text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
              %{discount}
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-walnut line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-terracotta">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-walnut-soft line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
