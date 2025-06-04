import { notFound } from "next/navigation";

// Components
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector } from "@/components";

// Fonts
import { inter } from "@/config/fonts";

// Seed
import { initialData } from "@/seed/seed";

interface Params {
  slug: string
}

interface Props {
  params: Promise<Params>
};

const products = initialData.products;

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find(product => product.slug === slug);

  if(!product) notFound();

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
          />

        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${inter.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        <QuantitySelector
          quantity={2}
        />

        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  );
};