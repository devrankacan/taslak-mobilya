"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-display text-3xl text-walnut mb-3">Sepetiniz Boş</h1>
        <p className="text-walnut-soft mb-8">
          Henüz sepetinize ürün eklemediniz. Koleksiyonumuza göz atmaya ne dersiniz?
        </p>
        <Link href="/urunler" className="btn-primary">
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl md:text-4xl text-walnut mb-8">Sepetim</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.slug}
              className="flex gap-4 bg-white border border-border rounded-2xl p-4"
            >
              <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-cream-dark">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    href={`/urunler/${item.slug}`}
                    className="font-medium text-walnut hover:text-terracotta"
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={() => removeItem(item.slug)}
                    className="text-walnut-soft hover:text-terracotta text-sm"
                    aria-label="Ürünü kaldır"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-border rounded-full">
                    <button
                      className="w-8 h-8 flex items-center justify-center"
                      onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-sm">{item.quantity}</span>
                    <button
                      className="w-8 h-8 flex items-center justify-center"
                      onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="font-semibold text-terracotta">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream-dark rounded-2xl p-6 h-fit">
          <h2 className="font-display text-xl text-walnut mb-4">Sipariş Özeti</h2>
          <div className="flex justify-between text-sm text-walnut-soft mb-2">
            <span>Ara Toplam</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between text-sm text-walnut-soft mb-4">
            <span>Kargo</span>
            <span>Ücretsiz</span>
          </div>
          <div className="flex justify-between font-semibold text-walnut border-t border-border pt-4 mb-6">
            <span>Toplam</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <button type="button" className="btn-primary w-full">
            Siparişi Tamamla
          </button>
          <p className="text-xs text-walnut-soft mt-3 text-center">
            Bu bir taslak sitedir, ödeme işlemi gerçekleştirilmez.
          </p>
        </div>
      </div>
    </div>
  );
}
