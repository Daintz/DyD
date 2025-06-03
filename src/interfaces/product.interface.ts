export interface Product {
  //todo: id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  type: Type;
};

export type Type = "apple" | "airpods" | "headphones" | "covers" | "chargers" | "portable chargers"