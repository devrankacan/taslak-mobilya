import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-72 md:h-96">
        <Image
          src="/images/about-banner.svg"
          alt="Atölye"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-walnut/50 flex items-center">
          <div className="container-page">
            <h1 className="font-display text-4xl md:text-5xl text-cream">
              Hakkımızda
            </h1>
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow="Hikayemiz"
            title="2009'dan Beri Zanaatla Şekillenen Tasarımlar"
          />
          <p className="text-walnut-soft leading-relaxed mb-4">
            Lonca Mobilya, küçük bir atölyede ahşap ustası bir aile tarafından
            kuruldu. Bugün Türkiye&apos;nin dört bir yanındaki binlerce eve
            mobilya tasarlıyor ve üretiyoruz; ama köklerimizdeki zanaat
            anlayışından hiç ödün vermedik.
          </p>
          <p className="text-walnut-soft leading-relaxed">
            Her parçamız, kaliteli malzeme seçimi, titiz işçilik ve modern
            tasarım anlayışının birleşimiyle ortaya çıkıyor. Amacımız sadece
            mobilya satmak değil, evinizde uzun yıllar sürecek anılar
            yaratmanıza eşlik etmek.
          </p>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <Image
            src="/images/about-square.svg"
            alt="Mobilya atölyesi"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-cream-dark py-16">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-display text-3xl text-terracotta">15+</p>
            <p className="text-sm text-walnut-soft mt-1">Yıllık Tecrübe</p>
          </div>
          <div>
            <p className="font-display text-3xl text-terracotta">40.000+</p>
            <p className="text-sm text-walnut-soft mt-1">Mutlu Müşteri</p>
          </div>
          <div>
            <p className="font-display text-3xl text-terracotta">12</p>
            <p className="text-sm text-walnut-soft mt-1">Mağaza</p>
          </div>
          <div>
            <p className="font-display text-3xl text-terracotta">300+</p>
            <p className="text-sm text-walnut-soft mt-1">Ürün Çeşidi</p>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Değerlerimiz"
          title="Bizi Biz Yapan Üç Temel İlke"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Kalite",
              text: "Her ürünümüz, uzun ömürlü olması için sıkı kalite kontrol süreçlerinden geçer.",
            },
            {
              title: "Zanaat",
              text: "Geleneksel ustalık ile modern üretim tekniklerini birleştiriyoruz.",
            },
            {
              title: "Sürdürülebilirlik",
              text: "Doğaya duyarlı malzeme tedariki ve üretim süreçlerini benimsiyoruz.",
            },
          ].map((v) => (
            <div key={v.title} className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl text-walnut mb-2">{v.title}</h3>
              <p className="text-sm text-walnut-soft leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
