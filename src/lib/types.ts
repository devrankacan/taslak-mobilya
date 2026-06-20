export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  images: string[];
  colors: string[];
  description: string;
  details: string[];
  rating: number;
  reviewCount: number;
};
