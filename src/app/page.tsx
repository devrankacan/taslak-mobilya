import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import Newsletter from "@/components/Newsletter";
import { products } from "@/lib/data";

export default function Home() {
  const newProducts = products.filter((p) => p.isNew);
  const discounted = products.filter((p) => p.oldPrice);

  return (
    <>
      <Hero />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Kategoriler"
          title="İhtiyacınıza Uygun Alanı Seçin"
          description="Evinizin her köşesi için özenle tasarlanmış mobilya koleksiyonlarımıza göz atın."
        />
        <CategoryGrid />
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Yeni Gelenler"
          title="2026 Sezonunun Yeni Yüzleri"
          description="Yeni sezon koleksiyonumuzdan en taze tasarımlar."
        />
        <ProductGrid products={newProducts} />
      </section>

      <PromoBanner />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Kaçırma"
          title="Sınırlı Süreli Fırsatlar"
          description="Seçili ürünlerde geçerli indirimlerden hemen yararlanın."
        />
        <ProductGrid products={discounted} />
      </section>

      <Newsletter />
    </>
  );
}
