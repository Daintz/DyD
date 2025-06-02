// Components
import { MainSection, ProductGrid, Title, TitleCenter } from "@/components";
import { ImageBackground } from "@/components/ui/image-background/ImageBackground";

// Seed
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
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
    </>
  );
};
