interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  type: validTypes;
};

type validTypes = "apple" | "airpods" | "headphones" | "covers" | "chargers" | "portable chargers"

interface seedData {
  products: SeedProduct[];
}

export const initialData: seedData = {
  products: [
    {
      description: "Airpods de segunda generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748830016/111855_SP750-airpods_uaietv.jpg"
      ],
      inStock: 5,
      price: 79990,
      slug: "airpods_2nd_gen",
      tags: ["apple", "airpods", "headphones"],
      title: "Airpods de segunda generación",
      type: "headphones"
    },
    {
      description: "Airpods pro de segunda generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748830016/111855_SP750-airpods_uaietv.jpg"
      ],
      inStock: 5,
      price: 79990,
      slug: "airpods_pro_2nd_gen",
      tags: ["apple", "airpods", "headphones"],
      title: "Airpods pro de segunda generación",
      type: "headphones"
    },
    {
      description: "Airpods pro de segunda generación ANC",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748830016/111855_SP750-airpods_uaietv.jpg"
      ],
      inStock: 5,
      price: 79990,
      slug: "airpods_pro_2nd_gen_anc",
      tags: ["apple", "airpods", "headphones"],
      title: "Airpods pro de segunda generación ANC",
      type: "headphones"
    }
  ]
};
