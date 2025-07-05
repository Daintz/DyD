import bcryptjs from "bcryptjs";

interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
};

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
};

type ValidTypes = "apple" | "airpods" | "headphones" | "covers" | "chargers" | "portable chargers";

interface seedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
};

export const initialData: seedData = {
  users: [
    {
      email: "correo@correo.com",
      name: "Correo",
      password: bcryptjs.hashSync("123456"),
      role: "admin"
    },
    {
      email: "dafeloru@correo.com",
      name: "Daniel",
      password: bcryptjs.hashSync("123456"),
      role: "user"
    }
  ],
  categories: [
    "Apple",
    "Airpods",
    "Headphones",
    "Covers",
    "Chargers",
    "Portable chargers"
  ],
  products: [
    {
      description: "Airpods de segunda generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748830016/111855_SP750-airpods_uaietv.jpg",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748830016/111855_SP750-airpods_uaietv.jpg"
      ],
      inStock: 5,
      price: 79990,
      slug: "airpods_2nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "Airpods de segunda generación",
      type: "headphones"
    },
    {
      description: "Airpods pro de segunda generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748837015/0160300827_qk9lyw.jpg",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748887652/case_front__r6ng7f1x18a6_large-removebg-preview_xun9j1.png"
      ],
      inStock: 5,
      price: 79990,
      slug: "airpods_pro_2nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "Airpods pro de segunda generación",
      type: "headphones"
    },
    {
      description: "Airpods de tercera generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748837185/airpods-3-a-generacion_caqxmo.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748837185/airpods-3-a-generacion_caqxmo.png"
      ],
      inStock: 5,
      price: 79990,
      slug: "airpods_3nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "Airpods pro de segunda generación ANC",
      type: "headphones"
    },
    {
      description: "Airpods de cuarta generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748838036/audifonos-cuarta-generacion_1_myudxz.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1748838036/audifonos-cuarta-generacion_1_myudxz.png"
      ],
      inStock: 5,
      price: 79990,
      slug: "airpods_4nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "Airpods de cuarta generación ANC",
      type: "headphones"
    }
  ]
};
