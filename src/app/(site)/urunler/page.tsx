import Link from "next/link";
import { Suspense } from "react";
import { categories, products } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";

function ProductsContent({ kategori }: { kategori?: string }) {
  const activeCategory = categories.find((c) => c.slug === kategori);
  const filtered = activeCategory
    ? products.filter((p) => p.categorySlug === activeCategory.slug)
    : products;

  return (
    <div className="container-page py-12">
      <nav className="text-sm text-walnut-soft mb-4">
        <Link href="/" className="hover:text-terracotta">
          Anasayfa
        </Link>
        <span className="mx-2">/</span>
        <span className="text-walnut">
          {activeCategory ? activeCategory.name : "Tüm Ürünler"}
        </span>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl text-walnut mb-2">
        {activeCategory ? activeCategory.name : "Tüm Ürünler"}
      </h1>
      <p className="text-walnut-soft mb-8">
        {activeCategory ? activeCategory.description : "Tüm koleksiyonumuzu keşfedin."}{" "}
        &mdash; {filtered.length} ürün bulundu
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/urunler"
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            !activeCategory
              ? "bg-walnut text-cream border-walnut"
              : "border-border text-walnut-soft hover:border-walnut"
          }`}
        >
          Tümü
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/urunler?kategori=${cat.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeCategory?.slug === cat.slug
                ? "bg-walnut text-cream border-walnut"
                : "border-border text-walnut-soft hover:border-walnut"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const params = await searchParams;
  return (
    <Suspense>
      <ProductsContent kategori={params.kategori} />
    </Suspense>
  );
}
