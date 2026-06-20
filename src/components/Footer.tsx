import Link from "next/link";
import { categories } from "@/lib/data";

export default function Footer({ siteName }: { siteName: string }) {
  return (
    <footer className="bg-walnut text-cream mt-20">
      <div className="container-page py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <span className="font-display text-2xl">{siteName}</span>
          <p className="mt-3 text-sm text-cream/70 leading-relaxed">
            Zanaatla şekillenen ev tasarımları. 2009&apos;dan beri evlerinize
            zarafet ve konfor katıyoruz.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-terracotta">
            Kategoriler
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {categories.slice(0, 5).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/urunler?kategori=${cat.slug}`}
                  className="hover:text-cream transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-terracotta">
            Kurumsal
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/hakkimizda" className="hover:text-cream transition-colors">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-cream transition-colors">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/urunler" className="hover:text-cream transition-colors">
                Tüm Ürünler
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-terracotta">
            Bize Ulaşın
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>0850 123 45 67</li>
            <li>destek@loncamobilya.com</li>
            <li>İstanbul, Türkiye</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5">
        <p className="container-page text-xs text-cream/50">
          © {new Date().getFullYear()} {siteName}. Bu site bir taslak
          (demo) projesidir, gerçek bir ticari işletmeyi temsil etmez.
        </p>
      </div>
    </footer>
  );
}
