// Components
import { MainSection, ProductGrid, Title } from "@/components";

// Seed
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <MainSection />

      <Title
        title="Productos"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />
    </>
  );
};
