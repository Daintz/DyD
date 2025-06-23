export const revalidate = 60;

import { redirect } from "next/navigation";

// Actions
import { getPaginatedProductsWithImages } from "@/actions";

// Components
import { MainSection, ProductGrid, Title, TitleCenter } from "@/components";
import { ImageBackground } from "@/components/ui/image-background/ImageBackground";

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

        <ImageBackground
          src="https://res.cloudinary.com/dtttwxbgr/image/upload/v1748839317/airpods_-_Copy_bqx4t1.png"
          alt="AirPods"
        />

        <Title
          title="Productos"
          subtitle="Todos los productos"
          className="mb-2"
        />

        <ProductGrid
          products={products}
        />
      </div>
    </div>
  );
};
