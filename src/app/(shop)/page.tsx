export const revalidate = 60;

import { redirect } from "next/navigation";

// Components
import { ImageBackground } from "@/components/ui/image-background/ImageBackground";
import { AnimateMoveLeft } from "@/components/ui/animate-move-left/AnimateMoveLeft";

// Actions
import { getPaginatedProductsWithImages } from "@/actions";

// Components
import { MainSection, ProductGrid, Title, TitleCenter } from "@/components";

interface Props {
  searchParams?: Promise<{
    page?: string
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = params?.page ? parseInt(params.page) : 1;

  const { products } = await getPaginatedProductsWithImages({ page });

  if(products.length === 0) {
    redirect("/");
  };

  return (
    <div>
      <MainSection />

      <div className="px-0 sm:px-10">
        <TitleCenter
          title="AirPods"
          subtitle="Conoce todas las generaciones."
          className="mb-2"
        />

        <div
          className="mb-25"
        >
          <AnimateMoveLeft
            images={[
              {
                key: "1",
                src: "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687640/AUDIFONOS_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_aus9ts.png",
                alt: "AIRPODS DE PRIMERA GENERACIÓN"
              },
              {
                key: "2",
                src: "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687351/AUDIFONOS_PRO_DE_SEGUNDA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_pbpq10.png",
                alt: "AIRPODS DE SEGUNDA GENERACIÓN"
              },
              {
                key: "3",
                src: "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687617/AUDIFONOS_PRO_DE_SEGUNDA_GENERACI%C3%93N_CON_PANTALLA_P%C3%81GINA_3125x3125px_dr9hkx.png",
                alt: "AIRPODS DE SEGUNDA GENERACIÓN CON PANTALLA"
              },
              {
                key: "4",
                src: "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687348/AUDIFONOS_DE_TERCERA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_s2i0ja.png",
                alt: "AIRPODS DE TERCERA GENERACIÓN"
              },
              {
                key: "5",
                src: "https://res.cloudinary.com/dtttwxbgr/image/upload/v1751687348/AUDIFONOS_DE_CUARTA_GENERACI%C3%93N_P%C3%81GINA_3125x3125px_i3bddh.png",
                alt: "AIRPODS DE CUARTA GENERACIÓN"
              },
            ]}
          />
        </div>

        {/* <Title
          title="Productos"
          subtitle="Todos los productos"
          className="mb-2"
        /> */}

        <ProductGrid
          products={products}
        />
      </div>
    </div>
  );
};
