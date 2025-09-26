
import { redirect } from "next/navigation";

// Actions
import { getCategories, getProductBySlug } from "@/actions";

// Components
import { Title } from "@/components";
import { ProductForm } from "./ui/ProductForm";

interface Props {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories()
  ])

  if (!product && slug !== "new") {
    redirect("/admin/products")
  };

  const title = slug === "new" ? "Nuevo Producto" : "Editar producto";

  return (
    <>
      <Title title={title} />

      <ProductForm product={product ?? ({} as any)} categories={categories} />
    </>
  );
};
