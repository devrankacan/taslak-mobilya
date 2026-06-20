import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getCategoryBySlug,
  getProductBySlug,
  getProductsByCategory,
  products,
} from "@/lib/data";
import AddToCartPanel from "@/components/AddToCartPanel";
import ProductGrid from "@/components/ProductGrid";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const discount = product.oldPrice
    ? Math.round(100 - (product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className="container-page py-12">
      <nav className="text-sm text-walnut-soft mb-6">
        <Link href="/" className="hover:text-terracotta">
          Anasayfa
        </Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link
              href={`/urunler?kategori=${category.slug}`}
              className="hover:text-terracotta"
            >
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-walnut">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <ProductGallery
          name={product.name}
          images={product.images}
          colors={product.colors}
          discount={discount}
        />

        <div>
          <h1 className="font-display text-3xl md:text-4xl text-walnut mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="text-terracotta">{"★".repeat(Math.round(product.rating))}</span>
            <span className="text-walnut-soft">
              {product.rating.toFixed(1)} ({product.reviewCount} değerlendirme)
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display text-3xl text-terracotta">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-walnut-soft line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="text-walnut-soft leading-relaxed mb-6">
            {product.description}
          </p>

          <AddToCartPanel product={product} />

          <ul className="mt-8 space-y-2 border-t border-border pt-6">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2 text-sm text-walnut-soft">
                <span className="text-olive mt-0.5">●</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl md:text-3xl text-walnut mb-8">
            Bunlar da İlginizi Çekebilir
          </h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}
