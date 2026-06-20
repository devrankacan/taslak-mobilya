import type { Category, Product } from "./types";

export const categories: Category[] = [
  {
    slug: "oturma-grubu",
    name: "Oturma Grubu",
    description: "Koltuk takımları ve berjerler",
    image: "/images/category-oturma-grubu.svg",
  },
  {
    slug: "yemek-odasi",
    name: "Yemek Odası",
    description: "Masa ve sandalye takımları",
    image: "/images/category-yemek-odasi.svg",
  },
  {
    slug: "yatak-odasi",
    name: "Yatak Odası",
    description: "Yatak, baza ve gardolaplar",
    image: "/images/category-yatak-odasi.svg",
  },
  {
    slug: "genc-odasi",
    name: "Genç Odası",
    description: "Genç ve çocuk odası takımları",
    image: "/images/category-genc-odasi.svg",
  },
  {
    slug: "calisma-odasi",
    name: "Çalışma Odası",
    description: "Ofis koltukları ve çalışma masaları",
    image: "/images/category-calisma-odasi.svg",
  },
  {
    slug: "aydinlatma-dekor",
    name: "Aydınlatma & Dekor",
    description: "Lambader, aksesuar ve tekstil",
    image: "/images/category-aydinlatma-dekor.svg",
  },
];

export const products: Product[] = [
  {
    slug: "verona-kose-koltuk-takimi",
    name: "Verona Köşe Koltuk Takımı",
    categorySlug: "oturma-grubu",
    price: 58500,
    oldPrice: 72500,
    isNew: true,
    images: [
      "/images/product-verona-kose-koltuk-takimi-1.svg",
      "/images/product-verona-kose-koltuk-takimi-2.svg",
    ],
    colors: ["#A9967F", "#5C5650", "#C7BBA8"],
    description:
      "Verona köşe koltuk takımı, ahşap ayak detayları ve yumuşak dokulu kumaşıyla oturma odanıza sıcak ve modern bir hava katar. Açılır yataklı yaylı sistemi misafirleriniz için ekstra konfor sağlar.",
    details: [
      "Yaylı oturum sistemi",
      "Çıkarılabilir ve yıkanabilir kılıf",
      "Masif ahşap ayaklar",
      "Açılır yataklı sandık sistemi",
    ],
    rating: 4.7,
    reviewCount: 128,
  },
  {
    slug: "milano-3lu-kanepe",
    name: "Milano 3'lü Kanepe",
    categorySlug: "oturma-grubu",
    price: 32900,
    images: [
      "/images/product-milano-3lu-kanepe-1.svg",
      "/images/product-milano-3lu-kanepe-2.svg",
    ],
    colors: ["#3A4534", "#2B2420", "#D8CFC1"],
    description:
      "Milano 3'lü kanepe, sade hatları ve şönil kumaşıyla hem klasik hem modern dekorasyonlara uyum sağlar. Geniş oturma yüzeyi ile aileniz için ferah bir alan sunar.",
    details: [
      "Şönil kumaş döşeme",
      "Sehpa ayak detayı",
      "Yüksek yoğunluklu sünger dolgu",
      "3 kişilik geniş oturum",
    ],
    rating: 4.5,
    reviewCount: 64,
  },
  {
    slug: "luna-berjer",
    name: "Luna Berjer Koltuk",
    categorySlug: "oturma-grubu",
    price: 11750,
    images: ["/images/product-luna-berjer-1.svg"],
    colors: ["#9C4B2E", "#2B2420"],
    description:
      "Luna berjer, tek başına ya da takım koltukların yanında kullanılabilen, zarif kadife dokusuyla göz alıcı bir okuma köşesi yaratır.",
    details: [
      "Kadife kumaş",
      "Ahşap iskelet",
      "Kompakt boyut, küçük alanlara uygun",
    ],
    rating: 4.8,
    reviewCount: 41,
  },
  {
    slug: "ada-yemek-masasi-takimi",
    name: "Ada Yemek Masası Takımı (6 Kişilik)",
    categorySlug: "yemek-odasi",
    price: 27400,
    oldPrice: 31900,
    images: [
      "/images/product-ada-yemek-masasi-takimi-1.svg",
      "/images/product-ada-yemek-masasi-takimi-2.svg",
    ],
    colors: ["#6B4F3B", "#2B2420"],
    description:
      "Ada yemek masası takımı, masif meşe görünümlü yüzeyi ve 6 sandalyesiyle aile sofranıza şıklık katar. Su ve çizilmeye dayanıklı üst yüzey kaplaması içerir.",
    details: [
      "6 sandalye dahil",
      "Çizilmeye dayanıklı yüzey",
      "180x90 cm masa ölçüsü",
      "Kolay montaj",
    ],
    rating: 4.6,
    reviewCount: 89,
  },
  {
    slug: "vento-bar-sandalyesi",
    name: "Vento Bar Sandalyesi (2'li)",
    categorySlug: "yemek-odasi",
    price: 5400,
    images: ["/images/product-vento-bar-sandalyesi-1.svg"],
    colors: ["#2B2420", "#D8CFC1"],
    description:
      "Vento bar sandalyesi, mutfak adalarınız ve bar köşeleriniz için ergonomik tasarımıyla modern bir görünüm sunar. 2 adet bir aradadır.",
    details: ["Metal ayak", "Döner mekanizma", "Yıkanabilir kumaş minder"],
    rating: 4.3,
    reviewCount: 27,
  },
  {
    slug: "norden-yatak-odasi-takimi",
    name: "Norden Yatak Odası Takımı",
    categorySlug: "yatak-odasi",
    price: 64900,
    oldPrice: 79900,
    isNew: true,
    images: [
      "/images/product-norden-yatak-odasi-takimi-1.svg",
      "/images/product-norden-yatak-odasi-takimi-2.svg",
    ],
    colors: ["#D8CFC1", "#6B4F3B"],
    description:
      "Norden yatak odası takımı; gardolap, baza, başlık ve komodin dahil tam set olarak sunulur. Minimalist çizgileri ile İskandinav esintili odalar için ideal.",
    details: [
      "Gardolap, baza, başlık, komodin dahil",
      "Yumuşak dokunuşlu mat yüzey",
      "Geniş iç hacimli gardolap",
    ],
    rating: 4.9,
    reviewCount: 152,
  },
  {
    slug: "mira-baza-basliklik",
    name: "Mira Baza & Başlık Takımı (160x200)",
    categorySlug: "yatak-odasi",
    price: 22300,
    images: ["/images/product-mira-baza-basliklik-1.svg"],
    colors: ["#C7BBA8", "#2B2420"],
    description:
      "Mira baza ve başlık takımı, kapitone dikiş detayı ve sandık sistemiyle hem estetik hem fonksiyonel bir çözüm sunar.",
    details: ["160x200 cm ölçü", "Sandık sistemi", "Kapitone başlık detayı"],
    rating: 4.4,
    reviewCount: 53,
  },
  {
    slug: "kibris-genc-odasi",
    name: "Kıbrıs Genç Odası Takımı",
    categorySlug: "genc-odasi",
    price: 38700,
    images: ["/images/product-kibris-genc-odasi-1.svg"],
    colors: ["#E3DCCB", "#3A4534"],
    description:
      "Kıbrıs genç odası takımı; çalışma masası, gardolap ve yatak grubunu bir arada sunarak hem fonksiyonel hem eğlenceli bir oda yaratır.",
    details: [
      "Çalışma masası dahil",
      "Geniş depolama alanlı gardolap",
      "Dayanıklı laminat yüzey",
    ],
    rating: 4.5,
    reviewCount: 38,
  },
  {
    slug: "fora-calisma-masasi",
    name: "Fora Çalışma Masası",
    categorySlug: "calisma-odasi",
    price: 6850,
    images: ["/images/product-fora-calisma-masasi-1.svg"],
    colors: ["#6B4F3B", "#2B2420"],
    description:
      "Fora çalışma masası, kablo düzenleyici bölmesi ve geniş çalışma yüzeyiyle ev ofisleri için pratik bir çözüm sunar.",
    details: ["Kablo düzenleyici", "120x60 cm çalışma yüzeyi", "Metal ayak"],
    rating: 4.2,
    reviewCount: 19,
  },
  {
    slug: "ergo-ofis-koltugu",
    name: "Ergo Ofis Koltuğu",
    categorySlug: "calisma-odasi",
    price: 9200,
    oldPrice: 10900,
    images: ["/images/product-ergo-ofis-koltugu-1.svg"],
    colors: ["#2B2420"],
    description:
      "Ergo ofis koltuğu, ayarlanabilir bel desteği ve file sırt yüzeyiyle uzun çalışma saatlerinde konfor sağlar.",
    details: [
      "Ayarlanabilir bel desteği",
      "File sırt yüzeyi",
      "360° döner taban",
    ],
    rating: 4.6,
    reviewCount: 74,
  },
  {
    slug: "salina-lambader",
    name: "Salina Lambader",
    categorySlug: "aydinlatma-dekor",
    price: 3450,
    images: ["/images/product-salina-lambader-1.svg"],
    colors: ["#2B2420", "#9C4B2E"],
    description:
      "Salina lambader, sıcak ışık tonu ve zarif kumaş abajuruyla oturma odanıza konforlu bir aydınlatma katmanı ekler.",
    details: ["Kumaş abajur", "Ayak ışık anahtarı", "E27 duy"],
    rating: 4.4,
    reviewCount: 22,
  },
  {
    slug: "tarz-hali-200x300",
    name: "Tarz Desenli Halı (200x300)",
    categorySlug: "aydinlatma-dekor",
    price: 4200,
    oldPrice: 5100,
    images: ["/images/product-tarz-hali-200x300-1.svg"],
    colors: ["#D8CFC1", "#9C4B2E", "#3A4534"],
    description:
      "Tarz desenli halı, yumuşak dokusu ve şık deseniyle oturma ve yatak odalarına zengin bir doku katar.",
    details: ["200x300 cm ölçü", "Düşük tüy yüksekliği", "Kolay temizlenebilir"],
    rating: 4.3,
    reviewCount: 31,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(price);
}
