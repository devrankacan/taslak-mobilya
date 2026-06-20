"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-walnut/50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Sepetim"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-display text-xl text-walnut">Sepetim</h2>
          <button
            onClick={closeCart}
            aria-label="Sepeti kapat"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream-dark text-walnut"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <p className="text-walnut-soft mb-6">Sepetiniz boş.</p>
            <Link href="/urunler" className="btn-primary" onClick={closeCart}>
              Alışverişe Başla
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-3">
                  <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-cream-dark">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/urunler/${item.slug}`}
                        onClick={closeCart}
                        className="text-sm font-medium text-walnut hover:text-terracotta line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="text-walnut-soft hover:text-terracotta text-sm shrink-0"
                        aria-label="Ürünü kaldır"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          className="w-7 h-7 flex items-center justify-center text-sm"
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-xs">{item.quantity}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center text-sm"
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-terracotta">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-5">
              <div className="flex justify-between font-semibold text-walnut mb-4">
                <span>Toplam</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <Link href="/sepet" onClick={closeCart} className="btn-primary w-full block text-center">
                Sepete Git
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
