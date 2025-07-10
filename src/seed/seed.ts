import bcryptjs from "bcryptjs";

interface SeedProduct {
  position: number;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  priceInOffer: number;
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
      position: 1,
      description: "Airpods de segunda generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751086708/AUDIFONOS_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_4800_x_1600_px_dtmxi1.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751688596/Copia_de_AUDIFONOS_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_4800_x_1600px_w6xdku.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687640/AUDIFONOS_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_aus9ts.png"
      ],
      inStock: 5,
      price: 64990,
      priceInOffer: 79990,
      slug: "airpods_2nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "AIRPODS DE SEGUNDA GENERACIÓN",
      type: "headphones"
    },
    {
      position: 2,
      description: "Airpods pro de segunda generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751085636/AUDIFONOS_PRO_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_4800_x_1600_px_l4woye.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751690057/AUDIFONOS_PRO_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_2_4800_x_1600px_juuksv.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687351/AUDIFONOS_PRO_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_pbpq10.png"
      ],
      inStock: 5,
      price: 89990,
      priceInOffer: 119990,
      slug: "airpods_pro_2nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "AIRPODS PRO DE SEGUNDA GENERACIÓN",
      type: "headphones"
    },
    {
      position: 3,
      description: "Airpods pro de segunda generación con pantalla",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751931501/AUDIFONOS_PRO_DE_CUARTA_GENERACI%C3%93N_P%C3%81GINA_4800_x_1600_px_qfmryt.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751690057/AUDIFONOS_PRO_DE_SEGUNDA_GENERACI%C3%93N_CON_PANTALLA_P%C3%81GINA_2_4800_x_1600px_vfxmj8.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687617/AUDIFONOS_PRO_DE_SEGUNDA_GENERACI%C3%93N_CON_PANTALLA_P%C3%81GINA_3125x3125px_dr9hkx.png"
      ],
      inStock: 5,
      price: 119990,
      priceInOffer: 134990,
      slug: "airpods_pro_2nd_gen_with_screen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "AIRPODS PRO DE SEGUNDA GENERACIÓN CON PANTALLA",
      type: "headphones"
    },
    {
      position: 4,
      description: "Airpods de tercera generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751083621/AUDIFONOS-DE-TERCERA-GENERACI%C3%93N-P%C3%81GINA-4800x1600px_tgbeqd.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751690113/AUDIFONOS_DE_TERCERA_GENERACI%C3%93N_P%C3%81GINA_2_4800_x_1600px_wquotm.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687348/AUDIFONOS_DE_TERCERA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_s2i0ja.png"
      ],
      inStock: 5,
      price: 79990,
      priceInOffer: 104990,
      slug: "airpods_3nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "AIRPODS DE TERCERA GENERACIÓN",
      type: "headphones"
    },
    {
      position: 5,
      description: "Airpods de cuarta generación",
      images: [
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751086493/AUDIFONOS-PRO-DE-CUARTA-GENERACI%C3%93N-P%C3%81GINA-4800x1600px_ajz22x.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751690053/AUDIFONOS_DE_CUARTA_GENERACI%C3%93N_P%C3%81GINA_2_4800_x_1600px_ce3ro6.png",
        "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687348/AUDIFONOS_DE_CUARTA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_i3bddh.png"
      ],
      inStock: 5,
      price: 89990,
      priceInOffer: 119990,
      slug: "airpods_4nd_gen",
      tags: ["products", "apple", "airpods", "headphones"],
      title: "AIRPODS DE CUARTA GENERACIÓN",
      type: "headphones"
    }
  ]
};
