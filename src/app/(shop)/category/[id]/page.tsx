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

const seedProducts = initialData.products;

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  if (id !== "products" && id !== "airpods") notFound();

  const products = seedProducts.filter(product => product.tags.includes(id));

  const labels = {
    'products': "Productos",
    'airpods': "AirPods"
  }

  return (
    <div>
      <Title
        title={labels[id]}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />
    </div>
  );
};