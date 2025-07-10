export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  priceInOffer: number;
  slug: string;
  tags: string[];
  title: string;
  position: number;
  //Todo: type: Type;
};

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  inStock: number;
};

export type Type = "apple" | "airpods" | "headphones" | "covers" | "chargers" | "portable chargers"