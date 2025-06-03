import { notFound } from "next/navigation";

// Components
import { ProductGrid, Title } from "@/components";

// Seed
import { initialData } from "@/seed/seed";

interface Params {
  id: string;
};

interface Props {
  params: Promise<Params>;
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