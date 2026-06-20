"use client";

import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <SectionHeading
        eyebrow="İletişim"
        title="Bize Ulaşın"
        description="Sorularınız, ürün talepleriniz veya mağaza ziyaretleriniz için bizimle iletişime geçin."
      />

      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-walnut mb-1.5">
              Ad Soyad
            </label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-walnut mb-1.5">
              E-posta
            </label>
            <input
              type="email"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-walnut mb-1.5">
              Mesajınız
            </label>
            <textarea
              rows={5}
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-terracotta"
            />
          </div>
          <button type="submit" className="btn-primary">
            Mesaj Gönder
          </button>
        </form>

        <div className="space-y-6">
          <div className="bg-cream-dark rounded-2xl p-6">
            <h3 className="font-display text-xl text-walnut mb-3">Genel Merkez</h3>
            <p className="text-sm text-walnut-soft leading-relaxed">
              Lonca Mobilya Tic. A.Ş.
              <br />
              Atölye Sokak No: 12, Maslak
              <br />
              İstanbul, Türkiye
            </p>
          </div>
          <div className="bg-cream-dark rounded-2xl p-6">
            <h3 className="font-display text-xl text-walnut mb-3">İletişim Bilgileri</h3>
            <p className="text-sm text-walnut-soft leading-relaxed">
              Telefon: 0850 123 45 67
              <br />
              E-posta: destek@loncamobilya.com
              <br />
              Çalışma Saatleri: Hafta içi 09:00 - 18:00
            </p>
          </div>
          <div className="bg-cream-dark rounded-2xl p-6">
            <h3 className="font-display text-xl text-walnut mb-3">Sosyal Medya</h3>
            <p className="text-sm text-walnut-soft leading-relaxed">
              Instagram, Facebook ve Pinterest hesaplarımızdan bizi takip
              ederek yeni koleksiyonlardan ilk siz haberdar olun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
