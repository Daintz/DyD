export const revalidate = 604800;

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

// Actions
import { getProductBySlug } from "@/actions";

// Components
import { ProductMobileSlideshow, ProductSlideshow } from "@/components";
import StockLabel from "@/components/product/stock-label/StockLabel";
import AddToCart from "./ui/AddToCart";

// Fonts
import { inter } from "@/config/fonts";

// Utils
import { formatToCOP } from "@/utils";

interface Params {
  slug: string
}

interface Props {
  params: Promise<Params>
};

export async function generateMetadata(
  { params }: Props,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const product = await getProductBySlug(slug);

  // const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
  //   res.json()
  // )

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      images: [`/products/${product?.images[1]}`]
    }
  };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if(!product) notFound();

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow
          title={product.title}
          images={product.images.filter((_, i) => i !== 1)}
          className="block md:hidden"
        />

        <ProductSlideshow
          title={product.title}
          images={product.images.filter((_, i) => i !== 1)}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">
        <StockLabel slug={product.slug} />
        <h1 className={`${inter.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{formatToCOP(product.price)}</p>

        <AddToCart product={product}/>

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  );
};