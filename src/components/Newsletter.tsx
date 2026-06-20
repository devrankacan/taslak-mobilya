"use client";

export default function Newsletter() {
  return (
    <section className="container-page py-16">
      <div className="bg-cream-dark rounded-3xl px-6 md:px-16 py-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-walnut">
          Yeni Koleksiyonlardan İlk Sen Haberdar Ol
        </h2>
        <p className="mt-3 text-walnut-soft max-w-xl mx-auto">
          E-bültenimize kayıt ol, özel indirim ve yeni ürün haberlerini
          kaçırma.
        </p>
        <form
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="E-posta adresiniz"
            className="flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm outline-none focus:border-terracotta"
          />
          <button type="submit" className="btn-primary">
            Abone Ol
          </button>
        </form>
      </div>
    </section>
  );
}
