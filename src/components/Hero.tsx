import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-cream-dark overflow-hidden">
      <div className="container-page grid md:grid-cols-2 items-center gap-10 py-14 md:py-24">
        <div className="relative z-10">
          <p className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-4">
            2026 Yeni Sezon Koleksiyonu
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight text-walnut">
            Evinize <span className="text-terracotta">zanaatla</span> şekillenen
            bir karakter katın
          </h1>
          <p className="mt-6 text-walnut-soft text-base md:text-lg max-w-md">
            Özenle seçilmiş malzemeler ve ustaca işçilikle üretilen mobilyalar.
            Oturma grubundan yatak odasına, yaşam alanlarınız için doğru parçayı
            keşfedin.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/urunler" className="btn-primary">
              Koleksiyonu Keşfet
            </Link>
            <Link href="/hakkimizda" className="btn-secondary">
              Hikayemiz
            </Link>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-walnut-soft">
            <div>
              <p className="font-display text-2xl text-walnut">15+</p>
              <p>Yıllık Tecrübe</p>
            </div>
            <div>
              <p className="font-display text-2xl text-walnut">40.000+</p>
              <p>Mutlu Müşteri</p>
            </div>
            <div>
              <p className="font-display text-2xl text-walnut">18 Ay</p>
              <p>Taksit Seçeneği</p>
            </div>
          </div>
        </div>

        <div className="relative h-72 md:h-[520px] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80"
            alt="Modern oturma odası"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
