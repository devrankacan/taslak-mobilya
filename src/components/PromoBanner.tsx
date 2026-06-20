import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-olive text-cream">
      <div className="container-page py-12 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="font-display text-2xl mb-1">Ücretsiz Kargo</p>
          <p className="text-sm text-cream/70">5.000 TL üzeri tüm siparişlerde</p>
        </div>
        <div className="md:border-x border-cream/15">
          <p className="font-display text-2xl mb-1">18 Aya Varan Taksit</p>
          <p className="text-sm text-cream/70">Seçili bankalarla kredi kartına</p>
        </div>
        <div>
          <p className="font-display text-2xl mb-1">Kolay İade</p>
          <p className="text-sm text-cream/70">14 gün içinde sorgusuz iade</p>
        </div>
      </div>
      <div className="container-page pb-12 text-center">
        <Link href="/urunler" className="btn-primary">
          Fırsatları Gör
        </Link>
      </div>
    </section>
  );
}
