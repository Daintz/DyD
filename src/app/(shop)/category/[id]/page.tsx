import { notFound } from "next/navigation";

// Components
import { ProductGrid, Title } from "@/components";

// Seed
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: string;
  };
};


export default async function CategoryPage({params}: Props) {
  const { id } = await params;

  if (id !== "products" && id !== "airpods") notFound();

  const products = initialData.products.filter(product => product.tags.includes(id));

  return (
    <div>
      <Title
        title="Productos"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />
    </div>
  );
};