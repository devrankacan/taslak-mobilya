"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="bg-walnut text-cream text-xs">
        <div className="container-page flex items-center justify-between py-2">
          <p className="tracking-wide">
            Zanaatla şekillenen ev tasarımları &mdash; 18 aya varan taksit
            fırsatı
          </p>
          <div className="hidden sm:flex gap-4">
            <Link href="/iletisim" className="hover:text-terracotta transition-colors">
              Mağazalarımız
            </Link>
            <Link href="/iletisim" className="hover:text-terracotta transition-colors">
              Yardım
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-4 gap-4">
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü aç"
        >
          <span className="block w-6 h-0.5 bg-walnut mb-1.5" />
          <span className="block w-6 h-0.5 bg-walnut mb-1.5" />
          <span className="block w-6 h-0.5 bg-walnut" />
        </button>

        <Link href="/" className="shrink-0">
          <span className="font-display text-2xl md:text-3xl tracking-wide text-walnut">
            Lonca
          </span>
          <span className="font-display text-2xl md:text-3xl tracking-wide text-terracotta">
            {" "}
            Mobilya
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/urunler?kategori=${cat.slug}`}
              className="text-walnut-soft hover:text-terracotta transition-colors whitespace-nowrap"
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <Link
            href="/urunler"
            className="hidden sm:inline text-sm font-medium text-walnut-soft hover:text-terracotta transition-colors"
          >
            Tüm Ürünler
          </Link>
          <Link
            href="/sepet"
            className="relative flex items-center gap-2 text-sm font-semibold"
            aria-label="Sepetim"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.94-4.76 2.43-7.32a.97.97 0 0 0-.948-1.18H5.106M7.5 14.25 5.106 5.272M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-cream">
          <ul className="flex flex-col py-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/urunler?kategori=${cat.slug}`}
                  className="block px-5 py-3 text-sm font-medium text-walnut hover:bg-cream-dark"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/urunler"
                className="block px-5 py-3 text-sm font-medium text-walnut hover:bg-cream-dark"
                onClick={() => setMenuOpen(false)}
              >
                Tüm Ürünler
              </Link>
            </li>
            <li>
              <Link
                href="/hakkimizda"
                className="block px-5 py-3 text-sm font-medium text-walnut hover:bg-cream-dark"
                onClick={() => setMenuOpen(false)}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/iletisim"
                className="block px-5 py-3 text-sm font-medium text-walnut hover:bg-cream-dark"
                onClick={() => setMenuOpen(false)}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
