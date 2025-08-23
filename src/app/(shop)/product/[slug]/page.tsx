export const revalidate = 604800;

import { Metadata } from "next";
import { notFound } from "next/navigation";

// Actions
import { getProductBySlug } from "@/actions";

// Components
import { ProductMobileSlideshow, ProductSlideshow } from "@/components";
import StockLabel from "@/components/product/stock-label/StockLabel";
import { ProductViewTracker } from "./ui/ProductViewTracker";
import AddToCart from "./ui/AddToCart";

// Fonts
import { inter } from "@/config/fonts";

// Utils
import { formatToCOP } from "@/utils";
import Image from "next/image";
import { DescriptionProductMobile } from "@/components/product/description/DescriptionProductMobile";
import { DescriptionProduct } from "@/components/product/description/DescriptionProduct";

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

  console.log("product", product);

  return (
    <>
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-5 gap-3">
      <ProductViewTracker product={product} />

      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow
          title={product.title}
          images={product.images.slice(2)}
          className="block md:hidden"
        />

        <ProductSlideshow
          title={product.title}
          images={product.images.slice(2)}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-3 px-5">
        <StockLabel slug={product.slug} />
        <h1 className={`${inter.className} antialiased font-bold text-lg`}>
          {product.title}
        </h1>

        <div className="flex items-center gap-2 mb-5">
          {/* Precio actual */}
          <span className="text-palet-orange font-bold text-lg">
            {formatToCOP(product.price)}
          </span>
          {/* Precio anterior tachado */}
          <span className="text-gray-500 line-through text-md">
            {formatToCOP(product.priceInOffer)}
          </span>
        </div>

        <AddToCart product={product}/>
      </div>

    </div>

    <div className="col-span-6 md:px-25 mt-5">
      <h3 className="font-bold text-sm">Descripción </h3>
      <DescriptionProductMobile
        title={product.title}
        descriptionImages={product.descriptionImagesMobile}
        className="block md:hidden"
      />

      <DescriptionProduct
        title={product.title}
        descriptionImages={product.descriptionImages}
        className="hidden md:block"
      />
    </div>
    </>
  );
};